const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { marked } = require('marked');

const projectRoot = path.resolve('c:/projects/esdc-devcop.github.io');
const guidesDir = path.join(projectRoot, 'docs', '_guides');
const pdfGuidesDir = path.join(projectRoot, 'pdf_guides');
const edgePath = 'C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe';

const guideMappings = [
  { md: 'a11y-web-extensions.md', pdf: 'Accessibility Browser Extensions.pdf' },
  { md: 'application-logging.md', pdf: 'Application Logging.pdf' },
  { md: 'artifactory.md', pdf: 'Artifactory as an Asset Management and Vulnerability Management Process.pdf' },
  { md: 'broken-links.md', pdf: 'Check for Broken Links on your Website.pdf' },
  { md: 'change-logs.md', pdf: 'Writing Good Change Logs.pdf' },
  { md: 'cicd.md', pdf: 'Continuous Integration _ Continuous Delivery.pdf' },
  { md: 'CloudOperations.md', pdf: 'Cloud specific requests.pdf' },
  { md: 'git-branching.md', pdf: 'Git Branching, Picking a Git Flow.pdf' },
  { md: 'GitHubActions.md', pdf: 'GitHub Actions.pdf' },
  { md: 'merging-review.md', pdf: 'Managing Merge Requests, Using Code Review.pdf' },
  { md: 'nsd-application-cataloque.md', pdf: 'Git Support Questions - NSD Application Catalogue.pdf' },
  { md: 'nugetuserguide.md', pdf: 'Nuget User Guide.pdf' },
  { md: 'PokerEstimation.md', pdf: 'Poker Estimation.pdf' },
  { md: 'postmortem.md', pdf: 'Blameless Postmorterm Guideline.pdf' },
  { md: 'present-devcop.md', pdf: 'Present at our Dev CoP.pdf' },
  { md: 'tfs-to-gccode.md', pdf: 'TFS to GCcode (or GitHub).pdf' },
  { md: 'tfvc-to-git.md', pdf: 'Migrate from TFVC to Git.pdf' },
  { md: 'TLS_Certificate_Expiry.md', pdf: 'Expiration des certificats TLS - TLS Certificates expiry.pdf' },
];

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  const yamlLines = match[1].split(/\r?\n/);
  const frontmatter = {};
  for (const line of yamlLines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      const val = line.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, '');
      frontmatter[key] = val;
    }
  }
  return { frontmatter, body: match[2] };
}

function generateHTML(title, markdownBody) {
  // Replace liquid tags like {{ page.summary }}
  let processedBody = markdownBody.replace(/\{\{\s*page\.summary\s*\}\}/g, '');
  
  // Convert markdown to HTML
  const htmlContent = marked.parse(processedBody);

  return `<!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml/" class="no-js" dir="ltr">
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>${title}</title>
    
    <script type="text/javascript" src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/soyutils.js"></script>
    <script type="text/javascript" src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-en.js"></script>

    <script>
      document.write(wet.builder.refTop({
        "isApplication": true
      }));
    </script>

    <style>      
      .app-bar {
        background-color: #6a0dad;
        background-image: linear-gradient(to right, #6a0dad, #FF4500)
      }
      #wb-sm .menu > li > a {
        color: #3d3d3d;
      }
      h1 {
        border-color: #B52957;
      }
      .panel-title {
        font-size: inherit;
      }
      .well {
        background-color: rgba(106,13,173,0.1);
        background-image: linear-gradient(to right, rgba(106,13,173,0.1), rgba(255,69,0,0.1))    
      }
      @media print {
        @page {
          margin: 15mm 10mm 15mm 10mm;
        }
      }
    </style>
  </head>
  <body>
    <script>
      document.write(wet.builder.appTop({
        "appName": [{
          "text": "ESDC Development Community",
          "href": "https://esdc-devcop.github.io/"
        }],
        "lngLinks": [{
          "lang": "fr",
          "href": "#",
          "text": "Français"
        }],
        "search": false,
        "siteMenu": false,
        "topSecMenu": false
      }));
    </script>

    <main role="main" property="mainContentOfPage" id="wb-cont">
      <div class="container">
        <h1>${title}</h1>
        ${htmlContent}
        <script>
          document.write(wet.builder.preFooter({
            "showPostContent": false,
            "showShare": {
              "show": true,
              "enums": ["email", "facebook", "linkedin", "twitter"]
            },
            "showFeedback": "https://github.com/esdc-devcop/esdc-devcop.github.io/issues/new/choose"
          }));
        </script>
      </div>
    </main>

    <script type="text/javascript">
      document.write(wet.builder.appFooter({
        "contactLink": [{
          "href": "https://github.com/esdc-devcop/esdc-devcop.github.io/issues/new/choose",
          "newWindow": true
        }],
        "showFeatures": false
      }));
    </script>

    <script type="text/javascript">
      document.write(wet.builder.refFooter({}));
    </script>
  </body>
</html>`;
}

async function run() {
  for (const item of guideMappings) {
    const mdPath = path.join(guidesDir, item.md);
    if (!fs.existsSync(mdPath)) {
      console.error(`Missing markdown file: ${mdPath}`);
      continue;
    }
    const content = fs.readFileSync(mdPath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    const title = frontmatter.title || item.pdf.replace(/\.pdf$/, '');
    const html = generateHTML(title, body);

    const tempHtmlPath = path.join(guidesDir, `temp_${path.basename(item.md, '.md')}.html`);
    fs.writeFileSync(tempHtmlPath, html, 'utf-8');

    const outPdfPath = path.join(pdfGuidesDir, item.pdf);
    const fileUrl = `file:///${tempHtmlPath.replace(/\\/g, '/')}`;

    console.log(`Generating PDF for ${item.pdf}...`);
    const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=6000 --no-pdf-header-footer --print-to-pdf="${outPdfPath}" "${fileUrl}"`;
    try {
      execSync(cmd, { stdio: 'inherit', timeout: 30000 });
      console.log(`Successfully generated ${item.pdf}`);
    } catch (e) {
      console.error(`Error generating ${item.pdf}:`, e.message);
    } finally {
      if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
      }
    }
  }
}

run();

# Migrate from TFVC to Git in TFS, GCcode or GitHub

## Background

This guide outlines the steps required to migrate your repositories from 
Microsoft's TFVC into Git-based repositories.

> **IMPORTANT :** Since TFS 2015 and Azure DevOps both support Git-based
> repositories, this doesn't force your teams to move away from them!

Here are the available Git hosting services:

* TFS 2015
* GCcode
* GitHub

## In this guide

1. [Prerequisites](#prerequisites)
1. [Create Remote Git Repository](#create-remote-git-repository)
1. [Clone TFVC to Local Git Repository](#clone-tfvc-to-local-git-repository)
1. [Connect to Remote Git Repository](#connect-to-remote-git-repository)
1. [Push to Remote Git Repository](#push-to-remote-git-repository)
1. [Additional Improvement](#additional-improvement)
1. [Further Reading](#further-reading)
1. [FAQ](#faq)

## Prerequisites

The prerequisites stay the same regardless of where you choose to host your Git repositories (TFS, GCcode or GitHub).

In order to migrate your TFVC repository into a Git repository you will need:

- **Git for Windows**:
    - If you don't have it installed, request it from the [Application Catalogue *(ESDC intranet only)*](http://srmis-sigdi-iagent.prv/WT-STO/iAgent/AppPortal/en) or download it directly 
    from [Git for Windows](https://gitforwindows.org/).

- **git-tfs**:
    - If you don't have it installed, download it from their [GitHub repository](https://github.com/git-tfs/git-tfs). ([direct link](https://github.com/git-tfs/git-tfs/releases/download/v0.30/GitTfs-0.30.0.zip))
    - To install `git-tfs`, extract the content of the ZIP file to a folder 
    (i.e. `C:\git-tfs`) and add that folder's location to the `PATH` system 
    environment variables.

- **Permissions to create repositories in target Git hosting service**:
    - If you don't have the appropriate permissions, request them from your 
    team's source control administrator or request that a new Git repository 
    to be created.

## Create Remote Git Repository

First up, you will need to create a new Git repository in your Git hosting 
service (TFS 2015, GCcode or GitHub).

The process will be different depending on the hosting service selected by your 
team. However, it remains simple and effortless as long as you have the 
appropriate permissions to create repositories.

### TFS

1. Open the web portal for your TFS team project in a browser.
1. Navigate to the `CODE` section using the navbar.
1. Open the list of repositories by clicking the small *down arrow* ↓ beside your TFVC repository.
1. Click `+ New repository...`. <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-create-repo-tfs1.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 75%; height: 75%" />
1. By default, Git should already be selected as the `Type`. If not, pick `Git` from the list.
1. Enter the name of your new Git repository. (i.e. `my-git-repo`) <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-create-repo-tfs2.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 75%; height: 75%" />
1. Finally, click `Create`.

### GCcode

1. Open [GCcode](https://gccode.ssc-spc.gc.ca/) in a browser.
1. On the right side of the navbar, click the `+ (New)` menu and select `New project`. <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-create-repo-gccode1.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 75%; height: 75%" />
1. Enter the name of your new project (i.e. `Git Playground`). This will automatically fill out the `Project slug`. The project slugs are *URL-friendly* versions of project names.
1. Pick your team's GCcode project for the `Project URL` field.
1. Select the appropriate level of visibility for the project.
> **IMPORTANT :** Keep in mind that GCcode is only accessible on the Government of 
> Canada network. Therefore, `Public` means available to other departments and 
> agencies. For more information about visibility, see "[Public access - Visibility of projects](https://gccode.ssc-spc.gc.ca/help/public_access/public_access)".
1. Finally, click `Create project`.

### GitHub

*Steps will be added shortly.*

## Clone TFVC to Local Git Repository

1. Open a `PowerShell` terminal.
1. Create a folder for your local repositories (i.e. `C:\sources`) and navigate into that folder.
```batch
mkdir c:\sources
cd c:\sources
```
1. Download the latest Visual Studio `.gitignore` template from GitHub into this folder. A `.gitignore` file specifies intentionally untracked files that Git should ignore. To read more about `.gitignore` files, see [Ignoring Files](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) of the [Pro Git](http://git-scm.com/book) book.
<!-- [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -->
```bash
Invoke-WebRequest -Uri https://raw.githubusercontent.com/github/gitignore/master/VisualStudio.gitignore
-UseBasicParsing -OutFile .gitignore
```
1. Add patterns to match files, folders or branches from your TFVC repository in TFS that should be ignored
during this migration process. Good candidates for this include any installers, 
archived release branches, etc. To read more about the patterns to match items, 
see [Git ignore patterns](https://www.atlassian.com/git/tutorials/saving-changes/gitignore#git-ignore-patterns)
from Atlassian.
```bash
dev-tools-installers/
releases/
```
1. Create a folder to clone your Git repository into (i.e. 
`C:\sources\my-git-repo`) and navigate into that folder.
```batch
mkdir c:\sources\my-git-repo
cd c:\sources\my-git-repo
```
1. Clone your TFVC repository from TFS to a local Git repository. Don't forget 
to specify the `.gitignore` file that you copied earlier!
```bash
git tfs quick-clone "http://tfs.intra.dmz:8080/tfs/projectcollection" "$/DevCoP-CdpDev" . --gitignore="c:\sources\.gitignore"
```
> **IMPORTANT :** There is a bug with the latest version of the 
> `libgit2/libgit2sharp` library being used by `git-tfs` which reports an 
> unhandled `System.AccessViolationException` exception. However, this is thrown 
> during the clean-up phase after the migration which doesn't affect the clone 
> process. You can read more about this on the [issue page](https://github.com/git-tfs/git-tfs/issues/1281) 
> for this bug.
1. Add a `.gitignore` file at the root for your solution.
<!-- [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -->
```bash
Invoke-WebRequest -Uri https://raw.githubusercontent.com/github/gitignore/master/VisualStudio.gitignore
-UseBasicParsing -OutFile .gitignore
```
1. Remove secrets or encrypt as necessary.

## Connect to Remote Git Repository

In order to push your local repository to your selected Git hosting service, it
needs to know *where* the remote repository is located. This is done by adding
a `remote` in with a Git command. To read more about remotes, see [Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) from the [Pro Git](https://git-scm.com/book/en/v2) book.

The following steps will help you find the URL to your remote Git repository.

### TFS

1. Open the web portal for your TFS team project in a browser.
1. Navigate to the `CODE` section using the navbar.
1. Open the list of repositories by clicking the small *down arrow* ↓ beside your TFVC repository.
1. Navigate to your project's page by clicking on its name. <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-find-url-tfs1.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 45%; height: 45%" />
1. Click the `Copy to clipboard` button. <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-find-url-tfs2.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 75%; height: 75%" />

### GCcode

1. Open [GCcode](https://gccode.ssc-spc.gc.ca/) in a browser.
1. Filter the projects to find the one your are looking for.
1. Navigate to your project's page by clicking on its name. <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-find-url-gccode1.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 135%; height: 135%" />
1. Click the `Clone` button on the right side of the screen.
1. Click the `Copy URL to clipboard` button. <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-find-url-gccode2.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 135%; height: 135%" />

### GitHub

*Steps will be added shortly.*

### Connect local Git repository to remote Git repository.

1. Use the URL that you copied from the previous section to connect your local 
repository to the remote one.
```bash
git remote add origin "http://tfs.intra.dmz:8080/tfs/ProjectCollection/DevCoP-CdpDev/_git/my-new-repo"
```

## Push to Remote Git Repository

1. Push local Git repository into remote Git repository.
```bash
git push --all origin
```
1. Enter your Windows credentials as requested. If you make a typo, simply press 
`CTRL + C` to cancel the command and try again. <img src="{{site.url}}/assets/tfvc-to-git/tfvc-to-git-push-to-remote.jpg" style="display: block; margin: auto; margin-top: 20px; margin-bottom: 20px; width: 75%; height: 75%" />
> **TIP :** Press the *up arrow* ↑ to bring back the last command from the 
> terminal's history.

## Additional Improvement

###  Productivity tips for your repository.

* Add Git [Templates files](https://github.com/esdc-edsc/template-gabarit) to the Repository
* Add labels with the [ESDC Label Generator](https://github.com/esdc-edsc/label-generator) (for GCcode & GitHub)

## Further Reading

### Learn about Git

* [Git documentation](https://git-scm.com/doc)
* [PluralSight training - Mastering Git](https://app.pluralsight.com/library/courses/mastering-git/)
* [Learn Git branching](https://learngitbranching.js.org/)

### Similar Guides

* [TFS to GCcode](tfs-to-gccode.md)

## FAQ

### Is it possible to migrate the code changeset history from TFSV to Git?

> Did you succeeded?
> Should we do that?

It is possible, and we have successfully done it a few times.
You can use the [GitTFS tool](https://github.com/git-tfs/git-tfs/blob/master/doc/usecases/migrate_tfs_to_git.md).

There is no legal requirements for us to keep source code history, therefore we do not recommend keeping any history in the conversion.
We don't see any value in keeping it because the code is the truth of how the project functions currently (features and bugs included).
If something needs to be changed, it still needs to be changed whether it was codded a specific way in the past for a reason or not.
If the team still is set on keeping history, we suggest you only keep history going back one release, as the conversion will take a very long time.

### Would you recommend to use the Wiki functionality for replacing our current SPECS document using MS Word?

> I saw multiples interesting functionalities like the ReadMe.md (i.e.: for the file project configuration) and the Wiki section in markdown.  
> Personally, I see a lot of pros to use GitLab.
> Centralize everything, any docs at the same place.

**Absolutely!!**

All documentation should be, at a minimum, moved into source control.
This allows you to version your documentation with the code it's documenting.
Taking it a step further to change your documentation to markdown is even better.
That will allow you to track changes through your documentation, and allow you to begin to automate the documentation.

Wikis should be used to document client or user information while documentation related to development or deployments should be kept with the source code itself.
You should also feel free to not use the _Wiki_ itself at all, if all the documentation is in the source control.
If you are not using a Wiki, any client or user documentation should be published to a website;
[GitLab Pages](https://about.gitlab.com/product/pages/) and [GitHub Pages](https://pages.github.com/) are both great services to host this type of documentation.

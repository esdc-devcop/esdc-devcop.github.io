---
title: Accessibility Testing Recommendation
layout: default
category: Testing
summary: Recommending tools and methods to test for accessibility.
date: 2019-01-01
---

The ability to automate even a fraction of our a11y testing will have huge benefits for IITB.

While a11y test automation does not remove the need to manually test our applications it does allow our a11y assessors to focus on more valuable work.

There are quite a few free or open source a11y tools out there that we can use to automate the testing of our work.

## Proof of Concept

The DevX Team wrote a proof of concept (not completed) using Puppeteer and aXe Core.

[https://github.com/esdc-devx/auto-a11y-demo](https://github.com/esdc-devx/auto-a11y-demo)

### Tools Selected

The DevX team was committed to selecting best in class open source tools for this proof of concept and we are fairly confident that we made the right choice. We ultimately ended up selecting [Puppeteer](https://developers.google.com/web/tools/puppeteer/) and [aXe Core](https://www.deque.com/axe/) for this demo.

#### Puppeteer

Puppeteer is a NodeJS (JavaScript) Library for automating Google’s Chrome & Chromium Web Browser. The reason we choose this library over another tool such as selenium was purely due to ease of use. We found that Puppeteer was easier for our devs to use then other alternatives.

#### aXe Core

aXe Core was selected due to it’s commitment to producing no-false positives and it is quickly becoming the go to library for other automation tools. For instance it’s used by Google for their in-browser and cli a11y automation tool Lighthouse. It also was very easy to integrate with Puppeteer.

### Site Selected

We decided to develop our proof of concept against the ROEWeb Demo site.

The ROEWeb Demo Site is a site provided by ROEWeb that allows employers to train their staff and test out their tools against ROEWeb. The code base is identical to the production site, and more importantly it was designed to be testable.

### Issues Encountered

For most pages we didn’t encounter any issues with performing our a11y tests. We were also able to easily filter out an a11y issue that was identified in the menu for the Web Experience Toolkit.

We did however run into issues when attempting to automate the ROEWeb Assistant functionality. For the most part it worked fine but it’s asynchronous nature and the fact that it wasn't designed with an automated tool in mind, meant we ran into several issues with this page.

This really highlights the need for developers to be involved in writing the test automation for their sites, when developers aren’t involved they have no real incentive to write testable applications. When they are are responsible for the automated tests they feel the pain in attempting to automate their applications and will thus write more testable code and will invest more effort into maintaining and fixing the tests.

## Recommendation from the Developer Experience Team

We recommend that we attempt to automate the a11y testing of an application that is currently in development at ESDC to show the value of this type of automation.

The ideal application would be one that is currently doing automated builds, and has developers that are comfortable writing code in JavaScript.

## Requirements for Next Steps

* NodeJS installed on Build Machines
* Chromium installed on Build Machines
  * It’s critical to the work that the department is doing that we have access to either Chromium or Chrome, most modern in browser development tools are being built for Chrome first. Without access to this tool we are crippling ourselves and making it harder to do modern web development.

## Expected Outcome

According to aXe their tool will only cover 20 to 50% of all accessibility issues. Automation of a11y testing through aXe coupled with an html5 validation library we should be able to free up the teams at ESDC assessing our sites for compliance with a11y requirements to perform more valuable non-automated work.

Automated testing will also provide feedback on a11y issues earlier to developers so which provides instant learning opportunities and should over time increase the institutional knowledge of writing a11y web sites.

## Additional Tools

Here are some other related projects from the CDS-SNC GitHub:

[Canadian Digital Service – Service numérique canadien](https://github.com/cds-snc)

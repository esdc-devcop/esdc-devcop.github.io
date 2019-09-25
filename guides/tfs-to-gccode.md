# TFS to GCcode (or GitHub)

**Similar Guides:**  

- [TFVC to Git](tfvc-to-git.md)

## Steps

1. _(Optional)_ Decouple projects and services
1. Scan & Remove secrets (encrypt where necessary)
1. Migrate TFS Tasks to Issues (manual, overtime, after a release)
1. Migrate the Code
1. Build your pipeline

### Setting up a GCcode repository for your team

> 1. Create a personal account in [GCcode](https://gccode.ssc-spc.gc.ca/)
> 1. Create an issue in the [ESDC Welcome](https://gccode.ssc-spc.gc.ca/iitb-dgiit/welcome/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=) project and fill out the `New Team Group Request` template
> 1. Wait for access to your new group
> 1. Create a `New project`
> 1. Clone and copy the files from the [template-gabarit](https://github.com/esdc-edsc/template-gabarit) project
> 1. Use the [label-generator](https://github.com/esdc-edsc/label-generator) to add default starter labels to your project
>
> _Note: You may need to run the commands in the [ESDC Development Setup - `proxy-yes.bat`](https://github.com/esdc-edsc/ESDC-Development-Setup/blob/master/proxy-scripts/proxy-yes.bat) to be able to clone from GitHub._

### Setting up a GitHub repository for your team

> 1. Create a personal account in [GitHub](https://github.com/)
> 1. Create a new Organization for your team
> 1. Create an issue in the [ESDC Welcome](https://github.com/esdc-edsc/Welcome/issues/new?assignees=&labels=team&template=list-team-group.md&title=) project and fill out the `List Team Group` template
> 1. Fork the [template-gabarit](https://github.com/esdc-edsc/template-gabarit) project into your new ogranization.
> 1. Change the _Settings_ of that forked project to be a _Template repository_ (under _Repository name_)
> 1. Create a new repository using the forked template project as the template
> 1. Use the [label-generator](https://github.com/esdc-edsc/label-generator) to add default starter labels to your project
>
> _Note: You may need to run the commands in the [ESDC Development Setup - `proxy-yes.bat`](https://github.com/esdc-edsc/ESDC-Development-Setup/blob/master/proxy-scripts/proxy-yes.bat) to be able to clone from GitHub._

## FAQ

### How do you manage TFS related items like UserStory, WorkItem, Bugs, etc, in GitLab?

> It looks very similar in GitLab.

**Labels & Issue Templates!!!**  
_Labels_ are critical to organizing _Issues_ (or _WorkItems_). _Bugs_ are given a `bug` label. Things like _UserStory_ are given an `enhancement` or `feature request` label.  
_Issue Templates_ help users creating new _Issues_ to fill out all of the necessary details for a standard _Issue_.
You can copy `bug` and `feature` _Issue templates_ from the [ESDC Template](https://github.com/esdc-edsc/template-gabarit/tree/master/.github/ISSUE_TEMPLATE) project.

We recommend that you start with the _key_ labels from [ESDC Label Generator](https://github.com/esdc-edsc/label-generator) project to add default labels to your project or group and add more as it helps you organize your project.
You should have labels that identify key parts of your application.
You should also add labels to help with the flow of your team’s processes.

### Is it possible to migrate all the Work Items (User Story, Bug, tasks, etc) to GitLab?

> Even if it's look very different.

It might be technically possible by custom writing a script using TFS and GitLab APIs; but I wouldn't recommend it.
The platforms are different enough that it could take more time to write the script than doing it manually.
The other benefit of doing it manually is forcing your team to remove redundant and outdated information.
(Don't move closed items.)

### What is the recommended approach for managing secrets in code?

> When migrating to an open source platform (like GitHub or GCcode) we can't keep hardcoding secrets, and they need to be removed.
> How should a new developer get the necessary information to input into the web.config? (i.e. : inserting secrets, server name, username, etc)

Whatever tool is used to building your solution for deployment is also responsible for injecting the secrets into the config.
Depending on the language and framework you are developing with, they may have different methods to managing the injection of those secrets.
You may need to custom write a build script to search and replace secrets from your build's secret environment variables.
GitLab, Jenkins, Azure DevOps & TFS 2015 all have ways of managing secret environment variables for your scripted build.

A new developer should likely be creating their own development secrets.
As for non-user specific secrets, it likely will depend on the secret itself as to how the developer will obtain that information.

### What is the recommended approach for working with an external testing team service?

> When migrating on GCcode, all the functionality around the work items changes.
> In GcCode, everything is related around  `issues` combined with different `labels`.
> With TFS, we have some strict workflow where work items have strict state flow.
> Testing team are working with tools like 'Microsoft Test Manager' which is tightly coupled with TFS.

Get them to work with you.
Create workflows that work with your development cycle; there is nothing stopping a team from having strict workflows and following them in GCcode.

As far as the tool usage goes, developers and testers need to pick the tools that are best for the project.
GCcode does function differently than TFS, however GCcode is more mature and flexible as a platform for development.
If GCcode is the development platform (which it has been recommended to be) the testing platform (or tools) need to work with it, not the other way around.

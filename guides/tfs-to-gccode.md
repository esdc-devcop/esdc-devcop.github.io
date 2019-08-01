# TFS to GCcode (or GitHub)

**Similar Guides:**  

- [TFVC to Git](tfvc-to-git.md)

## Steps

1. _(Optional)_ Decouple projects and services
1. Scan & Remove secrets (encrypt where necessary)
1. Migrate TFS Tasks to Issues (manual, overtime, after a release)
1. Migrate the Code
1. Build your pipeline

## FAQ

### How do you manage TFS related items like UserStory, WorkItem, Bugs, etc, in GitLab?

> It looks very similar in GitLab.

**Labels & Issue Templates!!!**  
_Labels_ are critical to organizing _Issues_ (or _WorkItems_). _Bugs_ are given a `bug` label. Things like _UserStory_ is given an `enhancement` or `feature request` label.  
_Issue Templates_ helps users creating new _Issues_ fill out all the necessary details for a standard _Issue_.
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
You may need to custom write a build script to search and replace secrets from your builds secret environment variables.
GitLab, Jenkins, Azure DevOps & TFS 2015 all have ways of managing secret environment variables for your scripted build.

A new developer should likely be creating their own development secrets.
As for non-user specific secrets, it likely will depend on the secret itself as to how the developer will obtain that information.


### What is the recommanded approach for working with an external testing team service?
> When migrating on GcCode, all the functionnalities arround the work items changes. In GcCode, everything is related arround  `issues` combined with differents `labels`. 

> With TFS, we have some strict workflow where work items have strict state flow. Testing team are working with tools like 'Microsoft Test Manager' which is tightly coupled with TFS.

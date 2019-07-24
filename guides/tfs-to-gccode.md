# TFS to GCcode (or GitHub)

**Simmilar Guides:**  

- [TFVC to Git](tfvc-to-git.md)

## Steps

1. _(Optional)_ Decouple projects and services
1. Scann & Remove secrets (encrypt where nessasary)
1. Migrate TFS Tasks to Issues (manual, overtime, after a release)
1. Migrate the Code
1. Build your pipeline

## FAQ

### How do you manage TFS related items like UserStory, WorkItem, Bugs, etc, in GitLab?

> It looks very similar in GitLab.

**Labels & Issue Templates!!!**  
_Labels_ are critical to organizing _Issues_ (or _WorkItems_). _Bugs_ are given a `bug` label. Things like _UserStory_ is given an `enhancement` or `feature request` label.  
_Issue Templates_ helps users creating new _Issues_ fill out all the nessasary details for a standard _Issue_.
You can copy `bug` and `feature` _Issue templates_ from the [ESDC Template](https://github.com/esdc-edsc/template-gabarit/tree/master/.github/ISSUE_TEMPLATE) project.

We recommend that you start with the _key_ labels from [ESDC Label Generator](https://github.com/esdc-edsc/label-generator) project to add default labels to your project or group and add more as it helps you organize your project.
You should have labels that identify key parts of your application.
You should also add labels to help with the flow of your team’s processes.

### Is it possible to migrate all the Work Items (User Story, Bug, tasks, etc) to GitLab?

> Even if it's look very different.

It might be technically possible by custom writing a script using TFS and GitLab APIs; but I wouldn't recommend it.
The platforms are diffrent engought that it could take more time to write the script than doing it manually.
The other benifit of doing it manually is forcing your team to remove redundant and outdated information.
(Don't move closed items.)



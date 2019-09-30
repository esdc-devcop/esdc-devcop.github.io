# Migrate from TFVC to Git in TFS, GCcode or GitHub

## Getting Started

1. [Prerequisites](#prerequisites)
1. [Create Remote Git Repository](#create-remote-git-repository)
1. [Clone to Local Git Repository](#clone-to-local-git-repository)
1. [Set Origin to Remote Git Repository](#connect-to-remote-git-repository)
1. [Push to Remote Git Repository](#push-to-remote-repository)
1. [Additional Improvement](#additional-improvement)
1. [Further Reading](#further-reading)
1. [FAQ](#faq)

## Prerequisites

The prerequisites stay the same regardless of where you choose to host your Git repositories (TFS, GCcode or GitHub).

In order to migrate your TFVC repository into a Git repository you will need:

- **Git for Windows**:
    - If you don't have it installed, request it from the [Application Catalogue](http://srmis-sigdi-iagent.prv/WT-STO/iAgent/AppPortal/en) *(ESDC intranet only)* or download it directly from [Git for Windows](https://gitforwindows.org/).
- **git-tfs**:
    - If you don't have it installed, download it from their [GitHub repository](https://github.com/git-tfs/git-tfs). ([direct link](https://github.com/git-tfs/git-tfs/releases/download/v0.30/GitTfs-0.30.0.zip))
- **Permissions to create repositories in target Git hosting service**:
    - If you don't have the appropriate permissions, request the permissions from your team's source control administrator or request that a new Git repository to be created.

## Create Remote Git Repository

- Create remote Git repository.
- Create remote Git repository on TFS.
- Create remote Git repository on GCcode.
- Create remote Git repository on GitHub.

## Clone to Local Git Repository

- Ignore files, folders or branches using `.gitignore`.
- Clone TFVC repository from TFS to local Git repository.
- Remove secrets or encrypt as necessary.

```bash
git tfs quick-clone "http://tfs.intra.dmz:8080/tfs/projectcollection" "$/EWS-SWE" .
```

## Set Origin to Remote Git Repository

- Connect local Git repository to remote Git repository.
- Connect local Git repository to remote Git repository on TFS.
- Connect local Git repository to remote Git repository on GCcode.
- Connect local Git repository to remote Git repository on GitHub.

```bash
git remote add origin "http://tfs.intra.dmz:8080/tfs/projectcollection/EWS-SWE/_git/EWS-SWE-Git"
git remote set-url origin "http://tfs.intra.dmz:8080/tfs/projectcollection/EWS-SWE/_git/EWS-SWE-Git"
```

## Push to Remote Git Repository

- Push local Git repository into remote Git repository.

```bash
git push --all origin
```

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

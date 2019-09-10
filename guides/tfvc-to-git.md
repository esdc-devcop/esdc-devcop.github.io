# TFVC (Team Foundation Version Control) to Git

**Similar Guides:**  

* [TFS to GCcode](tfs-to-gccode.md)

## Steps

1. Use the [GitTFS tool](https://github.com/git-tfs/git-tfs/blob/master/doc/usecases/migrate_tfs_to_git.md)
1. Add Git [Templates files](https://github.com/esdc-edsc/template-gabarit) to Repo
1. Add labels with the [ESDC Label Generator](https://github.com/esdc-edsc/label-generator)

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

Wiki's should be used to document parts of your application that don't (are very unlikely to) change from version to version.
You should also feel free to not use the _Wiki_ itself at all, if all the documentation is in the source control.

# TFVC (Team Foundation Version Control) to Git

**Simmilar Guides:**  

* [TFS to GCcode](tfs-to-gccode.md)

## Steps

1. Use the [GitTFS tool](https://github.com/git-tfs/git-tfs/blob/master/doc/usecases/migrate_tfs_to_git.md)
1. Add Git [Templates files](https://github.com/esdc-edsc/template-gabarit) to Repo
1. Add labels with the [ESDC Label Generator](https://github.com/esdc-edsc/label-generator). _*Currently only works with GitLab._

## FAQ

### Is it possible to migrate the code changset history from TFSV to Git?

> Did you succeeded?
> Should we do that?

It is possible, and we have successfully done it a few times.
You can use the [GitTFS tool](https://github.com/git-tfs/git-tfs/blob/master/doc/usecases/migrate_tfs_to_git.md).

Whether you should do it or not, we are investigating further and can't provide an answer at this time.

### Would you recommand to use the Wiki functionnaliy for replacing our current SPECS document using MS Word?

> I saw multiples interesting functionalities like the ReadMe.md (i.e.: for the file project configuration) and the Wiki section in markdown.  
> Personally, I see a lot of pros to use GitLab.
> Centralize everything, any docs at the same place.

**Absalutly!!**

All documenation should be, at a minimum, moved into source control.
This allows you to version your documenation with the code it's documenting.
Taking it a step further to change your documenation to markdown is even better.
That will alow you to track changes though your documenation, and alow you to begin to automate the documenation.

Wiki's should be used to document parts of your application that don't (are very unlikely) change from version to version.
You should also feel free to not use the _Wiki_ itself at all, if all the doumenation is in the source control.

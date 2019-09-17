# TFVC (Team Foundation Version Control) to Git

**Similar Guides:**  

* [TFS to GCcode](tfs-to-gccode.md)

## Steps

### Prerequisites

* [Git installed](https://git-scm.com/download/win)
* [Git-TFS downloaded](http://git-tfs.com/)
* Rights to create a new repository in your hosting platform for your team (TFS, GCcode, GitHub)

### Migration Steps

1. Clone existing TFS project
   ```bash
   git tfs quick-clone "http://tfs.intra.dmz:8080/tfs/projectcollection" "$/EWS-SWE" .
   ```
1. Push to remote repository
   ```bash
   git remote add origin "http://tfs.intra.dmz:8080/tfs/projectcollection/EWS-SWE/_git/EWS-SWE-Git"
   git push --all origin
   ```

### Suggested Improvements

* Robust your repository
  * Add Git [Templates files](https://github.com/esdc-edsc/template-gabarit) to the Repository
  * Add labels with the [ESDC Label Generator](https://github.com/esdc-edsc/label-generator) (for GCcode & GitHub)

### Further Reading

* Learn about Git
  * [Git documentation](https://git-scm.com/doc)
  * [PluralSight training - Mastering Git](https://app.pluralsight.com/library/courses/mastering-git/)
  * [Learn Git branching](https://learngitbranching.js.org/)

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
GitLab & GitHub Pages would be a great method to publish this documentation.

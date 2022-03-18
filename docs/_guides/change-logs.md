---
title: Writing Good Change Logs
layout: default
category: Documentation
summary: A layout for how to write consistent and informative change logs that are meaningful to those reading them.
date: 2020-03-04
---

{{ page.summary }}

## Background

Having a good changelog can be critical for those using your applications and services.
It lets them know what has changed, and what they need to change.
Ensuring it stays consistent and is clear helps those understand the changes better.
Notes should be easy to read and convey a clear message to the reader.

## General logs

The change log should be a list of changes made for each release of a product.
The log should be stored in the root of the products sourcecode and called `CHANGELOG.md`.

All changes that are listed should indicate the _public_ property, function, or feature name that is changing in clear and to-the-point detail providing a link (issue number, documentation, commit) for more details on the change.
By _public_ it mean the name that the users of the solution would know or recognize.

## API logs

APIs should follow this logging template as they generally require strict versioning schemes to identify _breaking_ changes.
[Semantic Versioning](https://semver.org/ ) is the most common and recommend approach to versioning, so this templates assumes that it is being used.

> ### 0.0.0 - Release Name
>
> #### Breaking changes
>
> - `PropertyX` in `FunctionG` now returns alphanumerics - fixes #00
>
> #### New features and improvements
>
> - `FunctionT` added for making streamlined calls to DB - completes #00
>
> #### Fixes
>
> - `PropertyJ` in `FunctionB` parses properly - fixes #00
>

**Release Name `0.0.0`** indicates the version being released.
It could optionally include the `- Release Name` indicating a release name.

**`Breaking changes`:** This section lists all changes that require the implementer of your solution to make changes on their end to complete the update.
If you are adding to this section you should be updating the major version number (**0**.0.0) in your version.

**`New features and improvements`:** This section lists all new features that have been added and any improvements made to existing features.
Changes listed here should not cause the an implementer to make manual changes when updating; if they do it should be moved to _Breaking changes_.
If you are adding to this section you should be updating the minor version number (0.**0**.0) in your version.
If there are no new features, that should still be indicated in this section.

**`Fixes`:** This section lists any changes made to fix issues, improving back end operations, or patching other dependencies .
Changes listed here should not cause the an implementer to make manual changes when updating; if they do it should be moved to _Breaking changes_.
If you are adding to this section you should be updating the patch version number (0.0.**0**) in your version.

## Application Logs

Application Logs are different from API logs because they speak to a different audience, the users of the application (not developers).
They should avoid making references to details of code, like property names and instead make references to field names the user would see.
Each listed change should be a link to documentation about the change.
What you are describing in the change should be tailored to help _sell_ the product.

> ### Release Name - February 15, 2020
>
> #### New Features
>
> - You can subscribe to services now
>
> #### Improvements
>
> - You can now edit your user name
>
<!-- ignore duplicate header -->
<!-- markdownlint-disable MD024 -->
> #### Fixes
<!-- markdownlint-enable MD024 -->
>
> - Links now how accessible contrast colour in dark mode
>
> #### Operations
>
> - Error tracking optimized for speed
>

**The Top Header `Release Name`** should be an identifiable name, a short description, for the release.
It could optionally include the `- February 15, 2020` (a date stamp) to indicate when the release was made.

**`New Features`:** This section includes new features added to the application.
There should be a link to the detailed documentation of how the features works.
_The whole list item could be the link._

**`Improvements`:** The improvement section will tell users about the changes made to improve the existing features of the application.
This section will help users understand why they should look for the new and improved features.

**`Fixes`:** This section should detail which bugs have been fixed since the last release.
This will inform users how the application should be performing in areas they know were broken.
These fixes may not be part of the latest deployment, as they were patched previously, but should still be indicated here as part of the release.

**`Operations`:** These are any changes made related to the service of the application.
These changes wouldn't impact users directly.

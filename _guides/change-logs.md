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
[Semantic Versioning](https://semver.org/) is the most common and recommend approach to versioning, so this templates assumes that it is being used.

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

_Coming Soon!_

## Adding assets to change log

_Coming Soon!_

## Multi project logs

_Coming Soon!_

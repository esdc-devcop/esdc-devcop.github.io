---
title: Writing Good Change Logs
layout: default
category: Documentation
summary: A layout for how to write consistent and informative change logs that are meaningful to those reading them.
date: 2020-02-25
---

{{ page.summary }}

## Background

Having a good changelog can be critical for those using your applications and services.
It lets them know what has changed, and what they need to change.
Ensuring it stays consistent and is clear helps those understand the changes better.
Notes should be easy to read and convey a clear message to the reader.

Change logs are often easier to work with when following [Semantic Versioning](https://semver.org/), so this guide will assume that is being used.

## Basic logs

Most project can follow this as a basic template for writing the change log.

>>>
### 0.0.0 - 2020

#### Major changes

- `PropertyX` in `FunctionG` now returns alphanumerics - fixes #00

#### New features and improvements

- `FunctionT` added for making streamlined calls to DB - completes #00

#### Fixes

- `PropertyJ` in `FunctionB` parses properly - fixes #00
>>>

**The Top Header `0.0.0`** indicate the version being released.
It could include the `- 2020` indicating a release name.

**The First Section `Major changes`** lists all changes that require the implementer of your solution to make changes on their end to complete the update.
If you are adding to this section you should be updating the major version number (**0**.0.0) in your version.

**The Second Section `New features and improvements`** lists all new features that have been added and any improvements made to existing features.
Changes listed here should not cause the an implementer to make manual changes when updating; if they do it should be moved to _Major changes_.
If you are adding to this section you should be updating the minor version number (0.**0**.0) in your version.
If there are no new features, that should still be indicated in this section.

**The Third Section `Fixes`** lists any changes made to fix issues, improving back end operations, or patching other dependencies .
Changes listed here should not cause the an implementer to make manual changes when updating; if they do it should be moved to _Major changes_.
If you are adding to this section you should be updating the patch version number (0.0.**0**) in your version.

**Listed changes** should all indicate the property, function, or feature that is changing in clear and to-the-point detail providing a link (issue number, documentation, commit) for more details on the change.

## Adding assets to change log

_Coming Soon!_

## Multi project logs

_Coming Soon!_

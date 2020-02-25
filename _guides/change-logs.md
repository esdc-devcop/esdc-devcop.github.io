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

Change logs are often easier to work with when following [Semantic Versioning](https://semver.org/), so this guide will assume that is being used.

## Basic logs

Most project can follow this as a basic template for writing the change log.

>>>
### 0.0.0 - 2020

#### Breaking changes

- `PropertyX` in `FunctionG` now returns alphanumerics - fixes #00

#### New features

- `FunctionT` added for making streamlined calls to DB - completes #00

#### Fixes

- `PropertyJ` in `FunctionB` parses properly - fixes #00
>>>

**The Top Header `0.0.0`** indicate the version being released.
It could include the `- 2020` indicating a release name.

**The First Section `Breaking Changes`** lists any changes that would require a user of your solution to make changes on their end.
If you are adding to this section you should be updating the major version number (**0**.0.0) in your version.
If there are no breaking changes, that should still be indicated in this section.

**The Second Section `New Features`** lists all new features available in the release.
If you are adding to this section you should be updating the minor version number (0.**0**.0) in your version.
If there are no new features, that should still be indicated in this section.

**The Third Section `Fixes`** lists any changes made to fix issues or patching other dependencies.
If you are adding to this section you should be updating the patch version number (0.0.**0**) in your version.

**Listed changes** should all indicate the property, function, or feature is changing in brief detail providing a link (issue number, documentation, commit) for more details on the change.

## Adding assets to change log

_Coming Soon!_

## Multi project logs

_Coming Soon!_

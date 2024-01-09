---
title: Git Branching, Picking a Git Flow
layout: default
category: Source Code Management
summary: Detailing the differences between branching models in Git, advising on the best to pick for your application.
date: 2019-09-01
---

## Branching

Managing your branching and versioning effectively for your project development is a key aspect to success when working with Git.
Most git projects depend and follow a Branching Model that defines the rules and expectations from developers to manage their branches.
The Branching Model helps provide a common practice that everyone can openly know and be able to work with.

### Picking a Branching Model

Picking the right branching model for your project can be difficult because there are a lot of models out there and they all advocate they are the _best_.
When picking a model look at your project first.
Define some requirements that you need your model to meet based on your release cycles to all the different environments you support and what kind of project it is.
An API or Web Service might need a different model than a Web App.

#### ESDC Projects Requirements

We have extracted a few requirements from our typical ESDC release process.

- Can manage a long term production equivalent branch separated from the day-to-day development.  
  > Why? Our production release are sometimes 6 months or more apart.
- Can manage a semi-long term staging branch separated from the day-to-day development and production code.  
  > Why? We have Testing and QA cycles that last about 2 months.
- Can handle emergency releases in a way that doesn't alter from the regular branching.  
  > Why? ERs can be high stress situations, we don't want to change the "regular" method for moving code from branch to branch.

#### Popular Flows Comparison

| Key Features | [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) | [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow) | [Microsoft Release Flow](https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow) | [GitHub Flow](https://githubflow.github.io/) | [GitLab Flow](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/) |
| :--- | --- | --- | --- | --- | --- |
| Production and Development branches segregated * | :heavy_check_mark: | :grey_question: (Optional) | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: |
| Manages Staging/Release branches * | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: |
| ER branching similar to "regular" * | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Easy to follow history ** | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Easy to learn when new to Git ** | :heavy_check_mark: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Maintains all main branches (reduced chances of code loss) | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_check_mark: |
| Designed for Continuous Deployment | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: |
| Designed for Continuous Delivery | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: |
|  Can handle Continuous Delivery | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
|  Can handle Continuous Integration | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Deploys to Production from "Main/Master/Default" branch | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_minus_sign: | :heavy_check_mark: |
{: .table }

> Legend: `*` from **ESDC Projects Requirements**; `**` Subjective analysis.

### Our Recommendation

Use [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model.
It is great for managing releases and parallel development in large applications.

This model has two _primary_ branches, `master` & `dev`, that always exist.
All other branches only exist as long as they are active (until merged into a _primary_ or _secondary_ branch).
The _secondary_ branches include _`release`_, _`feature`_ and _`hotfix`_.
Both the _primary_ and _secondary_ branches should be protected to only accept changes via a pull or merge request.
The last branch is a _`working`_ branch.
This branch is the only place you should be committing code against.

GitFlow can be fairly simplistic but also get very complex.
We recommend you try to keep it as simple as possible, but don't shy away from getting complex if that is what the project requires.

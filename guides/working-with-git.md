# Working With Git - Best Practices

## Committing Code

Follow these simple steps:

1. Commit often. - _Whenever_ you change a piece of code that is testable and compiles.
1. Push your _working_ branch at the end of each "development session" (before walking away from your computer for lunch).
1. Request a PR/MR (with review) before having more than 100 lines changed
1. Squash _working_ branch commits when merging into a primary or secondary branch.

## Branching

Use [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branching model.
It is great for managing releases and parallel development in large applications.

This model has two _primary_ branches, `master` & `dev`, that always exist.
All other branches only exist as long as they are active (until merged into a _primary_ or _secondary_ branch).
The _secondary_ branches include _`release`_, _`feature`_ and _`hotfix`_.
Both the _primary_ and _secondary_ branches should be protected to only accept changes via a pull or merge request.
The last branch is a _`working`_ branch.
This branch is the only place you should be committing code against.

GitFlow can be fairly simplistic but also get very complex.
We recommend you try to keep it as simple as possible, but don't shy away from getting complex if that is what the project requires.

### Picking a Branching Model

#### Projects Requirements

Whatever project you are working on, it may have different requirements and needs from the branching model you choose.
Mostly the branching model you choose depends on your release model.
At ESDC, we have extracted a few requirements from our release process.

- Can manage a long term production equivalent branch separated from the day-to-day development
  - Why? Our production release are sometimes 6 months or more apart.
- Can manage a semi-long term staging branch separated from the day-to-day development and production code
  - Why? We have Testing and QA cycles that last about 2 months.
- Can handle emergency releases in a way that doesn't alter from the regular branching
  - Why? ERs can be high stress situations, we don't want to change the "regular" method for moving code from branch to branch.

#### Popular Flows Comparison

| Key Features | [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) | [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow) | [Microsoft Release Flow](https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow) | [GitHub Flow](https://githubflow.github.io/) | [GitLab Flow](https://docs.gitlab.com/ee/workflow/gitlab_flow.html) |
| --- | --- | --- | --- | --- | --- |
| Production and Development branches segregated | :heavy_check_mark: | :o: (Optional) | :heavy_check_mark: | :x: | :heavy_check_mark: |
| Manages Staging/Release branches | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: | :heavy_check_mark: |
| ER branching similar to "regular" | :heavy_check_mark: | :heavy_check_mark: | :x: | :heavy_check_mark: | :x: |
| Easy to follow history | :x: | :heavy_check_mark: | :x: | :heavy_check_mark: | :x: |
| Easy to learn when new to Git | :heavy_check_mark: | :x: | :x: | :heavy_check_mark: | :x: |
| Maintains all main branches (reduced chances of code loss) | :heavy_check_mark: | :heavy_check_mark: | :x: | :heavy_check_mark: | :heavy_check_mark: |
| Designed for Continuos Deployment | :x: | :x: | :x: | :heavy_check_mark: | :x: |
| Designed for Continuos Delivery | :x: | :x: | :heavy_check_mark: | :x: | :heavy_check_mark: |
|  Can handel Continuos Delivery | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
|  Can handel Continuos Integration | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Deploys to Production from "Main/Master/Default" branch | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: | :heavy_check_mark: |

## Code Review

Follow a few simple ideas:

- When approving a merge, you are just as responsible for the changes as the person who made them.
- Only review changed lines.
- Anyone on the project can raise concerns (blocking) on a PR/MR, even if they are not assigned to it.
- Can be blocked for any reason, including empty line spaces or too many changes in one PR/MR.

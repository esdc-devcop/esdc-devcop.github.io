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
At ESDC we have extracted a few requirements from our release process.

- Can manage a long term production equivalent branch separated from the day-to-day development
  - Why? Our production release are sometimes 6 months or more apart.
  - What Models don't meet this need? OneFlow, GitHub Flow, GitLab Flow
- Can manage a simi-long term staging branch separated from the day-to-day development and production code
  - Why? We have Testing and QA cycles that last about 2 months.
  - What Models don't meet this need? Microsoft Release Flow, GitHub Flow, GitLab Flow

#### GitFlow

[https://datasift.github.io/gitflow/IntroducingGitFlow.html](https://datasift.github.io/gitflow/IntroducingGitFlow.html)

- **Main Benefit:** Advantageous given ESDC's development & release cycles; works really well with it.
- **Main Issue:** Suggests a non-rebase/squashing method, causes messy history.

#### OneFlow

[https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)

- **Main Benefit:** Has only one single long-lived branch with most benefits from GitFlow
- **Main Issue:** Requires a lot more knowledge of how Git works

#### Microsoft Release Flow

[https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow](https://docs.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow)

- **Main Benefit:** TBD
- **Main Issue:** Drops production/release branches, higher potential for code loss

#### GitHub Flow

[https://githubflow.github.io/](https://githubflow.github.io/)

- **Main Benefit:** Works well with GitHub and Continuos Deployment
- **Main Issue:** Deploys code to production before being merged to the "Main/Master/Default" branch.

#### GitLab Flow

[https://docs.gitlab.com/ee/workflow/gitlab_flow.html](https://docs.gitlab.com/ee/workflow/gitlab_flow.html)

- **Main Benefit:** Works well with GitLab and Continuos Delivery
- **Main Issue:** Uses cherry-picks for prod fixes.


## Code Review

Follow a few simple ideas:

* When approving a merge, you are just as responsible for the changes as the person who made them.
* Only review changed lines.
* Anyone on the project can raise concerns (blocking) on a PR/MR, even if they are not assigned to it.
* Can be blocked for any reason, including empty line spaces or too many changes in one PR/MR.

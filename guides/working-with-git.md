# Working With Git - Best Practices

## Committing Code

Follow 3 simple rules:

1. Commit locally to the _working_ branch as often as you save.
1. Push your _working_ branch at the end of each "development session" (before walking away from your computer for lunch).
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

## Code Review

Follow a few simple ideas:

* When approving a merge, you are just as responsible for the changes as the person who made them.
* Only review changed lines.

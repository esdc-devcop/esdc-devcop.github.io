---
title: Managing Merge Requests, Using Code Review
layout: default
category: Source Code Management
summary: Describing the best methods to manage code reviews and merges.
date: 2019-09-01
---

## Overall best practices

- Be kind.
- Accept that many programming decisions are opinions. Discuss tradeoffs, which you prefer, and reach a resolution quickly.
- Ask questions; don’t make demands. (“What do you think about naming this :user_id?”)
- Ask for clarification. (“I didn’t understand. Can you clarify?”)
- Avoid selective ownership of code. (“mine”, “not mine”, “yours”)
- Avoid using terms that could be seen as referring to personal traits. (“dumb”, “stupid”). Assume everyone is attractive, intelligent, and well-meaning.
- Be explicit. Remember people don’t always understand your intentions online.
- Be humble. (“I’m not sure - let’s look it up.”)
- Don’t use hyperbole. (“always”, “never”, “endlessly”, “nothing”)
- Be careful about the use of sarcasm. Everything we do is public; what seems like good-natured ribbing to you and a long-time colleague might come off as mean and unwelcoming to a person new to the project.
- Consider one-on-one chats or video calls if there are too many “I didn’t understand” or “Alternative solution:” comments. Post a follow-up comment summarizing one-on-one discussion.
- If you ask a question to a specific person, always start the comment by mentioning them; this will ensure they see it if their notification level is set to “mentioned” and other people will understand they don’t have to respond.

## Responsibility of the _author_

- Keep your changes small with a clear scope.
- Describe the changes in the Pull Request. Link it to a task.
- New functions and conditions come with new unit tests. Changed functions and conditions don't affect existing unit tests.
- Complex sections of code contains comments.

### Having your code reviewed

Please keep in mind that code review is a process that can take multiple iterations, and reviewers may spot things later that they may not have seen the first time.

- The first reviewer of your code is you. Before you perform that first push of your shiny new branch, read through the entire diff. Does it make sense? Did you include something unrelated to the overall purpose of the changes? Did you forget to remove any debugging code?
- Be grateful for the reviewer’s suggestions. (“Good call. I’ll make that change.”)
- Don’t take it personally. The review is of the code, not of you.
- Explain why the code exists. (“It’s like that because of these reasons. Would it be more clear if I rename this class/file/method/variable?”)
- Extract unrelated changes and refactorings into future merge requests/issues.
- Seek to understand the reviewer’s perspective.
- Try to respond to every comment.
- The merge request author resolves only the threads they have fully addressed. If there’s an open reply, an open thread, a suggestion, a question, or anything else, the thread should be left to be resolved by the reviewer.
- Push commits based on earlier rounds of feedback as isolated commits to the branch. Do not squash until the branch is ready to merge. - Reviewers should be able to read individual updates based on their earlier feedback.
- Assign the merge request back to the reviewer once you are ready for another round of review. If you do not have the ability to assign merge requests, @ mention the reviewer instead.

## Responsibility of the _reviewer_

- When approving a merge, you are just as responsible for the changes as the person who made them. So you should understand them just as well.
- Only review changed lines.
- Anyone on the project can raise concerns (blocking) on a PR/MR, even if they are not assigned to it.
- The goal of a PR/MR should ultimately be knowledge transfer.

### Reviewing the code

Understand why the change is necessary (fixes a bug, improves the user experience, refactors the existing code). Then:

- Try to be thorough in your reviews to reduce the number of iterations.
- Communicate which ideas you feel strongly about and those you don’t.
- Identify ways to simplify the code while still solving the problem.
- Offer alternative implementations, but assume the author already considered them. (“What do you think about using a custom validator here?”)
- Seek to understand the author’s perspective.
- If you don’t understand a piece of code, say so. There’s a good chance someone else would be confused by it as well.
- Do prefix your comment with “Not blocking:” if you have a small, non-mandatory improvement you wish to suggest. This lets the author know that they can optionally resolve this issue in this merge request or follow-up at a later stage.
- After a round of line notes, it can be helpful to post a summary note such as “LGTM :thumbsup:”, or “Just a couple things to address.”
- Assign the merge request to the author if changes are required following your review.
- Consider using the Squash and merge feature when the merge request has a lot of commits. When merging code a maintainer should only use the squash feature if the author has already set this option or if the merge request clearly contains a messy commit history that is intended to be squashed.

### Finding balance

One of the most difficult things during code review is finding the right balance in how deep the reviewer can interfere with the code created by a reviewee.

- Finding bugs and improving code style is important, but thinking about good design is important as well. Building abstractions and good design is what makes it possible to hide complexity and makes future changes easier.
- Asking the reviewee to change the design sometimes means the complete rewrite of the contributed code. It’s usually a good idea to ask another maintainer or reviewer before doing it, but have the courage to do it when you believe it is important.
- There is a difference in doing things right and doing things right now. Ideally, we should do the former, but in the real world we need the latter as well. A good example is a security fix which should be released as soon as possible. Asking the reviewee to do the major refactoring in the merge request that is an urgent fix should be avoided.
- Doing things well today is usually better than doing something perfectly tomorrow. Shipping a kludge today is usually worse than doing something well tomorrow. When you are not able to find the right balance, ask other people about their opinion.

## FAQ

### How do smaller changes help me and the project?

Smaller changes allow each change to be individually assessed and validating ensuring that specific set of code works exactly as the developer inteneds it to.
It also helps a reviewer of the code, the smaller the change, the faster the reviewer can approve it meaning the faster that change gets added to the shared source allowing all the developers to work with that change.
Later when going though history trying to identify issues, the smaller changes will help identify the direct intention of the code change allowing a developer to identify how the change may relate to the issue they are dealing with.

### Why do code reviews matter?

The primary goal of a code reivew should be collaberation.
The collaberation allows the _reivewer_ and _author_ of the code change to learn more about the project, enabling them both to make better changes to the project in the moment and in the future.

### How do I keep reviews from taking up all my time?

- **Keep the changes small!** If the change is too large and could have been broken appart, reject it.
- **Don't validate the code** in your reivew. Let the pipeline do that work for you. Focus on learning what it is the _author_ is trying to do, and check that what they did makes sense.
- If you don't understand the change, **ask for more details**. Don't spend time trying to figgure it out, it should be simple enough (or explained in comments) to understand in a minute or two.

## Attribution

Some content copied from [GitLab Code Review Guidelines](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-merge-request-author)

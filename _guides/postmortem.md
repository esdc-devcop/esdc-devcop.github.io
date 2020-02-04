---
title: Blameless Postmorterm Guideline
layout: default
category: Practices
summary: Detailing what would be expected when running and recording a postmorterm.
date: 2019-01-01
---

## Intro

A postmortem is a written record of an incident, its impact, the actions taken to mitigate or resolve it, the root cause(s), and the follow-up actions to prevent the incident from recurring.

## Why Have Them

"Only by analyzing our shortcomings can we learn to do better"

With our large scale, complex and distributed systems, its inevitable that incidents and outages will occur.
Left unchecked, incidents can multiply in complexity which could overwhelm a system and its operators.
Performing a post-mortem shows commitment to reducing technical debt in your solution and shows a will to improve and do better.

They help with the following:

* Document the incident
* Ensure the cause is well understood
* Preventive actions are put in place
* Contribute to the knowledge base
* Reduce technical debt
* Motivates the team to reflect and do better
* Bring value to the team and organization
* Provide trend analysis of incidents

## When to have them

Having a postmortem is not punishment—it is a learning opportunity for the entire organization.
The postmortem process does present an inherent cost in terms of time and effort, so you can be deliberate in choosing when to write one.
However certain triggers can be used to determine at a minimum when one should occur.
It is important to define your postmortem criteria before an incident occurs so that everyone knows when a post-mortem is necessary.

* System downtime or degradation of service beyond a certain threshold
* Data loss of any kind
* On-call engineer intervention (release rollback, rerouting of traffic, etc.)
* A resolution time above a certain threshold
* A monitoring failure

## Components of a Post-mortem

* A well run post-mortem is composed of the following pieces.

### Planning

* Post-mortem are a scheduled activity
* Time is required for a meeting with all parties involved in the issue
* Time is required for someone to document the postmortem

### Meeting

* Includes representation of all required groups
* The facilitator establishes parameters and reiterates the goals of the post-mortem
* Review and clarify timelines and chain of events

### Documenting

Documenting the post-mortem will contribute to the knowledge base and allow us to share the lesson learned. Key contents include:

* Summary
* Impact
* Root Causes
* Resolution
* Actions items
* Lessons Learned
* Timeline
* Google's Sample Template

### Review

* Teams share the first post-mortem draft internally and solicit the groups involved to assess the draft for completeness

### Publication

* Once reviewed the post-mortem can be published openly.
* The goal is to share post-mortems to the widest possible audience that would benefit from the knowledge or lessons imparted

## Postmortem Templates and Samples

[Google's Postmortem Example](https://landing.google.com/sre/sre-book/chapters/postmortem/)

## Do's

* Focus on identifying the contributing causes of the incident without indicting any individual or team for bad or inappropriate behavior
* Assume everyone involved in an incident had good intentions and did the right thing with the information they had at the time
* See every "mistake" as an opportunity to strengthen the system
* Create a culture of continuous improvement
* Have it asap so that timelines and activities are fresh in peoples memory
* Involve everyone that participated in the troubleshooting and resolution and also everyone with an interest
* Be open, listen to input
* Share your post-mortem with others

## Don'ts

* Finger pointing
* Assigning blame
* Punish people for being honest
* Leave a post-mortem undocumented
* Leave action items unresolved

## Templates & Tools

[Google's Postmortem Example](https://landing.google.com/sre/sre-book/chapters/postmortem/)

[Etsy Morgue](https://github.com/etsy/morgue)

## References

[https://en.wikipedia.org/wiki/Postmortem_documentation](https://en.wikipedia.org/wiki/Postmortem_documentation)

[https://landing.google.com/sre/sre-book/chapters/postmortem-culture/](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/)

[https://landing.google.com/sre/workbook/chapters/postmortem-analysis/](https://landing.google.com/sre/workbook/chapters/postmortem-analysis/)

[https://www.infoq.com/articles/postmortems-etsy/](https://www.infoq.com/articles/postmortems-etsy/)

---
layout: default
title: Welcome to the DevCoP!
---

<div class="well">
<h2 id="ask-your-questions">Ask Your Questions</h2>
<p class="lead"><strong>Join our conversation in Slack</strong>, we have a channel in the <a target="_blank" href="https://gcdevopsleague.slack.com/messages/CKS45C1ST/">GC DevOps League #esdc-devcop</a>.</p>
</div>

## Our content

To know what we are all about and what our goals are, read up on our **[strategy](strategy/)**!
We publicize all our [recommendations]({{ '/' | absolute_url }}recommendations/) and [guides]({{ '/' | absolute_url }}guides/) on this site. Some of these documents are directly related to our topics presented at the monthly DevCoP sessions.

<section>
    <div class="row wb-eqht">
        <div class="col-md-6">
            <section class="panel panel-default hght-inhrt">
                <div class="panel-heading">
                    <h3 class="panel-title" id="guides">Guides</h3>
                </div>
                <div class="panel-body">
                    <p class="lead">The "How to..." docs</p>
                    <ul>
                    {% assign sorted-guides = (site.guides | sort: 'date') | reverse %}
                    {% for guide in sorted-guides limit:3 %}
                        <li><a href="{{ guide.url | relative_url }}">{{ guide.title }}</a></li>
                    {% endfor %}
                    </ul>
                    <p><a href="guides/">See More</a></p>
                </div>
            </section>
        </div>
        <div class="col-md-6">
            <section class="panel panel-default hght-inhrt">
                <div class="panel-heading">
                    <h3 class="panel-title" id="recommendations">Recommendations</h3>
                </div>
                <div class="panel-body">  
                    <p class="lead">Best Practices on...</p>
                    <ul>
                    {% assign sorted-recommendations = (site.recommendations | sort: 'date') | reverse %}
                    {% for recommendation in sorted-recommendations limit:3 %}
                        <li><a href="{{ recommendation.url | relative_url }}">{{ recommendation.title }}</a></li>
                    {% endfor %}
                    </ul>
                    <p><a href="recommendations/">See More</a></p>
                </div>
            </section>
        </div>
    </div>
</section>
<section class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title" id="references">References</h3>
    </div>
    <div class="panel-body">
        <ul class="colcount-md-3">
            {% for reference in site.references %}
            <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
            {% endfor %}
        </ul>
        <details>
            <summary>More</summary>
            <ul class="colcount-md-2">
                {% for link in site.data.referenceLinks.links %}
                <li><a href="{{ link.url | relative_url }}">{{ link.name }}</a></li>
                {% endfor %}
            </ul>
        </details>
    </div>
</section>

## Get More Involved

Feel free to fork and submit a PR to any of our repos.
If you are from ESDC ask to join as a Member.  
Join our conversation in Slack, we have a channel in the [GC DevOps League](https://gcdevopsleague.slack.com) [#esdc-devcop](https://gcdevopsleague.slack.com/messages/CKS45C1ST/).  

Also, [vote on Issues](https://github.com/esdc-devcop/esdc-devcop.github.io/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc) (with a :+1: reaction) that you think we should put a focus on doing first!

See [CONTRIBUTING.md](https://github.com/esdc-devcop/esdc-devcop.github.io/blob/master/CONTRIBUTING.md)

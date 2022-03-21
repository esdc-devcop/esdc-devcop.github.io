---
layout: default
title: Recommendations
permalink: /recommendations/
---

We produce recommendation based on global best practices for a verity of topics related to development at ESDC. If you are looking for a recommendation on something we don’t already have, please request one be created.

There is also a list of [recommended tools](tools.md) that can be referenced.

{% assign recommendations-grouped = site.recommendations | group_by: 'category' %}
{% for group in recommendations-grouped %}

## {{ group.name }}

{% for item in group.items %}

### {{ item.title }}

{{ item.summary }}  
[See the recommendation]({{ item.url | relative_url }})

{% endfor %}
{% endfor %}

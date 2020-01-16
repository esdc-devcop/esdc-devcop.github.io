---
layout: default
title: Guides
permalink: /guides/
---

We produce guides to help developers at ESDC walk-though some complex procedures related to development.

{% assign guides-grouped = site.guides | group_by: 'category' %}
{% for group in guides-grouped %}

## {{ group.name }}

{% for item in group.items %}

### {{ item.title }}

{{ item.summary }}  
[See the guide]({{ item.url | relative_url }})

{% endfor %}
{% endfor %}

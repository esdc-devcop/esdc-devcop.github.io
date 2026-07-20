---
layout: default
title: Best Practices, ESDC Processes and Guides
permalink: /guides/
---

We produce guides to help developers at ESDC walk-though some complex procedures related to development.

{% assign guides-grouped = site.data.guides | group_by: 'category' | sort: 'name' %}
{% for group in guides-grouped %}

## {{ group.name }}

{% for item in group.items %}

### {{ item.title }}

{{ item.summary }}  
[See the guide]({{ item.url }})

{% endfor %}
{% endfor %}


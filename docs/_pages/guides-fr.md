---
layout: default
title: Meilleures pratiques, processus d'EDSC et guides
permalink: /fr/guides/
lang: fr
---

Nous produisons des guides pour aider les développeurs d'EDSC à traverser certaines procédures complexes liées au développement.

{% assign guides-grouped = site.data.guides | group_by: 'category_fr' | sort: 'name' %}
{% for group in guides-grouped %}

## {{ group.name }}

{% for item in group.items %}

### {{ item.title_fr | default: item.title }}

{{ item.summary_fr | default: item.summary }}
[Voir le guide]({{ item.url }})

{% endfor %}
{% endfor %}

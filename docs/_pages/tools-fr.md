---
title: Aperçu des outils recommandés
layout: default
permalink: /fr/tools/
lang: fr
---

<ul class="list-unstyled">
{% assign devTools = site.data.tools.development | sort: "focus_fr" %}
{% for devTool in devTools %}
  <li>
  <details>
    <summary>
      {% assign title = devTool.focus_fr | default: devTool.focus %}
      {% if devTool.scope_fr or devTool.scope %}
        {% assign scope = devTool.scope_fr | default: devTool.scope %}
        {% assign title = title | append: ' - ' | append: scope %}
      {% endif %}
      <h2 class="h3" id="{{ title | slugify }}">{{ title }}</h2>
    </summary>
    {% if devTool.tags_fr or devTool.tags %}
      {% assign tags = devTool.tags_fr | default: devTool.tags %}
      <p>
        {% for tag in tags %}
          <span class="label label-primary">{{ tag }}</span>
        {% endfor %}
      </p>
    {% endif %}
    {% if devTool.description_fr or devTool.description %}
      <p>{{ devTool.description_fr | default: devTool.description }}</p>
    {% endif %}
    <ul class="list-group list-inline row mrgn-lft-0 mrgn-rght-0">
      {% for tool in devTool.tools %}
        <li class="list-group-item col-md-4 brdr-rds-0">
          <h3 class="list-group-item-heading" id="{{ tool.name | slugify }}">{{ tool.name }}</h3>
          <ul class="list-group-item-text list-inline">
            {% if tool.application %}
              <li><a href="{{ tool.application }}">Application</a></li>
            {% endif %}
            {% if tool.documentation %}
              <li><a href="{{ tool.documentation }}">Documentation</a></li>
            {% endif %}
            {% if tool.recommendation %}
              <li><a href="{{ tool.recommendation }}">Recommandation</a></li>
            {% endif %}
          </ul>
        </li>
      {% endfor %}
    </ul>
  </details>
  </li>
{% endfor %}
</ul>

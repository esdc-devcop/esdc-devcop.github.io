---
title: Recommended Tools Overview
layout: default
permalink: /tools.html
---

<ul class="list-unstyled">
{% for devTool in site.data.tools.development | sort: "focus" %}
  <li>
  <details>
    <summary>
      {% assign title = devTool.focus %}
      {% if devTool.scope %}
        {% assign title = title | append: ' - ' | append: devTool.scope %}
      {% endif %}
      <h2 class="h3" id="{{ title | slugify }}">{{ title }}</h2>
    </summary>
    {% if devTool.tags %}
      <p>
        {% for tag in devTool.tags %}
          <span class="label label-primary">{{ tag }}</span>
        {% endfor %}
      </p>
    {% endif %}
    {% if devTool.description %}
      <p>{{ devTool.description %}}</p>
    {% endif %}
    <p class="lead">Recommended Tools:</p>
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
              <li><a href="{{ tool.recommendation }}">Recommendation</a></li>
            {% endif %}
          </ul>
        </li>
      {% endfor %}
    </ul>
    {% if devTool.alternatives %}
      <p class="lead">Alternative Tools:</p>
      <ul class="list-group list-inline row mrgn-lft-0 mrgn-rght-0">
        {% for tool in devTool.alternatives %}
          <li class="list-group-item col-md-4 brdr-rds-0">
            <h3 class="list-group-item-heading" id="{{ tool.name | slugify }}">{{ tool.name }}</h3>
            <p>{{ tool.rational }}</p>
            <ul class="list-group-item-text list-inline">
              {% if tool.application %}
                <li><a href="{{ tool.application }}">Application</a></li>
              {% endif %}
              {% if tool.documentation %}
                <li><a href="{{ tool.documentation }}">Documentation</a></li>
              {% endif %}
              {% if tool.recommendation %}
                <li><a href="{{ tool.recommendation }}">Recommendation</a></li>
              {% endif %}
            </ul>
          </li>
        {% endfor %}
      </ul>
    {% endif %}
  </details>
  </li>
{% endfor %}
</ul>

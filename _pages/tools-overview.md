---
title: Recommended Tools Overview
layout: default
permalink: /tools/
---

<div class="row">

{% for devTool in site.data.tools.development | sort: "focus" %}
<div class="col-md-6">
  <details>
    <summary>
      {% assign title = devTool.focus %}
      {% if devTool.scope %}
        {% assign title = title | append: ' - ' | append: devTool.scope %}
      {% endif %}
      <h2 id="{{ title | slugify }}">{{ title }}</h2>
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
    <ul class="list-group">
      {% for tool in devTool.tools %}
        <li class="list-group-item">
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
      <ul class="list-group">
        {% for tool in devTool.alternatives %}
          <li class="list-group-item">
            <h3 class="list-group-item-heading">{{ tool.name }}</h3>
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
</div>
{% endfor %}

</div>

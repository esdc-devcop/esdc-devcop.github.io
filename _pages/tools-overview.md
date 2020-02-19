---
title: Recommended Tools Overview
layout: default
permalink: /tools/
---

{% for devTool in site.data.tools.development %}
<div class="panel panel-default">
  <header class="panel-heading">
    {% assign title = devTool.focus %}
    {% if devTool.scope %}
      {% assign title = title | append: ' - ' | append: devTool.scope %}
    {% endif %}
    <h2 class="panel-title" id="{{ title | slugify}}">{{ title }}</h2>
  </header>
  <div class="panel-body">
    <p class="lead">Recommended Tools:</p>
    <div class="row">
      {% for tool in devTool.tools %}
        <div class="col-md-4 well">
          <h3>{{ tool.name }}</h3>
          <ul class="list-inline">
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
    </div>
  </div>
</div>
{% endfor %}

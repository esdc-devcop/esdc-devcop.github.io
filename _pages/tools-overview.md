---
title: Recommended Tools Overview
layout: default
permalink: /tools/
---

<div class="row">

{% for devTool in site.data.tools.development %}
<div class="col-md-6">
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
      <ul class="list-group">
        {% for tool in devTool.tools %}
          <li class="list-group-item">
            <h3 class="list-group-item-heading">{{ tool.name }}</h3>
            <ul class="list-group-item-text">
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
    </div>
  </div>
</div>
{% endfor %}

</div>

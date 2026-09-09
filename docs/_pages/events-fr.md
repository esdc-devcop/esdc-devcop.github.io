---
title: Événements
layout: no-banner
permalink: /fr/events/
lang: fr
---

{% if site.data.events.next %}
<div class="well">
    <h2 id="next-event">Notre prochain événement</h2>
    <p class="lead">Le prochain événement est prévu pour le <strong>{{ site.data.events.next.date }}</strong> sur <a href="https://github.com/esdc-devcop/esdc-devcop.github.io/issues/{{ site.data.events.next.id }}">{{ site.data.events.next.topic_fr | default: site.data.events.next.topic }}</a></p>
    <p>{{ site.data.events.next.overview_fr | default: site.data.events.next.overview }}</p>
    {% if site.data.events.next.part2_fr or site.data.events.next.part2 %}
    <p class="text-muted">{{ site.data.events.next.part2_fr | default: site.data.events.next.part2 }}</p>
    {% endif %}
</div>
{% endif %}

<h2>Événements passés</h2>

{% for event in site.data.events.past %}

<section class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title" id="{{ event.topic_fr | default: event.topic | slugify }}">{{ event.topic_fr | default: event.topic }}</h3>
    </div>
    <div class="panel-body">
        <div class="pull-right mrgn-rght-lg text-muted small">
            <dl>
                <dt>Présenté en :</dt>
                <dd>{{ event.month_fr | default: event.month }}</dd>
    {% if event.id %}
                <dt>Numéro GitHub :</dt>
                <dd><a href="https://github.com/esdc-devcop/esdc-devcop.github.io/issues/{{ event.id }}">#{{ event.id }}</a></dd>
    {% endif %}
            </dl>
        </div>
    {% if event.recording %}
        <p><strong><a href="{{ event.recording }}"><span class="glyphicon glyphicon-facetime-video"></span> Visionner l'enregistrement vidéo</a></strong></p>
    {% endif %}
    {% if event.norecording_fr or event.norecording %}
        <p>{{ event.norecording_fr | default: event.norecording }}</p>
    {% endif %}
    {% if event.presentation %}
        <p><a href="{{ event.presentation }}"><span class="glyphicon glyphicon-file"></span> Voir les diapositives de la présentation (EN)</a></p>
    {% endif %}
    {% if event.diapositives %}
        <p><a href="{{ event.diapositives }}"><span class="glyphicon glyphicon-file"></span> Voir les diapositives de la présentation</a></p>
    {% endif %}
    {% if event.nopresentation_fr or event.nopresentation %}
        <p>{{ event.nopresentation_fr | default: event.nopresentation }}</p>
    {% endif %}
    {% if event.emails %}
        <p>Contacts :</p>
        <ul>
        {% for email in event.emails %}
            <li><a href="mailto:{{ email.email }}">{{ email.title_fr | default: email.title }}</a></li>
        {% endfor %}
        </ul>
    {% endif %}
    {% if event.resources %}
        <p>Ressources :</p>
        <ul>
        {% for resource in event.resources %}
            <li><a href="{{ resource.link }}">{{ resource.title_fr | default: resource.title }}</a></li>
        {% endfor %}
        </ul>
    {% endif %}

    </div>
</section>

{% endfor %}

{% if site.data.events.dates %}

## Dates futures potentielles

<ul>
{% for date in site.data.events.dates %}
    <li>{{ date }}</li>
{% endfor %}
</ul>
{% endif %}

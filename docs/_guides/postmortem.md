---
title: Blameless Postmorterm Guideline
layout: default
category: Practices
summary: Detailing what would be expected when running and recording a postmorterm.
date: 2019-01-01
---

*Le texte français est donné à la suite.*

## Intro

A postmortem is a written record of an incident, its impact, the actions taken to mitigate or resolve it, the root cause(s), and the follow-up actions to prevent the incident from recurring.

## Why Have Them

"Only by analyzing our shortcomings can we learn to do better"

With our large scale, complex and distributed systems, its inevitable that incidents and outages will occur.
Left unchecked, incidents can multiply in complexity which could overwhelm a system and its operators.
Performing a post-mortem shows commitment to reducing technical debt in your solution and shows a will to improve and do better.

They help with the following:

* Document the incident
* Ensure the cause is well understood
* Preventive actions are put in place
* Contribute to the knowledge base
* Reduce technical debt
* Motivates the team to reflect and do better
* Bring value to the team and organization
* Provide trend analysis of incidents

## When to have them

Having a postmortem is not punishment—it is a learning opportunity for the entire organization.
The postmortem process does present an inherent cost in terms of time and effort, so you can be deliberate in choosing when to write one.
However certain triggers can be used to determine at a minimum when one should occur.
It is important to define your postmortem criteria before an incident occurs so that everyone knows when a post-mortem is necessary.

* System downtime or degradation of service beyond a certain threshold
* Data loss of any kind
* On-call engineer intervention (release rollback, rerouting of traffic, etc.)
* A resolution time above a certain threshold
* A monitoring failure

## Components of a Post-mortem

* A well run post-mortem is composed of the following pieces.

### Planning

* Post-mortem are a scheduled activity
* Time is required for a meeting with all parties involved in the issue
* Time is required for someone to document the postmortem

### Meeting

* Includes representation of all required groups
* The facilitator establishes parameters and reiterates the goals of the post-mortem
* Review and clarify timelines and chain of events

### Documenting

Documenting the post-mortem will contribute to the knowledge base and allow us to share the lesson learned. Key contents include:

* Summary
* Impact
* Root Causes
* Resolution
* Actions items
* Lessons Learned
* Timeline
* Google's Sample Template

### Review

* Teams share the first post-mortem draft internally and solicit the groups involved to assess the draft for completeness

### Publication

* Once reviewed the post-mortem can be published openly.
* The goal is to share post-mortems to the widest possible audience that would benefit from the knowledge or lessons imparted

## Postmortem Templates and Samples

[Google's Postmortem Example](https://landing.google.com/sre/sre-book/chapters/postmortem/ )

## Do's

* Focus on identifying the contributing causes of the incident without indicting any individual or team for bad or inappropriate behavior
* Assume everyone involved in an incident had good intentions and did the right thing with the information they had at the time
* See every "mistake" as an opportunity to strengthen the system
* Create a culture of continuous improvement
* Have it asap so that timelines and activities are fresh in peoples memory
* Involve everyone that participated in the troubleshooting and resolution and also everyone with an interest
* Be open, listen to input
* Share your post-mortem with others

## Don'ts

* Finger pointing
* Assigning blame
* Punish people for being honest
* Leave a post-mortem undocumented
* Leave action items unresolved

## Templates & Tools

[Google's Postmortem Example](https://landing.google.com/sre/sre-book/chapters/postmortem/)

[Etsy Morgue](https://github.com/etsy/morgue)

## References

[https://en.wikipedia.org/wiki/Postmortem_documentation](https://en.wikipedia.org/wiki/Postmortem_documentation)

[https://sre.google/sre-book/postmortem-culture/](https://sre.google/sre-book/postmortem-culture/)

[https://sre.google/workbook/postmortem-analysis/](https://sre.google/workbook/postmortem-analysis/)

[https://www.freecodecamp.org/news/what-is-a-software-post-mortem/](https://www.freecodecamp.org/news/what-is-a-software-post-mortem/)

---

*Texte français:*

### Introduction

Une analyse post-mortem (ou rétrospective d'incident sans blâme) est un compte rendu écrit d'un incident, de son impact, des mesures prises pour l'atténuer ou le résoudre, de ses causes profondes et des actions de suivi pour éviter qu'il ne se reproduise.

### Pourquoi en réaliser ?

« Ce n'est qu'en analysant nos lacunes que nous pouvons apprendre à faire mieux. »

Avec nos systèmes distribués, complexes et à grande échelle, la survenue d'incidents et de pannes est inévitable.
Sans suivi, les incidents peuvent s'accumuler en complexité et déborder le système ainsi que ses opérateurs.
Mener une analyse post-mortem démontre un engagement à réduire la dette technique de votre solution et une volonté constante de s'améliorer.

Elles permettent de :

* Documenter l'incident
* S'assurer que la cause profonde est bien comprise
* Mettre en place des mesures préventives
* Enrichir la base de connaissances
* Réduire la dette technique
* Motiver l'équipe à réfléchir et à progresser
* Apporter de la valeur à l'équipe et à l'organisation
* Fournir une analyse des tendances des incidents

### Quand les mener ?

Réaliser une analyse post-mortem n'est pas une punition — c'est une occasion d'apprentissage pour toute l'organisation.
Le processus exige un investissement en temps et en efforts, ce qui justifie de cibler les situations appropriées.
Certains déclencheurs permettent d'établir un seuil minimal :
Il est important de définir vos critères d'analyse post-mortem en amont afin que chacun sache quand elle s'impose.

* Interruption de service ou dégradation des performances au-delà d'un seuil critique
* Perte de données, quelle qu'en soit la nature
* Intervention d'urgence d'un ingénieur de garde (retour arrière d'une version, redirection du trafic, etc.)
* Temps de résolution dépassant un seuil défini
* Défaillance des outils de surveillance

### Composantes d'une analyse post-mortem

Une analyse post-mortem bien menée s'articule autour des éléments suivants :

#### Planification

* L'analyse post-mortem est une activité planifiée
* Prévoir du temps pour une rencontre avec toutes les parties impliquées
* Prévoir du temps pour la rédaction du rapport d'analyse

#### Rencontre

* Regroupe des représentants de tous les groupes concernés
* Le facilitateur établit le cadre et rappelle les objectifs de l'exercice
* Examiner et clarifier la chronologie et l'enchaînement des événements

#### Rédaction

La documentation de l'incident enrichit la base de connaissances et permet de partager les leçons apprises. Le contenu clé comprend :

* Résumé
* Impact
* Causes fondamentales
* Résolution
* Plan d'action
* Leçons apprises
* Chronologie détaillée
* Modèle d'exemple de Google

#### Révision

* Les équipes partagent la première version en interne et invitent les groupes participants à en valider l'exhaustivité

#### Publication

* Une fois révisée, l'analyse post-mortem peut être publiée ouvertement.
* L'objectif est de la diffuser auprès du public le plus large possible pour maximiser le partage des connaissances acquises

### Modèles et exemples de post-mortem

[Exemple de post-mortem de Google (en anglais)](https://landing.google.com/sre/sre-book/chapters/postmortem/)

### À faire

* Se concentrer sur l'identification des causes ayant contribué à l'incident sans accuser aucun individu ou équipe de comportement fautif
* Tenir pour acquis que tous les participants avaient de bonnes intentions et ont agi au mieux avec les informations disponibles
* Considérer chaque « erreur » comme une opportunité de consolider le système
* Instaurer une culture d'amélioration continue
* Tenir la rencontre rapidement pendant que les souvenirs et détails sont encore frais
* Inviter toutes les personnes ayant participé au diagnostic, à la résolution ou manifestant un intérêt
* Faire preuve d'ouverture et d'écoute
* Partager l'analyse post-mortem avec vos pairs

### À éviter

* Pointer du doigt
* Chercher des coupables
* Pénaliser les personnes faisant preuve d'honnêteté
* Laisser un incident majeur non documenté
* Laisser des éléments du plan d'action sans suivi ni résolution

### Modèles et outils

[Exemple de post-mortem de Google (en anglais)](https://landing.google.com/sre/sre-book/chapters/postmortem/)

[Etsy Morgue (en anglais)](https://github.com/etsy/morgue)

### Références

[Documentation Wikipédia sur le post-mortem](https://en.wikipedia.org/wiki/Postmortem_documentation)

[Culture du post-mortem chez Google SRE (en anglais)](https://sre.google/sre-book/postmortem-culture/)

[Cahier d'analyse post-mortem de Google SRE (en anglais)](https://sre.google/workbook/postmortem-analysis/)

[Article FreeCodeCamp sur le post-mortem logiciel (en anglais)](https://www.freecodecamp.org/news/what-is-a-software-post-mortem/)

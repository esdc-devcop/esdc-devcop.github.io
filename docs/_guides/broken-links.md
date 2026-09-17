---
title: Check for Broken Links on your Website
layout: default
category: Development
summary: Best Practices on how to prevent and detect broken links.
date: 2022-10-21
---

*Le texte français est donné à la suite.*

## Background

Broken links on your website can create a bad user experience and can also lower the ranking of your web site in search engine optimization (SEO).  
You can prevent this from happening with prevention and detection.

## What Is a Broken Link?

Here are some examples of broken links:

* a website or page that no longer exists
* a website or page where the Url has moved without a redirect
* a website that has broken page elements

## How to Fix Them

### Prevention

You can improve the quality of your website by choosing references that are reputable and well established.

#### External Links:

These are links that point to an external website. As the owner, you should choose trustworthy and informative website links to help improve the quality and ranking of your website.

#### Backlinks:

These are external websites that link to your site. You may not have much control over how they link to your site. However, by publishing useful content on your website, you can boost your ranking on search results.

#### Create a Custom 404 Page for Your Website:

A good custom 404 error page can decrease the user frustration by *breaking it to them gently* and help them return to your home page, or easily report the problem to you. Adding a little creativity and humour to the page helps as well.

* indicate clearly that the page is not available (**Error 404: Page Not Found**)
* add clear instructions on how to redirect them back to your website (ie, your home page, contact us page)
* if your site doesn't have a built in feature for 404 Error pages, you need to configure your web server to show the custom error page content

### Detection

You can validate your internal and external links manually by using an online link checker, such as [W3C link checker](https://dev.w3.org/perl/modules/W3C/LinkChecker/docs/checklink).

You can add an existing library to your project to check for broken links on your site automatically, either from Nuget(.NET) or NPM(Javascript).

You can also refactor your code to automatically check your website for broken links.

---

*Texte français:*

### Contexte

Les liens rompus sur votre site web peuvent créer une mauvaise expérience utilisateur et réduire le classement de votre site dans l'optimisation pour les moteurs de recherche (SEO).  
Vous pouvez éviter cela grâce à la prévention et à la détection.

### Qu'est-ce qu'un lien rompu ?

Voici quelques exemples de liens rompus :

* un site web ou une page qui n'existe plus
* un site web ou une page dont l'URL a été déplacée sans redirection
* un site web dont certains éléments de page sont brisés

### Comment y remédier

#### Prévention

Vous pouvez améliorer la qualité de votre site web en choisissant des références réputées et bien établies.

##### Liens externes :

Il s'agit de liens pointant vers un site web externe. En tant que propriétaire, vous devriez choisir des liens fiables et informatifs pour améliorer la qualité et le classement de votre site web.

##### Rétroliens (Backlinks) :

Il s'agit de sites web externes qui pointent vers votre site. Vous n'avez que peu de contrôle sur la manière dont ils créent ces liens. Cependant, en publiant du contenu utile sur votre site, vous pouvez améliorer votre visibilité dans les résultats de recherche.

##### Créer une page 404 personnalisée pour votre site :

Une bonne page d'erreur 404 personnalisée peut réduire la frustration de l'utilisateur en lui expliquant la situation avec tact et en l'aidant à retourner sur votre page d'accueil ou à signaler facilement le problème. Ajouter un peu de créativité et d'humour est également bénéfique.

* indiquer clairement que la page n'est pas disponible (**Erreur 404 : Page introuvable**)
* ajouter des instructions claires sur la façon de revenir à votre site web (ex. : page d'accueil, page de contact)
* si votre site ne dispose pas d'une fonctionnalité intégrée pour les pages d'erreur 404, vous devez configurer votre serveur web pour afficher le contenu de la page d'erreur personnalisée

#### Détection

Vous pouvez valider vos liens internes et externes manuellement en utilisant un vérificateur de liens en ligne, tel que le [vérificateur de liens W3C](https://dev.w3.org/perl/modules/W3C/LinkChecker/docs/checklink).

Vous pouvez ajouter une bibliothèque existante à votre projet pour vérifier automatiquement les liens rompus sur votre site, à partir de Nuget (.NET) ou de NPM (Javascript).

Vous pouvez également adapter votre code pour vérifier automatiquement la présence de liens rompus sur votre site web.

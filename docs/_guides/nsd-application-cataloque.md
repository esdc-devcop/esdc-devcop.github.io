---
title: Git Support Questions - NSD Application Catalogue
layout: default
category: ESDC Process
summary: How to request a Git installation from the NSD Application catalogue
date: 2023-02-03
---

*Le texte français est donné à la suite.*

## Background

This page will answer some questions regarding common issues encountered with Git installation, and errors when using Git.

## Installation

To request to have GIT installed on your desktop from the NSD Application Catalogue:

- Navigate to [NSD](https://iservice.prv/eng/imit/nsd/index.shtml "NSD")
- From the **Application Catalogue**, click the **Commercial Software** tab, then select the *GIT* link and click *Install*.  
- The installation should take approximately 2 days.  
- Please be patient. NSD usually has a high volume of service tickets to deal with, so it may take more than 2 days before it's installed on your workstation.  

## Using Git Behind The Proxy

If you get the following error when using Git with your repository (ie, git clone, git push):

`Fatal: unable to access '<your-remote-branch-url>':  Failed to connect to github.com port 443: Timed out`  
This means your repository is not configured to bypass the network proxy.  
You'll need to update your git config with the network proxy configuration.  
For https: `https_proxy=<your-local-proxy>:80`

### To bypass the network proxy per Git session

`git config --local http.proxy <your-local-proxy>:80`  
This will bypass proxy as long as your Git session stays open. Once you close your Git session/window, your settings will disappear.

### To bypass the network proxy globally on your pc

`git config --global http.proxy <your-local-proxy>:80`  
This will bypass proxy for all of your local repositories. Your settings will be saved and applied every time you open your Git session/window.  

---

*Texte français:*

### Contexte

Cette page répond à certaines questions concernant les problèmes courants rencontrés lors de l'installation de Git et les erreurs lors de son utilisation.

<!-- markdownlint-disable MD024 -->
### Installation
<!-- markdownlint-enable MD024 -->

Pour demander l'installation de GIT sur votre poste de travail à partir du catalogue d'applications NSD :

- Accédez à [NSD](https://iservice.prv/eng/imit/nsd/index.shtml "NSD")
- Dans le **Catalogue d'applications**, cliquez sur l'onglet **Logiciels commerciaux**, puis sélectionnez le lien *GIT* et cliquez sur *Installer*.  
- L'installation devrait prendre environ 2 jours.  
- Veuillez faire preuve de patience. Le NSD gère généralement un volume élevé de billets de service, le délai d'installation sur votre poste de travail peut donc dépasser 2 jours.  

### Utiliser Git derrière le proxy

Si vous obtenez l'erreur suivante lors de l'utilisation de Git avec votre référentiel (ex. : git clone, git push) :

`Fatal: unable to access '<your-remote-branch-url>':  Failed to connect to github.com port 443: Timed out`  
Cela signifie que votre référentiel n'est pas configuré pour traverser le proxy réseau.  
Vous devrez mettre à jour votre configuration Git avec les paramètres du proxy réseau.  
Pour https : `https_proxy=<your-local-proxy>:80`

#### Pour contourner le proxy réseau par session Git

`git config --local http.proxy <your-local-proxy>:80`  
Cela contournera le proxy tant que votre session Git restera ouverte. Dès que vous fermerez votre session/fenêtre Git, vos paramètres disparaîtront.

#### Pour contourner le proxy réseau de manière globale sur votre PC

`git config --global http.proxy <your-local-proxy>:80`  
Cela contournera le proxy pour tous vos référentiels locaux. Vos paramètres seront enregistrés et appliqués chaque fois que vous ouvrirez votre session/fenêtre Git.

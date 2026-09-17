---
title: Artifactory as an Asset Management and Vulnerability Management Process
layout: default
category: Tools
summary: Demonstrating rational for the use of Artifactory to improve security and compliance of our applications
date: 2019-01-01
---

*Le texte français est donné à la suite.*

SADE has made available the community version of [Artifactory](https://jfrog.com/artifactory/) as a binary management tool for Java applications and libraries. Artifactory is a service that hosts our in house software libraries, as well as acts as a proxy in front of various software library (Maven) repositories.

## Recommendation

It is recommended that Java/Maven development teams with on premise development and build environments make use of the SADE installation of Artifactory. Artifactory will also act as a proxy for official package repositories such as Oracle and Maven Central, keeping the maven configuration on each development environment relatively simple.
Note that the current version of Artifactory currently does not support Nuget packages for .NET Framework/Core development. For .NET development, the recommendation is to use ADO's Nuget feed or, after properly making the binaries do not contain any sensitive information like encryption keys or passwords, can be hosted on nuget.org.  For more information: [ESDC nuget user Guide](nugetuserguide.html)

## Benefits

### Reduce Network Traffic Outside of our Network

Another big benefit of this is that since it acts as a proxy between these external binary repositories and our internal build and developer machines we should have less traffic going outside of our network.

### Integrates into CI/CD Pipelines

Artifactory also integrates into most major build automation tool and will help drive us towards DevSecOps in the department.

---

*Texte français:*

La SADE a mis à disposition la version communautaire d'[Artifactory](https://jfrog.com/artifactory/) comme outil de gestion des binaires pour les applications et bibliothèques Java. Artifactory est un service qui héberge nos bibliothèques logicielles internes et agit comme un mandataire (proxy) devant divers référentiels de bibliothèques logicielles (Maven).

### Recommandation

Il est recommandé aux équipes de développement Java/Maven disposant d'environnements de développement et de compilation sur place (sur site) d'utiliser l'installation SADE d'Artifactory. Artifactory agira également comme proxy pour les référentiels de paquets officiels tels qu'Oracle et Maven Central, gardant la configuration Maven relativement simple sur chaque environnement de développement.
Veuillez noter que la version actuelle d'Artifactory ne prend pas en charge les paquets Nuget pour le développement .NET Framework/Core. Pour le développement .NET, la recommandation est d'utiliser le flux Nuget d'ADO ou, après s'être assuré que les binaires ne contiennent aucune information sensible comme des clés de chiffrement ou des mots de passe, ils peuvent être hébergés sur nuget.org. Pour plus d'informations : [Guide d'utilisation Nuget d'EDSC](nugetuserguide.html)

### Avantages

#### Réduire le trafic réseau à l'extérieur de notre réseau

Un autre avantage majeur est que, puisqu'il agit comme intermédiaire entre ces référentiels binaires externes et nos machines internes de compilation et de développement, nous réduisons le volume de trafic sortant de notre réseau.

#### S'intègre aux pipelines CI/CD

Artifactory s'intègre également à la plupart des principaux outils d'automatisation de compilation et nous aidera à progresser vers le DevSecOps au sein du ministère.

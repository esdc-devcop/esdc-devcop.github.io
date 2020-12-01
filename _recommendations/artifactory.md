---
title: Artifactory as an Asset Management and Vulnerability Management Process
layout: default
category: Tools
summary: Demonstrating rational for the use of Artifactory to improve security and compliance of our applications
date: 2019-01-01
---

SADE has made available the community version of [Artifactory](https://jfrog.com/artifactory/) as a binary management tool for Java applications and libraries. Artifactory is a service that hosts our in house software libraries, as well as acts as a proxy in front of various software library (Maven) repositories.

## Recommendation

It is recommended that Java/Maven development teams with on premise development and build environments make use of the SADE installation of Artifactory.  Artifactory will also act as a proxy for official package repositories such as Oracle and Maven Central, keeping the maven configuration on each development environment relatively simple.
Note that the current version of Artifactory currently does not support Nuget packages for .NET Framework/Core development.  For .NET development, the recommendation is to use ADO's Nuget feed or, after properly making the binaries do not contain any sensitive information like encryption keys or passwords, can be hosted on nuget.org.  For more information: [ESDC nuget user Guide] (https://github.com/esdc-devcop/ESDC-Development-Setup/blob/master/nugetuserguide.md)

## Benefits

## Reduce Network Traffic Outside of our Network

Another big benefit of this is that since it acts as a proxy between these external binary repositories and our internal build and developer machines we should have less traffic going outside of our network.

## Integrates into CI/CD Pipelines

Artifactory also integrates into most major build automation tool and will help drive us towards DevSecOps in the department.

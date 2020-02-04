---
title: Artifactory as an Asset Management and Vulnerability Management Process
layout: default
category: Tools
summary: Demonstrating rational for the use of Artifactory to improve security and compliance of our applications
date: 2019-01-01
---

Shaun and I (Calvin Rodo) have come up with our first quick win in the security space, and something that should provide a bit of a benefit for the network as well.

SADE has procured [Artifactory Pro](https://jfrog.com/artifactory/) with X-Ray as a binary management tool. Artifactory is a service will host our in house software libraries, as well as sit as a proxy in front of various software library repositories. [X-Ray](https://jfrog.com/xray/) is a tool that will scan components for known vulnerabilities.

## Recommendation

The DX Team is recommending that we make use of Artifactory mandatory by leveraging it as a Proxy in front of official package repositories such as

NuGet for .Net apps

NPM/Bower for our JavaScript code

Maven for Java apps

## Benefits

## Vulnerability Scanning and Asset Management

This will allow us to have real time scanning for vulnerabilities in all of our application’s dependencies as well as handle asset management which will enable IITB to quickly identify which systems are affected when a high priority GC-CIRT is announced.

## Increases ITSG33 Compliance Posture across the Board

This would also help teams in raising their security compliance posture since this would satisfy ITSG33 control [RA-5 Vulnerability Scanning](https://www.cse-cst.gc.ca/en/node/265/html/24869#a314ra5) (1, 2, 6) and [CM-8 Information System Component Inventory](https://www.cse-cst.gc.ca/en/node/265/html/24869#a35cm8) (1, 2, 3, 5, 7).

## Reduce Compliance Burden from Development Team and Security Assessors

Ideally we would have IT-Sec agree that any system that leverages this system would not have to account for those security controls and so reduce the burden of compliance documentation on the development team. This could also be part of a bigger strategy to start putting in place tools and systems that can help us meet our security compliance objectives.

## Provides Benefits for Future Technology Usage

Artifactory can also be used as a container repository and so we would get this same benefit when we finally have access to those.

It also interfaces with several well known Software License scanning tools and can provide us insight into the licenses for the various libraries that we are integrating into our systems.

## Reduce Network Traffic Outside of our Network

Another big benefit of this is that since it acts as a proxy between these external binary repositories and our internal build and developer machines we should have less traffic going outside of our network. This will be crucial once we start using containers since windows containers can be several gigabytes in size and downloading these to the developer machine is a regular occurrence while debugging these apps.

## Integrates into CI/CD Pipelines

Artifactory also integrates into most major build automation tool and will help drive us towards DevSecOps in the department.

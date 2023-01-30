---
title: Git Support Questions - NSD Application Catalogue
layout: default
category: ESDC Process
summary: How to request a Git installation from the NSD Application catalogue
date: 2023-02-03
---


## Background

This page will answer some questions regarding common issues encountered with Git installation, and errors when using Git.

## Installation

To install Git, you can request it from here: [National Service Desk (NSD) Application Catalogue](http://srmis-sigdi-iagent.prv/AppPortal/en/Home/Index/2).  
The installation should take approximately 2 days. 
Please be patient. NSD usually has a high volume of service tickets to deal with, so it may take more than 2 days before it's installed on your workstation.  
Unfortunately, the SDS support team does not have permission to install Git. Service tickets regarding problems with installation will be redirected to NSD.

## Problems Using Git Workflow

If you get the following error when using Git workflow with your repository (ie, git clone, git push):
`Fatal: unable to access <your-remote-branch-url>:  Failed to connect to github.com port 443: Timed out`  
This means your repository is not configured to bypass the network proxy.  
You'll need to update your git config with the network proxy configuration.  
For https: `http://proxy.prv:80`  

### To bypass the network proxy per Git session

`git config --local http.proxy.prv:80`  
This will bypass proxy as long as your Git session stays open. Once you close your Git session/window, your settings will disappear.

### To bypass the network proxy globally on your pc

`git config --global http.proxy proxy.prv:80`
This will bypass proxy for all of your local repositories. Your settings will be saved and applied every time you open your Git session/window.  

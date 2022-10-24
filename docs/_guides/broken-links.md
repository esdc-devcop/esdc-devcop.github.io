---
title: Check for Broken Links on your Website
layout: default
category: Development
summary: Best Practices on how to prevent and detect broken links.
date: 2022-10-21
---

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


[Some random site](https://github.com/esdc-devcop/esdc-devcop.github.io/nowebsite)

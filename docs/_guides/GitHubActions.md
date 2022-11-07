---
title: GitHub Actions
layout: default
category: Pipelines
summary: A few notes on the GitHub Actions features
date: 2022/11/04
---

{{ page.summary }}

## Background

This page means to bring attention to a few features available to projects on GitHub.com for pipeline and code security needs.
Where in the past we needed to rely on external tools (like travis-ci or circle-ci), since 2018 GitHub has been ramping up its own pipeline features such as GitHub Actions, Dependabot and Code Scanning.

## GitHub Actions/Pipelines

Like Gitlab and Azure DevOps, you can have GitHub perform [Continuous Integration](cicd.html) pipelines to build your applications and run tests on every push/Pull Request/merge to catch problems early. Github Actions can also be used for Continuous Delivery to deploy your application to cloud services or binary repositories (such as Nuget or Maven central), either triggered manually or automatically when a release is created.  GitHub has action runners available supporting most commonly used programming languages on either Windows or Linux infrastructure.

To get started, you can simply go to the "Actions" tab in your GitHub repository.
GitHub has good documentation on [GitHub Actions](https://docs.github.com/en/actions), its [workflows](https://docs.github.com/en/actions/using-workflows/about-workflows) and their [syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions).

A few additional notes:

* If your pipeline needs secrets (API keys, passwords, etc) it is important that they not be present directly in your workflow script or anywhere else in your Git source repository.
  * If needed for deployment, you can create new "environments" for your project in Github and use them to store secrets.  Environments can also be used to add an approval step for deployment.
  * If secrets are needed for your CI or other generic builds, they can be stored as "repository secrets".
* Hosting your own Github action runner is **not** recommended.  Pipeline scripts run on branches before PR approval, which means anyone with the ability to create a Pull Request in your main repository can modify the pipeline script to run arbritrary code on the runner, which obviously is a security risk.  If absolutely necessary, self-hosted runners should run in a security-hardened and/or throw-away environment (like a docker container that gets recycled on every run)

## Dependabot and Code Scanning

Two other recommended features of GitHub are Dependabot and code scanning.

Dependabot can warn you of security vulnerabilities discovered in the libraries your project depends on.  It can also be used to periodically/automatically update your project's dependencies (when coupled with proper automated testing, auto-updating of dependencies is not as scary as it sounds).  Refer to [GitHub's Dependabot Documentation](https://docs.github.com/en/code-security/dependabot/) for details.

GitHub can also detect vulnerabilities in your own source code by setting up code scanning.  This, like dependabot alerts can be enabled in the "Security" tab of your repository.  Refer to [GitHub's Code Scanning Documentation](https://docs.github.com/code-security/secure-coding/about-code-scanning) for details.

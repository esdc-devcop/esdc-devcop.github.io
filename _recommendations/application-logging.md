---
title: Application Logging
layout: default
category: Coding Practices
summary: Defining the best practices of what, when and where to log in an application.
date: 2011-01-01
---

## Recommendation

**Scope of the recommendation:** Application Logging  
**Out of Scope:** IIS Logging, Auditing  
**Definition:** An application log is a file of events that are recorded by a software application. It contains errors, informational events and warnings. The format and content of an application log are determined by the developer of the software program, rather than the operating system.  
**Usage:** Logging/Recording application events to accommodate trouble shooting, provide health status (for the application) or preventing an issue from becoming a larger problem.  
**Alternative use:** Alerting technical groups of specific event when it occurs.  

## Top 5 Best Practices

* Use a standard and easily configurable logging framework.
[NLog](https://nlog-project.org/), [log4j 2](https://logging.apache.org/log4j/2.x/), [log4net](https://logging.apache.org/log4net/), [ELMAH](https://elmah.github.io/),  etc. allow faster config changes than hard-coded or proprietary frameworks.
* Use a logging framework with flexible output options.
View console logs in development and centralize prod logs without extra plugins or agents.
* Don’t let logging block your application.
Write logs asynchronously with a buffer or queue so the application can keep running.
* Offer a standard logging configuration for all teams.
Avoid chaos as the company grows. Start with a best practice and let teams deviate as needed.
* Don’t forget legacy application logs.
Find a way to send logs from legacy apps, which are frequently culprits in operational issues.

## What to log

Debug logs typically report application events that are useful when diagnosing a problem. Investigations into application failures need the “W” words: Who, What, When, Where and Why:

* Who was using the system when it failed?
* Where in the code did the application fail?
* What was the system doing when it failed?
* When did the failure occur?
* Why did the application fail?

### Suggested Log Types

* **Fatal:** An unexpected error/exception that compromises the ability of the application to function properly for further requests. (for example: “An exception occurred loading application initialization data, application will not be available”)
* **Error:** An error/exception in the execution that, while it may have been reported to the user and/or be benign, should be in the log for troubleshooting reasons. Also useful if the developer specifically wants an error to be logged to keep track of unusual situations. Validation/data entry errors would not normally be part of that. (for example: “Contacting backup server failed, saving transaction as pending.”)
* **Warning:** Not necessarily an error for the end user but an unusual situation/condition occurred (for example, “Contacting primary server failed, attempting to contact backup server”)
* **Information:** A normal situation/condition that is useful to have reported in the log (for example: “Lookup data loaded in cache, expiring in 12 hours”)
* **Debug:** Details the great lines of whatever functions executes. As the name suggests, is useful for debugging purposes (for example “Lookup data found in cache, skipping loading from file”)
* **Trace:** Like Debug, but at a much finer level of details. Messages at Trace level can often match the actually steps pseudo-code of the algorithm (for example: “Checking if user is of correct type”, “Setting up call to user service”)

## How to log

Avoid implementing any in-house logging mechanism. Existing library are very mature and offer a wide range of granularities and configuration options. We recommend the use of existing Logging libraries

* [NLog](https://nlog-project.org/) for the .NET development environments
* [SLF4J API](http://www.slf4j.org/) and [Log4j 2](https://logging.apache.org/log4j/2.x/) for the Java development environment
* [Elmah](https://elmah.github.io/) (Error Logging Module and Handlers for ASP.NET) - Open source

## When to Log

In all verticals using appropriate log levels based on the analysis needs

* Dev, INT, UAT, PRF: Higher granularity of logs
* Production - regular production situation: Lower granularity
* Production - Production issue analysis: Use a progressive increase in the granularity until issue is understood.

## Where to send log data

**At the moment there is no setup available to send our logs. We think that this could be a very good initiative for IITB.**

The relational databases are not the best place to send log data. Time-series databases (TSDB) are much more efficient at storing log data. Open-source TSDB such as [InfluxDB](https://www.influxdata.com/) are much better suited to storing log data than relational databases.

The [ELK stack](https://www.elastic.co/products) is a popular solution for log aggregation. ELK is an acronym that stands for Elasticsearch, Logstash, and Kibana.  
[Elasticsearch](https://www.elastic.co/products/elasticsearch) is a fast search engine that is used to find data in large datasets.  
[Logstash](https://www.elastic.co/products/logstash) is a data pipeline platform that will collect log data from many sources and feed it to a single persistence target.  
[Kibana](https://www.elastic.co/products/kibana) is a web-based data visualizer and search engine that integrates with Elasticsearch.  

### Log File Location

The following locations are set by SADE and are the departments standard

* For all applications in Non-Production:

```cmd
  E:\\WebLogs\[SADE-Vertical]\[application abbreviation]\[application sub folders if required]
```

* For all application in production:

```cmd
 E:\\WebLogs\\[application abbreviation]\[application sub folders if required]
```

**Note from SADE:** "If the log directory structure does not exist as stated above, the application should take the initiative to create it (on the fly). Understanding that the directory name and structure should be defined in the Web.Config"

## Log File Content

### File name

* 1 file per day: - Easier to archive; - Size stays small (easier to load, gives quick idea if you received more errors on a particular day)
* File name should include: the applications components name, date and server name (makes it easier when bringing those files to your local pc and knowing what they are)

Ex: APP_NAME_20190930_MLWB200.log

### Content Data will be determined by the requirement and need. We recommend including the following data elements for each log record:

* Date/Time
* Web Service Name
* Server Name
* Full Name
* AppDomainName
* Thread Name
* Caller
* Message
* «more details»

### Sensitive content

* Protected B data elements should not be part of the log record. If needed, Protected B data should be encrypted.

## How do you access the logs?

For apps hosted in Intranet, use Shared Folders to the log file location set by SADE.  
For apps hosted in OPS or DMZ (Internet), the accessibility of the log files is on request only. 2 options exist:  

* Open a ticket with the National Service Desk (NSD), to be processed by iNET, requesting a copy of the specific log file. This will provide a copy of the current file (up to the minute)).
* It is also possible to request a regular transfer (daily, twice daily, weekly, ...). This process must be configured with the EDS, in collaboration with iNET. This will provide log files from the previous day.

# Manage the secrets in GitLab - Keep them away from the source code

## Description

With GitLab, your code is opened to all the GoC, it means that your source control should not contains any secrets or confidential elements that could compromise the security. You'll have to scan and remove them from everywhere.

## Secret or not

Here is a cross-reference table of what is secret and what it not a secret.

| Examples                                                     | Is it secret? | Note | none |
| ------------------------------------------------------------ | ------------: | ---- | ---- |
| ConnectionString                                             |           yes |      | none |
| Service account username (i.e.: WSED)                        |           ??? |      | none |
| Web service url (i.e.: WSED)                                 |           ??? |      | none |
| Any password/token (Service account, Database, Access Token) |           yes |      | none |
| FTP server information (i.e.: username, url, etc)            |           ??? |      | none |
| Examples                                                     | Is it secret? |      | none |
| Examples                                                     | Is it secret? |      | none |
| Examples                                                     | Is it secret? |      | none |
| Examples                                                     | Is it secret? |      | none |

## Getting started with a cloned solution

When a developer jump into a new solution and clone it into his local machine, the first thing that he will want is to run it locally. If there is no secrets inside the configuration files, nothing will work. The application wont have access to any dependencies that needs credentials. In example, a database, a web service, an FTP server, etc.We have to find a good solution that allow a developer of a team to configure and launch an application easily much as possible.

Depending on your current type of project, here is some example of good practices to use.

### .NET solution (using web.config and app.config)

If you have to override the `appSettings` or the `connectionStrings` sections, read that [article](http://johnatten.com/2014/04/06/asp-net-mvc-keep-private-settings-out-of-source-control/)

Basically, let's say you have that `appSettings` section into your `web.config`.

```xml
<!-- [...] -->
<appSettings>
    <add key="account.password" value="mySuperPassword123!"/>
</appSettings>
<!-- [...] -->
```

You can create a specific config file that will override or append keys into the `web.config`.

1. Create a file named `appSettingsSecrets.config`;
2. Add an exception into the `.gitignore` file in order to ignore that file from the source control. (i.e.: `*Secrets.config` )
3. Into the `web.config` file, add an attribute called `file` then specify the file that you created.
4. (optional) Into the `web.config` file, replace the secrets value by a placeholder like `[TO BE REPLACED]`. It's just easier to understand.

It will look like that.

#### Web.config

```xml
<appSettings file="appSettingsSecrets.config">
    <add key="account.password" value="[TO BE REPLACED]"/>
</appSettings>
```

#### appSettingsSecrets.config

```xml
<appSettings>
    <add key="account.password" value="mySuperPassword123!"/>
</appSettings>
```

**Important notes :**
* Store your secrets configurations file on a secure repository that only your team have access. (Example : Private Sharepoint or Private Share drive)
* Exclude the file from the source code inside the `.gitignore` file.

## Inject the environment's secrets at the deployment pipeline

When you are using a deployment pipeline like `git-runner` or `TFS Build/Release`, you will have to implement a mechanism for injecting the secrets into your configuration files automatically.

# GitLab-Runner Instalation and Mainance

https://docs.gitlab.com/runner/

## Requirements

* Elevated permitions

## Installing

For installing on the ESDC coperate image follow the walkthough GitLab provides for [installing on Windows](tps://docs.gitlab.com/runner/install/windows.html).
_You should probably be downloading the `x86` binary_.

### Registering runners

You should register you runner to any project or group that you work on. 
If you don't have access to the runners settings ask the Owner of the Group or Maintainer of the Project you want to add it to, for the gitlab-ci token.

### Enviornment variables

You will likely need to add enviornment variables for your runner that can be used by any job running on it. 
The enviornment variables should point to things that might be diffren't on diffren't computers.

In order to add enviornment variables, edit the `config.toml` file where you installed the `gitlab-runner.exe` and add something simmilar to the following line under `executor` for each runner you have registered.
```toml
environment = ["NUGET_PATH=C:\\Git\\NuGet\\NuGet.exe", "MSBUILD_PATH=C:\\Program Files (x86)\\MSBuild\\14.0\\Bin\\msbuild.exe"]
```

You should also add a tag (`nuget` & `msbuild`) to the runner for each enviornment variable you add.
You may need to ask the Owner of the Group or Maintainer of the Project to update the tags on your runner though the GitLab UI.

### Running powershell scripts

You may need your runner to be able to execute powershell scripts. 
In order to do that you will have to adjust the settings of the user account you installed the runner with.
To do so, open a command prompt with elevated permitions and execute the following line (where _currentuser_ is the user account you installed the runner with).
```bash
set-executionpolicy remotesigned -scope currentuser
```
> You can view the settings for all users by running `get-executionpolicy`

## Maintance

_We are looking into the option of writing a script that would do all this for you._

### Logon as a service

Sometimes after rebooting your computer, the runner will turn off and you will need to give the user permisions to "logon as a service".
To do that:
* Run _Services_ with elevated permitions;
* Go to the _Properties_ of _gitlab-runner_ service
* Go to _Log On_ and re-ender your _Password_
* Click _OK_
* Click _Start_

### Updates

Check every few months for updates (put a reminder in your calendar) and follow the instructions.  
https://docs.gitlab.com/runner/install/windows.html#update 

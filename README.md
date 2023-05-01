# ESDC's Developer's Community of Practice

This repository is used as the main home for our community site.
<https://esdc-devcop.github.io/>

We publicize all our [guides](/guides/) on through separate repos, but are still available under the same site.
Here we keep information about [past sessions](/events/) and share [our recommendations](/tools/) for developers.

## Help Out

We welcome contributions from anybody.
Feel free to fork and submit a Pull Request (PR) to any of our repos.
If you are from ESDC ask to join as a Member.

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Working with this repository

### Requirements

To work with this project you will need node.js and npm installed. This project was created with:

* node.js v16.13.1
* npm 8.1.2

**For ESDC employees** Please read [ESDC Development Setup](https://github.com/esdc-devcop/ESDC-Development-Setup) if it's your first time connecting to github from your work computer.

#### Install dependencies

Clone this repository to a local directory.  
From the command line move to the cloned directory (this directory should contain the package.json file) and run:  
`$ npm install`
This command will read the package.json and install the npm dependencies to the *node_modules* directory.

#### Update submodules

This repository uses a Git submodule from [Centrally Deployed Templates Solution (CDTS) / Solution de gabarits à déploiement centralisé (SGDC)](https://github.com/wet-boew/cdts-sgdc) to validate all Urls on our site pages.
From the command line move to submodules directory and run:
`$ npm run update-submodules`
This command will pull in upstream changes from the remote submodule.

#### Builds

This project uses the [nodeJS](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) modules to get the dependencies needed, build, minify and deploy the final JavaScript modules.

## License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distributed under the [Open Government Licence - Canada](LICENSE).

The Canada wordmark and related graphics associated with this distribution are protected under trademark law and copyright law.
No permission is granted to use them outside the parameters of the Government of Canada's corporate identity program.
For more information, see [Federal identity requirements](https://www.canada.ca/en/treasury-board-secretariat/topics/government-communications/federal-identity-requirements.html).  

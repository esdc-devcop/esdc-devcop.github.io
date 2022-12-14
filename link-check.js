#!/usr/bin/env node

'use strict';
const {testFileLinks} = require('./submodules/cdts-sgdc/TestLinks');
//Validate Urls in these folders
const directories = ["./docs"];
//Exception lists: Urls listed are not validated
//Includes partial Urls that need credentials
//Included https://www.coalfire.com/ as an exception because axios 1.1.2 gives an error: incorrect header check
const exceptionSyntax = ["https://014gc.sharepoint.com", "http://dialogue", "https://dialogue", "https://architecture/", "http://srmis-sigdi-iagent.prv/", "https://jade-repos.intra.dev/", "https://ado.intra.dmz/", "http://web-stats.prv/", "https://www.coalfire.com/"];
//Includes non-HTTPS Urls internal to the dept 
const exceptionHTTP = ["http://dialogue", "https://dialogue", "http://srmis-sigdi-iagent.prv/", "http://web-stats.prv/"];
//Includes Urls that need credentials
const exceptionIntranet = ["https://jade-repos.intra.dev/", "https://web.microsoftstream.com/", "https://ado.intra.dmz/", "https://service.ssc-spc.gc.ca/", "https://gccode.ssc-spc.gc.ca"];

testFileLinks(directories, exceptionSyntax, exceptionHTTP, exceptionIntranet);


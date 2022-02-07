#!/usr/bin/env node

'use strict';
const {testFileLinks} = require('./node_modules/cdts/TestLinks');
//Validate Urls in these folders
const directories = ["./_data", "./_guides", "./_includes", "./_layouts", "./_pages", "./_recommendations", "./_references"];
//Exception lists: Urls listed are not validated
//Includes partial Urls that need credentials
const exceptionSyntax = ["https://014gc.sharepoint.com", "https://dialogue/", "https://architecture/", "http://dialogue/", "http://srmis-sigdi-iagent.prv/"];
//Includes non-HTTPS Urls internal to the dept 
const exceptionHTTP = ["http://dialogue/", "http://srmis-sigdi-iagent.prv/"];
//Includes Urls that need credentials
const exceptionIntranet = ["https://jade-repos.intra.dev/", "https://web.microsoftstream.com/", "https://ado.intra.dmz/ProjectCollection/"];

testFileLinks(directories, exceptionSyntax, exceptionHTTP, exceptionIntranet);


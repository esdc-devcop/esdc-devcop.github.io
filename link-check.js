#!/usr/bin/env node

'use strict';
const {testFileLinks} = require('./node_modules/cdts/TestLinks');
const directories = ["./_data", "./_guides", "./_includes", "./_layouts", "./_recommendations", "./_references"];
const exceptionSyntax = ["https://014gc.sharepoint.com", "https://dialogue/", "https://architecture/", "http://dialogue/", "http://srmis-sigdi-iagent.prv/"];
const exceptionHTTP = ["http://dialogue/", "http://srmis-sigdi-iagent.prv/"];
const exceptionIntranet = ["https://jade-repos.intra.dev/", "https://web.microsoftstream.com/video/"];

testFileLinks(directories, exceptionSyntax, exceptionHTTP, exceptionIntranet);


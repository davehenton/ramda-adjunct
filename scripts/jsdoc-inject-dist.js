'use strict';

const path = require('path');
const fs = require('fs');

const pkg = require(path.join(__dirname, '..', 'package.json')); // eslint-disable-line import/no-dynamic-require

const rootPath = path.join(__dirname, '..');
const raWebName = 'RA.web.min.js';
const ramdaName = 'ramda.min.js';
const ramdaDistPath = path.join(rootPath, 'node_modules', 'ramda', 'dist', ramdaName);
const pkgVersion = pkg.version;
const docsPath = path.join(rootPath, 'docs', 'ramda-adjunct', pkgVersion);
const docsScriptsPath = path.join(docsPath, 'scripts');
const distPath = path.join(rootPath, 'dist');
const raWebDistPath = path.join(distPath, raWebName);
const raWebDocsPath = path.join(docsScriptsPath, raWebName);
const ramdaDocsPath = path.join(docsScriptsPath, ramdaName);
const docsIndexFile = path.join(docsPath, 'index.html');

// Copy Ramda to docs/scripts.
fs.writeFileSync(ramdaDocsPath, fs.readFileSync(ramdaDistPath));

// Copy RA to docs/scripts.
fs.writeFileSync(raWebDocsPath, fs.readFileSync(raWebDistPath));

// Append RA into docs template.
const html = fs.readFileSync(docsIndexFile, 'utf-8');
const raHtmlFragment = `<script src="scripts/${raWebName}"></script>`;
const ramdaHtmlFragment = `<script src="scripts/${ramdaName}"></script>`;
const htmlWithRamdaAndRA = html.replace('</head>', `    ${ramdaHtmlFragment}\n    ${raHtmlFragment}\n</head>`);
fs.writeFileSync(docsIndexFile, htmlWithRamdaAndRA);

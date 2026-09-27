#!/usr/bin/node
const fs = require('fs');

const sourceA = process.argv[2];
const sourceB = process.argv[3];
const destination = process.argv[4];

const contentA = fs.readFileSync(sourceA, 'utf8');
const contentB = fs.readFileSync(sourceB, 'utf8');

fs.writeFileSync(destination, contentA + contentB);

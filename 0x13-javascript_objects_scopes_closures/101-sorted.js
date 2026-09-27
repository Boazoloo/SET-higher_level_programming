#!/usr/bin/node
const dict = require('./101-data.js').dict;

const newDict = Object.keys(dict).reduce((acc, userId) => {
  const occurrences = dict[userId];
  if (!acc[occurrences]) {
    acc[occurrences] = [];
  }
  acc[occurrences].push(userId);
  return acc;
}, {});

console.log(newDict);

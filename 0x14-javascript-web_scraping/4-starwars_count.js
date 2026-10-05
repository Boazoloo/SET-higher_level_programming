#!/usr/bin/node
const request = require('request');

const wedgeId = '18';

request.get(process.argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const film of films) {
      for (const character of film.characters) {
        if (character.split('/').filter(Boolean).pop() === wedgeId) {
          count++;
          break;
        }
      }
    }
    console.log(count);
  }
});

var google = require('googleapis');
var customsearch = google.customsearch('v1');
var params = {
  key: 'AIzaSyA3prI-NXnN8pbb6ml1-8ltmJlPgtSmlf8',
  cx: '005638436848923125128:llucr27b3qi',
  q: 'dog',
  searchType: 'image'
};

customsearch.cse.list(params, function (err, response) {
  if (err) {
    console.log('Encountered error', err);
  } else {
    console.log('Long url is', response);
  }
});

// "use static"
// let express = import('express')
//
// express.

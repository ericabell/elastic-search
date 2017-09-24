const elasticsearch = require('./elasticsearch');

elasticsearch.initIndex();

elasticsearch.addDocument({title: 'first doc', content: 'the content'})
  .then( (result) => {
    console.log(result);
  })
  .catch( (err) => {
    console.log(err);
  });

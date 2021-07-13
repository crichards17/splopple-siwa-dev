const router = require("express").Router();
const appleSignin = require('apple-signin-auth');

router.post('/', async (req, res) => {
  console.log(req.body);

  const code = req.body.code;

  const options = {
    clientID: process.env.CLIENT_ID,
    redirectUri: 'https://splopple-siwa-test.herokuapp.com/applelogin',
    clientSecret: process.env.CLIENT_SECRET
  }

  try {
    tokenResponse = await appleSignin.getAuthorizationToken(code, {
      clientID: 'com.n8blake.splopple-music',
      redirectUri: 'https://splopple-siwa-test.herokuapp.com/applelogin',
      clientSecret: 'eyJraWQiOiIyTUg1QjY5NFA1IiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJUNFM2UjNZMzlHIiwiaWF0IjoxNjI1OTQ2MzMxLCJleHAiOjE2NDE0OTgzMzEsImF1ZCI6Imh0dHBzOi8vYXBwbGVpZC5hcHBsZS5jb20iLCJzdWIiOiJjb20ubjhibGFrZS5zcGxvcHBsZS1tdXNpYyJ9.CiahQv9eR45-YBKACHgWoprP5-nlEm1ORKR2HlK-wqValWOMDGx78hYVxK8ID5hlBNjVYKMMpAfMqWZgMhkUQw'
    });
  } catch (err) {
    console.log(err);
  }
  
  res.json(tokenResponse);

});

module.exports = router;
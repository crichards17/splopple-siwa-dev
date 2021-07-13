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
    tokenResponse = await appleSignin.getAuthorizationToken(code, options);
  } catch (err) {
    console.log(err);
  }
  
  res.json(tokenResponse);

});

module.exports = router;
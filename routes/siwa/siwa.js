const router = require("express").Router();
const appleSignin = require('apple-signin-auth');

router.post('/', async (req, res) => {
  console.log(req.body);

  const code = req.body.code;

  console.log(code)
  
  const options = {
    clientID: process.env.CLIENT_ID,
    redirectUri: 'https://splopple-music.herokuapp.com/applelogin',
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
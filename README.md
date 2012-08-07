pocket2instapaper
=================

Adds your pocket reading list to instapaper. Requires that you have a Pocket
developer account and an instapaper account already.

Instructions
------------

1. Sign up for a developer account at Pocket [http://getpocket.com/api/signup](http://getpocket.com/api/signup)
2. Clone the repository with `git clone git@github.com:pspeter3/pocket2instapaper.git`
3. Create a config.json file with the following
        {
          "pocket": {
            "apikey": "YourPocketApiKey",
            "username": "YourPocketUsername",
            "password": "YourPocketPassword"
          },
          "instapaper": {
            "username": "YourInstapaperEmail",
            "password": "YourInstapaperPassword"
          }
        }
4. Run `node pocket2instapaper.js`
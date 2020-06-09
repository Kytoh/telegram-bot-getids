module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'LoliconChanGetIDs',
      script    : './index.js',
      watch     : true,
      env: {
          BOT_TOKEN: '1178801776:AAGUZ9CqXZOb7pXEp7aDJXLW9ModCgrtkAs'
      },
    },
  ],
};

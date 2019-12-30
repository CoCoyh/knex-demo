/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569489653035_9805';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.knex = {
    client: {
      dialect: 'mysql',
      connection: {
        host: 'rm-bp171b759ha99x5wfso.mysql.rds.aliyuncs.com',
        port: 3306,
        user: 'root',
        password: 'HPGQEhutFBUCi8ZE8JYgWDwZVhAHXWJx',
        database: 'k-test',
      },
      pool: { min: 0, max: 5 },
      aquireConnectionTimeout: 30000,
    },
    app: true,
    agent: false,
  }

  return {
    ...config,
    ...userConfig,
  };
};

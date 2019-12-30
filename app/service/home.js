const { Service } = require('egg');

class HomeService extends Service {
  async index() {
    const { ctx } = this;
    const res = await ctx.knex.insert({ title: 'Hello World' })
  }
};

module.exports = HomeService;
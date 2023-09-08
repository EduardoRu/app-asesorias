'use strict';

/**
 * A set of functions called "actions" for `loginalumno`
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::alumno.alumno' , ({ strapi }) => ({
  async exampleAction (ctx, next) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  async loginAction (ctx, next){
    const entries = await strapi.db.query('api::alumno.alumno').findMany({
      select: ['nombre']
    });

    return ctx.body = ctx.params;
  }
}));

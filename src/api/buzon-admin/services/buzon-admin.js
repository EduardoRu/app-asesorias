'use strict';

/**
 * buzon-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buzon-admin.buzon-admin');

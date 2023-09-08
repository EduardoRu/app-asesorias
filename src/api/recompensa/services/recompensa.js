'use strict';

/**
 * recompensa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recompensa.recompensa');

'use strict';

/**
 * homework service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homework.homework');

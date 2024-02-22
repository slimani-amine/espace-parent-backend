'use strict';

/**
 * exam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exam.exam');

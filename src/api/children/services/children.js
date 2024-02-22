'use strict';

/**
 * children service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::children.children');

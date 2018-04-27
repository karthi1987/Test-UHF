/*global APP_ENDPOINT_OVERRIDES*/
const _ = require( 'lodash' );

const base = APP_PATH;

const mockEndpoints = {
    //global
};

module.exports = _.defaults( {}, APP_ENDPOINT_OVERRIDES, mockEndpoints );

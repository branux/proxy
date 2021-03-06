'use strict';
/* global __dirname, process; */
let data = new Date();
let time = `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`;

/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    root: __dirname,
    logs: {
        provider: `/tmp/riobus/log/provider-${time}.log`,
        runtime: `/tmp/riobus/log/runtime-${time}.log`,
        server: `/tmp/riobus/log/server-${time}.log`
    },
    server: {
        ip: process.env.RIOBUS_SERVER_IP     || '0.0.0.0',
        port: process.env.RIOBUS_SERVER_PORT || 8080
    },
    database: {
        dbName: process.env.RIOBUS_DB_NAME  || 'nodejs',
        host: process.env.RIOBUS_DB_HOST    || 'localhost',
        port: process.env.RIOBUS_DB_PORT    || 27017,
        user: process.env.RIOBUS_DB_USER    || '',
        pass: process.env.RIOBUS_DB_PASS    || ''
    },
    analytics: {
        ua: process.env.RIOBUS_ANALYTICS_UA     || '',
        host: process.env.RIOBUS_ANALYTICS_HOST || ''
    },
    resources: [
        'bus/busResource',
        'busInfo/busInfoResource',
        'busStop/busStopResource',
        'register/registerResource',
        'itinerary/itineraryResource',
        'log/logResource',
        'main/mainResource',
        'report/reportResource'

    ]
};

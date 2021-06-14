const { merge } = require('webpack-merge');

const env = {
    NODE_ENV: 'development',
};

process.env = merge(process.env, env);

module.exports = {
    transpileDependencies: ['vuetify'],
};

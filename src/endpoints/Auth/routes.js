const api = module.parent.exports.api;

const login_v1 = require('./_v/v1/login');

api.post({ path: 'cecs/login' },
    login_v1
);
const api = module.parent.exports.api;
const { validateAppToken } = require('../../utils/security_utils');


const
    create_admin_v1 = require('./_v/v1/Admin/create_admin'),
    decode_admin_v1 = require('./_v/v1/Admin/decode_admin');

api.use(validateAppToken);


api.post({ path: 'cecs/user' },
    create_admin_v1
);

api.get({ path: 'cecs/decode_admin' },
    decode_admin_v1
);
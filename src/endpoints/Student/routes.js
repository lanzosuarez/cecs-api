const api = module.parent.exports.api;

const create_student_account_v1 = require('./_v/v1/create_student_account');

api.post({ path: '/cinfodroid/student_account_creation' },
create_student_account_v1
);
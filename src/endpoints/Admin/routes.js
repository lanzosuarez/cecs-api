const api = module.parent.exports.api;
const { validateAppToken } = require('../../utils/security_utils');
const create_student_account_v1 = require('./_v/v1/Student/_v/v1/create_student_account');
const create_instructor_account_v1 = require('./_v/v1/Instructor/_v/v1/create_instructor_account');

//Building
const create_building_information_v1 = require('./_v/v1/Building/_v/v1/add_building_information');
const get_building_information_v1 = require('./_v/v1/Building/_v/v1/get_building_information');
const update_building_information_v1 = require('./_v/v1/Building/_v/v1/update_building_information');
const remove_building_information_v1 = require('./_v/v1/Building/_v/v1/delete_building_information');


api.post({ path: '/cinfodroid/student_account_creation' },
validateAppToken, 
create_student_account_v1
);

api.post({ path: '/cinfodroid/instructor_account_creation' },
validateAppToken,
create_instructor_account_v1
);

//Building Endpoints
api.post({ path: '/cinfodroid/add_building_information' },
validateAppToken,
create_building_information_v1
);

api.get({ path: '/cinfodroid/get_building_information' },
validateAppToken,
get_building_information_v1
);

api.patch({ path: '/cinfodroid/update_building_information'},
validateAppToken,
update_building_information_v1
);

api.del({ path: '/cinfodroid/remove_building_information'},
validateAppToken,
remove_building_information_v1
);
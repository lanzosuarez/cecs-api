const api = module.parent.exports.api;
const { validateAppToken } = require('../../utils/security_utils');


const
    create_admin_v1 = require('./_v/v1/Admin/create_admin'),
    decode_admin_v1 = require('./_v/v1/Admin/decode_admin');

const
    create_student_v1 = require('./_v/v1/Student/create_student'),
    get_students_v1 = require('./_v/v1/Student/get_students'),
    update_student_v1 = require('./_v/v1/Student/update_student'),
    delete_student_v1 = require('./_v/v1/Student/delete_student'),

    //schedules
    add_schedule_v1 = require('./_v/v1/Student/add_schedule'),
    delete_schedule_v1 = require('./_v/v1/Student/delete_schedule'),
    update_schedule_v1 = require('./_v/v1/Student/update_schedule');

api.use(validateAppToken);


///admin
api.post({ path: 'cecs/user' },
    create_admin_v1
);

api.get({ path: 'cecs/decode_admin' },
    decode_admin_v1
);


//students
api.get({ path: 'cecs/student' },
    get_students_v1
);

api.post({ path: 'cecs/student' },
    create_student_v1
);

api.patch({ path: 'cecs/student/:_id' },
    update_student_v1
);

api.del({ path: 'cecs/student/:_id' },
    delete_student_v1
);

//student schedules

api.post({ path: 'cecs/student_schedule/:student_id' },
    add_schedule_v1
);

api.del({ path: 'cecs/student_schedule/:student_id/:schedule_id' },
    delete_schedule_v1
);


api.patch({ path: 'cecs/student_schedule/:student_id/:schedule_id' },
    update_schedule_v1
);


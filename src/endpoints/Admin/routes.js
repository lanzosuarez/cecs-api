const api = module.parent.exports.api;
const { validateAppToken } = require('../../utils/security_utils');


const
    create_admin_v1 = require('./_v/v1/Admin/create_admin'),
    get_admin_v1 = require('./_v/v1/Admin/get_admin'),
    decode_admin_v1 = require('./_v/v1/Admin/decode_admin'),
    update_admin_v1 = require('./_v/v1/Admin/update_admin'),
    forgot_password_v1 = require('./_v/v1/Admin/forgot_password');

const
    create_student_v1 = require('./_v/v1/Student/create_student'),
    get_students_v1 = require('./_v/v1/Student/get_students'),
    update_student_v1 = require('./_v/v1/Student/update_student'),
    delete_student_v1 = require('./_v/v1/Student/delete_student'),

    //schedules
    add_schedule_v1 = require('./_v/v1/Student/add_schedule'),
    delete_schedule_v1 = require('./_v/v1/Student/delete_schedule'),
    update_schedule_v1 = require('./_v/v1/Student/update_schedule'),
    bulk_add_schedule_v1 = require('./_v/v1/Student/bulk_add_schedule'),
    bulk_del_schedule_v1 = require('./_v/v1/Student/bulk_del_schedule'),
    bulk_get_schedules_v1 = require('./_v/v1/Student/bulk_get_schedules');



const
    create_instructor_v1 = require('./_v/v1/Instructor/create_instructor'),
    get_instructors_v1 = require('./_v/v1/Instructor/get_instructors'),
    update_instructor_v1 = require('./_v/v1/Instructor/update_instructor'),
    delete_instructor_v1 = require('./_v/v1/Instructor/delete_instructor'),

    //schedules
    add_schedule_instructor_v1 = require('./_v/v1/Instructor/add_schedule'),
    delete_schedule_instructor_v1 = require('./_v/v1/Instructor/delete_schedule'),
    update_schedule_instructor_v1 = require('./_v/v1/Instructor/update_schedule');

const
    get_classes_v1 = require('./_v/v1/Student/get_classes');

const
    get_class_schedules = require('./_v/v1/Student/get_schedules');


//bot api

api.get({ path: 'cecs/bot/:class_year/:class_section/:class_course' },
    get_class_schedules
);

api.patch({ path: 'cecs/forgot_password' },
    forgot_password_v1
);

api.use(validateAppToken);

///admin

api.get({ path: 'cecs/user' },
    get_admin_v1
);
api.post({ path: 'cecs/user' },
    create_admin_v1
);

api.patch({ path: 'cecs/user' },
    update_admin_v1
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

api.get({ path: 'cecs/student_schedule/bulk/:year/:section/:college/:course' },
    bulk_get_schedules_v1
);

api.post({ path: 'cecs/student_schedule/bulk/:year/:section/:college/:course' },
    bulk_add_schedule_v1
);

api.patch({ path: 'cecs/student_schedule/bulk/:year/:section/:college/:course' },
    bulk_del_schedule_v1
);


//classes

api.get({ path: 'cecs/classes' },
    get_classes_v1
);


//instructor
api.get({ path: 'cecs/instructor' },
    get_instructors_v1
);

api.post({ path: 'cecs/instructor' },
    create_instructor_v1
);

api.patch({ path: 'cecs/instructor/:_id' },
    update_instructor_v1
);

api.del({ path: 'cecs/instructor/:_id' },
    delete_instructor_v1
);

//student schedules

api.post({ path: 'cecs/instructor_schedule/:instructor_id' },
    add_schedule_instructor_v1
);

api.del({ path: 'cecs/instructor_schedule/:instructor_id/:schedule_id' },
    delete_schedule_instructor_v1
);

api.patch({ path: 'cecs/instructor_schedule/:instructor_id/:schedule_id' },
    update_schedule_instructor_v1
);

const
    Student = require('../../../../../models/students'),
    { Types: { ObjectId } } = require('mongoose'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { student_id, schedule_id } = req.params;

    const
        getStudent = () => {
            return Student.findById(student_id)
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        deleteSchedule = (student) => {

            const index =
                student.schedules.findIndex(sched => {
                    return sched._id.toString() === schedule_id;
                });

            student.schedules.splice(0, 1);
            return student;
        },

        saveStudent = (student) => {
            return student.save()
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            var student = await getStudent(),
                student = deleteSchedule(student);
            await saveStudent(student);

            sendSuccess(
                res,
                {},
                ""
            );

        } catch (e) {
            console.log(e);
            sendError(res, e, "");
        }
    }

    main();

};
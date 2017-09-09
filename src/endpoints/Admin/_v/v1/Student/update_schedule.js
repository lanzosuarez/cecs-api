const
    Student = require('../../../../../models/students'),
    { Types: { ObjectId } } = require('mongoose'),
    {
        sendError,
        sendSuccess,
        updateEntity
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

        updateSchedule = (student) => {

            const schedule =
                student.schedules.find(sched => {
                    return sched._id.toString() === schedule_id;
                });

            updateEntity(schedule, req.body);
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
                student = updateSchedule(student);
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
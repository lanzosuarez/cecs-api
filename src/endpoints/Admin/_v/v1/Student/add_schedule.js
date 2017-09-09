const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { student_id } = req.params;

    const
        findStudent = () => {
            return Student.findById(student_id)
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        addSchedule = (student) => {
            student.schedules
                .push(req.body);

            return student
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
            var
                student = await findStudent(),
                student = addSchedule(student),
                student = await saveStudent(student);

            sendSuccess(
                res,
                student.schedules,
                ""
            );

        } catch (e) {
            sendError(res, e, "Error fetching Student Information");
        }
    }

    main();

};
const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { _id } = req.params;

    const
        getStudent = () => {
            return Student.findById(_id)
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        deleteStudent = (student) => {
            return student.remove()
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                })
        }

    async function main() {
        try {
            const student = await getStudent();
            await deleteStudent(student);

            sendSuccess(
                res,
                {},
                ""
            );

        } catch (e) {
            sendError(res, e, "");
        }
    }

    main();

};
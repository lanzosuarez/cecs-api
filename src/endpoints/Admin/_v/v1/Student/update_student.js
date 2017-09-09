const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
        updateEntity
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

        updateStudent = (student) => {
            return updateEntity(student, req.body);
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
            const
                student = await getStudent(),
                updatedStudent = updateStudent(student);

            await saveStudent(updatedStudent);

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
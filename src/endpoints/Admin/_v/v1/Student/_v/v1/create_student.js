const
    Student = require('../../../../../models/student'),
    { CODE_NOT_FOUND } = require('../../../../../globals/globals'),
    { hashPassword } = require('../../../../../utils/security_utils'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        createStudent = () => {
            const newStudent = new Student(req.body);
            return newStudent;
        },

        saveStudent = (student) => {
            return student.save().
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });

        };


    async function main() {
        try {
            var student = createStudent(),
                newStudent = await saveStudent(Student);

            sendSuccess(
                res,
                {},
                "Student information successfully added"
            );

        } catch (e) {
            console.log(e);
            sendError(res, e, "Error creating Student Information");
        }
    }

    main();

};
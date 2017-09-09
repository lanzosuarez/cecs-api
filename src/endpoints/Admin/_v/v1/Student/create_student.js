const
    Student = require('../../../../../models/students'),
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
                newStudent = await saveStudent(student);

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
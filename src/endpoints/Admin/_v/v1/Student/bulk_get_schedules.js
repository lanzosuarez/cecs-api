const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        { year, section, college, course } = req.params;

    const
        getStudent = () => {
            return Student.findOne({
                year,
                section,
                course,
                college
            })
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        }

    async function main() {
        try {
            var student = await getStudent();
            if (student !== null) {
                sendSuccess(
                    res,
                    student.schedules,
                    ""
                );
            } else {
                sendSuccess(
                    res,
                    [],
                    ""
                );
            }

        } catch (e) {
            console.log(e);
            sendError(res, e, "Error fetching Student Information");
        }
    }

    main();

};
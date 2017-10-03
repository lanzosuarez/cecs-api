const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { class_year, class_section, class_course } = req.params;

    const
        getStudent = () => {
            return Student.findOne({
                year: class_year,
                section: class_section,
                course: class_course
            })
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        }

    async function main() {
        console.log("dsadsa");
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
                    null,
                    ""
                );
            }


        } catch (e) {
            sendError(res, e, "Error fetching Student Information");
        }
    }

    main();

};
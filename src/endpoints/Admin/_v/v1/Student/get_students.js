const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        getStudents = () => {
            return Student.find()
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        }

    async function main() {
        try {
            var students = await getStudents();

            sendSuccess(
                res,
                students,
                ""
            );

        } catch (e) {
            sendError(res, e, "Error fetching Student Information");
        }
    }

    main();

};
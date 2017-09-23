const
    Instructor = require('../../../../../models/instructor'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        getinstructors = () => {
            return Instructor.find()
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        }

    async function main() {
        try {
            var instructors = await getinstructors();

            sendSuccess(
                res,
                instructors,
                ""
            );

        } catch (e) {
            sendError(res, e, "Error fetching Student Information");
        }
    }

    main();

};
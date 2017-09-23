const
    Instructor = require('../../../../../models/instructor'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { _id } = req.params;

    const
        getinstructor = () => {
            return Instructor.findById(_id)
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        deleteinstructor = (instructor) => {
            return instructor.remove()
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                })
        }

    async function main() {
        try {
            const instructor = await getinstructor();
            await deleteinstructor(instructor);

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
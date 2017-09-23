const
    Instructor = require('../../../../../models/instructor'),
    {
        sendError,
        sendSuccess,
        updateEntity
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

        updateinstructor = (instructor) => {
            return updateEntity(instructor, req.body);
        },

        saveinstructor = (instructor) => {
            return instructor.save()
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            const
                instructor = await getinstructor(),
                updatedinstructor = updateinstructor(instructor);

            await saveinstructor(updatedinstructor);

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
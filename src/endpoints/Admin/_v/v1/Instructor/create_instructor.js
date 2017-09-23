const
    Instructor = require('../../../../../models/instructor'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        createinsturctor = () => {
            const newinsturctor = new Instructor(req.body);
            return newinsturctor;
        },

        saveinsturctor = (insturctor) => {
            return insturctor.save().
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            var insturctor = createinsturctor(),
                newinsturctor = await saveinsturctor(insturctor);

            sendSuccess(
                res,
                {},
                "insturctor information successfully added"
            );

        } catch (e) {
            console.log(e);
            sendError(res, e, "Error creating insturctor Information");
        }
    }

    main();

};
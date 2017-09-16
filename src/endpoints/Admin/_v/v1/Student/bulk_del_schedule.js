const
    Student = require('../../../../../models/students'),
    {
        endError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        { year, section } = req.params,
        { subject } = req.body;

    const

        findAndDeleteSchedule = () => {
            return Student.update(
                {
                    year,
                    section
                },
                { $pull: 
                    { 
                        schedules: { 
                            _id: subject
                        } 
                    } 
                },
                { 
                    multi: true 
                }
            )
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };


    async function main() {
        try {
            await findAndDeleteSchedule();

            sendSuccess(
                res,
                {},
                ""
            );

        } catch (e) {
            console.log(e);
            sendError(res, e, "Error fetching Student Information");
        }
    }

    main();

};
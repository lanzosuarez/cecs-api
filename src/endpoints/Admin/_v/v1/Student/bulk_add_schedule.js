const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        { year, section, college, course } = req.params,
        { schedules } = req.body;


    const

        findAndAddSchedule = () => {
            return Student.update(
                {
                    year,
                    section,
                    college,
                    course
                },
                {
                    $push: {
                        schedules: {
                            $each: schedules
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
            await findAndAddSchedule();

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
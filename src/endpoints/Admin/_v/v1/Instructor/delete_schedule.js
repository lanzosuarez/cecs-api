const
    Instructor = require('../../../../../models/instructor'),
    { Types: { ObjectId } } = require('mongoose'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { instructor_id, schedule_id } = req.params;

    const
        getinstructor = () => {
            return Instructor.findById(instructor_id)
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        deleteSchedule = (instructor) => {

            const index =
                instructor.schedules.findIndex(sched => {
                    return sched._id.toString() === schedule_id;
                });

            instructor.schedules.splice(0, 1);
            return instructor;
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
            var instructor = await getinstructor(),
                instructor = deleteSchedule(instructor);
            await saveinstructor(instructor);

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
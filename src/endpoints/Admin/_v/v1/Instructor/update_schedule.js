const
    Instructor = require('../../../../../models/instructor'),
    { Types: { ObjectId } } = require('mongoose'),
    {
        sendError,
        sendSuccess,
        updateEntity
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

        updateSchedule = (instructor) => {

            const schedule =
                instructor.schedules.find(sched => {
                    return sched._id.toString() === schedule_id;
                });

            updateEntity(schedule, req.body);
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
        console.log(instructor_id);
        try {
            var instructor = await getinstructor(),
                instructor = updateSchedule(instructor);
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
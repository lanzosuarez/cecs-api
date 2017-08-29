const
    Schedule = require('../../../../models/schedule_instructor'),
    { CODE_NOT_FOUND } = require('../../../../globals/globals'),
    { hashPassword } = require('../../../../utils/security_utils'),
    {
    sendError,
        sendSuccess,
} = require('../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        createInstructorSchedule = () => {
            const newBuilding = new Building(req.body);
            return newBuilding;
        },

        checkScheduleConflict = (schedule) => {
            return Schedule.findOne().
                then(data => {
                    return data;
                }).catch(err => {
                    return err;
                });
        },

        saveInstructorSchedule = (schedule) => {
            return schedule.save().
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            var schedule = createInstructorSchedule(),
                isExist = await checkScheduleConflict(schedule);

            if (isExist != null) {
                sendSuccess(
                    res,
                    isExist,
                    "There is a conflict with this schedule"
                );
            }
            else {
                var instructorSchedule = await saveInstructorSchedule(schedule);
                sendSuccess(
                    res,
                    instructorSchedule,
                    "Instructor schedule successfully added"
                );
            }

        } catch (e) {
            console.log(e);
            sendError(res, e, "Error creating Instructor Schedule");
        }
    }

    main();

};
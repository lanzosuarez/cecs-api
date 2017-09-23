const
    Instructor = require('../../../../../models/instructor'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { instructor_id } = req.params;

    const
        findinstructor = () => {
            return Instructor.findById(instructor_id)
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        addSchedule = (instructor) => {
            instructor.schedules
                .push(req.body);

            return instructor
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
            var
                instructor = await findinstructor(),
                instructor = addSchedule(instructor),
                instructor = await saveinstructor(instructor);

            sendSuccess(
                res,
                instructor.schedules,
                ""
            );

        } catch (e) {
            sendError(res, e, "Error fetching instructor Information");
        }
    }

    main();

};
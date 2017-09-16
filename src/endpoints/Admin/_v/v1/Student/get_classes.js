const
    Student = require('../../../../../models/students'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        getDistinctYears = () => {
            return Student.distinct('year')
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },


        getDistinctSections = () => {
            return Student.distinct('section')
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        getDistinctCourses = () => {
            return Student.distinct('course')
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        getDistinctColleges = () => {
            return Student.distinct('college')
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            const
                years = await getDistinctYears(),
                sections = await getDistinctSections(),
                courses = await getDistinctCourses(),
                colleges = await getDistinctColleges();


            sendSuccess(
                res,
                {
                    courses,
                    colleges,
                    years,
                    sections
                },
                ""
            );

        } catch (e) {
            console.log(e);
            sendError(res, e, "");
        }
    }

    main();

};
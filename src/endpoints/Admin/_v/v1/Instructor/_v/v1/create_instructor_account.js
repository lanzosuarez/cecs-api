const
Student = require('../../../../../../../models/instructor'),
{ CODE_NOT_FOUND } = require('../../../../../../../globals/globals'),
{ hashPassword } = require('../../../../../../../utils/security_utils'),
{
    sendError,
    sendSuccess,
} = require('../../../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    // console.log(req.body);
    // return;

const
    createInstructorAccount = () => {
        const newInstructor = new Student(req.body);
        return newInstructor;
    },

    saveInstructorAccount = (instructor) => {
        return hashPassword(instructor.instructor_information.middle_name).
            then(data => {
                instructor.username = instructor.instructor_information.emp_id;
                instructor.password = data;
                return instructor.save().
                    then(data => {
                        return data;
                    }).catch(err => {
                        throw err;
                    });
                    
            }).catch(err => {
                throw err;
            })
    };

async function main() {
    try {
        var instructor = createInstructorAccount(),
            newInstructor = await saveInstructorAccount(instructor);

        sendSuccess(
            res,
            newInstructor,
            "Instructor account successfully created"
        );

    } catch (e) {
        console.log(e);
        sendError(res, e, "Error creating Instructor account");
    }
}

main();

};
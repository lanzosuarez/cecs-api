const
User = require('../../../../models/students'),
{ CODE_NOT_FOUND } = require('../../../../globals/globals'),
{ hashPassword } = require('../../../../utils/security_utils'),
{
    sendError,
    sendSuccess,
} = require('../../../../utils/helper_utils');

module.exports = (req, res, next) => {

const
    createStudentAccount = () => {
        const newStudent = new User(req.body);
        return newStudent;
    },

    saveStudentAccount = (student) => {
        return hashPassword(student.last_name).
            then(data => {
                student.password = data;
                return student.save().
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
        var student = createStudentAccount(),
            newStudent = await saveStudentAccount(student);

        sendSuccess(
            res,
            newStudent,
            "Student account successfully created"
        );

    } catch (e) {
        console.log(e);
        sendError(res, e, "Error creating student account");
    }
}

main();

};
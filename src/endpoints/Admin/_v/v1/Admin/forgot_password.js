const
    Admin = require('../../../../../models/admin'),
    { sendEmail } = require('../../../../../utils/email_utils'),
    {
        COMPANY_EMAIL,
        CODE_NOT_FOUND
    } = require('../../../../../globals/globals'),
    {
        generateRandomPassword,
        hashPassword
    } = require('../../../../../utils/security_utils'),
    {
        forgotPassTemplate,
        sendSuccess,
        sendResponse
    } = require('../../../../../utils/helper_utils');



module.exports = (req, res, next) => {

    const { email } = req.body;

    const
        getadmin = () => {
            return Admin.findOne({ email }).
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        updateadmin = (admin, new_password) => {
            admin.password = new_password;
            return admin;
        },

        sendNewPassEmail = (firstname, newPassword) => {
            sendEmail(
                COMPANY_EMAIL,
                email,
                "New Password",
                forgotPassTemplate(firstname, newPassword)
            );
        },

        saveEntity = (document) => {
            return document.save().
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };


    async function main() {
        console.log("here");
        try {
            var admin = await getadmin();
            if (admin !== null) {
                var generatedPass = generateRandomPassword(6),
                    newPass = await hashPassword(generatedPass);

                await saveEntity(updateadmin(admin, newPass));
                await sendNewPassEmail(admin.firstname, generatedPass);

                sendSuccess(
                    res,
                    {},
                    "Your new password has been sent to your email"
                );
            } else {
                sendResponse(
                    res,
                    404,
                    CODE_NOT_FOUND,
                    "No account associated with this email has been found"
                );
            }
        } catch (e) {
            console.log(e);
        }
    };

    main();

};
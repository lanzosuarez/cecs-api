const
    Admin = require('../../../../../models/admin'),
    {
        CODE_NOT_FOUND,
        CODE_CONFLICT,
        COMPANY_EMAIL
    } = require('../../../../../globals/globals'),
    {
        hashPassword,
        decodeToken
    } = require('../../../../../utils/security_utils'),
    {
        sendError,
        sendSuccess,
        sendResponse,
        initialPassTemplate
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { username } = req.body;

    const

        findUser = () => {
            return Admin.findOne({ username })
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },


        createUser = () => {
            const newUser = new Admin(req.body);
            return newUser;
        },

        saveUser = (user) => {
            return hashPassword(user.password).
                then(data => {
                    user.password = data;
                    return user.save().
                        then(data => {
                            return data;
                        }).catch(err => {
                            throw err;
                        });
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            const
                existing = await findUser();

            if (existing === null) {
                const user = createUser(),
                    newUser = await saveUser(user);

                sendSuccess(
                    res,
                    {},
                    "User successfully created"
                );
            } else {
                sendResponse(res, 409, CODE_CONFLICT, "User already existed");
            }

        } catch (e) {
            console.log(e);
            sendError(res, e, "Error creaing user");
        }
    }

    main();

};
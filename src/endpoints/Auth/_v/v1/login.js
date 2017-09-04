const
    Admin = require('../../../../models/admin'),
    {
        generateAppAccessToken,
        comparePasswords
    } = require('../../../../utils/security_utils'),
    {
        CODE_AUTH_ERROR,
        MSG_CONFLICT_ERROR
    } = require('../../../../globals/globals'),
    {
        sendError,
        sendSuccess,
        sendResponse
    } = require('../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { username, password } = req.body,

        comparePws = (storedPassword) => {
            return comparePasswords(password, storedPassword).
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        generateToken = (user) => {
            return generateAppAccessToken(getPayload(user));
        },

        sendData = (data) => {
            sendSuccess(res, data, "Login Succesfull");
        },

        getPayload = (user) => {

            const {
                username,
                _id,
                firstname,
                middlename,
                lastname,
                email
                } = user;

            var payload = {
                _id,
                username,
                firstname,
                lastname,
                middlename,
                email
            };

            return payload;
        },

        //login
        login = () => {
            console.log(username, password);

            return Admin.findOne({ username: username }).
                then(user => {
                    return user;
                }).catch(err => {
                    throw err;
                });
        },


        authError = (res) => {
            sendResponse(
                res,
                401,
                CODE_AUTH_ERROR,
                "Invalid username/password"
            );
        };

    async function main() {
        try {
            var user = await login();
            console.log(user);
            if (user !== null) {
                var authenticate = await comparePws(user.password);
                if (authenticate === true) {
                    var token = generateToken(user);
                    // payload = getPayload(user);
                    sendData({
                        token
                    });
                } else {
                    authError(res);
                }
            } else {
                authError(res);
            }
        } catch (err) {
            console.log(err);
            sendError(res, err);
        }
    };
    main();
}
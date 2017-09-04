const
    Admin = require('../../../../../models/admin'),
    { decodeToken } = require('../../../../../utils/security_utils'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');


module.exports = (req, res, next) => {

    const { _id } = decodeToken(req.headers['x-access-token']);

    const

        getUser = () => {
            return Admin.findById(_id).
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            var user = await getUser();
            if (user !== null) {
                sendSuccess(res, {}, "");
            } else {
                sendResponse(
                    res,
                    404,
                    CODE_NOT_FOUND,
                    "User not found"
                );
            }

        } catch (e) {
            console.log(e);
            sendError(res, e, "An error hapened while fetching the user data");
        }
    }

    main();
};
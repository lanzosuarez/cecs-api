const
    Admin = require('../../../../../models/admin'),
    { decodeToken } = require('../../../../../utils/security_utils'),
    {
    sendError,
        sendSuccess,
        updateEntity
} = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const { _id } = decodeToken(req.headers['x-access-token']);


    const
        getadmin = () => {
            return Admin.findById(_id)
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        },

        updateadmin = (admin) => {
            return updateEntity(admin, req.body);
        },

        saveadmin = (admin) => {
            return admin.save()
                .then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });
        };

    async function main() {
        try {
            const
                admin = await getadmin(),
                updatedadmin = updateadmin(admin);

            await saveadmin(updatedadmin);

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
const

    Building = require('../../../../../models/building'),
    { CODE_NOT_FOUND } = require('../../../../../globals/globals'),
    { hashPassword } = require('../../../../../utils/security_utils'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        removeBuildingInformation = () => {
            var {
                _id
            } = req.params;

            return Building.findByIdAndRemove({ _id })
            then(data => {
                return data;
            }).catch(err => {
                throw err;
            });
        };

    async function main() {
        try {F
            var building = await removeBuildingInformation();
            sendSuccess('res', {}, "Building Successfully created");
        } catch (e) {
            sendError(res, e, "An error while creating building");
        }
    }

    main();

};
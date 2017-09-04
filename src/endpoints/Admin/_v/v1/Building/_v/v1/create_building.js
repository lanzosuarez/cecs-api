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
        createBuildingInformation = () => {
            const newBuilding = new Building(req.body);
            return newBuilding;
        },

        saveBuildingInformation = (building) => {
            return building.save().
                then(data => {
                    return data;
                }).catch(err => {
                    throw err;
                });

        };


    async function main() {
        try {
            var building = createBuildingInformation(),
                newBuilding = await saveBuildingInformation(building);

            sendSuccess(
                res,
                newBuilding,
                "Building information successfully added"
            );

        } catch (e) {
            console.log(e);
            sendError(res, e, "Error creating Building Information");
        }
    }

    main();

};
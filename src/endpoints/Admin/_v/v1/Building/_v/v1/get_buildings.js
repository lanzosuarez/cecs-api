const
    Building = require('../../../../../models/building'),
    {
        sendError,
        sendSuccess,
    } = require('../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

    const
        getBuildingInformation = () => {
            return Building.find().
                then(data => {
                    return data;
                }).catch(err => {
                    return err;
                });
        };

    async function main() {
        try {
            var building = await getBuildingInformation();

            sendSuccess(
                res,
                building,
                "Building information successfully fetched"
            );

        } catch (e) {
            //console.log(e);
            sendError(res, e, "Error fetching Building Information");
        }
    }

    main();

};
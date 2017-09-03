const
Building = require('../../../../../../../models/building'),
{ CODE_NOT_FOUND } = require('../../../../../../../globals/globals'),
{ hashPassword } = require('../../../../../../../utils/security_utils'),
{
    sendError,
    sendSuccess,
} = require('../../../../../../../utils/helper_utils');

module.exports = (req, res, next) => {

const
    getBuildingInformation = () => {
        return Building.find().
        then(data => {
            console.log('Data : ', data);
            return data;
        }).catch(err => {
            return err;
        });
    };

async function main() {
    try{
        var building = await getBuildingInformation();
        //console.log(building);
        sendSuccess(
            res,
            building,
            "Building information successfully fetched"
        );

    }catch(e) {
        //console.log(e);
        sendError(res, e, "Error fetching Building Information");
    }
}

main();

};
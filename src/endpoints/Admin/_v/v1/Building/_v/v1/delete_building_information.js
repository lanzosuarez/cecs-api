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
    removeBuildingInformation = () => {
        var {
            _id
        } = req.params;

        return Building.findByIdAndRemove({_id})
        then(data => {
            return data;
        }).catch(err => {
            throw err;
        });
    };
    
    async function main() {
        //kulang pa nung user deductables
        try {
            var building = await removeBuildingInformation();

            res.send(200, {code: "Success", msg : "Building Information successfully deleted", building});
        } catch (e) {
            res.send(500, {code: "Failed", msg : "An error happened while deleting building information", e});
        }
    }

    main ();

};
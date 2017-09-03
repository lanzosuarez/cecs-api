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
        var {
            _id
        } = req.params;

        return Building.findById({_id})
        then(data => {
            return data;
        }).catch(err => {
            throw err;
        });
    },

    updateBuildingInformation = (building) => {
        Object.keys(req.body).
        forEach(key => {
            building[key] = req.body[key];
        });
    return building;
    },

    saveBuilding = (building) => {
        var newBuilding = new Building(building);
        return newBuilding.save().
        then(data => {
            return data;
        }).catch(err => {
            throw err;
        });
    }
    
    async function main() {
        //kulang pa nung user deductables
        try {
            var building = await getBuildingInformation();
            var building_update = await updateBuildingInformation(building);
            var new_building = await saveBuilding(building_update);

            res.send(200, {code: "Success", msg : "Building Information successfully updated", new_building});
        } catch (e) {
            res.send(500, {code: "Failed", msg : "An error happened while updating building information", e});
        }
    }

    main ();

};
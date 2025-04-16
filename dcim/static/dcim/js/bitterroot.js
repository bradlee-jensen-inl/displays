/* global
    $
*/
/* exported
    display
*/

let rackWidth = "200px";
let rackHeight = "500px";

function display(rackSide, data) {
    var unit;

    Object.keys(data['dcim_data']).forEach(function(row_num) {
        for(unit = 48; unit > 0; unit--) {
            rackUnitCountArray.push(unit);
            $(`#unitcount${row_num}`).append(unit + "<br>");
            $(`#unitcount${row_num}`).css("font-size", "16.6px");
        }

        //Row(numRacks, clusterName, information)
        let row = new Row(8, "Bitterroot", "something here");

        Object.keys(data['dcim_data'][row_num]).forEach(function(rack_num) {
            let rack = data['dcim_data'][row_num][rack_num];

            //Rack(rowNumber, rackNumber, rackTotalUnits, unitLeftpx, rackWidthpx, unitHeightpx)
            let rack_base = new Rack(rack[0]['dcim_row'], rack[0]['dcim_rack'], 48, rackStartLeft(rack[0]['dcim_rack']), rackStartLeft(rack[0]['dcim_rack']), rackHeight);
            full_racks.push(rack_base);

            rack.forEach(function(chassis){
                image = rackSide + '_image_path';
                //Chassis(unitLocation, chassisHeight, unitHeightpx, unitWidthpx, unitLeftpx, picturePath, nodeType, information, subNodes)
                if(rackSide.includes('front')) {
                    rack_base.addChassis(new Chassis(chassis['dcim_unit_start_location'],
                        chassis['chassis_height'], rackUnitHeight(chassis['chassis_height']),
                        rackWidth, highlightStartLeft(chassis['dcim_rack']),
                        chassis[image], chassis['name'],
                        new ChassisInformation(chassis['display_name'], chassis['information']), null));
                }
                else {
                    if(chassis['hardware_type'] === 'compute') {
                        let subnodeArray = [];
                        let subnodeWidth = 82;
                        nodeCount = 0;
                        chassis['nodes'].forEach(function(node) {
                            //Subnode(subnodeNum, subnodeHeight, subnodeWidth, subnodeLeft, subnodeTop, information)
                            subnodeArray.push(new Subnode(nodeCount, Number(rackUnitHeight(2).replace("px", "")) - 27, subnodeWidth, node['dcim_left_start'], node['dcim_top_start'], chassis['display_name'] + '<br>' + node['information'], node['display_name']));
                            nodeCount += 1;
                        });
                        rack_base.addChassis(new Chassis(chassis['dcim_unit_start_location'],
                            chassis['chassis_height'], rackUnitHeight(chassis['chassis_height']),
                            rackWidth, highlightStartLeft(chassis['dcim_rack']),
                            chassis[image], chassis['name'],
                            new ChassisInformation(chassis['display_name'], chassis['information']), subnodeArray));
                    }
                    else {
                        rack_base.addChassis(new Chassis(chassis['dcim_unit_start_location'],
                            chassis['chassis_height'], rackUnitHeight(chassis['chassis_height']),
                            rackWidth, highlightStartLeft(chassis['dcim_rack']),
                            chassis[image], chassis['name'],
                            new ChassisInformation(chassis['display_name'], chassis['information']), null));
                    }
                }
            });
            checkRack(rack_base, rackStartLeft(rack[0]['dcim_rack']));
            row.addRack(rack_base);
        });

        let emptyRacks = row.numRacks - full_racks.length;
        let rackNum = full_racks.length + 1;
        let rack;
        let rackName = "";

        /* Inserts a blank rack if the the number of full racks does not equal the
        *  The number of total racks in the row
        */
        for(rack = 1; rack <= emptyRacks; rack++) {
            rackName = "rack" + String(rackNum) + "empty";
            rackName = new Rack(rackNum, rack, 48, rackStartLeft(rackNum), rackWidth, rackHeight);
            createBlankRack(rackName, highlightStartLeft(rackNum));
            row.addRack(rackName);
            rackNum++;
        };

        row.rackList = row.rackList.reverse();

        /* Displays completed row */
        $("#rowdata" + row_num).append(row.present());
    });
}

/* global
    $
*/
/* exported
    display
*/

let rackWidth = "200px";
let rackHeight = "500px";
let dcim_rack = 1;
function display(rackSide, data) {
    //Row(numRacks, clusterName, information)
    var unit;

    /* Counts and displays units on the left of the pictures */

    Object.keys(data['dcim_data']).forEach(function(row_num) {

        for(unit = 42; unit > 0; unit--) {
            rackUnitCountArray.push(unit);
            $(`#unitcount${row_num}`).append(unit + "<br>");
            $(`#unitcount${row_num}`).css("font-size", "16.6px");
        }
        let row = new Row(12, "Sawtooth", "something here");

        Object.keys(data['dcim_data'][row_num]).forEach(function(rack_num) {

            let rack = data['dcim_data'][row_num][rack_num];
            let rack_base;
            //Rack(rowNumber, rackNumber, rackTotalUnits, unitLeftpx, rackWidthpx, unitHeightpx)
            if(row_num === '1') {
                rack_base = new Rack(row_num, rack[0]['dcim_rack'], 42, rackStartLeft(dcim_rack), rackStartLeft(dcim_rack), rackHeight);
            } else {
                rack_base = new Rack(row_num, rack[0]['dcim_rack'], 42, rackStartLeft(rack[0]['dcim_rack']), rackStartLeft(rack[0]['dcim_rack']), rackHeight);
                dcim_rack = rack[0]['dcim_rack'];
            }

            full_racks.push(rack_base);

            rack.forEach(function(chassis){
                image = rackSide + '_image_path';
                //Chassis(unitLocation, chassisHeight, unitHeightpx, unitWidthpx, unitLeftpx, picturePath, nodeType, information, subNodes)
                if(rackSide.includes('back')) {
                    rack_base.addChassis(new Chassis(chassis['dcim_unit_start_location'],
                        chassis['chassis_height'], rackUnitHeight(chassis['chassis_height']),
                        rackWidth, highlightStartLeft(dcim_rack),
                        chassis[image], chassis['name'],
                        new ChassisInformation(chassis['display_name'], chassis['information']), null));
                }
                else {
                    if(chassis['hardware_type'].includes('compute')) {
                        let subnodeArray = [];
                        let subnodeWidth = 20;
                        let subnodeHeight = Number(rackUnitHeight(10).replace("px", "")) - 50;
                        nodeCount = 0;
                        chassis['nodes'].forEach(function(node) {
                            //Subnode(subnodeNum, subnodeHeight, subnodeWidth, subnodeLeft, subnodeTop, information)
                            subnodeArray.push(new Subnode(1, subnodeHeight, subnodeWidth, node['dcim_left_start'], node['dcim_top_start'], node['information'], node['display_name']));
                            nodeCount += 1;
                        });
                        rack_base.addChassis(new Chassis(chassis['dcim_unit_start_location'],
                            chassis['chassis_height'], rackUnitHeight(chassis['chassis_height']),
                            rackWidth, highlightStartLeft(dcim_rack),
                            chassis[image], chassis['name'],
                            new ChassisInformation(chassis['display_name'], chassis['information']), subnodeArray));
                    }
                    else {
                        rack_base.addChassis(new Chassis(chassis['dcim_unit_start_location'],
                            chassis['chassis_height'], rackUnitHeight(chassis['chassis_height']),
                            rackWidth, highlightStartLeft(dcim_rack),
                            chassis[image], chassis['name'],
                            new ChassisInformation(chassis['display_name'], chassis['information']), null));
                    }
                }
            });
            dcim_rack += 1;
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
            rackName = new Rack(rackNum, 42, rackStartLeft(rackNum), rackWidth, rackHeight);
            createBlankRack(rackName, highlightStartLeft(rackNum));
            row.addRack(rackName);
            rackNum++;
        };
        $("#rowdata" + row_num).append(row.present());
    });
}

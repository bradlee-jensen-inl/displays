/* global
    $
*/

let insertErrorArray = [];
let insertError = "none";

let full_racks = [];
let rackUnitCountArray = [];

let nodeAreaList = [];
let subnodeList = [];


class Subnode {
    constructor(subnodeNum, subnodeHeight, subnodeWidth, subnodeLeft, subnodeTop, information, name) {
        this.subnodeNum = subnodeNum;
        this.subnodeHeight = subnodeHeight;  // Subnode height
        this.subnodeWidth = subnodeWidth;  // Subnode width
        this.subnodeLeft = subnodeLeft;
        this.subnodeTop = subnodeTop;
        this.information = information;
        this.name = name;
    }

    present(rowNum, unitLeftpx) {

        let nodeHighlightLeft = Number(unitLeftpx.replace("px", "")) + Number(this.subnodeLeft) - 5;
        let subnodeTop = Number(this.subnodeTop) + 41;

        let nodeLink = `<button id="subnode${this.subnodeNum}" class="subnodes buttonhighlight nodeLink"
                        onclick="nodeInformation('${this.name}', '${this.information}', '${subnodeTop}px',
                                '${nodeHighlightLeft}px', '${this.subnodeWidth}px', '${this.subnodeHeight}px',
                                '${rowNum}')"
                        style="height:${this.subnodeHeight}px; width:${this.subnodeWidth}px; top:${this.subnodeTop}px;
                        left:${Number(this.subnodeLeft) + 10}px;"></button>`;

        return nodeLink;
    }
}

class Chassis {
    constructor(unitLocation, chassisHeight, unitHeightpx, unitWidthpx, unitLeftpx, picturePath, nodeType, information, subNodes) {
        this.unitLocation = unitLocation;  // Unit location on the rack
        this.chassisHeight = chassisHeight;  // Number of units the chassis takes up
        this.unitHeightpx = unitHeightpx;  // Pixel height
        this.unitWidthpx = unitWidthpx;  // Pixel width
        this.unitLeftpx = unitLeftpx;  // Pixel location to the left
        this.picturePath = picturePath;  // Picture path
        this.nodeType = nodeType;  // Chassis type
        this.information = information;
        this.subNodes = subNodes;  // list of nodes within the node
    }
    present(rackTotalUnits, rowNum) {
        let unitTop = "";
        var highlightTop = unitTop + 41;
        let nodeImage = "";
        rackTotalUnits = rackTotalUnits * 25;  // 25 is the chassis height, finds where the rack should start from the top
        unitTop = rackTotalUnits - (this.unitLocation * 25);  // Finds where each chassis should start from the top

        if(this.picturePath.includes('bitterroot')) {
            highlightTop = unitTop + 41;
        } else if(this.picturePath.includes('sawtooth')) {
            highlightTop = unitTop + 41;
        }
        else {
            highlightTop = unitTop + 41;
        }

        highlightTop = String(highlightTop).concat("px");
        if(this.subNodes === null) {

            if(!nodeAreaList.includes(this.information.info)) {
                nodeAreaList.push({
                    nodeName: 'node' + this.information.name,
                    top: highlightTop,
                    left: this.unitLeftpx,
                    height: this.unitHeightpx,
                    width: this.unitWidthpx,
                });
            }
            nodeImage = `<a class="buttonhighlight nodeLink" onclick="nodeInformation('${this.information.name}',
                        '${this.information.info}', '${highlightTop}',
                        '${this.unitLeftpx}', '${this.unitWidthpx}', '${this.unitHeightpx}', '${rowNum}')">
                        <img class="rackimg nodeimg" style="height:${this.unitHeightpx};
                        width:${this.unitWidthpx}; top:${unitTop}px;"
                        alt="'${this.nodeType}' image not found" src="${this.picturePath}"></a>`;

        }
        else {  // Sub nodes
            nodeImage = `<a onclick="nodeInformation('', '', '', '', '', '')">
                            <img class="rackimg nodeimg nodeLink" style="height:${this.unitHeightpx};
                            width:${this.unitWidthpx}; top:${unitTop}px;"
                            src="${this.picturePath}"></a>`;
            // nodeImage = "";
            for(let subnode = 0; subnode < this.subNodes.length; subnode++) {
                nodeImage += (this.subNodes[subnode].present(rowNum, this.unitLeftpx));
            }
        }
        return nodeImage;
    }
}

class ChassisInformation {
    constructor(name, info, nodeNumber) {
        this.name = name;
        this.info = info;
        this.nodeNumber = nodeNumber;
    }
}

class Rack {
    constructor(rowNumber, rackNumber, rackTotalUnits, unitLeftpx, rackWidthpx, unitHeightpx) {
        this.rowNumber = rowNumber;  // Number of row in the cluster
        this.nodeList = [];  // Array for chassis nodes in rack
        this.rackNumber = rackNumber;
        this.rackUnitsFilled = [];  // Array for units filled by chassis nodes
        this.rackTotalUnits = rackTotalUnits;  //Total rack units used to find the node number
        this.unitLeftpx = unitLeftpx;  //Pixels to the left
        this.rackWidthpx = rackWidthpx;  // Pixel width
        this.unitHeightpx = unitHeightpx;  // Pixel height
    }

    addChassis(node) {
        var units = 0;
        insertError = "None";

        // Checks to ensure that there is not already a node in that location
        if(this.rackUnitsFilled.includes(node.unitLocation)) {
            insertError = `There is already a chassis at that location - ${node.unitLocation}U`;
            insertErrorArray.push("error");
        }

        // Checks to make sure the node + node height does not go below 0
        else if(node.unitLocation - node.chassisHeight < 0) {
            insertError = `The chassis does not fit within the rack.
                        The rack is only ${this.rackTotalUnits} units. You placed the chassis at
                        ${node.unitLocation}U with a height of ${node.chassisHeight} + 'U'`;
            insertErrorArray.push("error");
        }

        // Checks to make sure that the node location does not exceed the rack total units height
        else if(node.unitLocation > this.rackTotalUnits) {
            insertError = `The chassis does not fit within the rack.
                        The rack is only ${this.rackTotalUnits} units. You placed the chassis at
                        ${node.unitLocation} + 'U'`;
            insertErrorArray.push("error");
        }

        // Adds the node to the rack units filled array to be displayed
        else {
            this.rackUnitsFilled.push(node.unitLocation);
            this.nodeList.push(node);

            // Adds the second location to the array if the node more than 1 unit wide
            if(node.unitLocation * node.chassisHeight !== node.unitLocation) {
                if(node.chassisHeight !== 1) {
                    for(units = 1; units <= node.chassisHeight; units++) {
                        this.rackUnitsFilled.push(node.unitLocation - (node.chassisHeight - units));
                    }
                }
            }
        }

        // If any of the nodes errored out, the error messaged will be displayed
        if(insertError !== "None") {
            $('#nodeError').css('display', 'block');
            $('#nodeError').html(`<strong>Adding Chassis Error:</strong><br>` + insertError);
        }
    }

    present() {
        var nodeDisplayString = [];
        var x;

        for(x = 0; x < this.nodeList.length; x++) {
            // Adds nodes to the display string so they can all be displayed in order on the rack
            nodeDisplayString.push(this.nodeList[x].present(this.rackTotalUnits, this.rowNumber));
        }

        return `<div id="rack${this.rackNumber}" style="width:${this.rackWidthpx}; left:${this.unitLeftpx}; position:absolute">${nodeDisplayString.join('')}</div>`;
    }
}

class Row {
    constructor(numRacks, clusterName, information) {
        this.rackList = [];
        this.numRacks = numRacks;
        this.clusterName = clusterName;
        this.information = information;  // metric information
    }

    addRack(rack) {
        this.rackList.push(rack);
        if(this.clusterName.includes('Sawtooth')) {
            if(rack.rowNumber === '1'){
                let racknames = `
                                <td><strong> Rack 8 </strong></td>
                                <td><strong> Rack CR08 </strong></td>
                                <td><strong> Rack 8 </strong></td>

                                <td><strong> Rack 7 </strong></td>
                                <td><strong> Rack CR07 </strong></td>
                                <td><strong> Rack 7 </strong></td>

                                <td><strong> Rack 6 </strong></td>
                                <td><strong> Rack CR06 </strong></td>
                                <td><strong> Rack 6 </strong></td>

                                <td><strong> Rack 5 </strong></td>
                                <td><strong> Rack CR05 </strong></td>
                                <td><strong> Rack 5 </strong></td>
                                `;
                $(`#racknumber${rack.rowNumber}`).html(racknames);
            }
            else {
                let racknames = `
                                <td><strong> Rack 4 </strong></td>
                                <td><strong> Rack CR04 </strong></td>
                                <td><strong> Rack 4 </strong></td>

                                <td><strong> Rack 3 </strong></td>
                                <td><strong> Rack CR03 </strong></td>
                                <td><strong> Rack 3 </strong></td>

                                <td><strong> Rack 2 </strong></td>
                                <td><strong> Rack CR02 </strong></td>
                                <td><strong> Rack 2 </strong></td>

                                <td><strong> Rack 1 </strong></td>
                                <td><strong> Rack CR01 </strong></td>
                                <td><strong> Rack 1 </strong></td>
                                `;
                $(`#racknumber${rack.rowNumber}`).html(racknames);
            }
        }
        else if(this.clusterName.includes('WindRiver')) {
            if(rack.rowNumber !== '1'){
                $(`#rowTable${rack.rowNumber}`).css("width", "max-content");
            }
            $(`#racknumber${rack.rowNumber}`).append(`<td><strong> Rack ${rack.rackNumber} </strong></td>`);
        }
        else {
            $(`#racknumber${rack.rowNumber}`).append(`<td><strong> Rack ${rack.rackNumber} </strong></td>`);
        }
    }

    present() {
        let rackDisplayString = [];
        var rack;

        // Rack display will all the nodes inside the rack list
        for (rack = 0; rack < this.rackList.length; rack++){
            rackDisplayString.push(this.rackList[rack].present());
        }

        return rackDisplayString;
    }
}


/**
 * Adds blank chassis
 * @param {number} rack
 * @param {string} unitLocation
 * @param {string} unitLeftpx
 */
function addBlank(rack, unitLocation, unitLeftpx) {
    rack.addChassis(new Chassis(unitLocation, 1, rackUnitHeight(1), rackWidth, unitLeftpx, '/static/dcim/images/newblank.jpg', 'empty row', new ChassisInformation('blank'), null));
}

/**
 * Creates an entirely blank rack for those like utility that have blank racks in the middle of the row
 * @param {number} rack
 * @param {string} unitLeftpx
 */
function createBlankRack(rack, unitLeftpx) {
    var unitLocation;
    for(unitLocation = 1; unitLocation <= rack.rackTotalUnits; unitLocation++) {
        addBlank(rack, unitLocation, unitLeftpx);
    }
}

/**
 * Error checking function to ensure that there are no empty slots on the rack
 * Removes error message if all rendering were successfull
 * @param {number} rack
 * @param {string} unitLeftpx
 */
function checkRack(rack, unitLeftpx) {
    var index;
    var unitFilled;
    var errorCheck;

    // Checks to see if all the units on the rack are filled
    // If not then a blank chassis is added
    // rackUnitCountArray is set in cluster files-full of 0-total rack units
    for(index = 0; index < rackUnitCountArray.length; index++) {
        unitFilled = rack.rackUnitsFilled.includes(rackUnitCountArray[index]);
        if(unitFilled === false) {
            if(rackUnitCountArray[index]) {
                addBlank(rack, rackUnitCountArray[index], unitLeftpx);
            }
        }
    }

    // Removes error message if there are no errors with the rendering
    errorCheck = insertErrorArray.includes("error");
    if(errorCheck === false) {
        $('#nodeError').css('display', 'none');
    }
}

/**
 * Returns how many pixels to the left the rack should start based on rack number
 * @param {number} rackNumber
 */
function rackStartLeft(rackNumber) {
    rackNumber = rackNumber - 1;
    let leftFunction = (40 + (210 * rackNumber));
    return String(leftFunction + "px");
}

/**
 * Returns how many pixels to the left the highlight should start for each node
 * @param {number} rackNumber
 */
function highlightStartLeft(rackNumber) {
    rackNumber = rackNumber - 1;
    let leftFunction = (55 + (210 * rackNumber));
    return String(leftFunction + "px");
}

/**
 * Returns how many pixels high the picture for each node should be
 * @param {number} units
 */
function rackUnitHeight(units) {
    let height = 25;  // One U is 25px tall
    height = height * units;
    return String(height + "px");
}


/* global
   $
*/

let locationNumberDict = {
    row1: 76,
    row2: 168,
    row3: 280,
    row4: 411,
    row5: 610,
    row6: 610,
    row75: 722,
    row7: 722,
    row85: 830,
    row8: 842,
    row9: 961,
    row10: 1070,
    row11: 1181
};

class Rack {
    constructor(rackNumber, locationLetter, unitHeight, unitWidth, information) {
        this.rackNumber = rackNumber;
        this.locationLetter = locationLetter;
        this.unitHeight = unitHeight;
        this.unitWidth = unitWidth;
        this.information = information;
    }
    present(rowNumber, cluster) {
        let rackTop = 0;
        let rackLeft = locationNumberDict[rowNumber];
        let buttonColor;
        rackTop = (this.locationLetter.charCodeAt(0) - 97) * this.unitHeight + 43;

        buttonColor = cluster + '-color';
        if(this.information.includes("Hoodoo")) {
            buttonColor = 'hoodoo-color';
        }

        if(this.information.includes("CDU") || this.information === "") {
            rackLeft = rackLeft + 7;
            buttonColor = 'gray';
        }

        let rackButton = `<a class="` + cluster + `Link"><button id="rack` + this.rackNumber + `" class="` + buttonColor + `"
                    style="height: ` + this.unitHeight + `px; width: ` + this.unitWidth +`px; top:` + rackTop +
                    `px; left:` + rackLeft + `px; position:absolute;
                    z-index:8;" onclick="clusterInfo('` + cluster.charAt(0).toUpperCase() + cluster.slice(1)  + `', '`
                    + this.information + `')"></button></a>`;
        return rackButton;
    }
}


class Row {
    constructor(name, numRacks, cluster, information) {
        this.rackList = [];
        this.name = name;
        this.numberRacks = numRacks;
        this.cluster = cluster;
        this.information = information;
    }

    addRack(rack) {
        this.rackList.push(rack);
    }

    present() {
        let rackDisplayString = [];
        // Rack display will all the nodes inside the rack list
        for (let rack = 0; rack < this.rackList.length; rack++) {
            rackDisplayString.push(this.rackList[rack].present(this.name, this.cluster));
        }
        return rackDisplayString;
    }
}

//Rack(rackNumber, locationLetter, unitHeight, unitWidth, information)
/************************** SAWTOOTH ***********************/
let srack1 = new Rack(1, 'e', 18.75, 41.5, "Rack 16 (Virtual Rack 8)");
let srack2 = new Rack(1, 'f', 18.75, 41.5, "Cooling Rack <br> CR08");
let srack3 = new Rack(1, 'g', 18.75, 41.5, "Rack 15 (Virtual Rack 8)");
let srack4 = new Rack(1, 'h', 18.75, 41.5, "Rack 14 (Virtual Rack 7)");
let srack5 = new Rack(1, 'i', 18.75, 41.5, "Cooling Rack <br> CR07");
let srack6 = new Rack(1, 'j', 18.75, 41.5, "Rack 13 (Virtual Rack 7)");
let srack7 = new Rack(1, 'k', 18.75, 41.5, "Rack 12 (Virtual Rack 6)");
let srack8 = new Rack(1, 'l', 18.75, 41.5, "Cooling Rack <br> CR06");
let srack9 = new Rack(1, 'm', 18.75, 41.5, "Rack 11 (Virtual Rack 6)");
let srack10 = new Rack(1, 'n', 18.75, 41.5, "Rack 10 (Virtual Rack 5)");
let srack11 = new Rack(1, 'o', 18.75, 41.5, "Cooling Rack <br> CR05");
let srack12 = new Rack(1, 'p', 18.75, 41.5, "Rack 09 (Virtual Rack 5)");
let srack25 = new Rack(1, 'd', 18.75, 35, "CDU <br> DU04");
let srack26 = new Rack(1, 'q', 18.75, 35, "CDU <br> DU03");

let srack13 = new Rack(2, 'e', 18.75, 41.5, "Rack 08 (Virtual Rack 4)");
let srack14 = new Rack(2, 'f', 18.75, 41.5, "Cooling Rack <br> CR04");
let srack15 = new Rack(2, 'g', 18.75, 41.5, "Rack 07 (Virtual Rack 4)");
let srack16 = new Rack(2, 'h', 18.75, 41.5, "Rack 06 (Virtual Rack 3)");
let srack17 = new Rack(2, 'i', 18.75, 41.5, "Cooling Rack <br> CR03");
let srack18 = new Rack(2, 'j', 18.75, 41.5, "Rack 05 (Virtual Rack 3)");
let srack19 = new Rack(2, 'k', 18.75, 41.5, "Rack 04 (Virtual Rack 2)");
let srack20 = new Rack(2, 'l', 18.75, 41.5, "Cooling Rack <br> CR02");
let srack21 = new Rack(2, 'm', 18.75, 41.5, "Rack 03 (Virtual Rack 2)");
let srack22 = new Rack(2, 'n', 18.75, 41.5, "Rack 02 (Virtual Rack 1)");
let srack23 = new Rack(2, 'o', 18.75, 41.5, "Cooling Rack <br> CR01");
let srack24 = new Rack(2, 'p', 18.75, 41.5, "Rack 01 (Virtual Rack 1)");
let srack27 = new Rack(2, 'd', 18.75, 35, "CDU <br> DU02");
let srack28 = new Rack(2, 'q', 18.75, 35, "CDU <br> DU01");
let srack29 = new Rack(2, 'r', 18.75, 41.5, "IT Rack <br> 101");
let srack30 = new Rack(2, 's', 18.75, 41.5, "Cooling Rack <br> CR00");
let srack31 = new Rack(2, 't', 18.75, 41.5, "IT Rack <br> 102");


/************************** TETON ***********************/
let track1 = new Rack(1, 'c', 25, 59, "Rack 13");
let track2 = new Rack(1, 'd', 25, 59, "Rack 12");
let track3 = new Rack(1, 'e', 25, 59, "Rack 11");
let track4 = new Rack(1, 'f', 25, 59, "Rack 10");
let track5 = new Rack(1, 'g', 25, 59, "Rack 9");
let track6 = new Rack(1, 'h', 25, 59, "Rack 8");
let track7 = new Rack(1, 'i', 25, 59, "Rack 7");
let track8 = new Rack(1, 'j', 25, 59, "Rack 6");
let track9 = new Rack(1, 'k', 25, 59, "Rack 5");
let track10 = new Rack(1, 'l', 25, 59, "Rack 4");
let track11 = new Rack(1, 'm', 25, 59, "Rack 3");
let track12 = new Rack(1, 'n', 25, 59, "Rack 2");
let track13 = new Rack(1, 'o', 25, 59, "Rack 1");


/************************** Wind River ***********************/
let wrrack1 = new Rack(1, 'c', 25, 59, "Rack 13");
let wrrack2 = new Rack(1, 'd', 25, 59, "Rack 12");
let wrrack3 = new Rack(1, 'e', 25, 59, "Rack 11");
let wrrack4 = new Rack(1, 'f', 25, 59, "Rack 10 - OPA");
let wrrack5 = new Rack(1, 'g', 25, 59, "Rack 9");
let wrrack6 = new Rack(1, 'h', 25, 59, "Rack 8");
let wrrack7 = new Rack(1, 'i', 25, 59, "Rack 7");
let wrrack8 = new Rack(1, 'j', 25, 59, "Rack 6");
let wrrack9 = new Rack(1, 'k', 25, 59, "Rack 5");
let wrrack10 = new Rack(1, 'l', 25, 59, "Rack 4");
let wrrack11 = new Rack(1, 'm', 25, 59, "Rack 3");
let wrrack12 = new Rack(1, 'n', 25, 59, "Rack 2");
let wrrack13 = new Rack(1, 'o', 25, 59, "Rack 1");
let wrrack14 = new Rack(1, 'u', 18.75, 35, "");


let wrrack27 = new Rack(1, 'd', 18.75, 35, "");
let wrrack23 = new Rack(2, 'd', 25, 59, "Rack 17 - Management");
let wrrack24 = new Rack(2, 'e', 25, 59, "Rack 16- GW/Compute");
let wrrack25 = new Rack(2, 'f', 25, 59, "Rack 15");
let wrrack26 = new Rack(2, 'g', 25, 59, "Rack 14");

let wrrack31 = new Rack(3, 'd', 25, 59, "Rack 18");
let wrrack32 = new Rack(3, 'e', 25, 59, "Rack 19");
let wrrack33 = new Rack(3, 'f', 25, 59, "Rack 20");


/************************** BITTERROOT ***********************/
let brack1 = new Rack(1, 'h', 25, 59, "Rack 08");
let brack2 = new Rack(1, 'i', 25, 59, "Rack 07");
let brack3 = new Rack(1, 'j', 25, 59, "Rack 06");
let brack4 = new Rack(1, 'k', 25, 59, "Rack 05");
let brack5 = new Rack(1, 'l', 25, 59, "Rack 04");
let brack6 = new Rack(1, 'm', 25, 59, "Rack 03");
let brack7 = new Rack(1, 'n', 25, 59, "Rack 02");
let brack8 = new Rack(1, 'o', 25, 59, "Rack 01");
let brack9 = new Rack(1, 'u', 18.75, 35, "");


/************************** LEMHI ***********************/
let lrack1 = new Rack(1, 'j', 18.75, 50.5, "Rack 01");
let lrack2 = new Rack(1, 'k', 18.75, 50.5, "Rack 02");
let lrack3 = new Rack(1, 'l', 18.75, 50.5, "Rack 03");
let lrack4 = new Rack(1, 'm', 18.75, 50.5, "Rack 04");
let lrack5 = new Rack(1, 'n', 18.75, 50.5, "Rack 05");
let lrack6 = new Rack(1, 'o', 18.75, 50.5, "Rack 06");
let lrack7 = new Rack(1, 'p', 18.75, 50.5, "Rack 07");
let lrack8 = new Rack(1, 'q', 18.75, 50.5, "Rack 08");
let lrack9 = new Rack(1, 'r', 18.75, 50.5, "Rack 09");
let lrack10 = new Rack(1, 's', 18.75, 50.5, "Rack 10");
let lrack11 = new Rack(1, 'i', 18.75, 35, "");
let lrack12 = new Rack(1, 't', 18.75, 35, "");


/************************** UTILITY ***********************/
let urack1 = new Rack(1, 'f', 18.75, 41.5, "Rack 01 <br> Hoodoo");
let urack2 = new Rack(1, 'g', 18.75, 41.5, "Rack 02 <br> Hoodoo");
let urack3 = new Rack(1, 'h', 18.75, 41.5, "Rack 03 <br> Future Storage");
let urack4 = new Rack(1, 'i', 18.75, 41.5, "Rack 04 <br> Future Storage");
let urack5 = new Rack(1, 'j', 18.75, 41.5, "Rack 05 <br> IBM");
let urack6 = new Rack(1, 'k', 18.75, 41.5, "Rack 06 <br> Pure, Isilon");
let urack7 = new Rack(1, 'l', 18.75, 41.5, "Rack 07 <br> Networking");
let urack8 = new Rack(1, 'm', 18.75, 41.5, "Rack 08 <br> Networking");
let urack9 = new Rack(1, 'n', 18.75, 41.5, "Rack 09 <br> VDI/viz, Nutanix, Utility");
let urack10 = new Rack(1, 'o', 18.75, 41.5, "Rack 10 <br> Bechler, Falconviz, Galena");
let urack11 = new Rack(1, 'p', 18.75, 41.5, "Rack 11 <br> ");
let urack12 = new Rack(1, 'q', 18.75, 41.5, "Rack 12 <br> MOOSE");
let urack13 = new Rack(1, 'r', 18.75, 41.5, "Rack 13 <br> NHS (potential)");
let urack14 = new Rack(1, 's', 18.75, 41.5, "Rack 14 <br> Shad`s stuff (non-INET) ");
let urack15 = new Rack(1, 't', 18.75, 41.5, "Rack 15 <br> INET boxes");
let urack16 = new Rack(1, 'e', 18.75, 35, "");
let urack17 = new Rack(1, 'u', 18.75, 35, "");

/************************** UNIVERSITY ***********************/
let unrack1 = new Rack(1, 'f', 18.75, 41.5, "Idaho State University");
let unrack2 = new Rack(1, 'g', 18.75, 41.5, "Idaho State University");
let unrack3 = new Rack(1, 'h', 18.75, 41.5, "Idaho State University");
let unrack4 = new Rack(1, 'i', 18.75, 41.5, "Idaho State University");
let unrack5 = new Rack(1, 'j', 18.75, 41.5, "Idaho State University");
let unrack6 = new Rack(1, 'k', 18.75, 41.5, "University of Idaho");
let unrack7 = new Rack(1, 'l', 18.75, 41.5, "University of Idaho");
let unrack8 = new Rack(1, 'm', 18.75, 41.5, "University of Idaho");
let unrack9 = new Rack(1, 'n', 18.75, 41.5, "University of Idaho");
let unrack10 = new Rack(1, 'o', 18.75, 41.5, "University of Idaho");
let unrack11 = new Rack(1, 'p', 18.75, 41.5, "Boise State University");
let unrack12 = new Rack(1, 'q', 18.75, 41.5, "Boise State University");
let unrack13 = new Rack(1, 'r', 18.75, 41.5, "Boise State University");
let unrack14 = new Rack(1, 's', 18.75, 41.5, "Boise State University");
let unrack15 = new Rack(1, 't', 18.75, 41.5, "Boise State University");
let unrack16 = new Rack(1, 'e', 18.75, 35, "");
let unrack17 = new Rack(1, 'u', 18.75, 35, "");

/************************** FALCON ***********************/
let frack1 = new Rack(1, 'g', 18.75, 41.5, "Rack 01");
let frack2 = new Rack(1, 'h', 18.75, 41.5, "Rack 02");
let frack3 = new Rack(1, 'i', 18.75, 41.5, "Rack 03");
let frack4 = new Rack(1, 'j', 18.75, 41.5, "Rack 04");
let frack5 = new Rack(1, 'k', 18.75, 41.5, "Rack 05");
let frack6 = new Rack(1, 'l', 18.75, 41.5, "Rack 06");
let frack7 = new Rack(1, 'm', 18.75, 41.5, "Rack 07");
let frack8 = new Rack(1, 'n', 18.75, 41.5, "Rack 08");
let frack9 = new Rack(1, 'o', 18.75, 41.5, "Rack 09");
let frack10 = new Rack(1, 'p', 18.75, 41.5, "Rack 10");
let frack11 = new Rack(1, 'q', 18.75, 41.5, "Rack 11");
let frack12 = new Rack(1, 'r', 18.75, 41.5, "Rack 12");
let frack13 = new Rack(1, 's', 18.75, 41.5, "Rack 13");
let frack14 = new Rack(1, 't', 18.75, 41.5, "Rack 14");


function display() {
    //Row(name, numRacks, cluster, information)
    let row1 = new Row('row1', 14, 'sawtooth', null);
    let row2 = new Row('row2', 14, 'sawtooth', null);
    let row3 = new Row('row3', 14, 'teton', null);
    let row6 = new Row('row6', 14, 'windriver', null);
    let row75 = new Row('row75', 8, 'windriver', null);
    let row7 = new Row('row7', 10, 'bitterroot', null);
    let row85 = new Row('row85', 10, 'windriver', null);
    let row8 = new Row('row8', 10, 'lemhi', null);
    let row9 = new Row('row9', 15, 'utility', null);
    let row10 = new Row('row10', 15, 'university', null);
    let row11 = new Row('row11', 15, 'falcon', null);

    var letter = 0;

    for(letter = 0; letter < 26; letter++) {
        $("#lettercount").append(String.fromCharCode(97 + letter) + "<br>");
        $("#lettercount").css("font-size", "15px");
    }

    row1.addRack(srack1);
    row1.addRack(srack2);
    row1.addRack(srack3);
    row1.addRack(srack4);
    row1.addRack(srack5);
    row1.addRack(srack6);
    row1.addRack(srack7);
    row1.addRack(srack8);
    row1.addRack(srack9);
    row1.addRack(srack10);
    row1.addRack(srack11);
    row1.addRack(srack12);
    row1.addRack(srack25);
    row1.addRack(srack26);

    row2.addRack(srack13);
    row2.addRack(srack14);
    row2.addRack(srack15);
    row2.addRack(srack16);
    row2.addRack(srack17);
    row2.addRack(srack18);
    row2.addRack(srack19);
    row2.addRack(srack20);
    row2.addRack(srack21);
    row2.addRack(srack22);
    row2.addRack(srack23);
    row2.addRack(srack24);
    row2.addRack(srack27);
    row2.addRack(srack28);
    row2.addRack(srack29);
    row2.addRack(srack30);
    row2.addRack(srack31);

    row3.addRack(track1);
    row3.addRack(track2);
    row3.addRack(track3);
    row3.addRack(track4);
    row3.addRack(track5);
    row3.addRack(track6);
    row3.addRack(track7);
    row3.addRack(track8);
    row3.addRack(track9);
    row3.addRack(track10);
    row3.addRack(track11);
    row3.addRack(track12);
    row3.addRack(track13);

    row6.addRack(wrrack1);
    row6.addRack(wrrack2);
    row6.addRack(wrrack3);
    row6.addRack(wrrack4);
    row6.addRack(wrrack5);
    row6.addRack(wrrack6);
    row6.addRack(wrrack7);
    row6.addRack(wrrack8);
    row6.addRack(wrrack9);
    row6.addRack(wrrack10);
    row6.addRack(wrrack11);
    row6.addRack(wrrack12);
    row6.addRack(wrrack13);
    row6.addRack(wrrack14);

    row75.addRack(wrrack23);
    row75.addRack(wrrack24);
    row75.addRack(wrrack25);
    row75.addRack(wrrack26);
    row75.addRack(wrrack27);

    row7.addRack(brack1);
    row7.addRack(brack2);
    row7.addRack(brack3);
    row7.addRack(brack4);
    row7.addRack(brack5);
    row7.addRack(brack6);
    row7.addRack(brack7);
    row7.addRack(brack8);
    row7.addRack(brack9);

    row85.addRack(wrrack31);
    row85.addRack(wrrack32);
    row85.addRack(wrrack33);

    row8.addRack(lrack1);
    row8.addRack(lrack2);
    row8.addRack(lrack3);
    row8.addRack(lrack4);
    row8.addRack(lrack5);
    row8.addRack(lrack6);
    row8.addRack(lrack7);
    row8.addRack(lrack8);
    row8.addRack(lrack9);
    row8.addRack(lrack10);
    row8.addRack(lrack11);
    row8.addRack(lrack12);

    row9.addRack(urack1);
    row9.addRack(urack2);
    row9.addRack(urack3);
    row9.addRack(urack4);
    row9.addRack(urack5);
    row9.addRack(urack6);
    row9.addRack(urack7);
    row9.addRack(urack8);
    row9.addRack(urack9);
    row9.addRack(urack10);
    row9.addRack(urack11);
    row9.addRack(urack12);
    row9.addRack(urack13);
    row9.addRack(urack14);
    row9.addRack(urack15);
    row9.addRack(urack16);
    row9.addRack(urack17);

    row10.addRack(unrack1);
    row10.addRack(unrack2);
    row10.addRack(unrack3);
    row10.addRack(unrack4);
    row10.addRack(unrack5);
    row10.addRack(unrack6);
    row10.addRack(unrack7);
    row10.addRack(unrack8);
    row10.addRack(unrack9);
    row10.addRack(unrack10);
    row10.addRack(unrack11);
    row10.addRack(unrack12);
    row10.addRack(unrack13);
    row10.addRack(unrack14);
    row10.addRack(unrack15);
    row10.addRack(unrack16);
    row10.addRack(unrack17);

    row11.addRack(frack1);
    row11.addRack(frack2);
    row11.addRack(frack3);
    row11.addRack(frack4);
    row11.addRack(frack5);
    row11.addRack(frack6);
    row11.addRack(frack7);
    row11.addRack(frack8);
    row11.addRack(frack9);
    row11.addRack(frack10);
    row11.addRack(frack11);
    row11.addRack(frack12);
    row11.addRack(frack13);
    row11.addRack(frack14);

    $("#datacenterarea").append(row1.present());
    $("#datacenterarea").append(row2.present());
    $("#datacenterarea").append(row3.present());
    $("#datacenterarea").append(row6.present());
    $("#datacenterarea").append(row7.present());
    $("#datacenterarea").append(row75.present());
    $("#datacenterarea").append(row8.present());
    $("#datacenterarea").append(row85.present());
    $("#datacenterarea").append(row9.present());
    $("#datacenterarea").append(row10.present());
    $("#datacenterarea").append(row11.present());
    $('#nodeError').css('display', 'none');
}

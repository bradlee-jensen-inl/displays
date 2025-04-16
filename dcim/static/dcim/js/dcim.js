/* global
    $
*/
/* exported
    nodeInformation,
*/

/**
* Displays information about each interface in the information box to the left of the screen
* Adds class compute_node in order to display the correct individual image below
* Highlights area selected on Lemhi main image
*
* @param {string} txt - Informational text
* @param {number} topNode - Pixel location of where the top of the highlight should start
* @param {number} leftNode - Pixel location of where the left of the highlight should start
*/


function nodeInformation(name, info, unitTop, unitLeft, unitWidth, unitHeight, rowNum) {
    info = info.replaceAll('+n', '<br>');
    if(name.includes("blank") === false) {
        $(`#rowHighlight${rowNum}`).css("display", "block");
        $(`#rowHighlight${rowNum}`).css("top", unitTop);
        $(`#rowHighlight${rowNum}`).css("left", unitLeft);
        $(`#rowHighlight${rowNum}`).css("width", unitWidth);
        $(`#rowHighlight${rowNum}`).css("height", unitHeight);
        $("#racktexttitle").html(`<h3>${name}</h3>`);
        $("#racktext").html(`<b>${info}</b>`);
        $("#information").show();
    }
}

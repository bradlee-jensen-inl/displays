/* global
    $
*/
/* exported
    display
*/

let rackWidth = "200px";
let rackHeight = "500px";

let imageDictFront = {
    adprd01: '/static/dcim/images/utility/adprd01.jpg',
    boxx: '/static/dcim/images/utility/boxx.png',
    cheesegrater: '/static/dcim/images/utility/cheesegrater.jpg',
    ciscoswitch: '/static/dcim/images/utility/ciscoswitch.png',
    citrix: '/static/dcim/images/utility/citrix.jpg',
    commscope: '/static/dcim/images/utility/commscope.png',
    dellchassis: '/static/dcim/images/utility/dellchassis.png',
    dellcover: '/static/dcim/images/utility/dellcover.png',
    dellemc: '/static/dcim/images/utility/dellemc.jpg',
    dellisilon: '/static/dcim/images/utility/dellisilon.png',
    falcongateway: '/static/dcim/images/utility/falcongateway.jpg',
    falconswitch: '/static/dcim/images/utility/falconswitch.jpg',
    falconviz: '/static/dcim/images/utility/falconviz.jpg',
    ethspareswtich: '/static/dcim/images/utility/ethspareswitch.jpg',
    essstorage: '/static/dcim/images/utility/essstorage.jpg',
    grace: '/static/dcim/images/utility/grace-grace.jpg',
    grate2u: '/static/dcim/images/utility/grate2u.png',
    hoodoo: '/static/dcim/images/utility/hoodoo-front.jpg',
    hoodooexpanision: '/static/dcim/images/utility/hoodoo-expansion.jpg',
    hpcbuild: '/static/dcim/images/utility/hpcbuild.jpg',
    hpcinet: '/static/dcim/images/utility/hpcinet.png',
    hpcstorage: '/static/dcim/images/utility/hpcstorage.png',
    hpcview: '/static/dcim/images/utility/hpcview.png',
    hpcwin: '/static/dcim/images/utility/hpcwin.png',
    hpcwin2: '/static/dcim/images/utility/hpcwin2.png',
    hpeapollo: '/static/dcim/images/utility/hpeapollo.png',
    hpe9: '/static/dcim/images/utility/hpe9.png',
    hpe10: '/static/dcim/images/utility/hpe10.png',
    hpe12: '/static/dcim/images/utility/hpe12.png',
    h100: '/static/dcim/images/utility/h100.jpg',
    ibmpower: '/static/dcim/images/utility/ibmpowerfull.png',
    ibmpowerhalf: '/static/dcim/images/utility/ibmpowerhalf.png',
    ibswitches: '/static/dcim/images/utility/ibswitches.jpg',
    lambda: '/static/dcim/images/utility/lambda.jpg',
    mactowers: '/static/dcim/images/utility/mactowers.png',
    managementswitch: '/static/dcim/images/utility/management_switch.jpg',
    managementswitch2: '/static/dcim/images/utility/management_switch2.jpg',
    meowbuild: '/static/dcim/images/utility/meowbuild.jpg',
    micro: '/static/dcim/images/utility/micro.jpg',
    microhead: '/static/dcim/images/utility/microheadnode.jpg',
    moosecontrol: '/static/dcim/images/utility/moosecontrol1.jpg',
    moosenode: '/static/dcim/images/utility/moosenode.jpg',
    moosenode2: '/static/dcim/images/utility/moosenode2.jpg',
    moosenode3: '/static/dcim/images/utility/moosenode3.jpg',
    moosestudio: '/static/dcim/images/utility/moosestudio.jpg',
    node: '/static/dcim/images/lemhi/computenodefront.png',
    nrdsportal: '/static/dcim/images/utility/nrds-portal.jpg',
    nrdsprod: '/static/dcim/images/utility/nrds.jpg',
    nrdsstorage: '/static/dcim/images/utility/dellemcstorage.jpg',
    nutanix: '/static/dcim/images/utility/nutanix.png',
    nvdia: '/static/dcim/images/utility/nvdia.png',
    opman: '/static/dcim/images/utility/opman.png',
    pe410: '/static/dcim/images/utility/pe410.jpg',
    pe620: '/static/dcim/images/utility/poweredge620.png',
    pe820: '/static/dcim/images/utility/poweredge820.png',
    pe820nocover: '/static/dcim/images/utility/pe820nocover.jpg',
    pe720: '/static/dcim/images/utility/poweredger720full.png',
    pe720half: '/static/dcim/images/utility/poweredger720half.png',
    pe730: '/static/dcim/images/utility/poweredger730.png',
    pe730half: '/static/dcim/images/utility/poweredger730half.png',
    per6515: '/static/dcim/images/utility/per6515.png',
    peR740: '/static/dcim/images/utility/peR740.jpg',
    powerl922: '/static/dcim/images/utility/powerl922.jpg',
    powers822lhalf: '/static/dcim/images/utility/powers822l.jpg',
    powers822lfull: '/static/dcim/images/utility/powers822lfull.jpg',
    powerscale: '/static/dcim/images/utility/powerscale.jpg',
    purestorage: '/static/dcim/images/utility/purestorage.png',
    pureexpansion: '/static/dcim/images/utility/pureexpansion.jpg',
    rack5blackbox: '/static/dcim/images/utility/rack5black.png',
    rack7top: '/static/dcim/images/utility/rack7top.png',
    rack8purple: '/static/dcim/images/utility/rack8purple.png',
    rack10u31: '/static/dcim/images/utility/rack10u31.png',
    rack11u23: '/static/dcim/images/utility/rack11u23.jpg',
    rack13u21: '/static/dcim/images/utility/rack13u21.png',
    rack13u32: '/static/dcim/images/utility/rack13u32.jpg',
    rack13u37: '/static/dcim/images/utility/rack13u37.jpg',
    rack13u44: '/static/dcim/images/utility/rack13u44.png',
    rack14node: '/static/dcim/images/utility/rack14node.jpg',
    rack78switch: '/static/dcim/images/utility/rack78switch.png',
    row14node: '/static/dcim/images/utility/row14nodee.png',
    r420: '/static/dcim/images/utility/r420.png',
    r430: '/static/dcim/images/utility/r430.jpg',
    storageswitch: '/static/dcim/images/utility/storageswitch.jpg',
    s67800: '/static/dcim/images/utility/s67800.png',
    s67800red: '/static/dcim/images/utility/s67800red.png',
    testcluster: '/static/dcim/images/utility/testcluster.jpg',
    truenas: '/static/dcim/images/utility/truenas.jpg',
    vdi: '/static/dcim/images/lemhi/loginfront.png',
    viz: '/static/dcim/images/utility/viz.jpg',
};

let imageDictBack = {
    hoodoo: '/static/dcim/images/utility/hoodoo-back.jpg',

};

let hoodooInfo = `<h3>Hoodoo</h3><b>Owner: Matthew Sgambati</b><p>Over 400 teraflops<br>Lambda Hyperplane deep learning distributed memory system</p>`;
// let hoodooComputeOriginal = `<h4>Compute Nodes</h4>1 AMD EPYC 7543P CPU<br>Milan chipset<br>32 cores per CPU<br>2.80 GHz<br>1024GB of RAM<br>No InfiniBand<br>4 NVIDIA Tesla A100 40 GPUs<br>8192 cores per GPU<br>40GB of RAM<br>Rocky Linux 8.9 operating system`;
// let hoodooComputeExpansion = `<h4>Compute Nodes</h4>2 AMD EPYC 7302 CPUs<br>Rome chipset<br>16 cores per CPU<br>3.00 GHz<br>512GB of RAM<br>GPFS, 1.92 TB NVMe<br>Mellanox Infiniband HDR<br>4 NVIDIA Tesla A100 40 GPUs<br>8192 cores per GPU<br>40GB of RAM<br>CentOS 8 operating system`;

//Chassis(unitLocation, chassisHeight, unitHeightpx, unitWidthpx, unitLeftpx, picturePath, nodeType, information, subNodes)
function createRack1(rack, imageDict, unitLeftpx) {

    // Create chassis
    rack.addChassis(new Chassis(31, 30, rackUnitHeight(30), rackWidth, unitLeftpx, imageDict.hoodoo, 'Hoodoo', new ChassisInformation(hoodooInfo), null));

    rack.addChassis(new Chassis(44, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.hoodooexpanision, 'Hoodoo', new ChassisInformation(hoodooInfo), null));
    rack.addChassis(new Chassis(38, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.hoodooexpanision, 'Hoodoo', new ChassisInformation(hoodooInfo), null));

    checkRack(rack, unitLeftpx);
}

function createRack2(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(35, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.r430, 'Spare R430', new ChassisInformation('<h3>Spare R430</h3><b>Owner: Matthew Sgambati</b>'), null));
    rack.addChassis(new Chassis(32, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.grace, 'Grace Grace', new ChassisInformation('<h3>Grace-Grace System</h3><b>Owner: Matthew Sgambati</b>'), null));
    rack.addChassis(new Chassis(30, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.grace, 'Grace Grace', new ChassisInformation('<h3>Grace-Grace System</h3><b>Owner: Matthew Sgambati</b>'), null));

    rack.addChassis(new Chassis(25, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.hoodooexpanision, 'Hoodoo', new ChassisInformation(hoodooInfo ), null));
    rack.addChassis(new Chassis(19, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.hoodooexpanision, 'Hoodoo', new ChassisInformation(hoodooInfo ), null));
    rack.addChassis(new Chassis(13, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.hoodooexpanision, 'Hoodoo', new ChassisInformation(hoodooInfo ), null));
    rack.addChassis(new Chassis(7, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.hoodooexpanision, 'Hoodoo', new ChassisInformation(hoodooInfo ), null));

    checkRack(rack, unitLeftpx);
}

function createRack3(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(50, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.grate2u, 'utility', new ChassisInformation('<h3>NRDS Switches</h3><b>Owner: Matthew Sgambati</b>'), null));
    rack.addChassis(new Chassis(48, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.ethspareswtich, 'utility', new ChassisInformation('<h3>Eth Spare Switch</h3><b>Owner: Matthew Sgambati</b>'), null));

    rack.addChassis(new Chassis(41, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.h100, 'utility', new ChassisInformation('<h3>H100.hpc.inl.gov</h3><b>Owner: Matthew Sgambati</b>'), null));

    rack.addChassis(new Chassis(19, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.nrdsportal, 'utility', new ChassisInformation('<h3>NRDS Portal</h3><b>Owner: Matthew Sgambati</b>'), null));
    rack.addChassis(new Chassis(15, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.nrdsprod, 'utility', new ChassisInformation('<h3>NRDS Prod</h3><b>Owner: Matthew Sgambati</b><p>H100</p>'), null));
    rack.addChassis(new Chassis(9, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.nrdsstorage, 'utility', new ChassisInformation('<h3>NRDS Storage</h3><b>Owner: Matthew Sgambati</b>'), null));
    rack.addChassis(new Chassis(5, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.nrdsstorage, 'utility', new ChassisInformation('<h3>NRDS Storage</h3><b>Owner: Matthew Sgambati</b>'), null));
    checkRack(rack, unitLeftpx);
}

function createRack4(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(19, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(17, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(15, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(13, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(11, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(9, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(7, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(5, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));
    rack.addChassis(new Chassis(3, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.viz, 'viz', new ChassisInformation('<h3>Viz Cluster</h3><b>Owner: Matthew Sgambati</b><p>96 cores per node <br>17.6044921875 TB total memory</p><h4>Compute Nodes</h4><p>2 AMD EPYC 7643 CPUs<br>Milan chipset<br>48 cores per CPU<br>3.60 GHz<br>2003GB of RAM<br>InfiniBand<br>2 NVIDIA A40 GPUs<br>NVIDIA chipset<br>10752 cores per GPU<br>1305.00 GHz<br>48GB of RAM<br>Rocky 8.8 operating system</p>'), null));

    checkRack(rack, unitLeftpx);
}

function createRack5(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(50, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.ciscoswitch, 'Cisco Switch', new ChassisInformation('<h3>Cisco Switch</h3><b>Owner: Shane Grover</b>'), null));
    rack.addChassis(new Chassis(49, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.s67800, 'S67800', new ChassisInformation('<h3>Switch</h3><b>Owner: Shane Grover</b>'), null));
    rack.addChassis(new Chassis(48, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.s67800red, 'S67800 Red', new ChassisInformation('<h3>Switch</h3><b>Owner: Shane Grover</b>'), null));

    rack.addChassis(new Chassis(39, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.storageswitch, 'Storage', new ChassisInformation('<h3>Storage Switch</h3><b>Owner: Shane Grover</b>'), null));
    rack.addChassis(new Chassis(37, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powerl922, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Power L922 <br>IBM</p>'), null));
    rack.addChassis(new Chassis(35, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powerl922, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Power L922 <br>IBM</p>'), null));
    rack.addChassis(new Chassis(33, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powerl922, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Power L922 <br>IBM</p>'), null));
    rack.addChassis(new Chassis(31, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powers822lhalf, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>NFS2 <br>Power S822L<br>IBM</p>'), null));
    rack.addChassis(new Chassis(29, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powers822lfull, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>NFS1 <br>Power S822L<br>IBM</p>'), null));
    rack.addChassis(new Chassis(27, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powers822lfull, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Power S822L<br>IBM</p>'), null));
    rack.addChassis(new Chassis(25, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powers822lhalf, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Power S822L<br>IBM</p>'), null));
    rack.addChassis(new Chassis(23, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.powers822lhalf, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Power S822L<br>IBM</p>'), null));
    rack.addChassis(new Chassis(21, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.essstorage, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>ESS Storage 5U92<br>IBM</p>'), null));
    rack.addChassis(new Chassis(16, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.essstorage, 'Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>ESS Storage 5U92<br>IBM</p>'), null));

    rack.addChassis(new Chassis(11, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.rack5blackbox, 'utility', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b>'), null));
    rack.addChassis(new Chassis(6, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.rack5blackbox, 'utility', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b>'), null));

    checkRack(rack, unitLeftpx);
}

function createRack6(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(50, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.grate2u, 'utility', new ChassisInformation('Utility Switch'), null));

    rack.addChassis(new Chassis(48, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.purestorage, 'Pure Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Pure Storage</p>'), null));
    rack.addChassis(new Chassis(44, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.pureexpansion, 'Pure Storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Pure Storage</p>'), null));

    rack.addChassis(new Chassis(24, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.powerscale, 'storage', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>Power Scale DELL EMC</p>'), null));
    rack.addChassis(new Chassis(20, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.dellisilon, 'Dell Isilon', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>HPC Isilon</p>'), null));
    rack.addChassis(new Chassis(16, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.dellisilon, 'Dell Isilon', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>HPC Isilon</p>'), null));
    rack.addChassis(new Chassis(12, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.dellisilon, 'Dell Isilon', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>HPC Isilon</p>'), null));
    rack.addChassis(new Chassis(8, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.dellisilon, 'Dell Isilon', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>HPC Isilon</p>'), null));
    rack.addChassis(new Chassis(4, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.dellisilon, 'Dell Isilon', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b><p>HPC Isilon</p>'), null));

    checkRack(rack, unitLeftpx);
}

function createRack7(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(46, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.rack7top, 'utility', new ChassisInformation('Utility'), null));

    rack.addChassis(new Chassis(16, 13, rackUnitHeight(13), rackWidth, unitLeftpx, imageDict.rack78switch, 'utility', new ChassisInformation('<h3>IM Networking</h3><p>POC</p>'), null));

    checkRack(rack, unitLeftpx);
}

function createRack8(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(50, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.rack8purple, 'utility', new ChassisInformation('<h3>EIO</h3><b>Owner: Jesse D</b>'), null));
    rack.addChassis(new Chassis(44, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.rack8purple, 'utility', new ChassisInformation('<h3>EIO</h3><b>Owner: Jesse D</b>'), null));
    rack.addChassis(new Chassis(37, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.commscope, 'utility', new ChassisInformation('<h3>EIO</h3><b>Owner: Jesse D</b><p>Commscope</p>'), null));

    rack.addChassis(new Chassis(16, 13, rackUnitHeight(13), rackWidth, unitLeftpx, imageDict.rack78switch, 'utility', new ChassisInformation('<h3>EIO Networking</h3><b>Owner: Jesse D</b>'), null));

    checkRack(rack, unitLeftpx);
}

function createRack9(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(49, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730half, 'utility', new ChassisInformation('<h3>HPCDTN</h3><b>Owner: Scott Serr</b><p>DELL PowerEdge R430</p>'), null));
    rack.addChassis(new Chassis(48, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellcover, 'utility', new ChassisInformation('<h3>New HPCDTN</h3><b>Owner: Scott Serr</b>'), null));
    rack.addChassis(new Chassis(47, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe720half, 'utility', new ChassisInformation('<h3>HPClm1</h3><b>Owner: Kit Menlove</b><p>DELL PowerEdge R420</p>'), null));
    rack.addChassis(new Chassis(46, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730, 'utility', new ChassisInformation('<h3>HPCdb Old</h3><b>Owner: Matthew Sgambati</b><p>DELL PowerEdge R430</p>'), null));
    rack.addChassis(new Chassis(45, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730, 'utility', new ChassisInformation('<h3>Software-dev-be</h3><b>Owner: Kit Menlove</b><p>DELL PowerEdge R430</p>'), null));
    rack.addChassis(new Chassis(44, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730half, 'utility', new ChassisInformation('<h3>Utility</h3><p>DELL PowerEdge R430</p>'), null));
    rack.addChassis(new Chassis(43, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730, 'utility', new ChassisInformation('<h3>Utility</h3><p>DELL PowerEdge R430</p>'), null));
    rack.addChassis(new Chassis(42, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.hpcstorage, 'utility', new ChassisInformation('<h3>Storage</h3><b>Owner: Shane Grover</b>'), null));

    rack.addChassis(new Chassis(40, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.citrix, 'utility', new ChassisInformation('<h3>Citrix 4</h3><b>Owner: Matthew Sgambati</b><p>Super Micro</p>'), null));
    rack.addChassis(new Chassis(38, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.citrix, 'utility', new ChassisInformation('<h3>Citrix 3</h3><b>Owner: Matthew Sgambati</b><p>Super Micro</p>'), null));
    rack.addChassis(new Chassis(36, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.citrix, 'utility', new ChassisInformation('<h3>Citrix 2</h3><b>Owner: Matthew Sgambati</b><p>Super Micro</p>'), null));
    rack.addChassis(new Chassis(34, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.citrix, 'utility', new ChassisInformation('<h3>Citrix 1</h3><b>Owner: Matthew Sgambati</b><p>Super Micro</p>'), null));
    rack.addChassis(new Chassis(32, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.nutanix, 'utility', new ChassisInformation('<h3>Nutanix</h3><b>Owner: Scott Serr </b>'), null));
    rack.addChassis(new Chassis(30, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.nutanix, 'utility', new ChassisInformation('<h3>Nutanix</h3><b>Owner: Scott Serr </b>'), null));

    // rack.addChassis(new Chassis(46, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730half, 'utility', new ChassisInformation('Utility hpcdtn'), null));
    // rack.addChassis(new Chassis(43, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730, 'utility', new ChassisInformation('Utility hpcgitlab'), null));
    // rack.addChassis(new Chassis(42, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe720, 'utility', new ChassisInformation('Utility hpcadmin'), null));
    // rack.addChassis(new Chassis(41, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe720half, 'utility', new ChassisInformation('Utility hpclm1'), null));
    // rack.addChassis(new Chassis(39, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730half, 'utility', new ChassisInformation('Utility hpcdns'), null));
    // rack.addChassis(new Chassis(38, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730, 'utility', new ChassisInformation('Utility hpcdb'), null));
    // rack.addChassis(new Chassis(37, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe720half, 'utility', new ChassisInformation('Utility hpcstorage'), null));
    // rack.addChassis(new Chassis(32, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.nutanix, 'utility', new ChassisInformation('Utility nutanix'), null));
    // rack.addChassis(new Chassis(28, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.hpcview, 'HPC View', new ChassisInformation('Utility hpcview'), null));
    // rack.addChassis(new Chassis(24, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.hpcview, 'Viz', new ChassisInformation('Utility viz4'), null));
    // rack.addChassis(new Chassis(20, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.hpcview, 'Viz', new ChassisInformation('Utility viz3'), null));
    // rack.addChassis(new Chassis(16, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.hpcview, 'Viz', new ChassisInformation('Utility viz2'), null));
    // rack.addChassis(new Chassis(12, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.hpcview, 'Viz', new ChassisInformation('Utility viz1'), null));
    // rack.addChassis(new Chassis(8, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.vdi, 'VDI', new ChassisInformation('Utility software-be'), null));
    rack.addChassis(new Chassis(16, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.testcluster, 'utility', new ChassisInformation('<h3>INTEL Test Cluster 4</h3><b>Owner: Matthew Sgambati</b>'), null));
    rack.addChassis(new Chassis(12, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.testcluster, 'utility', new ChassisInformation('<h3>INTEL Test Cluster 4</h3><b>Owner: Matthew Sgambati</b>'), null));

    rack.addChassis(new Chassis(8, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'Servers ', new ChassisInformation('<h3>Dell EMC</h3><b>Owner: Scott Serr</b> '), null));

    rack.addChassis(new Chassis(5, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730half, 'utility', new ChassisInformation('<h3>hpcldap</h3><b>Owner: Scott Serr</b> '), null));
    rack.addChassis(new Chassis(4, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe720, 'utility', new ChassisInformation('<h3>hpcsc</h3><b>Owner: Ben Nickel</b>'), null));
    rack.addChassis(new Chassis(3, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730half, 'utility', new ChassisInformation('<h3>hpclogin</h3><b>Owner: Ben Nickel</b>'), null));
    checkRack(rack, unitLeftpx);
}

function createRack10(rack, imageDict, unitLeftpx) {
    // rack.addChassis(new Chassis(49, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.ciscoswitch, 'Cisco Switch', new ChassisInformation('Utility'), null));

    // rack.addChassis(new Chassis(47, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(46, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe730half, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(45, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe620, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(44, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.pe820, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(42, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.pe820, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(40, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.pe820, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(38, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.pe820, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(36, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.pe820, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(34, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.pe820, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(32, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.rack10u31, 'utility', new ChassisInformation('Utility'), null));
    rack.addChassis(new Chassis(30, 3, rackUnitHeight(3), rackWidth, unitLeftpx, imageDict.nvdia, 'NVDIA', new ChassisInformation('<h3>Galena</h3> <b>Owner: Brandon Biggs</b>'), null));

    // rack.addChassis(new Chassis(19, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.falcongateway, 'Falcon Gateway', new ChassisInformation('Utility Falcon Gateway 4'), null));
    // rack.addChassis(new Chassis(18, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.falcongateway, 'Falcon Gateway', new ChassisInformation('Utility Falcon Gateway 3'), null));
    // rack.addChassis(new Chassis(17, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.falcongateway, 'Falcon Gateway', new ChassisInformation('Utility Falcon Gateway 2'), null));
    // rack.addChassis(new Chassis(16, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.falcongateway, 'Falcon Gateway', new ChassisInformation('Utility Falcon Gateway 1'), null));
    // rack.addChassis(new Chassis(15, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.falconswitch, 'Switch', new ChassisInformation('Utility Falcon Switch'), null));
    // rack.addChassis(new Chassis(14, 10, rackUnitHeight(10), rackWidth, unitLeftpx, imageDict.falconviz, 'Falcon Viz', new ChassisInformation('Utility Falcon Viz'), null));

    checkRack(rack, unitLeftpx);
}

function createRack11(rack, imageDict, unitLeftpx) {
    // rack.addChassis(new Chassis(26, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.hpcbuild, 'HPC Build1', new ChassisInformation('Utility HPC Build1'), null));

    // rack.addChassis(new Chassis(22, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.rack11u23, 'OPA1 & OPA2', new ChassisInformation('Utility OPA1 & OPA2'), null));

    // rack.addChassis(new Chassis(13, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.microhead, 'Micro Head Node', new ChassisInformation('Utility Micro Head Node'), null));
    // rack.addChassis(new Chassis(9, 8, rackUnitHeight(8), rackWidth, unitLeftpx, imageDict.micro, 'Micro', new ChassisInformation('Utility Micro'), null));
    rack.addChassis(new Chassis(50, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.cheesegrater, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3> <b>Owner: Logan H and Justin M</b><p>Mac Pro M2 Ultra</p>'), null));
    rack.addChassis(new Chassis(45, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.cheesegrater, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3> <b>Owner: Logan H and Justin M</b><p>Mac Pro M2 Ultra</p>'), null));
    rack.addChassis(new Chassis(40, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.moosestudio, 'MOOSE', new ChassisInformation('<h3>MOOSE Studio 1-4</h3> <b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(35, 5, rackUnitHeight(5), rackWidth, unitLeftpx, imageDict.moosestudio, 'MOOSE', new ChassisInformation('<h3>MOOSE Studio 4-8</h3> <b>Owner: Logan H and Justin M</b>'), null));

    rack.addChassis(new Chassis(22, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(21, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode2, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(20, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.h100, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(17, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosecontrol, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(18, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.r420, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(14, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpeapollo, 'MOOSE', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));

    checkRack(rack, unitLeftpx);
}

function createRack12(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(50, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.nrdsportal, 'utility', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));

    // rack.addChassis(new Chassis(51, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.managementswitch, 'Management Switch', new ChassisInformation('Utility Management Switch'), null));

    rack.addChassis(new Chassis(49, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(48, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(47, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(46, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(45, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(44, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(43, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(42, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(41, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(40, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(39, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(38, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(37, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(36, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(35, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(34, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(33, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(32, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(31, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(30, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(29, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(28, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(27, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(26, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(25, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(24, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(23, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(22, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(21, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(20, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(19, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(18, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(17, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));
    rack.addChassis(new Chassis(16, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.meowbuild, 'meowbuild', new ChassisInformation('<h3>MOOSE Build Boxes</h3><b>Owner: Logan H and Justin M</b><p>romebuild</p>'), null));

    rack.addChassis(new Chassis(13, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode3, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(12, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode3, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(11, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode3, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(10, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode3, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(9, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode3, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));
    rack.addChassis(new Chassis(8, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.moosenode3, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b>'), null));

    rack.addChassis(new Chassis(7, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.per6515, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b><p>milanbuild</p>'), null));
    rack.addChassis(new Chassis(6, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.per6515, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b><p>milanbuild</p>'), null));
    rack.addChassis(new Chassis(5, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.per6515, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b><p>milanbuild</p>'), null));
    rack.addChassis(new Chassis(4, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.per6515, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b><p>milanbuild</p>'), null));
    rack.addChassis(new Chassis(3, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.per6515, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b><p>milanbuild</p>'), null));
    rack.addChassis(new Chassis(2, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.per6515, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b><p>milanbuild</p>'), null));
    rack.addChassis(new Chassis(1, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.per6515, 'Moose', new ChassisInformation('<h3>MOOSE</h3><b>Owner: Logan H and Justin M</b><p>milanbuild</p>'), null));

    // rack.addChassis(new Chassis(12, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.mactowers, 'MAC Towers', new ChassisInformation('Utility mac towers (6)'), null));
    // rack.addChassis(new Chassis(6, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.mactowers, 'MAC Towers', new ChassisInformation('Utility mac towers (6)'), null));

    checkRack(rack, unitLeftpx);
}

function createRack13(rack, imageDict, unitLeftpx) {
    // rack.addChassis(new Chassis(51, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.managementswitch2, 'Switch ', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(50, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.managementswitch2, 'Switch ', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(49, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.ibswitches, 'IBSwitch ', new ChassisInformation('Utility IB switches'), null));
    // rack.addChassis(new Chassis(48, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.ibswitches, 'IBSwitch ', new ChassisInformation('Utility IB switches'), null));
    rack.addChassis(new Chassis(47, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'Servers ', new ChassisInformation('<h3>DELL EMC</h3><b>Owner: Jared V</b>'), null));
    rack.addChassis(new Chassis(45, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'Servers ', new ChassisInformation('<h3>DELL EMC</h3><b>Owner: Jared V</b>'), null));
    rack.addChassis(new Chassis(43, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'Server ', new ChassisInformation('<h3>DELL EMC</h3><b>Owner: Jared V</b>'), null));
    rack.addChassis(new Chassis(41, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'Server ', new ChassisInformation('<h3>DELL EMC</h3><b>Owner: Jared V</b>'), null));
    rack.addChassis(new Chassis(39, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'Server ', new ChassisInformation('<h3>DELL EMC</h3><b>Owner: Jared V</b>'), null));
    rack.addChassis(new Chassis(37, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'Server ', new ChassisInformation('<h3>DELL EMC</h3><b>Owner: Jared V</b>'), null));

    rack.addChassis(new Chassis(23, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.truenas, 'Server ', new ChassisInformation('<h3>TrueNAS</h3><b>Owner: Scott J and Jeff K</b>'), null));
    rack.addChassis(new Chassis(19, 3, rackUnitHeight(3), rackWidth, unitLeftpx, imageDict.lambda, 'Server ', new ChassisInformation('<h3>Lamda</h3><b>Owner: Scott J and Jeff K</b>'), null));
    // rack.addChassis(new Chassis(37, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.rack13u37, '', new ChassisInformation('Utility'), null));

    // rack.addChassis(new Chassis(32, 3, rackUnitHeight(3), rackWidth, unitLeftpx, imageDict.rack13u32, '', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(29, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'IAA/WDT', new ChassisInformation('Utility IAA/WDT'), null));
    // rack.addChassis(new Chassis(28, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'IAA/WDT', new ChassisInformation('Utility IAA/WDT'), null));
    // rack.addChassis(new Chassis(27, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'IAA/WDT', new ChassisInformation('Utility IAA/WDT'), null));

    // rack.addChassis(new Chassis(25, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'Cyberstrike', new ChassisInformation('Utility Cyberstrike'), null));
    // rack.addChassis(new Chassis(24, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'Cyberstrike', new ChassisInformation('Utility Cyberstrike'), null));
    // rack.addChassis(new Chassis(23, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'Cyberstrike', new ChassisInformation('Utility Cyberstrike'), null));
    // rack.addChassis(new Chassis(22, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'University Lab', new ChassisInformation('Utility University Lab'), null));
    // rack.addChassis(new Chassis(21, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'University Lab', new ChassisInformation('Utility University Lab'), null));
    // rack.addChassis(new Chassis(20, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'University Lab', new ChassisInformation('Utility University Lab'), null));



    checkRack(rack, unitLeftpx);
}

function createRack14(rack, imageDict, unitLeftpx) {
    rack.addChassis(new Chassis(49, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.row14node, 'switch ', new ChassisInformation('Utility'), null));

    // rack.addChassis(new Chassis(44, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.rack13u44, 'utility', new ChassisInformation('Utility'), null));
    // rack.addChassis(new Chassis(42, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe10, 'HPE', new ChassisInformation('Utility hpe 1'), null));
    // rack.addChassis(new Chassis(40, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe10, 'HPE', new ChassisInformation('Utility hpe 2'), null));
    rack.addChassis(new Chassis(31, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'HPE', new ChassisInformation('<h3>Cyberstrike</h3><b>Owner: Scott J and Jared V</b>'), null));
    rack.addChassis(new Chassis(30, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'HPE', new ChassisInformation('<h3>Cyberstrike</h3><b>Owner: Scott J and Jared V</b>'), null));
    rack.addChassis(new Chassis(29, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'HPE', new ChassisInformation('<h3>Cyberstrike</h3><b>Owner: Scott J and Jared V</b>'), null));
    rack.addChassis(new Chassis(28, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'HPE', new ChassisInformation('<h3>Cyberstrike</h3><b>Owner: Scott J and Jared V</b>'), null));
    rack.addChassis(new Chassis(27, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'HPE', new ChassisInformation('<h3>Cyberstrike</h3><b>Owner: Scott J and Jared V</b>'), null));
    rack.addChassis(new Chassis(26, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.dellemc, 'HPE', new ChassisInformation('<h3>Cyberstrike</h3><b>Owner: Scott J and Jared V</b>'), null));

    // rack.addChassis(new Chassis(37, 4, rackUnitHeight(4), rackWidth, unitLeftpx, imageDict.lambda, 'Lambda', new ChassisInformation('Utility lambda'), null));
    // rack.addChassis(new Chassis(33, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.dellchassis, 'Dell', new ChassisInformation('Utility dell 1'), null));
    // rack.addChassis(new Chassis(31, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.dellchassis, 'Dell', new ChassisInformation('Utility dell 2'), null));
    // rack.addChassis(new Chassis(29, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.dellchassis, 'Dell', new ChassisInformation('Utility dell 3'), null));
    // rack.addChassis(new Chassis(27, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.dellchassis, 'Dell', new ChassisInformation('Utility dell 4'), null));
    // rack.addChassis(new Chassis(25, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 3'), null));
    rack.addChassis(new Chassis(23, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 4'), null));
    rack.addChassis(new Chassis(21, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.rack13u21, 'utility', new ChassisInformation('Utility'), null));
    rack.addChassis(new Chassis(20, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 5'), null));
    rack.addChassis(new Chassis(18, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 6'), null));
    rack.addChassis(new Chassis(16, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 7'), null));
    rack.addChassis(new Chassis(14, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 8'), null));

    rack.addChassis(new Chassis(6, 6, rackUnitHeight(6), rackWidth, unitLeftpx, imageDict.rack14node, 'HPE', new ChassisInformation('Utility'), null));

    // rack.addChassis(new Chassis(12, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 9'), null));
    // rack.addChassis(new Chassis(10, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 10'), null));
    // rack.addChassis(new Chassis(8, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 11'), null));
    // rack.addChassis(new Chassis(6, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 12'), null));
    // rack.addChassis(new Chassis(4, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe12, 'HPE', new ChassisInformation('Utility hpe 13'), null));
    // rack.addChassis(new Chassis(2, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpe9, 'HPE', new ChassisInformation('Utility hpe 14'), null));

    checkRack(rack, unitLeftpx);
}

function createRack15(rack, imageDict, unitLeftpx) {
    // rack.addChassis(new Chassis(49, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.hpcinet, 'HPC INET', new ChassisInformation('Utility hpcinet'), null));
    rack.addChassis(new Chassis(48, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.opman, 'OPMAN', new ChassisInformation('Utility opman'), null));
    rack.addChassis(new Chassis(45, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.pe820nocover, 'OPMAN', new ChassisInformation('Utility'), null));
    rack.addChassis(new Chassis(43, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.adprd01, 'ADPRD 01', new ChassisInformation('Utility ADPRD 01'), null));
    rack.addChassis(new Chassis(42, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.peR740, 'IAA/WDT', new ChassisInformation('Utility'), null));
    rack.addChassis(new Chassis(40, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.r430, 'IAA/WDT', new ChassisInformation('Utility'), null));

    // rack.addChassis(new Chassis(47, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpcwin, 'HPC WIN', new ChassisInformation('Utility hpcwin'), null));
    // rack.addChassis(new Chassis(45, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.hpcwin2, 'HPC WIN2', new ChassisInformation('Utility hpcwin2'), null));

    rack.addChassis(new Chassis(29, 2, rackUnitHeight(2), rackWidth, unitLeftpx, imageDict.node, 'utility', new ChassisInformation('Utility'), null));
    rack.addChassis(new Chassis(23, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.pe410, 'utility', new ChassisInformation('Utility'), null));
    rack.addChassis(new Chassis(22, 1, rackUnitHeight(1), rackWidth, unitLeftpx, imageDict.rack13u21, 'utility', new ChassisInformation('Utility'), null));

    checkRack(rack, unitLeftpx);
}


/* Creates each rack and pushes them to full rack array
*  This array keeps track of racks in order to insert blank racks later
*/

//Rack(rowNumber, rackNumber, rackTotalUnits, unitLeftpx, rackWidthpx, unitHeightpx)
let rack1 = new Rack(1, 1, 51, rackStartLeft(1), rackWidth, rackHeight);
full_racks.push(rack1);
let rack2 = new Rack(1, 2, 51, rackStartLeft(2), rackWidth, rackHeight);
full_racks.push(rack2);
let rack3 = new Rack(1, 3, 51, rackStartLeft(3), rackWidth, rackHeight);
full_racks.push(rack3);
let rack4 = new Rack(1, 4, 51, rackStartLeft(4), rackWidth, rackHeight);
full_racks.push(rack4);
let rack5 = new Rack(1, 5, 51, rackStartLeft(5), rackWidth, rackHeight);
full_racks.push(rack5);
let rack6 = new Rack(1, 6, 51, rackStartLeft(6), rackWidth, rackHeight);
full_racks.push(rack6);
let rack7 = new Rack(1, 7, 51, rackStartLeft(7), rackWidth, rackHeight);
full_racks.push(rack7);
let rack8 = new Rack(1, 8, 51, rackStartLeft(8), rackWidth, rackHeight);
full_racks.push(rack8);
let rack9 = new Rack(1, 9, 51, rackStartLeft(9), rackWidth, rackHeight);
full_racks.push(rack9);
let rack10 = new Rack(1, 10, 51, rackStartLeft(10), rackWidth, rackHeight);
full_racks.push(rack10);
let rack11 = new Rack(1, 11, 51, rackStartLeft(11), rackWidth, rackHeight);
full_racks.push(rack11);
let rack12 = new Rack(1, 12, 51, rackStartLeft(12), rackWidth, rackHeight);
full_racks.push(rack12);
let rack13 = new Rack(1, 13, 51, rackStartLeft(13), rackWidth, rackHeight);
full_racks.push(rack13);
let rack14 = new Rack(1, 14, 51, rackStartLeft(14), rackWidth, rackHeight);
full_racks.push(rack14);
let rack15 = new Rack(1, 15, 51, rackStartLeft(15), rackWidth, rackHeight);
full_racks.push(rack15);

function display(rackSide) {
    //Row(numRacks, clusterName, information)
    let row1 = new Row(15, "Lemhi", "something here");
    var unit;
    var imageDict = "";

    if(rackSide === 'front') {
        imageDict = imageDictFront;
    }
    else {
        imageDict = imageDictBack;
    }

    /* Counts and displays units on the left of the pictures */
    for(unit = rack1.rackTotalUnits; unit > 0; unit--) {
        rackUnitCountArray.push(unit);
        $("#unitcount1").append(unit + "<br>");
        $("#unitcount1").css("font-size", "17.5px");
    }

    /* Creates rack based on rack object, image dictionary (front or back), and where
       the pictures will start for the pixels */
    createRack1(rack1, imageDict, highlightStartLeft(1));
    createRack2(rack2, imageDict, highlightStartLeft(2));
    createRack3(rack3, imageDict, highlightStartLeft(3));
    createRack4(rack4, imageDict, highlightStartLeft(4));
    createRack5(rack5, imageDict, highlightStartLeft(5));
    createRack6(rack6, imageDict, highlightStartLeft(6));
    createRack7(rack7, imageDict, highlightStartLeft(7));
    createRack8(rack8, imageDict, highlightStartLeft(8));
    createRack9(rack9, imageDict, highlightStartLeft(9));
    createRack10(rack10, imageDict, highlightStartLeft(10));
    createRack11(rack11, imageDict, highlightStartLeft(11));
    createRack12(rack12, imageDict, highlightStartLeft(12));
    createRack13(rack13, imageDict, highlightStartLeft(13));
    createRack14(rack14, imageDict, highlightStartLeft(14));
    createRack15(rack15, imageDict, highlightStartLeft(15));

    /* Adds the rack to the cluster's row */
    row1.addRack(rack1);
    row1.addRack(rack2);
    row1.addRack(rack3);
    row1.addRack(rack4);
    row1.addRack(rack5);
    row1.addRack(rack6);
    row1.addRack(rack7);
    row1.addRack(rack8);
    row1.addRack(rack9);
    row1.addRack(rack10);
    row1.addRack(rack11);
    row1.addRack(rack12);
    row1.addRack(rack13);
    row1.addRack(rack14);
    row1.addRack(rack15);

    let emptyRacks = row1.numRacks - full_racks.length;
    let rackNum = full_racks.length + 1;
    let rack;
    let rackName = "";

    /* Inserts a blank rack if the the number of full racks does not equal the
    *  The number of total racks in the row
    */
    for(rack = 1; rack <= emptyRacks; rack++) {
        rackName = "rack" + String(rackNum) + "empty";
        rackName = new Rack(rackNum, 51, rackStartLeft(rackNum), rackWidth, rackHeight);
        createBlankRack(rackName, highlightStartLeft(rackNum));
        row1.addRack(rackName);
        rackNum++;
    }
    /* Displays completed row */
    $("#rowdata1").append(row1.present());
}
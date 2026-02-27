const {Acore} = require('Acore');
const {planet} = require('planets/planet');
planet.techTree = TechTree.nodeRoot( "TechTree", Acore, true, run(() => {}));
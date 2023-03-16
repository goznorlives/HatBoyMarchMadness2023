import { TiledMapResource } from '@excaliburjs/plugin-tiled';
import { ImageSource } from 'excalibur';
import sword from './images/sword.png';

import "../tiled/keldata.tmx";

import "../tiled/Advertising6.tsj";
import "../tiled/Building3.tsj";
import "../tiled/Floor_Metal.tsj";
import "../tiled/Road_Chunk5.tsj";

// import "../tiled/images/Advertising5.png";
import "../tiled/images/Advertising6.png";
// import "../tiled/images/Advertising7.png";
import "../tiled/images/Building3.png";
// import "../tiled/images/BuildingBlock1.png";
// import "../tiled/images/BuildingBlock2.png";
// import "../tiled/images/BuildingBlock18.png";
// import "../tiled/images/BuildingBlock19.png";
// import "../tiled/images/BuildingBlock24.png";
import "../tiled/images/Floor_Metal_01-128x64.png";
import "../tiled/images/Road_Chunk5.png";
// import "../tiled/images/SateliteDish2.png";
// import "../tiled/images/Sidewalk_Chunk2.png";
// import "../tiled/images/Sidewalk_Tile1.png";

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    Sword: new ImageSource(sword),
    KeldataMap: new TiledMapResource('keldata.tmx'),
}

export { Resources }

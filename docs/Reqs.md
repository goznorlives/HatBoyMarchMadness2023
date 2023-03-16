# Requirements
## _Requirements/Design Document for WIP Game for HatBoy March Madness 2023_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This document will explain some of the design ideas for mechanics in the game with their
requirements and restrictions.

## Game Summary

_A 2.5D isometric pixel/voxel art style cyberpunk-esc game._
_Similar to Shadowrun._

## Tech Stack

- [excalibur.js][excal]
- [node.js][node]
- [git][git]

## Art
_Some helpful links to some art/art videos online that serves as an inspiration or a resource. Art is currently planned to be in a 128x64 isometric tileset resolution._

- [Congruent][cong]
- [8-Direction Characters][8dir]
- [Voxel Spaceships][voxelspace]
- [Voxel Cyberpunk City][voxelcybercity]
- [Isometric Tiles][isotiles]
- [Dungeons Deep][dungeonsdeep]
- [32x32 Character Template][32bitcharacter]
- [Blocky Life][blockylife]
- [Isometric Tile Basics][isoclass]

## Tile/Voxel Editors

- [Tiled][tiled]
- [Magica][magica]

## Game Features

_State Machine_

- Randomly compute initiative for turn order
- Each entity performs their action on their turn (effects can vary from immediately to eventually casts after x turns)
- Repeat
- PS - Stats can be weighted to the entity's stat values (i.e. if your player character has above 10 initiative, you will be given a multiplier on your initiative roll based on your stats, this can apply to other stats as well)

_Collision Detection_

- Not much needed here, collision detection against the world, player, enemies, other entities, etc

_Player Character_

- Use the Actor class

_Outdoor Maps_

- One map per city block
- Each block consists of two streets (one going NE, the other NW)
- Ignore the buildings in the opposite side of the street (southern)
- The street will be the closest thing to the camera
- Abstract out the map loader

_Movement_

- Point & Click (PC)
- Touch (mobile)
- Acceleration based

_Actions_

- Point & Right Click (PC)
- Long-press / double-press (mobile)
- Naming conventions for abilities not clear, will update

_UI_

- Radial menus (long press & drag in a direction to activate)

_UX_

- Ability to map keybinds for non-mobile players

_Fast Travel_

- Subway every few blocks that transports a player for a fee to another subway station
- The fee increases with the distance increase to the station picked
- Can only visit stations previously visited

_Shops_

- Used to perform upgrades to the PC (Player Character)
- Only available at Subway Stops (could expand to wandering traders/shops?)

_Zones_

- Increased difficult + spawning towards the center of a zone
- In a grid (similar to city blocks)
- Controlled by different corporations
- Relationships with corporations can affect the difficulty of the area (could be out of scope)
- Hack to unlock checkpoints within the zones

_Missions_

- ChatGPT to create mission prompts and other things (coporation names, etc...)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
    
   [excal]: <https://excaliburjs.com>
   [git]: <https://github.com>    
   [node]: <https://nodejs.org/en/>
    
   [cong]: <https://mrmotarius.itch.io/congruent>
   [8dir]: <https://axulart.itch.io/small-8-direction-characters>    
   [voxelspace]: <https://maxparata.itch.io/voxel-spaceships>
   [voxelcybercity]: <https://maxparata.itch.io/cyberpunkcity-monogon>
   [isotiles]: <https://screamingbrainstudios.itch.io/isotilepack>
   [dungeonsdeep]: <https://mapcrow.itch.io/dungeons-deep>
   [32bitcharacter]: <https://solaarnoble.itch.io/32x32-character>
   [blockylife]: <https://admurin.itch.io/blocky-life>
   [isoclass]: <https://www.youtube.com/watch?v=OqwQBWEzcxU>
   
   [tiled]: <https://www.mapeditor.org/>
   [magica]: <https://ephtracy.github.io/>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

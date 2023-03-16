import { DevTool } from '@excaliburjs/dev-tools';
import {
  Engine,
  Loader,
  DisplayMode,
  IsometricMap,
  Vector,
  vec,
  ImageSource,
  Resource,
  Logger,
} from 'excalibur';
// import { LevelOne } from './scenes/level-one/level-one';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import { KeldataScene } from './scenes/keldata/keldata';

/**
 * Managed game class
 */
class Game extends Engine {
  private player: Player;
  // private levelOne: LevelOne;
  private isoMap: IsometricMap;
  private currentTileCoord: Vector;
  private keldataScene: KeldataScene;

  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }

  public async start() {

    // this.input.pointers.on('move', evt => {

    //   // Convert the current world position coordinates to tile x/y
    //   this.currentTileCoord = this.isoMap.worldToTile(evt.worldPos);
    // });

    // this.currentScene.add(this.isoMap);

    // this.levelOne.add(this.player);
    // game.add('levelOne', this.levelOne);


    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    Logger.getInstance().info('Loading resources...');

    return super.start(loader).then(() => {
      // Create new scene with a player
      // this.levelOne = new LevelOne();
      this.player = new Player();


      this.currentTileCoord = vec(0, 0);

      // Create the main Keldata scene
      this.keldataScene = new KeldataScene();

      // Add the player to the scene
      this.keldataScene.add(this.player);

      this.add('keldata', this.keldataScene);

    });
  }
}

const game = new Game();
const devtool = new DevTool(game);
game.start().then(() => {
  game.goToScene('keldata');
});

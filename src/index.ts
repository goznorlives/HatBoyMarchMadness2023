import { DevTool } from '@excaliburjs/dev-tools';
import {
  Engine,
  Loader,
  DisplayMode,
  Logger,
} from 'excalibur';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import { KeldataScene } from './scenes/keldata/keldata';

/**
 * Managed game class
 */
class Game extends Engine {
  private player: Player;
  private keldataScene: KeldataScene;

  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }

  public async start() {

    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    Logger.getInstance().info('Loading resources...');

    return super.start(loader).then(() => {
      // Create new scene with a player
      // this.levelOne = new LevelOne();
      this.player = new Player();

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

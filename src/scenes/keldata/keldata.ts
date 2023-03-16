import { Engine, Scene } from 'excalibur';
import { KeldataMap } from '../../maps/keldatamap';

/**
 * Managed scene
 */
export class KeldataScene extends Scene {
  private map: KeldataMap;

  public onInitialize(engine: Engine) {

    this.map = new KeldataMap()
    this.add(this.map);

    this.map.initMap(this);

    return super.onInitialize(engine);
  }

  public onActivate() {}
  public onDeactivate() {}
}

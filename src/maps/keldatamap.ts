import { TiledMapResource } from "@excaliburjs/plugin-tiled";
import { 
  Actor, 
  IsometricEntityComponent, 
  IsometricMap, 
  Scene, 
  vec 
} from "excalibur";
import { Resources } from "../resources";


export class KeldataMap extends Actor {
  private isoMap: IsometricMap;
  private tileMap: TiledMapResource;
  private isoComponent: IsometricEntityComponent;

  public initMap(scene: Scene): void {
    this.tileMap = Resources.KeldataMap;
    
    this.isoMap = new IsometricMap({
      pos: vec(250, 10),
      tileWidth: 32,
      tileHeight: 32,
      columns: 35,
      rows: 22,
    });
    
    this.isoComponent = new IsometricEntityComponent(this.isoMap);

    this.tileMap.addTiledMapToScene(scene);
  }
}

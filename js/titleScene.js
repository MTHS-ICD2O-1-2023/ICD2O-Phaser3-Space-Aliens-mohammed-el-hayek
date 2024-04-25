/* global Phaser */

//Copyright (C) 2024 Mohammed All right reserved
//
//Created by: Mohammed
//Created on: Apr 2024
//This is the Title Scene

/**
 * This class the Title Scene
 */
class TitleScene extends Phaser.Scene{
  /**
   * This method is the construtor.
   */
  constructor(){
    super({key: "titleScene"})
  }

  /**
   * Can be defind on your own Scene.
   * This method is called by the Scene Manger when the Scene starts,
   * Before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data){
    this.camaras.main.setBackgroundColor("ffffff")
  }
  /**
   * Can be difined on your Scene.
   * Use it to load assets.
   */
  preload() {
    console.log("Title Scene")
  }

  /**
   * Can be difined on your own Scene.
   * Use it to create your game object.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    //pas
  }

  /**
   * Should be overriddn by your own Scene.
   * This method is called once per game step while the scene is runing.
   * @param {number} time - This current time.
   * @param {number} delta - This delta time in ms since the last frame.
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene
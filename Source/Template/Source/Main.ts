namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  export let playerClass: String;
  console.log("FudgeStory template starting");
  //define transitions
  export let transition = {
    clock: {
      duration: 3,
      alpha: "",
      edge: 1
    }
  };
  //define sound
  export let sound = {
    //Musik
    backgroundtheme: "",
    // Sound
    click: "",

  };
  export let locations = {
    city: {
      name: "basictown",
      background: "Source/img/background/basictown.jpg"
    },
    academyFront: {
      name: "academy front",
      background: "Source/img/background/academyFront.jpg"
    },
    aula: {
      name: "academy Hall",
      background: "Source/img/background/Aula.jpg"
    },
    academyPark: {
      name: "academy park",
      background: "Source/img/background/academyPark.jpg"
    }
  };
  //define characteres
  export let characters = {
    Narrator: {
      name: ""
    },
    Teacher: {
      name: "lazy Sensei",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "Source/img/chars/Teacher.png"
      }
    },
    Protagonist: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose :{
        talkingCorner : "Source/img/chars/Mark/Mark_Happy.png"
      }
    },
    Natsu: {
      name: "Natsu",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "Source/img/chars/Natsu.png",
        smile: "",
        angry: "Source/img/chars/Natsu_angry.png"
      }
    },
    Aoi: {
      name: "Aoi",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "Source/img/chars/Aoi/Aoi_Smile.png",
        smile: "Source/img/chars/Aoi/Aoi_Smile_2.png",
        surprise: "Source/img/chars/Aoi/Aoi_Surprised.png",
        blush_surprised: "Source/img/chars/Aoi/Aoi_Surprised_2.png",
      }
    },
    Mark: {
      name: "Mark",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Source/img/chars/Mark.png",
        smile: "Source/img/chars/Mark_Smile.png"
      }
    },
    Tensin: {
      name: "Tensin",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Source/img/chars/Tensin.png",
        smile: "Source/img/chars/Tensin_smile.png",

      }
    },
  };
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.A && ƒ.KEYBOARD_CODE.B:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.C:
        console.log("load");
        await ƒS.Progress.load();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "ersterteil" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
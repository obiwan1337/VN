namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

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
      name: "Sustown",
      background: "Source/img/background/town.jpg"
    }
  };
  //define characteres
  export let characters = {
    Narrator: {
      name: ""
    },
    Natsu: {
      name: "Natsu",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "Source/img/chars/Natsu.png",
        smile: ""
      }
    },
    Protagonist: {
      name: ""

    }
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
      { scene: Text, name: "erstesteil" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
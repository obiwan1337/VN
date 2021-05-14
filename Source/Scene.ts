namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("Tut");

   
    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
    ƒS.Speech.setTickerDelays(10, 2);
    await ƒS.Location.show(locations.city);

    await ƒS.update(1);
    ƒS.Speech.set(playerData.Protagonist, "WOAHHH!"); //text wird direkt angezeigt weil set
    await signalDelay2();
    await ƒS.Speech.tell(characters.Narrator, "The Castle is even bigger than they told me it would be. It even looks gorgeous. ");
    await ƒS.Speech.tell(characters.Narrator, "I can finally learn the way of the ");
    let classDecision = {
      iSaySword: "Sword",
      iSayBow: "Bow",
      iSayMage: "Mage",
      iSayRogue: "Rogue"
    }

    let classDecisionElement = await ƒS.Menu.getInput(classDecision, "Decision"); {
      switch (classDecisionElement) {
        case classDecision.iSaySword:
          await ƒS.Speech.tell(characters.Narrator, "Sword. The way of the sword.");
          ƒS.Speech.clear();
          playerData.Protagonist.class = "Sword";
          await ƒS.update(1);
          break;
        case classDecision.iSayBow:
          await ƒS.Speech.tell(characters.Narrator, "Bow. The way of the bow.");
          playerData.Protagonist.class = "Bow";
          ƒS.Speech.clear();
          await ƒS.update(1);
          break;
        case classDecision.iSayMage:
          await ƒS.Speech.tell(characters.Narrator, "Magic. The way of magic.");
          playerData.Protagonist.class = "Mage";
          ƒS.Speech.clear();
          await ƒS.update(1);
          break;
        case classDecision.iSayRogue:
          await ƒS.Speech.tell(characters.Narrator, "Shadow. The way of the shadow.");
          playerData.Protagonist.class = "Rogue";
          ƒS.Speech.clear();
          await ƒS.update(1);
          break;
        default:
          break;
      }
    }
    await ƒS.Character.show(playerData.Protagonist, playerData.Protagonist.pose.talkingCorner, ƒS.positionPercent(-20, 330));
    await ƒS.update(1);
    await ƒS.Speech.tell(playerData.Protagonist, "Now where is the Aula thingy??");
    await ƒS.Character.hide(playerData.Protagonist);
    await ƒS.Location.show(locations.aula);
    await ƒS.update(1);


    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Good now i just gotta get the paperstuff over with...");
    await ƒS.Speech.tell(characters.Narrator, "Ugghhh. This will take ages. nearly 50 Ppl are in the line I have to wait at.");
    await ƒS.Location.show(locations.aula);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Narrator, "Ok so now what.. i heard there is some ceremony happening after the signing in...");
    await ƒS.Speech.tell(characters.Narrator, "Where might this be?... I cant see anything put up pointing to it.. Should i ask someone?");
    let askForHelpInAula = {
      iSayAsk: "Ask someone.",
      iSayDontAsk: "Don't ask and search alone."
    };
    let askForHelpInAulaElement = await ƒS.Menu.getInput(askForHelpInAula, "class"); {
      switch (askForHelpInAulaElement) {
        case askForHelpInAula.iSayAsk:
          await ƒS.Speech.tell(characters.Narrator, "I should probably ask someone... ");
          await ƒS.Character.show(playerData.Protagonist, playerData.Protagonist.pose.talkingCorner, ƒS.positionPercent(50, 100));
          await ƒS.update(1);
          await ƒS.Speech.tell(playerData.Protagonist, "Umm, hi there? I was wondering where we have to go for the Introduction.");
          await ƒS.Speech.tell(playerData.Protagonist, "I only heard about it a little while waiting for registration.");
          await ƒS.Character.hide(playerData.Protagonist);
          await ƒS.update(1);
          await ƒS.Character.show(characters.Aoi, characters.Aoi.pose.surprise, ƒS.positionPercent(50, 100));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Aoi, "uhh hi..");
          await ƒS.Speech.tell(characters.Aoi, "Who might you be? I am Aoi.");
          await ƒS.Character.show(playerData.Protagonist, playerData.Protagonist.pose.talkingCorner, ƒS.positionPercent(50, 100));
          await ƒS.update(1);
          await ƒS.Speech.tell(playerData.Protagonist, "Oh sorry, I'm");
          playerData.Protagonist.name = await ƒS.Speech.getInput();
          await ƒS.Speech.tell(characters.Aoi, "Nice to meet you. What are you gonna study here?");
          await ƒS.Character.show(characters.Aoi, characters.Aoi.pose.smile, ƒS.positionPercent(50, 100));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.Aoi, "Thats really cool. I am gonna train with the Sword.");

          break;

        case askForHelpInAula.iSayDontAsk:
          await ƒS.Speech.tell(characters.Narrator, "Shadow. The way of the shadow.");

        default:
          break;
      }
    }
    await ƒS.Speech.tell(playerData.Protagonist, "");

    await ƒS.Character.show(characters.Teacher, characters.Teacher.pose.normal, ƒS.positionPercent(50, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Teacher, "Welcome to the royal Accademy of defense.");
    await ƒS.Speech.tell(characters.Teacher, "We will now hear a word of the director and then seperate everyone of you to the class they will attend.");
    // let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
  }
}
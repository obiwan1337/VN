"use strict";
var Template;
(function (Template) {
    async function Decision() {
        console.log("Decision");
        let text = {
            Teacher: {
                T0000: "uff",
                T0001: "gubbel"
            }
        };
        Template.ƒS.Speech.setTickerDelays(90, 20);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.academyFront);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.Teacher, Template.characters.Teacher.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.Speech.tell(Template.characters.Teacher, text.Teacher.T0000);
        let firstDecisionAnswers = {
            iSayNo: "No.",
            iSayYes: "Yes.",
            iSayOk: "Okay."
        };
        let firstDecisionElement = await Template.ƒS.Menu.getInput(firstDecisionAnswers, "class");
        switch (firstDecisionElement) {
            case firstDecisionAnswers.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.Teacher, "No.");
                Template.ƒS.Character.hide(Template.characters.Teacher);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
            case firstDecisionAnswers.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.Teacher, "OK.");
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
            case firstDecisionAnswers.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.Teacher, "Yes.");
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
            default:
                break;
        }
    }
    Template.Decision = Decision;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transitions
    Template.transition = {
        clock: {
            duration: 3,
            alpha: "",
            edge: 1
        }
    };
    //define sound
    Template.sound = {
        //Musik
        backgroundtheme: "",
        // Sound
        click: "",
    };
    Template.locations = {
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
    Template.characters = {
        Narrator: {
            name: ""
        },
        Teacher: {
            name: "lazy Sensei",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Source/img/chars/Teacher.png"
            }
        },
        Protagonist: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                talkingCorner: "Source/img/chars/Mark/Mark_Happy.png"
            }
        },
        Natsu: {
            name: "Natsu",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Source/img/chars/Natsu.png",
                smile: "",
                angry: "Source/img/chars/Natsu_angry.png"
            }
        },
        Aoi: {
            name: "Aoi",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Source/img/chars/Aoi/Aoi_Smile.png",
                smile: "Source/img/chars/Aoi/Aoi_Smile_2.png",
                surprise: "Source/img/chars/Aoi/Aoi_Surprised.png",
                blush_surprised: "Source/img/chars/Aoi/Aoi_Surprised_2.png",
            }
        },
        Mark: {
            name: "Mark",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Source/img/chars/Mark.png",
                smile: "Source/img/chars/Mark_Smile.png"
            }
        },
        Tensin: {
            name: "Tensin",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Source/img/chars/Tensin.png",
                smile: "Source/img/chars/Tensin_smile.png",
            }
        },
    };
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.A && Template.ƒ.KEYBOARD_CODE.B:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.C:
                console.log("load");
                await Template.ƒS.Progress.load();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "ersterteil" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("Tut");
        let text = {
            Natsu: {
                T0000: "haraheta!",
                T0001: "...",
                T0002: "Huh...? Who are you. Are you one of those freshmeats?",
                T0003: "What class you attending eh?",
                T0004: "A fellow Rouge huh? Nice I'll come along with you.",
                T0005: "A Wizard.. go that way and turn left after the building.",
                T0006: "A bow eh?  Scatter along this way and turn left after the building.",
                T0007: "Hah a Sword asking for help. Good one. get rekt imbecile.",
            },
        };
        Template.ƒS.Speech.setTickerDelays(90, 20);
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "WOAHHH!");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "The Castle is even bigger than they told me it would be. It even looks gorgeous. ");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "I can finally learn the way of the ");
        let classDecision = {
            iSaySword: "Sword",
            iSayBow: "Bow",
            iSayMage: "Mage",
            iSayRogue: "Rogue"
        };
        let classDecisionElement = await Template.ƒS.Menu.getInput(classDecision, "class");
        {
            switch (classDecisionElement) {
                case classDecision.iSaySword:
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "Sword. The way of the sword.");
                    Template.ƒS.Speech.clear();
                    Template.playerClass = "Sword";
                    await Template.ƒS.update(1);
                    break;
                case classDecision.iSayBow:
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "Bow. The way of the bow.");
                    Template.playerClass = "Bow";
                    Template.ƒS.Speech.clear();
                    await Template.ƒS.update(1);
                    break;
                case classDecision.iSayMage:
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "Magic. The way of magic.");
                    Template.playerClass = "Mage";
                    Template.ƒS.Speech.clear();
                    await Template.ƒS.update(1);
                    break;
                case classDecision.iSayRogue:
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "Shadow. The way of the shadow.");
                    Template.playerClass = "Rogue";
                    Template.ƒS.Speech.clear();
                    await Template.ƒS.update(1);
                    break;
                default:
                    break;
            }
        }
        await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talkingCorner, Template.ƒS.positionPercent(-20, 330));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Now where is the Aula thingy??");
        await Template.ƒS.Character.hide(Template.characters.Protagonist);
        await Template.ƒS.Location.show(Template.locations.aula);
        await Template.ƒS.update(1);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Good now i just gotta get the paperstuff over with...");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Ugghhh. This will take ages. nearly 50 Ppl are in the line I have to wait at.");
        await Template.ƒS.Location.show(Template.locations.aula);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Ok so now what.. i heard there is some ceremony happening after the signing in...");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Where might this be?... I cant see anything put up pointing to it.. Should i ask someone?");
        let askForHelpInAula = {
            iSayAsk: "Ask someone.",
            iSayDontAsk: "Don't ask and search alone."
        };
        let askForHelpInAulaElement = await Template.ƒS.Menu.getInput(askForHelpInAula, "class");
        {
            switch (askForHelpInAulaElement) {
                case askForHelpInAula.iSayAsk:
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "I should probably ask someone... ");
                    await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talkingCorner, Template.ƒS.positionPercent(50, 100));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Umm, hi there? I was wondering where we have to go for the Introduction.");
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "I only heard about it a little while waiting for registration.");
                    await Template.ƒS.Character.hide(Template.characters.Protagonist);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Character.show(Template.characters.Aoi, Template.characters.Aoi.pose.surprise, Template.ƒS.positionPercent(50, 100));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.Aoi, "uhh hi..");
                    await Template.ƒS.Speech.tell(Template.characters.Aoi, "Who might you be? I am Aoi.");
                    await Template.ƒS.Character.show(Template.characters.Protagonist, Template.characters.Protagonist.pose.talkingCorner, Template.ƒS.positionPercent(50, 100));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.Protagonist, "Oh sorry, I'm Haru");
                    await Template.ƒS.Speech.tell(Template.characters.Aoi, "Nice to meet you. What are you gonna study here?");
                    await Template.ƒS.Character.show(Template.characters.Aoi, Template.characters.Aoi.pose.smile, Template.ƒS.positionPercent(50, 100));
                    await Template.ƒS.update(1);
                    await Template.ƒS.Speech.tell(Template.characters.Aoi, "Thats really cool. I am gonna train with the Sword.");
                    break;
                case askForHelpInAula.iSayDontAsk:
                    await Template.ƒS.Speech.tell(Template.characters.Narrator, "Shadow. The way of the shadow.");
                default:
                    break;
            }
        }
        await Template.ƒS.Speech.tell(Template.characters.Protagonist, "");
        await Template.ƒS.Character.show(Template.characters.Teacher, Template.characters.Teacher.pose.normal, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Teacher, "Welcome to the royal Accademy of defense.");
        await Template.ƒS.Speech.tell(Template.characters.Teacher, "We will now hear a word of the director and then seperate everyone of you to the class they will attend.");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map
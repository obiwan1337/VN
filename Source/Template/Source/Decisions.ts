namespace Template {
    export async function Decision(): ƒS.SceneReturn {
        console.log("Decision");

        let text = {
            Teacher: {
                T0000: "uff",
                T0001: "gubbel"
            }
        };

        ƒS.Speech.setTickerDelays(90,20);
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.academyFront);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Character.show(characters.Teacher, characters.Teacher.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.Speech.tell(characters.Teacher, text.Teacher.T0000);
        let firstDecisionAnswers = {
            iSayNo: "No.",
            iSayYes: "Yes.",
            iSayOk: "Okay."
        };
        let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionAnswers, "class");
        switch (firstDecisionElement) {
            case firstDecisionAnswers.iSayNo:
                await ƒS.Speech.tell(characters.Teacher, "No.");
                ƒS.Character.hide(characters.Teacher);
                ƒS.Speech.clear();
                await ƒS.update(1);
                break;
            case firstDecisionAnswers.iSayOk:
                await ƒS.Speech.tell(characters.Teacher, "OK.");
                ƒS.Speech.clear();
                await ƒS.update(1);
                break;
                case firstDecisionAnswers.iSayYes:
                await ƒS.Speech.tell(characters.Teacher, "Yes.");
                ƒS.Speech.clear();
                await ƒS.update(1);
                break;
            default:
                break;
        }

    }
}
namespace Template {
    export async function Text(): ƒS.SceneReturn {
        console.log("Tut");

        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Natsu: {
                T0000: "haraheta!",
                T0001: "...",
                T0002: "lets find some food."
            },

            Protagonist: {
                T0000: "Yokosou.",
                T0001: "Lappen"
            }
        };
        await ƒS.Location.show(locations.city);
        await ƒS.Character.show(characters.Natsu, characters.Natsu.pose.normal, ƒS.positionPercent(50, 100));
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.Natsu, text.Natsu.T0000);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);

    }
}
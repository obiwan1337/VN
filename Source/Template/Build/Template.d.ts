declare namespace Template {
    function Decision(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let playerClass: String;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundtheme: string;
        click: string;
    };
    let locations: {
        city: {
            name: string;
            background: string;
        };
        academyFront: {
            name: string;
            background: string;
        };
        aula: {
            name: string;
            background: string;
        };
        academyPark: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Teacher: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                talkingCorner: string;
            };
        };
        Natsu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                angry: string;
            };
        };
        Aoi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                surprise: string;
                blush_surprised: string;
            };
        };
        Mark: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
            };
        };
        Tensin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
            };
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}

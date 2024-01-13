const input = document.querySelector("input");
const log = document.getElementById("values");
let burst = document.getElementById("burstbox");
let sectorvalue = 0;

const letters = new Map([
        ["A", 5],["B", 6],["C", 7],["D", 8],
        ["E", 9],["F", 0],["G", 1],["H", 2],
        ["I", 3],["J", 4],["K", 5],["L", 6],
        ["M", 7],["N", 8],["O", 9],["P", 0],
        ["Q", 1],["R", 2],["S", 3],["T", 4],
        ["U", 5],["V", 6],["W", 7],["X", 8],
        ["Y", 9],["Z", 0],
        ["a", 7],["b", 8],["c", 9],["d", 0],
        ["e", 1],["f", 2],["g", 3],["h", 4],
        ["i", 5],["j", 5],["k", 6],["l", 7],
        ["m", 9],["n", 0],["o", 1],["p", 2],
        ["q", 3],["r", 4],["s", 5],["t", 6],
        ["u", 7],["v", 8],["w", 9],["x", 0],
        ["y", 1],["z", 2],
        ["1", 8],["2", 9],["3", 0],["4", 1],["5", 2],
        ["6", 3],["7", 4],["8", 5],["9", 6],["0", 7],
        ["(", 0],[")", 1],["*", 2],["!", 3],
        ['"', 4],["#", 5],["$", 6],["%", 7],
        ["^", 8],["'", 9],["+", 3],["=", 1],
        ["-", 5],[",", 4],[".", 6],["/", 7],
        ["<", 0],[">", 2],[":", 8],[";", 9],
        ["?", 3],["@", 4],["[", 1],["]", 3],
        ["{", 3],["}", 4],["_", 5],["^", 4],
        ["|", 5],["~", 6],
        [" ", 2]
]);

const sectors = new Map([
        [0, "VIRIDIA"],
        [1, "GREENTILL"],
        [2, "SKYLY"],
        [3, "BLUEFALL"],
        [4, "PURPLENUM"],
        [5, "PINKAL"],
        [6, "REDRIA"],
        [7, "ORAN"],
        [8, "YELLOWBOZE"],
        [9, "WHITILL"]
]);

const charactermap = new Map([
        ["HUmar", 5],
        ["HUnewearl", 6],
        ["HUcast", 7],
        ["HUcaseal", 4],
        ["RAmar", 8],
        ["RAmarl", 6],
        ["RAcast", 9],
        ["RAcaseal", 0],
        ["FOmar", 5],
        ["FOmarl", 1],
        ["FOnewm", 2],
        ["FOnewearl", 3],
])

const type = new Map([
        ["VIRIDIA", "A"],
        ["GREENTILL", "B"],
        ["SKYLY", "A"],
        ["BLUEFALL", "B"],
        ["PURPLENUM", "A"],
        ["PINKAL", "B"],
        ["REDRIA", "A"],
        ["ORAN", "B"],
        ["YELLOWBOZE", "A"],
        ["WHITILL", "B"]
])

input.addEventListener("input", updateValue);

function checkUpdate() {
        console.log(document.getElementById('input').value);
        sectorvalue = 0;
        burst = document.getElementById("burstbox");
        let psocharacter = document.getElementById("psocharacter");
        for (i=0; i<document.getElementById('input').value.length; i++) {
                if ((document.getElementById('input').value.charAt(i)) == "'" && burst.checked) sectorvalue += 9;
                else if ((document.getElementById('input').value.charAt(i)) == "`" && burst.checked) sectorvalue += 6;
                else if ((document.getElementById('input').value.charAt(i)) == "}" && burst.checked) sectorvalue += 5;
                else sectorvalue += letters.get(document.getElementById('input').value.charAt(i));
        }
        if (burst.checked) {
                sectorvalue += charactermap.get(psocharacter.value);
        }
        
        log.textContent = "Your Section ID is " + sectors.get(sectorvalue%10) +
        ",\r\nand your Mag ID is " + type.get(sectors.get(sectorvalue%10)) + ".";
        document.getElementById("symbol").src = "/assets/sections/"+sectors.get(sectorvalue%10)+".png";
}

function updateValue(e) {
        checkUpdate();
}


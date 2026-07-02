let savedBase: Position = null;
player.onChat("!bank", function () {
    //prevent player from warping if in combat
    player.execute("title @s actionbar warping in 5 seconds. Stand still.")
    let startPos = player.position();
    let startX = Math.round(startPos.getValue(Axis.X));
    let startY = Math.round(startPos.getValue(Axis.Y));
    let startZ = Math.round(startPos.getValue(Axis.Z));
    //wait
    player.execute("title @s actionbar teleporting... 5")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 4")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 3")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 2")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 1")
    loops.pause(1000)
    let currentPos = player.position();
    let currX = Math.round(currentPos.getValue(Axis.X));
    let currY = Math.round(currentPos.getValue(Axis.Y));
    let currZ = Math.round(currentPos.getValue(Axis.Z));
    //compare coords
    if (startX === currX && startY === currY && startZ === currZ) {
        player.execute(
        "camera @s fade color 30 60 200"
        )
        loops.pause(1000)
        player.execute(
        "tp @s 6 -55 -16"
        )
        player.execute(
        "msg @s!: You have been teleported to the bank"
        )
        player.execute(
        "playsound mob.zombie.remedy @s"
        )
    }else{
        player.execute("title @s actionbar You moved, teleport fail.")
    }
})
player.onChat("!tpto @r", function () {
    player.execute(
    "/tp @s" + Selected
    )
    player.execute(
    "/title " + ("" + Selected + (" actionbar" + (" @s " + "wants to tp to you")))
    )
})
function get_randplayer () {
    Selected = "@r"
}
player.onChat("!load pad", function () {
    if (true) {
        player.execute(
        "structure load slimepad ~ ~-2 ~ 0_degrees"
        )
        player.execute(
        "playsound mob.zombie.remedy @s"
        )
        player.execute(
        "scoreboard players remove @s potato 30"
        )
    } else {
        player.execute(
        "title @s actionbar you do not have enough potato to execute this"
        )
    }
})
player.onChat("!spawn", function () {
    //prevent player from warping if in combat
    player.execute("title @s actionbar warping in 5 seconds. Stand still.")
    let startPos = player.position();
    let startX = Math.round(startPos.getValue(Axis.X));
    let startY = Math.round(startPos.getValue(Axis.Y));
    let startZ = Math.round(startPos.getValue(Axis.Z));
    //wait
    player.execute("title @s actionbar teleporting... 5")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 4")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 3")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 2")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 1")
    loops.pause(1000)
    let currentPos = player.position();
    let currX = Math.round(currentPos.getValue(Axis.X));
    let currY = Math.round(currentPos.getValue(Axis.Y));
    let currZ = Math.round(currentPos.getValue(Axis.Z));
    //compare coords
    if (startX === currX && startY === currY && startZ === currZ) {
        player.execute(
        "camera @s fade color 30 60 200"
        )
        loops.pause(1000)
        player.execute(
        "tp @s 15 -54 -10 facing @e[type=armor_stand, tag=tp]"
        )
        player.execute(
        "msg @s !: You have been teleported to spawn\""
        )
        player.execute(
        "playsound mob.zombie.remedy @s"
        )
    }else{
        player.execute("You moved, teleport fail")
    }
})
//IMPORTANT!!
player.onChat("!save", function () {
    //save the player pos to variable
    savedBase = player.position();

    //send debug message
    player.execute("msg @s Location saved");
})
player.onChat("!base", function () {
    //check if a base has been saved yet
    if (savedBase != null) {
        //prevent player from warping if in combat
        player.execute("title @s actionbar warping in 5 seconds. Stand still.")
        let startPos = player.position();
        let startX = Math.round(startPos.getValue(Axis.X));
        let startY = Math.round(startPos.getValue(Axis.Y));
        let startZ = Math.round(startPos.getValue(Axis.Z));
        //wait
        player.execute("title @s actionbar teleporting... 5")
        loops.pause(1000)
        player.execute("title @s actionbar teleporting... 4")
        loops.pause(1000)
        player.execute("title @s actionbar teleporting... 3")
        loops.pause(1000)
        player.execute("title @s actionbar teleporting... 2")
        loops.pause(1000)
        player.execute("title @s actionbar teleporting... 1")
        loops.pause(1000)
        let currentPos = player.position();
        let currX = Math.round(currentPos.getValue(Axis.X));
        let currY = Math.round(currentPos.getValue(Axis.Y));
        let currZ = Math.round(currentPos.getValue(Axis.Z));
        //compare coords
        if (startX === currX && startY === currY && startZ === currZ) {
            player.execute("camera @s fade color 0 0 0") //rgb value
            loops.pause(1000)
            player.execute("playsound mob.zombie.remedy @s")
            player.teleport(savedBase);
        } else {
            player.execute("title @s actionbar \(\S\S\)l\(\S\S\)4 Warp fail, you moved.")
        }
    } else {
        player.execute("title @s actionbar You do not have a saved location. Use !save to save a location.");
    }
})
player.onChat("!tpr", function () {
    player.execute(
    "camera @s fade color 30 60 200"
    )
    loops.pause(1000)
    player.teleport(positions.groundPosition(randpos(
    pos(-9999, 200, -9999),
    pos(9999, 200, 9999)
    )))
    player.execute(
    "msg @s !: You have been teleported to a random location. Use !spawn to return."
    )
    player.execute(
    "playsound mob.zombie.remedy @s"
    )
})
player.onChat("!afk", function () {
    //tp the player to the saved coordinates
    //prevent player from warping if in combat
    player.execute("title @s actionbar warping in 5 seconds. Stand still.")
    let startPos = player.position();
    let startX = Math.round(startPos.getValue(Axis.X));
    let startY = Math.round(startPos.getValue(Axis.Y));
    let startZ = Math.round(startPos.getValue(Axis.Z));
    //wait
    player.execute("title @s actionbar teleporting... 5")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 4")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 3")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 2")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 1")
    loops.pause(1000)
    let currentPos = player.position();
    let currX = Math.round(currentPos.getValue(Axis.X));
    let currY = Math.round(currentPos.getValue(Axis.Y));
    let currZ = Math.round(currentPos.getValue(Axis.Z));
    //compare coords
    if (startX === currX && startY === currY && startZ === currZ) {
        player.execute(
        "camera @s fade color 30 60 200"
        )
        loops.pause(1000)
        player.execute(
        "tp @s -3 -55 -16"
        )
        player.execute(
        "msg @s !: You have been teleported to afk box\""
        )
        player.execute(
        "playsound mob.zombie.remedy @s"
        )
    }else {
        player.execute("title @s actionbar You moved, teleport fail")
    }
})
player.onChat("!bot", function () {
    player.execute(
    "camera @s fade color 30 60 200"
    )
    loops.pause(1000)
    player.teleport(positions.groundPosition(randpos(
    pos(-9999, 200, -9999),
    pos(9999, 200, 9999)
    )))
    player.execute(
    "msg @s !: You have been teleported to a random location. Use !spawn to return."
    )
    player.execute(
    "playsound mob.zombie.remedy @s"
    )
})
player.onChat("!shop", function () {
    //tp the player to the saved coordinates
    //prevent player from warping if in combat
    player.execute("title @s actionbar warping in 5 seconds. Stand still.")
    let startPos = player.position();
    let startX = Math.round(startPos.getValue(Axis.X));
    let startY = Math.round(startPos.getValue(Axis.Y));
    let startZ = Math.round(startPos.getValue(Axis.Z));
    //wait
    player.execute("title @s actionbar teleporting... 5")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 4")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 3")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 2")
    loops.pause(1000)
    player.execute("title @s actionbar teleporting... 1")
    loops.pause(1000)
    let currentPos = player.position();
    let currX = Math.round(currentPos.getValue(Axis.X));
    let currY = Math.round(currentPos.getValue(Axis.Y));
    let currZ = Math.round(currentPos.getValue(Axis.Z));
    //compare coords
    if (startX === currX && startY === currY && startZ === currZ) {
    
        player.execute(
        "camera @s fade color 30 60 200"
        )
        loops.pause(1000)
        player.execute(
        "tp @s 13 -55 9"
        )
        player.execute(
        "msg @s !: You have been teleported to the shop\""
        )
        player.execute(
        "playsound mob.zombie.remedy @s"
        )
    }else{
        player.execute("title @s actionbar You moved, teleport fail")
    }
})
let list = 0
let Selected = ""
let lastz3 = 0
let lasty3 = 0
let lastx3 = 0
let player_pos = player.position()

let Selected = ""
function get_randplayer () {
    Selected = "@r"
}
player.onChat("!bank", function () {
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
})
player.onChat("!tpto @r", function () {
    player.execute(
    "/tp @s" + Selected
    )
    player.execute(
    "/title " + ("" + Selected + (" actionbar" + (" @s " + "wants to tp to you")))
    )
})
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
})
player.onChat("!afk", function () {
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
})
player.onChat("!shop", function () {
    player.execute(
    "camera @s fade color 30 60 200"
    )
    loops.pause(1000)
    player.execute(
    "tp @s 13 -55 9 facing @e[type=armor_stand,tag=shoptp]"
    )
    player.execute(
    "msg @s !: You have been teleported to the shop\""
    )
    player.execute(
    "playsound mob.zombie.remedy @s"
    )
})
//for some reason there is no boolean for isTag
player.onChat("!load castle", function () {
    // 1. REPLACE 100 64 100 with the exact X Y Z coordinates of your hidden Structure Block!
    // This line places a redstone block next to it ONLY if you have the VIP tag and 50+ potatoes
    player.execute("execute @p[tag=VIP,scores={potato=50..}] ~ ~ ~ setblock -27 -59 38 redstone_block")

    // 2. Play your sound effect and deduct the potato points safely
    player.execute("execute @p[tag=VIP,scores={potato=50..}] ~ ~ ~ playsound mob.zombie.remedy @p")
    player.execute("execute @p[tag=VIP,scores={potato=50..}] ~ ~ ~ scoreboard players remove @p potato 50")

    // 3. Instantly clear the redstone block away so the machine can reset for next time
    player.execute("execute @p ~ ~ ~ setblock -27 -59 38 air")



})

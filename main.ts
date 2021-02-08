while (true) {
    console.log("Rotation Level:" + input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 20 + input.rotation(Rotation.Pitch) && 20 + input.rotation(Rotation.Pitch) < 40) {
        light.setAll(light.rgb(255, 255, 0))
        music.siren.playUntilDone()
        console.log("You may want to refill your tire's air.")
        pause(5000)
    } else if (input.rotation(Rotation.Pitch) > 50 + input.rotation(Rotation.Pitch) && 50 + input.rotation(Rotation.Pitch) < 255) {
        light.setAll(light.rgb(255, 0, 0))
        console.log("Constant Deflating.")
        console.log("Change your tire.")
        pause(1000)
        light.clear()
        pause(1000)
        music.siren.playUntilDone()
    } else {
        light.setAll(light.rgb(0, 255, 255))
    }
    
}
while (true) {
    console.log("Rotational Level:" + input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) < -20 + input.rotation(Rotation.Pitch) && -20 + input.rotation(Rotation.Pitch) > -40) {
        light.setAll(light.rgb(255, 255, 0))
        music.siren.playUntilDone()
        console.log("You may want to refill your tire's air")
        pause(5000)
    } else if (input.rotation(Rotation.Pitch) < -50 + input.rotation(Rotation.Pitch) && -50 + input.rotation(Rotation.Pitch) > -255) {
        light.setAll(light.rgb(255, 0, 0))
        console.log("Constant Deflating.")
        console.log("Change your tire.")
        pause(1000)
        light.clear()
        pause(1000)
        music.siren.playUntilDone()
    } else {
        light.setAll(light.rgb(0, 255, 255))
    }
    
}

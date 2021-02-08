while True:
    print("Rotation Level:" + input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) > 20 + input.rotation(Rotation.PITCH) <40:
        light.set_all(light.rgb(255, 255, 0))
        music.siren.play_until_done()
        print("You may want to refill your tire's air.")
        pause(5000)
    elif input.rotation(Rotation.PITCH) > 50 + input.rotation(Rotation.PITCH) < 255:
        light.set_all(light.rgb(255, 0, 0))
        print("Constant Deflating.")
        print("Change your tire.")
        pause(1000)
        light.clear()
        pause(1000)
        music.siren.play_until_done()
    else:
        light.set_all(light.rgb(0, 255, 255))
while True:
    print("Rotational Level:" + input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) < -20 + input.rotation(Rotation.PITCH) > -40:
        light.set_all(light.rgb(255, 255, 0))
        music.siren.play_until_done()
        print("You may want to refill your tire's air")
        pause(5000)
    elif input.rotation(Rotation.PITCH) < -50 + input.rotation(Rotation.PITCH) > -255:
        light.set_all(light.rgb(255, 0, 0))
        print("Constant Deflating.")
        print("Change your tire.")
        pause(1000)
        light.clear()
        pause(1000)
        music.siren.play_until_done()
    else:
        light.set_all(light.rgb(0, 255, 255))


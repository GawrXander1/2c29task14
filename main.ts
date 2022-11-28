datalogger.deleteLog()
loops.everyInterval(3000, function () {
    datalogger.log(
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("compass", input.compassHeading()),
    datalogger.createCV("light level", input.lightLevel())
    )
})

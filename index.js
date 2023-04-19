const base_url = "http://127.0.0.1:3000/"
// const teamService = new TeamService(base_url)
const driverService = new DriverService(base_url)

// teamService.getTeams()
driverService.getDrivers()
Driver.renderForm()
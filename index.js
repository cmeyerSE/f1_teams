const base_url = "http://127.0.0.1:3000"
const teamService = new TeamService(base_url)
const driverService = new DriverService(base_url)

Driver.driverForm.addEventListener('submit', handleSubmit)


teamService.getTeams()
driverService.getDrivers()
Driver.renderForm()
Team.renderTeamForm()

function handleSubmit(){
    event.preventDefault()
    driverService.createDriver()
    event.target.reset()
}
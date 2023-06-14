const base_url = "http://127.0.0.1:3000"
const teamService = new TeamService(base_url)
const driverService = new DriverService(base_url)
const d = Driver.all

Driver.driverForm.addEventListener('submit', handleSubmit)
Team.teamForm.addEventListener('submit', handleTeamSubmit)
Team.teamSelect.addEventListener('change', handleSelectedTeam)
Driver.driverButton.addEventListener('click', viewAllDrivers)

teamService.getTeams()
driverService.getDrivers()
Driver.renderForm()
Team.renderTeamForm()

function handleSubmit(){
    event.preventDefault()
    driverService.createDriver()
    event.target.reset()
}

function handleTeamSubmit(){
    event.preventDefault()
    teamService.createTeam()
    event.target.reset()
}

function handleSelectedTeam() {
    const selectedTeam = document.querySelector('#teams-select').value
    const filteredDrivers = d.filter((element) => {
        return element.team_id === parseInt(selectedTeam);
    });
    Driver.driversContainer.innerHTML = ""
    
    filteredDrivers.forEach(driver => {

        Driver.driversContainer.innerHTML += 
        driver.renderSelectedDrivers()
    })
}

function viewAllDrivers() {
    Driver.driversContainer.innerHTML = ""
    d.forEach(driver => {
        Driver.driversContainer.innerHTML += 
        driver.renderSelectedDrivers()
    })
}
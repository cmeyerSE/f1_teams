class Driver {
    static all = []
    static driversContainer = document.getElementById("drivers-container")
    static driverForm = document.getElementById("form-container")
    
    constructor({id, name, description, skill, team_id}) {
        this.id = id
        this.name = name
        this.description = description
        this.skill = skill
        this.team_id = team_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `driver-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Driver.all.push(this)
    }

    driverHTML(){
        this.element.innerHTML += `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `
        return this.element
    }

    addOnDom(){
        Driver.driversContainer.append(this.driverHTML())
    }

    static renderForm() {
        Driver.driverForm.innerHTML += `
            <form id="new-driver-form">
                <h3>Create a Driver</h3>
                    Name: <input type="text" id="name">
                    <br><br>
                    Description: <input type="text" id="description">
                    <br><br>
                    Skill: <input type="text" id="skill">
                    <br><br>
                    Select Team: <select name="team_id" id="team-dropdown">
                    </select>
                    <br><br>
                    <input type="submit" id="create">
            </form>
        `
    }

    handleClick = (id) => {
        if (id.target.innerText === 'Delete'){
            this.element.remove()
            driverService.deleteDriver(this.id)
        }
    }
    
}
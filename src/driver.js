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
            <div>
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <p>${this.skill}</p>
            </div>
            <button id='delete-bttn'>Delete</button>
            <br>
            <br>
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
                    <input type="submit" id="create">
            </form>
        `
    }

    handleClick = (id) => {
        if (id.target.innerText === 'Delete'){
            driverService.deleteDriver(this.id)
        }
    }
    
}
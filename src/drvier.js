class Driver {
    static all = []
    static driverContainer = document.querySelector('#drivers-container')
    static formContainer = document.querySelector('#form-container')
    
    constructor({name, description, skill, team_id}) {
        this.name = name
        this.description = description
        this.skill = skill
        this.team_id = team_id

        Driver.all.push(this)
    }

    DriverHTML(){
        return `
        <div>
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <p>${this.skill}</p>
        </div>
    `
    }

    static renderForm() {
        Driver.formContainer.innerHTML += `
            <form id="new-driver-form">
                <h3>Create a Driver</h3>
                    Name: <input type="text" id="name">
                    <br><br>
                    Description: <textarea id="input-description"></textarea>
                    <br><br>
                    Skill: <input type="text" id="skill">
                    <br><br>
                    <input type="submit" id="create">
            </form>
        `
    }
    
}
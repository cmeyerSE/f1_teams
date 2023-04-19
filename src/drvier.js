class Driver {
    static all = []
    
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
    
}
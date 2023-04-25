class Team {

    static all = []
    static teamsContainer = document.getElementById("teams-container")
    static teamForm = document.getElementById('team-form-container')

    constructor({ name, id }) {
        this.name = name
        this.id = id
        this.element = document.createElement('div')
        Team.all.push(this)
    }

    renderTeam(){
        this.element.innerHTML += `
            <ul class="list-group">
                <li class="list-group-item">${this.name}</li>
            </ul>
            `
        this.element.id = `team-${this.id}`
        return this.element
    }

    addToForm(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        document.getElementById("team-dropdown").appendChild(option)
    }

}
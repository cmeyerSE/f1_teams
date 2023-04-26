class TeamService {

    constructor(endpoint){
        this.endpoint = endpoint;
    }

    getTeams() {
        fetch(`${this.endpoint}/teams`)
        .then(resp => resp.json())
        .then(teams => {
            for (const team of teams){
                const t = new Team(team)
                t.addOnDom()
                t.addToForm()
                t.teamSelect()
            }
        })
    }

    createTeam(){
        const team = {
            name: document.getElementById('name').value
        }
    
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(team)
        }
    
        fetch(`${this.endpoint}/teams`, configObj)
        .then(resp => resp.json())
        .then(team => {
            const t = new Team(team)
            t.addOnDom()
            t.addToForm()
            t.teamSelect()
        })
    }
}
class DriverService {

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getDrivers() {
        fetch(`${this.endpoint}/drivers`)
        .then(resp => resp.json())
        .then(drivers => {
            for (const driver of drivers){
                const d = new Driver(driver)
                d.addOnDom()
            }
        })
    }

    createDriver(){
        const driver = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            skill: document.getElementById('skill').value,
            team_id: 27
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(driver)
        }

        fetch(`${this.endpoint}/drivers`, configObj)
        .then(resp => resp.json())
        .then(driver => {
            const d = new Driver(driver)
            d.addOnDom()
        })
    }

    deleteDriver(id){
        fetch(`${this.endpoint}/drivers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}
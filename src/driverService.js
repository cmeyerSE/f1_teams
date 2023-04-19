class DriverService {

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getDrivers() {
        fetch("${this.endpoint}/drivers")
        .then(resp => resp.json())
        .then(drivers => {
            drivers.forEach(driver => {
                let d = new Driver(driver)
                document.querySelector('#drivers-container').innerHTML += d.DriverHTML()
            })
        })
    }
}
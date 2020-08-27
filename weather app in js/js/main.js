window.addEventListener('load', () => {
    let long;
    let lat;
    let locationTimeZone = document.querySelector('.location-timezone');
    let tempratureDegree = document.querySelector('.temprature-degree');
    let tempratureDescription = document.querySelector('.temprature-description');
    let temperatureSection = document.querySelector('.degree-section')
    let temperatureSpan = document.querySelector('.temparature span')


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            fetch(api)
                .then(response => { return response.json() })
                .then(data => {
                    console.log(data);
                    const { temperature, summary } = data.currently
                    tempratureDegree.textContent = temperature
                    tempratureDescription.textContent = summary;
                    locationTimeZone.textContent = data.timezone

                    // calc celesius
                    let celesius = (temperature - 32) * (5 / 9)

                    // convert from F to C
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === 'F') {
                            temperatureSpan.textContent = 'C'
                            tempratureDegree.textContent = Math.floor(celesius)
                        } else {
                            temperatureSpan.textContent = 'F'
                            tempratureDegree.textContent = temperature
                        }
                    })
                })
        })
    }
})

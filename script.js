var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    fetch(`https://cors.io/?https://api.darksky.net/forecast/1b654f65f41bbad079bb6d974a169724/${crd.latitude},${crd.longitude}?units=si`)
        .then(response => {
            response.json().then(json => {
                // console.log(JSON.stringify(json));
                console.log(json);
                document.querySelector('#weahter').innerHTML = Math.round(json.currently.temperature);
            })
        })

}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

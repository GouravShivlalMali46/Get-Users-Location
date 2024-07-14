const getLocation = () => {
    // Get location permission
    //conditional statement if
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);

    }
     //conditional statement else

     else{
        alert("Geolocation is not supported by this web browser.");
     }

};

const showPosition = (position) => {
let latitude  = position.coords.latitude;
let longitude = position.coords.longitude;

const des = document.querySelector("p"); //paragraph p.
des.innerHTML = `Latitude: ${latitude} <br>Longitude: ${longitude}`;
//prints
//console.log(latitude, longitude);
}

//error handling

const showError = (error) => {

    // Switch statement for different type of errors
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;

            case error.PERMISSION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;

                case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;

                case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;

                default:
                    alert("An unknown error Occurred.");
    }
    };
    


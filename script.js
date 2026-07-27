function getLocation(){

    const status = document.getElementById("status");
    const result = document.getElementById("result");

    if(!navigator.geolocation){
        status.innerHTML = "Geolocation tidak disokong.";
        return;
    }

    status.innerHTML = "Sedang mendapatkan lokasi...";

    navigator.geolocation.getCurrentPosition(success,error);

    function success(position){

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.innerHTML = "Lokasi berjaya diperoleh.";

        result.innerHTML = `
            <h3>Koordinat Anda</h3>
            <p>Latitude : ${latitude}</p>
            <p>Longitude : ${longitude}</p>

            <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">
                Buka di Google Maps
            </a>
        `;
    }

    function error(){
        status.innerHTML = "Gagal mendapatkan lokasi.";
    }

}

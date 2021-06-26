if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(function () {
            console.log('Service Worker Registered Successfully ')
        })
        .catch(function (error) {
            console.error('Something goes Wrong While registering service worker')
            console.log(error);
        })
}
else {
    console.log("Service worker is not Available");
}
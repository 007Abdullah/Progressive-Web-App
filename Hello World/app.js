if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js') /// Service worker file location
        .then(function () {
            console.log("Service Worker Registered Successfully ");
        })
        .catch(function (error) {
            console.error('SomeThing goes wrong while registering service Worker :');
            console.log('Error Service Worker :', error);
        })
} else {
    console.log('Service Worker is not available');
}
function trackUserInteractions() {
    document.addEventListener('click', function(event) {
        const timestamp = new Date().toISOString();
        const eventType = 'click';
        const eventObject = event.target.tagName.toLowerCase();
        console.log(`${timestamp}, ${eventType}, ${eventObject}`);
    });

    window.addEventListener('load', function() {
        const timestamp = new Date().toISOString();
        const eventType = 'view';
        const eventObject = 'page';
        console.log(`${timestamp}, ${eventType}, ${eventObject}`);
    });
}

trackUserInteractions();
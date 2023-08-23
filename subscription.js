document.addEventListener('DOMContentLoaded', function() {
    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const offerName = this.getAttribute('data-offer');
            localStorage.setItem('subscribedOffer', offerName);
            alert(`You have subscribed to ${offerName}`);
        });
    });
});

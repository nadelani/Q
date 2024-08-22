function sendWhatsApp() {
    var budget = document.getElementById('budget').value;
    var city = document.getElementById('city').value;
    if (budget && city) {
        var message = "היי, אני מעוניין לקנות נכס בתקציב של " + budget + " מיליון שקלים בעיר " + city + ".";
        var whatsappUrl = "https://wa.me/972525349977?text=" + encodeURIComponent(message);
        window.open(whatsappUrl, '_blank');
        
        // חזרה לאתר המקורי אחרי 3 שניות
        setTimeout(function() {
            window.location.href = "https://www.nadelani.com";  // החלף עם הURL של האתר שלך
        }, 3000);
    } else {
        alert('נא לבחור תקציב ועיר');
    }
}

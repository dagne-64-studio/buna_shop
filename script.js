const langBtn = document.getElementById('langBtn');

langBtn.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;

    if (currentLang === 'om') {
        document.documentElement.lang = 'am';
        document.getElementById('shopName').innerText = 'ቡና ኦሮሚያ';
        document.getElementById('welcomeText').innerText = 'እንኳን በሰላም መጡ!';
        document.getElementById('heroDesc').innerText = 'በኦሮሞ ቡና ቤት መጡ ለማሳሰቢያ እንኳን በደህና መጡ';
        langBtn.innerText = 'Oromo';
    } else {
        document.documentElement.lang = 'om';
        document.getElementById('shopName').innerText = 'Buna Oromia';
        document.getElementById('welcomeText').innerText = 'Baga nagaan dhuftan!';
        document.getElementById('heroDesc').innerText = 'Mana bunaa Oromootti dhufuu keessaniif simanna.';
        langBtn.innerText = 'English';
    }
});

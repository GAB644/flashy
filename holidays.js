// not sure if this fucking works or not. but changing the date did nothing prob doesnt work at all sadders
(function() {
    function setBanner(imgSrc, bannerBgSrc, bodyBgColor, primaryBg, secondaryBg) {
        var bannerImg = document.querySelector('.banner img');
        if (bannerImg) bannerImg.src = imgSrc;
        var banner = document.querySelector('.banner');
        if (banner) banner.style.backgroundImage = "url('" + bannerBgSrc + "')";
        var body = document.querySelector('body');
        if (body && bodyBgColor) {
            body.style.backgroundColor = bodyBgColor;
        }
        var root = document.documentElement;
        if (root && primaryBg) {
            root.style.setProperty('--bg-primary', primaryBg);
        }
        if (root && secondaryBg) {
            root.style.setProperty('--bg-secondary', secondaryBg);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var now = new Date();
        var month = now.getMonth() + 1; // 1-12
        
        if (month === 10) {
            setBanner(
                'images/bannerhalloween.png',
                'images/bannerhallbg.png',
                '#1a1209',
                'linear-gradient(158deg,rgba(163, 99, 39, 1) 0%, rgba(69, 51, 23, 1) 100%)',
                'linear-gradient(330deg,rgba(0, 0, 0, 1) 0%, rgba(138, 84, 10, 1) 100%)'
            );
            return;
        }
    });
        if (month === 12) {
            setBanner(
                'images/bannercristmas.png',
                'images/bannercribg.png',
                '#f8fafc',
                'linear-gradient(90deg,rgba(194, 81, 81, 1) 0%, rgba(17, 173, 17, 1) 23%, rgba(194, 81, 81, 1) 48%, rgba(17, 173, 17, 1) 73%, rgba(194, 81, 81, 1) 91%)',
                'linear-gradient(30deg,rgba(214, 161, 161, 1) 0%, rgba(164, 219, 164, 1) 100%)'
            );
            return;
        }
})();

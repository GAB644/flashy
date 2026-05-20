// not sure if this fucking works or not. but changing the date did nothing prob doesnt work at all sadders
(function() {
    function setBanner(imgSrc, bannerBgSrc, bodyBgColor) {
        var bannerImg = document.querySelector('.banner img');
        if (bannerImg) bannerImg.src = imgSrc;
        var banner = document.querySelector('.banner');
        if (banner) banner.style.backgroundImage = "url('" + bannerBgSrc + "')";
        var body = document.querySelector('body');
        if (body && bodyBgColor) {
            body.style.backgroundColor = bodyBgColor;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var now = new Date();
        var month = now.getMonth(); // 0-11

        if (month === 11) {
            setBanner('images/bannercristmas.png', 'images/bannercribg.png', '#f8fafc');
            return;
        }

        if (month === 9) {
            setBanner('images/bannerhalloween.png', 'images/bannerhallbg.png', '#1a1209');
            return;
        }
    });
})();

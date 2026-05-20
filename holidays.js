// yes this code is still janky ithink
(function() {
    function setBanner(imgSrc, bannerBgSrc, bodyBgColor, primaryBg, secondaryBg, headerBg, gameBg, gameBorder, gameTextColor) {
        var bannerImg = document.querySelector('.banner img');
        if (bannerImg) bannerImg.src = imgSrc;

        var banner = document.querySelector('.banner');
        if (banner) banner.style.backgroundImage = bannerBgSrc ? "url('" + bannerBgSrc + "')" : '';

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
        if (root && headerBg) {
            root.style.setProperty('--theme-header-bg', headerBg);
        }
        if (root && gameBg) {
            root.style.setProperty('--theme-game-bg', gameBg);
        }
        if (root && gameBorder) {
            root.style.setProperty('--theme-game-border', gameBorder);
        }
        if (root && gameTextColor) {
            root.style.setProperty('--theme-game-text', gameTextColor);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var now = new Date();
        var month = now.getMonth() + 1;

        var theme = { // defualty
            imgSrc: 'images/banner.png',
            bannerBgSrc: 'images/bannerbg.png',
            bodyBgColor: '#f8fafc',
            primaryBg: 'linear-gradient(176deg,rgba(255, 148, 148, 1) 0%, rgba(179, 68, 84, 1) 100%)',
            secondaryBg: 'linear-gradient(90deg,rgb(245, 214, 206) 0%, rgb(238, 200, 170) 100%)',
            headerBg: 'rgb(231, 231, 231)',
            gameBg: '#ffffff',
            gameBorder: '1px solid #ccc',
            gameTextColor: '#102a43'
        };

        if (month === 10) { // ralowene
            theme = {
                imgSrc: 'images/bannerhalloween.png',
                bannerBgSrc: 'images/bannerhallbg.png',
                bodyBgColor: '#1a1209',
                primaryBg: 'linear-gradient(158deg,rgba(163, 99, 39, 1) 0%, rgba(69, 51, 23, 1) 100%)',
                secondaryBg: 'linear-gradient(330deg,rgba(0, 0, 0, 1) 0%, rgba(138, 84, 10, 1) 100%)',
                headerBg: 'rgb(30, 20, 10)',
                gameBg: 'rgba(40, 30, 20, 0.95)',
                gameBorder: '1px solid rgba(120, 80, 30, 0.8)',
                gameTextColor: '#f1d7a3'
            };
        } else if (month === 12) { // cristmes
            theme = {
                imgSrc: 'images/bannercristmas.png',
                bannerBgSrc: 'images/bannercribg.png',
                bodyBgColor: '#f8fafc',
                primaryBg: 'linear-gradient(90deg,rgba(194, 81, 81, 1) 0%, rgba(17, 173, 17, 1) 23%, rgba(194, 81, 81, 1) 48%, rgba(17, 173, 17, 1) 73%, rgba(194, 81, 81, 1) 91%)',
                secondaryBg: 'linear-gradient(30deg,rgba(214, 161, 161, 1) 0%, rgba(164, 219, 164, 1) 100%)',
                headerBg: 'rgb(235, 245, 235)',
                gameBg: 'rgba(255, 255, 255, 0.95)',
                gameBorder: '1px solid rgba(170, 210, 170, 0.8)',
                gameTextColor: '#102a43'
            };
        }

        setBanner(
            theme.imgSrc,
            theme.bannerBgSrc,
            theme.bodyBgColor,
            theme.primaryBg,
            theme.secondaryBg,
            theme.headerBg,
            theme.gameBg,
            theme.gameBorder,
            theme.gameTextColor
        );
    });
})();

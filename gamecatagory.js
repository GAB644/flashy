function showCategory(category) {
            var list = document.getElementById('game-list');
            if (!list) {
                return;
            }
            var items = list.getElementsByTagName('li');
            for (var i = 0; i < items.length; i += 1) {
                var item = items[i];
                var itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            }
        }

        if (window.attachEvent) {
            window.attachEvent('onload', function () { showCategory('all'); });
        } else if (window.addEventListener) {
            window.addEventListener('load', function () { showCategory('all'); }, false);
        } else {
            window.onload = function () { showCategory('all'); };
        }
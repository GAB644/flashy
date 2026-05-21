(function() {
    function pad(n) { return n < 10 ? '0' + n : n; }

    function updateClock(container) {
        var d = new Date();
        var time = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds())
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = months[d.getMonth()] + ' ' + d.getDate()
        
        if (!container.clockElement) {
            container.clockElement = document.createElement('span');
            container.clockElement.style.color = 'rgb(226, 226, 226)';
            container.appendChild(container.clockElement);
        }
        container.clockElement.innerHTML = time + ' ' + date;
    }

    function start() {
        var container = document.querySelector ? document.querySelector('.toolbar-right') : 
                        (document.getElementsByClassName ? document.getElementsByClassName('toolbar-right')[0] : null);
        if (!container && document.all) {
            var divs = document.getElementsByTagName('div');
            for (var i = 0; i < divs.length; i++) {
                if (divs[i].className && divs[i].className.indexOf('toolbar-right') !== -1) {
                    container = divs[i];
                    break;
                }
            }
        }
        if (!container) return;
        
        updateClock(container);
        setInterval(function() { updateClock(container); }, 1000);
    }

    if (window.addEventListener) window.addEventListener('load', start, false);
    else if (window.attachEvent) window.attachEvent('onload', start);
    else window.onload = start;
})();
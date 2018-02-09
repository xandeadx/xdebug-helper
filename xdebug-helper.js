// ==UserScript==
// @name         xDebug helper
// @namespace    http://xandeadx.ru/
// @version      0.2
// @author       xandeadx
// @match        http://*.local/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.key == 'F5' && event.shiftKey) {
            var currentDate = new Date();
            Cookies.set('XDEBUG_SESSION', 'PHPSTORM', {expires: new Date(currentDate.getTime() + 5000)});
        }
    });
})();

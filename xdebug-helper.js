// ==UserScript==
// @name         xDebug helper
// @namespace    http://xandeadx.ru/
// @version      0.1
// @author       xandeadx
// @match        http://*.local/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.key == 'F5' && event.ctrlKey) {
            var currentDate = new Date();
            Cookies.set('XDEBUG_SESSION', 'PHPSTORM', {expires: new Date(currentDate.getTime() + 1000)});
        }
    });
})();

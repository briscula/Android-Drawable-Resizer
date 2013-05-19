/*
 * This file is part of Android-Drawable-Resizer.
 *
 * Android-Drawable-Resizer is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://www.wtfpl.net/ for more details.
 *
 */

define(function (require) {
    'use strict';

    var InputFileHandler = require('app/inputFileHandler');

    /*
     * Function called when the dom loads from DOMContenetLoaded
     * Place code here
     */
    function ready() {
    }

    /*
     * Unbind the dom load event listener and fire the ready event
     */
    var DOMContentLoaded = function () {
        if (document.addEventListener) {
            document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
            ready();
        } else if (document.readyState === "complete") {
            window.document.detachEvent('onreadystatechange', DOMContentLoaded);
            ready();
        }
    };

    /*
     * Add event listeners for when the dom loads fire DOMContenetLoaded
     * when it does (also checks if DOM is already loaded if it has been just fire the ready function)
     */
    if (document.readyState === 'complete') {
        setTimeout(ready, 1);
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
        window.addEventListener("load", ready, false);
    } else { //ie..
        document.attachEvent('onreadysteatechange', DOMContentLoaded);
        window.attachEvent("onload", ready);
    }
});

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

define(function(){
    'use strict';

    var ImageLoader = function(dataUrl, density) {
        this._image = new Image();
        this._image.src = dataUrl;
    };

    ImageLoader.prototype._onLoadComplete = function() {

    };

    return ImageLoader;
});

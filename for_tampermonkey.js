// ==UserScript==
// @name         Photo Gallery Aspect Ratio Fixer for Yamareco
// @description  Restores the original aspect ratio of photos in Yamareco's gallery for a more natural visual presentation.
// @namespace    https://github.com/bunatree/tiny-yamareco-customizations/
// @version      2024-02-11
// @author       Bunatree Melonpan
// @match        https://www.yamareco.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yamareco.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const imgWidth = 176;
  const imgHeight = 176;
  const galleryStyle = 'flex';
  const enableTextShadow = true;
  const textShadow = '0 0 2px black';

  const tinyYamarecoCustomizations = {

    // Replace the image urls and reset the widths and heights.
    resetImageAll: function(galleryElm) {
      galleryElm.querySelectorAll('a.photo-list-wrap-item-wrap').forEach(anchorElm => {
        const hrefValue = anchorElm.href;
        const imgElm = anchorElm.getElementsByTagName('img')[0];
        tinyYamarecoCustomizations.resetImage(imgElm,hrefValue);
      });
    },
  
    resetImage: function(imgElm,newImgUrl) {
      if (imgElm) {
        imgElm.src = newImgUrl;
        imgElm.srcset = newImgUrl + ' 2x';
        imgElm.style.width = 'auto';
        imgElm.style.height = 'auto';
        imgElm.style.maxWidth = imgWidth + 'px';
        imgElm.style.maxHeight = imgHeight + 'px';
      }
    },

    // Add a text shadow to each time stamp.
    setTextShadowAll: function(galleryElm) {
      galleryElm.querySelectorAll('.photo-list-wrap-item-time').forEach(timeElm => {
        timeElm.style.textShadow = textShadow;
      });
    }

  };


  window.addEventListener('load', () => {

    const galleryElm = document.querySelector('div.photo-list-wrap');

    if (galleryElm) {
      // Replace the image and reset its width and height.
      tinyYamarecoCustomizations.resetImageAll(galleryElm);
      if (enableTextShadow) {
        // Add a text shadow to each time stamp.
        tinyYamarecoCustomizations.setTextShadowAll(galleryElm);
      }
    }
  });


})();



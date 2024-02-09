window.addEventListener('load', () => {
  const galleryElm = document.querySelector('div.photo-list-wrap');
  if (galleryElm) {
    galleryElm.querySelectorAll('a.photo-list-wrap-item-wrap').forEach(anchorElm => {
      const hrefValue = anchorElm.href;
      const imgElm = anchorElm.getElementsByTagName('img')[0];
      if (imgElm) {
        imgElm.src = hrefValue;
        imgElm.srcset = hrefValue + ' 2x';
      }
    });
  }
});

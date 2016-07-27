Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.js');
Galleria.configure({
    transition: 'fade',
    imageCrop: true,
    responsive: true,
    lightbox: false,/* Quando clica em cima da foto */
    clicknext: false, /* Passar para o próximo */
    dummy: '/images/noimage.jpg', /* Caso não há imagem encontrada */
    fullscreenDoubleTap: true,
    fullscreenCrop: true,
    imagePan: true,
    layerFollow: true
});
Galleria.run('#galleria');
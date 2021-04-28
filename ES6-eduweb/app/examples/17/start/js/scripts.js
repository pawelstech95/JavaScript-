function setSliderSpeed(options) {

    let slider = {};

    slider.speed = options.speed;
    slider.easing = options.easing;

    console.log(slider);

}

const config = {
    autoPlay: true,
    speed: 500,
    pause: 2000,
    easing: "linear",
    infinite: true
};
//eventListner 'mousemove' is added to the DOM to track mouse movements
document.addEventListener('mousemove', (event) => {
    //an array is created that contains two objects, each eye and pupil
    const eyes = [
        { eye: document.querySelector('.left-eye'), pupil: document.querySelector('.left-pupil') },
        { eye: document.querySelector('.right-eye'), pupil: document.querySelector('.right-pupil') }
    ];
//forEach loop is used to iterate over the eyes array created above
    eyes.forEach(({ eye, pupil }) => {
        //this method gives the exact position and dimension of eye element 
        const rect = eye.getBoundingClientRect();
        //the centre of the eye is calculated using this 
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
//the mouse distance relative to the centre of eye is find, as it constantly changes so dx and dy element are taken 
        const dx = event.clientX - eyeCenterX;
        const dy = event.clientY - eyeCenterY;
        //this method calculates the angle of the mouse position relative to the centre of the eye 
        const angle = Math.atan2(dy, dx);

        // Max distance pupil can move from center
        const maxX = (rect.width / 2) - 20;
        const maxY = (rect.height / 2) - 20;
//this method calculates the position of the pupil based on the angle and maximum distance it can move
//the *0.5 is used to make the pupil movement smoother 
//the 10 is subtracted to keep the pupil within the eye bounds
        const pupilX = Math.cos(angle) * maxX * 0.5 + (rect.width / 2 - 10);
        const pupilY = Math.sin(angle) * maxY * 0.5 + (rect.height / 2 - 10);
//the pupil position is updated using the calculated values
        pupil.style.position = 'relative';
        //real time posiyion of pupil is set by the style property 
        pupil.style.left = `${pupilX}px`;
        pupil.style.top = `${pupilY}px`;
    });
});
//all of this is under the 'mousemove' event listener 
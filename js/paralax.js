let backG = document.getElementById('backG');
let backG2 = document.getElementById('backG2');
let backG3 = document.getElementById('backG3');

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    backG.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    backG2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    backG3.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

window.addEventListener('DeviceOrientationEvent', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    backG.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    backG2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    backG3.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
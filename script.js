const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes')
noButton.addEventListener('click', function () {
        // Generate random positions within the viewport
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
    
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
    
        // Apply new position
        noButton.style.position = 'absolute'; 
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', function () {
    alert("Hehehehe. Love you lots babe. Can't wait to spend Valentine's day with my forever valentine!");
});

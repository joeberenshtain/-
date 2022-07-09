function createStar() {
    let star = document.createElement('div')
    star.textContent = '🞿'
    star.classList.add('star')
    star.style.fontSize = Math.floor(Math.random()*6 + 6) + "px"
    star.style.left = Math.floor(Math.random()*100) + "%"
    star.style.top = Math.floor(Math.random()*100) + "%"

    document.getElementById('top').appendChild(star)
}
for (let i = 0; i < 100; i++) createStar()
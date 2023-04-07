//seleccionamos el la etiqueta canvas
const canvas = document.querySelector('canvas')
canvas.width = 500
canvas.height = 300
//la variable context es nuestro pincel
const ctx = canvas.getContext('2d')
// testing
//ctx.fillReact(0,0,canvas.width, canvas.height)

const sound1 = document.createElement('audio')
const sound2 = document.createElement('audio')
sound1.src = 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-8-bit-failed-hit-1.mp3'
sound2.src = 'https://cdn.staticcrate.com/stock-hd/audio/soundscrate-videogamebundle-kick.mp3'
const score = {
    left: 0,
    right: 0,
}

var img1 = new Image();
img1.src = "L1.png";
//paddle= paleta  estos son mis jugadores
const getPaddle = ({ x = 60, img = 1 }) => ({

    x,
    y: 50,
    w: 50,
    h: 50,
    //color,
    speed: 15,
    draw() {
        switch (img) {
            case 1:
                var img1 = new Image();
                img1.src = "L1.png";
                ctx.drawImage(img1, this.x, this.y, this.w, this.h)
                break;

            case 2:
                var img2 = new Image();
                img2.src = "P2.png";
                ctx.drawImage(img2, this.x, this.y, this.w, this.h)
                break;//down
        }
    },
    moveUp() {
        if (this.y < 1) { return }
        this.y -= this.speed
    },
    moveDown() {
        if (this.y > canvas.height - this.h - 1) { return }
        this.y += this.speed
    },
    contains(b) {
        return (this.x < b.x + b.w) &&
            (this.x + this.w > b.x) &&
            (this.y < b.y + b.h) &&
            (this.y + this.h > b.y)
    }
})

const getBall = () => ({

    x: canvas.width / 2,
    y: canvas.height / 2,
    w: 25,
    h: 25,
    //color:'blue',
    directionX: 'right',
    directionY: 'up',
    friction: .6,
    speedX: 20,
    speedY: 20,
    isMoving: false,
    handleMovement() {
        if (!this.isMoving) {
            return
        }
        //0. right to left
        if (this.x < 0) {
            this.directionX = 'right'
        } else if (this.x > canvas.width - this.w) {
            this.directionX = 'left'
        }
        if (this.directionX === 'right') {
            this.speedX++
        } else {
            this.speedX--

        }
        this.speedX *= this.friction
        this.x += this.speedX

        //1. floor, ceil
        if (this.y < 0) {
            this.directionY = 'down'
        } else if (this.y > canvas.height - this.h) {
            this.directionY = 'up'
        }
        if (this.directionY === 'down') {
            this.speedY++
        } else {
            this.speedY--

        }
        this.speedY *= this.friction
        this.y += this.speedY

    },
    draw() {
        var img = new Image();
        img.src = "ball.png";
        //ctx.drawImage(img, 140, 140,30,30);
        this.handleMovement()
        //ctx.fillStyle=this.color
        ctx.drawImage(img, this.x, this.y, this.w, this.h)
    }
})

const paddleLeft = getPaddle({})
const paddleRight = getPaddle({
    x: canvas.width - 100,
    img: 2 //color:'red'

})


const ball = getBall()

const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCourt()
    drawScore()
    ball.draw()
    paddleLeft.draw()
    paddleRight.draw()
    checkCollitions()
    requestAnimationFrame(update)



}

//aux function
const drawCourt = () => {
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 5;
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2, 0)

    ctx.lineTo(canvas.width / 2, canvas.height)
    ctx.stroke()
    ctx.closePath()
    //ARO DERECHA
    ctx.beginPath()
    ctx.arc(canvas.width, canvas.height / 2, 50, 2 * Math.PI, false)
    ctx.stroke()
    ctx.closePath()

    //ARO IZQUIERDA
    ctx.beginPath()
    ctx.arc(0, canvas.height / 2, 50, 2 * Math.PI, false)
    ctx.stroke()
    ctx.closePath()


    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 2 * Math.PI, false)
    ctx.stroke()
    ctx.closePath()
}

const checkCollitions = () => {
    if (paddleLeft.contains(ball)) {
        ball.directionX = 'right'
        sound1.play()
    } else if (paddleRight.contains(ball)) {
        ball.directionX = 'left'
        sound1.play()
    }
    if (ball.x < 0) {
        //console.log("yes");
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.isMoving = false
        score.right++
        sound2.play()
    } else if (ball.x > canvas.width - ball.w) {
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.isMoving = false
        score.left++
        sound2.play()
    }
}

const drawScore = () => {
    ctx.fillStyle = 'gray'
    ctx.font = '34px "Press Start 2P"'
    ctx.fillText(score.left, 60, 70)
    ctx.fillText(score.right, canvas.width - 100, 70)
}

//listener
addEventListener('keydown', e => {

    console.log(e.keyCode)
    switch (e.keyCode) {

        case 87://up
            paddleLeft.moveUp();
            break;
        case 83:
            paddleLeft.moveDown();
            break;//down
        case 32://up
            ball.isMoving = true
            break;
        case 38://up          
            paddleRight.moveUp();
            break;
        case 40:
            paddleRight.moveDown();
            break;//down
    }


})

requestAnimationFrame(update)

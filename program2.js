<<<<<<< HEAD
// Задание 3. Хвост виляет: поворот на ±30° вокруг точки крепления
// переменные для размеров канваса и таймер
let canvasWidth = document.getElementById('canvas').width;
let canvasHeight = document.getElementById('canvas').height;
let idTimer;
let ctx;

function drawing(){
    ctx = document.getElementById('canvas').getContext('2d');
    // запускаем бесконечное движение
    move();
}

// очищаем канвас
function clearCanvas(){
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.restore();
}

// рисуем рыбку. Начало координат - центр тела, рыбка смотрит вправо.
// tailAngle - угол поворота хвоста (в радианах) вокруг точки крепления
function drawFish(tailAngle = 0){
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#164B69";

    // хвост-треугольник: поворот вокруг точки крепления (-70, 0)
    ctx.save();
        ctx.translate(-70, 0);
        ctx.rotate(tailAngle);
        ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-50, -32);
            ctx.lineTo(-50, 32);
        ctx.closePath();
        ctx.fillStyle = "#f4a261";
        ctx.fill();
        ctx.stroke();
    ctx.restore();

    // верхний плавник-треугольник
    ctx.beginPath();
        ctx.moveTo(-25, -31);
        ctx.lineTo(20, -33);
        ctx.lineTo(-10, -62);
    ctx.closePath();
    ctx.fillStyle = "#f4a261";
    ctx.fill();
    ctx.stroke();

    // тело-эллипс
    ctx.beginPath();
        ctx.ellipse(0, 0, 70, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#ffd166";
    ctx.fill();
    ctx.stroke();

    // чешуя из дуг (ряды полукруглых дуг)
    ctx.lineWidth = 1.2;
    for (let row = -1; row <= 1; row++) {
        for (let i = 0; i < 3; i++) {
            let x = -50 + i * 20 + (row % 2 ? 10 : 0);
            let y = row * 16;
            ctx.beginPath();
                ctx.arc(x, y, 10, Math.PI * 0.55, Math.PI * 1.45, false);
            ctx.stroke();
        }
    }
    ctx.lineWidth = 2;

    // жаберная дуга
    ctx.beginPath();
        ctx.arc(30, 0, 28, Math.PI * 0.72, Math.PI * 1.28, false);
    ctx.stroke();

    // глаз
    ctx.beginPath();
        ctx.arc(46, -8, 6, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
        ctx.arc(48, -8, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = "#164B69";
    ctx.fill();

    ctx.restore();
}

// запуск движения
function move(){
    idTimer = setInterval(moveFish, 25);
}

// кнопка: остановить / запустить
function clickButton(button) {
    if (button.value == "Остановить") {
        clearInterval(idTimer);
        button.value = "Запустить";
    } else {
        move();
        button.value = "Остановить";
    }
}

let tailAngle = 0;                  // текущий угол хвоста
let maxAngle = 30 * Math.PI / 180;  // ±30°
let hAngle = 0.04;                  // шаг поворота
let moveBack = false;               // направление качания

function moveFish() {
    clearCanvas();

    ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        drawFish(tailAngle);
    ctx.restore();

    // ограничиваем угол: от -30° до +30°
    if (tailAngle >= maxAngle) {
        moveBack = true;
    } else if (tailAngle <= -maxAngle) {
        moveBack = false;
    }
    tailAngle += (!moveBack) ? hAngle : -hAngle;
}
=======
// Задание 3. Хвост виляет: поворот на ±30° вокруг точки крепления
// переменные для размеров канваса и таймер
let canvasWidth = document.getElementById('canvas').width;
let canvasHeight = document.getElementById('canvas').height;
let idTimer;
let ctx;

function drawing(){
    ctx = document.getElementById('canvas').getContext('2d');
    // запускаем бесконечное движение
    move();
}

// очищаем канвас
function clearCanvas(){
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.restore();
}

// рисуем рыбку. Начало координат - центр тела, рыбка смотрит вправо.
// tailAngle - угол поворота хвоста (в радианах) вокруг точки крепления
function drawFish(tailAngle = 0){
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#164B69";

    // хвост-треугольник: поворот вокруг точки крепления (-70, 0)
    ctx.save();
        ctx.translate(-70, 0);
        ctx.rotate(tailAngle);
        ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-50, -32);
            ctx.lineTo(-50, 32);
        ctx.closePath();
        ctx.fillStyle = "#f4a261";
        ctx.fill();
        ctx.stroke();
    ctx.restore();

    // верхний плавник-треугольник
    ctx.beginPath();
        ctx.moveTo(-25, -31);
        ctx.lineTo(20, -33);
        ctx.lineTo(-10, -62);
    ctx.closePath();
    ctx.fillStyle = "#f4a261";
    ctx.fill();
    ctx.stroke();

    // тело-эллипс
    ctx.beginPath();
        ctx.ellipse(0, 0, 70, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#ffd166";
    ctx.fill();
    ctx.stroke();

    // чешуя из дуг (ряды полукруглых дуг)
    ctx.lineWidth = 1.2;
    for (let row = -1; row <= 1; row++) {
        for (let i = 0; i < 3; i++) {
            let x = -50 + i * 20 + (row % 2 ? 10 : 0);
            let y = row * 16;
            ctx.beginPath();
                ctx.arc(x, y, 10, Math.PI * 0.55, Math.PI * 1.45, false);
            ctx.stroke();
        }
    }
    ctx.lineWidth = 2;

    // жаберная дуга
    ctx.beginPath();
        ctx.arc(30, 0, 28, Math.PI * 0.72, Math.PI * 1.28, false);
    ctx.stroke();

    // глаз
    ctx.beginPath();
        ctx.arc(46, -8, 6, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
        ctx.arc(48, -8, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = "#164B69";
    ctx.fill();

    ctx.restore();
}

// запуск движения
function move(){
    idTimer = setInterval(moveFish, 25);
}

// кнопка: остановить / запустить
function clickButton(button) {
    if (button.value == "Остановить") {
        clearInterval(idTimer);
        button.value = "Запустить";
    } else {
        move();
        button.value = "Остановить";
    }
}

let tailAngle = 0;                  // текущий угол хвоста
let maxAngle = 30 * Math.PI / 180;  // ±30°
let hAngle = 0.04;                  // шаг поворота
let moveBack = false;               // направление качания

function moveFish() {
    clearCanvas();

    ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        drawFish(tailAngle);
    ctx.restore();

    // ограничиваем угол: от -30° до +30°
    if (tailAngle >= maxAngle) {
        moveBack = true;
    } else if (tailAngle <= -maxAngle) {
        moveBack = false;
    }
    tailAngle += (!moveBack) ? hAngle : -hAngle;
}
>>>>>>> f2753301ebf375e9a7254e76d6b3aab0c18a2648

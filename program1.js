<<<<<<< HEAD
// Задание 2. Рыбка плывёт по синусоиде y = 200 + 60*sin(x/40) и поворачивается по касательной
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

let posX = -120;
let h = 2;
let moveBack = false;
let widthPict = 120;

// траектория и её производная
function trajY(x)  { return 200 + 60 * Math.sin(x / 40); }
function trajDY(x) { return (60 / 40) * Math.cos(x / 40); }   // y'(x)

function moveFish() {
    clearCanvas();

    // (необязательно) рисуем саму траекторию
    ctx.save();
        ctx.strokeStyle = "#cfd8dc";
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        for (let x = 0; x <= canvasWidth; x += 4) {
            if (x == 0) ctx.moveTo(x, trajY(x)); else ctx.lineTo(x, trajY(x));
        }
        ctx.stroke();
    ctx.restore();

    // угол касательной к траектории
    let angle = Math.atan(trajDY(posX));

    ctx.save();
        ctx.translate(posX, trajY(posX));
        ctx.rotate(angle);        // поворот по касательной
        if (moveBack) {
            ctx.scale(-1, 1);     // при движении влево - зеркально
        }
        drawFish();
    ctx.restore();

    if (posX >= canvasWidth + widthPict) {
        moveBack = true;
    } else if (posX <= -widthPict) {
        moveBack = false;
    }
    posX += (!moveBack) ? h : -h;
}
=======
// Задание 2. Рыбка плывёт по синусоиде y = 200 + 60*sin(x/40) и поворачивается по касательной
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

let posX = -120;
let h = 2;
let moveBack = false;
let widthPict = 120;

// траектория и её производная
function trajY(x)  { return 200 + 60 * Math.sin(x / 40); }
function trajDY(x) { return (60 / 40) * Math.cos(x / 40); }   // y'(x)

function moveFish() {
    clearCanvas();

    // (необязательно) рисуем саму траекторию
    ctx.save();
        ctx.strokeStyle = "#cfd8dc";
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        for (let x = 0; x <= canvasWidth; x += 4) {
            if (x == 0) ctx.moveTo(x, trajY(x)); else ctx.lineTo(x, trajY(x));
        }
        ctx.stroke();
    ctx.restore();

    // угол касательной к траектории
    let angle = Math.atan(trajDY(posX));

    ctx.save();
        ctx.translate(posX, trajY(posX));
        ctx.rotate(angle);        // поворот по касательной
        if (moveBack) {
            ctx.scale(-1, 1);     // при движении влево - зеркально
        }
        drawFish();
    ctx.restore();

    if (posX >= canvasWidth + widthPict) {
        moveBack = true;
    } else if (posX <= -widthPict) {
        moveBack = false;
    }
    posX += (!moveBack) ? h : -h;
}
>>>>>>> f2753301ebf375e9a7254e76d6b3aab0c18a2648

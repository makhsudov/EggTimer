function eggs () {
    var btn = document.getElementById("btn");
    var timer = document.getElementById("timer");

    // Запуск таймера по кнопке
    if (btn.style.display==="none"){
        // btn.innerHTML="Начать отсчёт";
        timer.style.display="none";
    } else {
        btn.style.display="none";
        timer.style.display="inline";
    }


    let timerHTML = document.getElementById("timer");
    // timerHTML ищет на странице, где подключен этот скрипт h1 с id = "timer"

    var timeMinut = 0; // Количество минут готовки блюда
    timeMinut = timeMinut * 60 // Перевод в секунды 👏

    timer = setInterval(function () {
        // setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени (1 секунда)
        seconds = timeMinut%60 // % - остаток, т.е, по умолчанию timeMinut = 60, 60/60 - остаток = 0,
        minutes = timeMinut/60%60
        hour = timeMinut/60/60%60


        document.getElementById('par').innerHTML = 'Варка';

        if (timeMinut >= 180) {
          document.getElementById('par').innerHTML = 'Яйцо в мешочек';
          // Изменение текста по id 'par' через innerHTML
          document.getElementById('textDescription').innerHTML = '(белок затвердел только по внешнему краю, остальная часть жидкая, как и желток)';
          // Добавления текста описания
          document.getElementById('pic').innerHTML = '<img class="pic" src="egg02.png"/>';
          // Появление картинки через innerHTML
        }
        if (timeMinut >= 300) {
            document.getElementById('par').innerHTML = 'Яйцо в мешочек';
            document.getElementById('textDescription').innerHTML = '(белок почти сварился, но немного жидкий, как и желток)';
            document.getElementById('pic').innerHTML = '<img class="pic" src="egg03.png"/>'; // Появление картинки через innerHTML
        }
        if (timeMinut >= 420) {
            document.getElementById('par').innerHTML = 'Яйцо сварено всмятку';
            document.getElementById('textDescription').innerHTML = '(белок сварен полностью, а желток жидкий)';
            document.getElementById('pic').innerHTML = '<img class="pic" src="egg04.png"/>';
        }
        if (timeMinut >= 600) {
            document.getElementById('par').innerHTML = 'Яйцо вкрутую';
            document.getElementById('textDescription').innerHTML = '(белок сварился полностью, желток схватился, но остался в середине мягким)';
            document.getElementById('pic').innerHTML = '<img class="pic" src="egg05.png"/>';
        }
        if (timeMinut >= 840) {
            document.getElementById('par').innerHTML = 'Яйцо вкрутую';
            document.getElementById('textDescription').innerHTML = '(белок и желток полностью сварены. Оптимальный вариант приготовления яиц для длительного хранения и для использования в приготовлении салатов.)';
            document.getElementById('pic').innerHTML = '<img class="pic" src="egg06.png"/>';
        }
        if (timeMinut >= 1201) {
            document.getElementById('par').innerHTML = 'Переваренное яйцо';
            document.getElementById('textDescription').innerHTML = '(белок и желток полностью сварены, но начинают терять во вкусовых качествах, становятся постепенно резиновыми)';
            document.getElementById('pic').innerHTML = '<img class="pic" src="egg07.png"/>';
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`; // Вывод таймера по минутам; (`${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}` - по часам)
            // Функция JavaScript "Math.trunc()"" возвращает целую часть числа путём удаления всех дробных знаков
            timerHTML.innerHTML = strTimer; // Выводится на страницу сайта в h1 таймер
        }

        // if (timeMinut < 420) {
        //     clearInterval(timer);
        //     document.getElementById('par').innerHTML = 'Яйцо вкрутую';
        //     timerHTML.innerHTML = '<h3>ГОТОВО!</h3>';


        ++timeMinut; // Уменьшение времени таймера (--) или увеличение
    }, 1000) // 1000 миллисекунд - интервал времени повторения функции "timer"

}

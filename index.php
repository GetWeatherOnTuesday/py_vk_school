<?php

?>

<!DOCTYPE html>
<html lang="ru" class="dark:bg-neutral-900">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Школьное расписание</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/javascript.js"></script>
</head>
<body>
    <header>
        <div class="mr-auto ml-auto container flex flex-col justify-center items-center">
            <div class="text-neutral-900 dark:text-white">Расписания</div>
            <div class="days">
                <ul>
                    <li class="day selected dark:text-neutral-400">ПН</li>
                    <li class="day">ВТ</li>
                    <li class="day">СР</li>
                    <li class="day">ЧТ</li>
                    <li class="day">ПТ</li>
                    <li class="day">СБ</li>
                    <li class="day">ЗВОНКИ</li>
                    <li class="day">АВТОБУСЫ</li>
                </ul>
            </div>
        </div>
    </header>
    <main>
        <section class="second__section">
            <span class="date"></span>
        </section>
        <section class="thrid__section">
            <div class="table__rasp">
                <div class="table__element">
                    <span class="num">1</span>
                    <div class="sub__element">
                        <span class="name">Русский язык</span>
                        <br>
                        <div class="svg__element">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#818c99"><path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333zM78.83333,43v45.96744l30.76628,30.76628l10.13411,-10.13411l-26.56706,-26.56706v-40.03256z"></path></g></g></svg>
                        </div>
                        <span class="time">8:00-8:35</span>
                    </div>
                    <span class="cab">6</span>
                </div>
            </div>
        </section>
    </main>
</body>
</html>
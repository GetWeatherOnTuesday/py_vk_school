function setups(now) {
    // Нынешняя дата
    if (now == 1) {
        let d = new Date();
        // День недели
        let arrDay = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
        let day = arrDay[d.getDay()];
        let arrDayShort = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
        let dayShort = arrDayShort[d.getDay()];
        // Число
        let num_day = d.getDate();
        // Месяц
        let arrMonth = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"]
        let month = arrMonth[d.getMonth()];
        return {
            day:day,
            dayShort: dayShort,
            num_day:num_day,
            month:month
        }
    }
    else if (now == 0){
        let d_cur = new Date()
        // День недели
        let arrDay = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
        let arrDayShort = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
        let dayShort = arrDayShort[d_cur.getDay()];
        console.log(selectedDay());
        if (dayShort == selectedDay()) {
            let day = d_cur.setDate(1);
        // Число
            let num_day = d_cur.getDate();
        // Месяц
            let arrMonth = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"]
            let month = arrMonth[d_cur.getMonth()];
            return {
                day: day,
                dayShort: dayShort,
                num_day: num_day,
                month: month
            };
        };
    };
};
function now_day() {
    let {day, num_day, month} = setups(1);

}
function day_output(now){
    let {day, num_day, month} = setups(now);
    let output = (day != "ВОСКРЕСЕНЬЕ" ? day : "ПОНЕДЕЛЬНИК") + ", " + (num_day<10 ? '0' + num_day : num_day) + " " + month;
    document.querySelector(".date").innerHTML = output
}

function timetable(day) {
    let requestURL = '/timetable.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var days = request.response;
        showHeroes(days, 'ПН');
    }
}

function showHeroes(jsonObj, day) {
    var pram = jsonObj[day];
    document.querySelector(".thrid__section").createElement('div.table__rasp')

    var table = document.createElement('div.table__element');
    var num = document.createElement('span.num');
    var name = document.createElement('h2');
    var time = document.createElement('p');
    var cab = document.createElement('span.cab');

    num.textContent = pram.num;
    //myPara1.textContent = 'Secret identity: ' + pram[i].secretIdentity;
    //myPara2.textContent = 'Age: ' + pram[i].age;
    cab.textContent = pram.cab;

    //var superPowers = pram[i].powers;
    //for (var j = 0; j < superPowers.length; j++) {
    //    var listItem = document.createElement('li');
    //    listItem.textContent = superPowers[j];
    //    myList.appendChild(listItem);
    //}

    //myArticle.appendChild(myH2);
    //myArticle.appendChild(myPara1);
    //myArticle.appendChild(myPara2);
    //myArticle.appendChild(myPara3);
    //myArticle.appendChild(myList);

    //section.appendChild(myArticle);
}
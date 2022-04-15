function setups(now) {
    // Нынешняя дата
    if (now === 1) {
        let d = new Date();
        // День недели
        let arrDay = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
        let arrDayShort = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
        let day = arrDay[d.getDay()];
        // Число
        let num_day = d.getDate();
        // Месяц
        let arrMonth = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"]
        let month = arrMonth[d.getMonth()];
        return {
            day:day,
            num_day:num_day,
            month:month
        }
    }
    else {
        let d_cur = new Date(year,month,day)
        // День недели
        let arrDay = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
        let day = arrDay[d.getDay()];
        // Число
        let num_day = d_cur.getDate()[d_cur.getDate()];
        // Месяц
        let arrMonth = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"]
        let month = arrMonth[d.getMonth()];
        // Год
        let year = 0
    }
}

function now_day() {
    let {day, num_day, month} = setups();
    
    return output;
}
function day_output(now){
    let {day, num_day, month} = setups(now);
    let output = (day != "ВОСКРЕСЕНЬЕ" ? day : "ПОНЕДЕЛЬНИК") + ", " + month + " " + (num_day<10 ? '0' : '') + num_day;
    document.querySelector(".date").innerHTML = output
}
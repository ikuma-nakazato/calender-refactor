let month = document.getElementsByClassName("data_YM")[0].getAttribute('data-scheduleMonth');
let year = document.getElementsByClassName("data_YM")[0].getAttribute('data-scheduleYear');

document.getElementsByClassName("table_caption")[0].innerHTML = year + "年" + month + "月";



function popup_show(){
    document.getElementsByClassName("popup_layer")[0].style.display = "block";
    document.getElementsByClassName("popup_form")[0].style.display = "block";
}



let popup_formShow = document.getElementsByClassName("popup_form-show");

function form_date(day) {
    document.getElementsByClassName("popup_form-date")[0].innerHTML = year + "年" + month + "月" + day + "日";
}

for(var i = 0; i < popup_formShow.length; i++){

    let data_day = popup_formShow[i].getAttribute('data-scheduleDay');

    popup_formShow[i].onclick = function(){
        form_date(data_day);
        popup_show();
        change_url(data_day);
    };
}



function popup_close(){
    document.getElementsByClassName("popup_layer")[0].style.display = "none";
    document.getElementsByClassName("popup_form")[0].style.display = "none";
}

document.getElementsByClassName("popup_layer")[0].addEventListener('click', popup_close);
document.getElementsByClassName("popup_form-close")[0].addEventListener('click', popup_close);



function change_url(day){
    let fixed_url = "./changeDB.php/" + "?year=" + year + "&month=" + month + "&day=" + day;
    document.getElementsByClassName("popup_form-text")[0].setAttribute('action', fixed_url);
}



/*
document.getElementsByClassName("popup_form-show").forEach(function(){
    console.log(document.getElementsByClassName("p);
});
*/
/*
var test = document.getElementsByClassName("popup_form-date");
test[0].innerHTML = "書き換え";
*/
/*
console.log(document.getElementsByClassName("popup_form-show"));
*/
/*
var data = document.getElementsByClassName("date_data");
data[0].innerHTML = data[0].getAttribute('data-ScheduleYear') + "年" + data[0].getAttribute('data-ScheduleMonth') + "月";
*/

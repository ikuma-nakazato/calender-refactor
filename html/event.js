var isset = function(data){
    if(data === "" || data === null || data === undefined){
        return false;
    }else{
        return true;
    }
};

let month = document.getElementsByClassName("data_YM")[0].getAttribute('data-scheduleMonth');
let year = document.getElementsByClassName("data_YM")[0].getAttribute('data-scheduleYear');

document.getElementsByClassName("table_caption")[0].innerHTML = year + "年" + month + "月";


//ポップアップの表示
function popup_show(){
    document.getElementsByClassName("popup_layer")[0].style.display = "block";
    document.getElementsByClassName("popup_form")[0].style.display = "block";
}

//ポップアップ非表示
function popup_close(){
    document.getElementsByClassName("popup_layer")[0].style.display = "none";
    document.getElementsByClassName("popup_form")[0].style.display = "none";
}

document.getElementsByClassName("popup_layer")[0].addEventListener('click', popup_close);
document.getElementsByClassName("popup_form-close")[0].addEventListener('click', popup_close);

//フォームの中身
function form_display_newTask(day) {
    document.getElementsByClassName("popup_form-date")[0].innerHTML = year + "年" + month + "月" + day + "日";
}

//データ送信時のurl変更
function change_url(day){
    let fixed_url = "./changeDB.php/" + "?year=" + year + "&month=" + month + "&day=" + day;
    document.getElementsByClassName("popup_form-text")[0].setAttribute('action', fixed_url);
}


//サイドバーの中身
let sidemenu_tasks = document.getElementsByClassName("sidemenu_tasks");
let sidemenuShow = document.getElementsByClassName("sidemenu-show");
let task = document.getElementsByClassName("task");

function sidemenu_display(day){
    document.getElementsByClassName("sidemenu_date")[0].innerHTML = year + "年" + month + "月" + day + "日";

    //コール時にサイドバーに表示中のタスクを全て抹消
    if(isset(document.getElementsByClassName("sidemenu_task")[0]) == true){
        while(sidemenu_tasks[0].firstChild){
            sidemenu_tasks[0].removeChild(sidemenu_tasks[0].firstChild);
        }
    }

    //セル内にある全てのタスクを参照
    for(var i = 0; i < task.length; i++){
        if(task[i].getAttribute('data-scheduleTaskDate') == day){

            var divElement_sidemenuTask = document.createElement("div");
            divElement_sidemenuTask.setAttribute('class', "sidemenu_task");
            var textTask = document.createTextNode(task[i].textContent);

            //データ送信用の隠しフォームの定義
            var formElement_sidemenuTask = document.createElement("form");
            formElement_sidemenuTask.setAttribute('class', "sidemenu_task-form");
            formElement_sidemenuTask.setAttribute('action', "./changeDB.php/" + "?year=" + year + "&month=" + month + "&day=" + day);
            formElement_sidemenuTask.setAttribute('method', "post");
            formElement_sidemenuTask.setAttribute('target', "_self");

            //タスク指定子用の隠しデータを含む削除ボタンの定義
            var inputElement_sidemenuTask_hiddenData = document.createElement("input");
            inputElement_sidemenuTask_hiddenData.setAttribute('name', "delete_task");
            inputElement_sidemenuTask_hiddenData.setAttribute('type', "hidden");

            var inputElement_sidemenuTask_submit = document.createElement("input");
            inputElement_sidemenuTask_submit.setAttribute('type', "submit");
            inputElement_sidemenuTask_submit.setAttribute('value', "削除");

            //セルからタスクを文字列で取得しサイドバーに要素と共にセット
            sidemenu_tasks[0].appendChild(divElement_sidemenuTask);
            divElement_sidemenuTask.appendChild(textTask);

            //先にセットされたタスク全てに隠しフォームをセット
            sidemenu_tasks[0].appendChild(formElement_sidemenuTask);

            for(var j = 0; j < document.getElementsByClassName("sidemenu_task-form").length; j++){
                document.getElementsByClassName("sidemenu_task-form")[j].appendChild(inputElement_sidemenuTask_hiddenData);
                inputElement_sidemenuTask_hiddenData.setAttribute('value', j);

                document.getElementsByClassName("sidemenu_task-form")[j].appendChild(inputElement_sidemenuTask_submit);
            }
        }
    }
}

let popup_formShow = document.getElementsByClassName("popup_form-show");
for(var i = 0; i < popup_formShow.length; i++){
    let data_day = popup_formShow[i].getAttribute('data-scheduleDay');

    //日付クリックのイベント
    popup_formShow[i].onclick = function(){
        popup_show();
        form_display_newTask(data_day);
        change_url(data_day);
    };

    //セルクリックのイベント
    if(isset(data_day) === true){
        sidemenuShow[i].onclick = function(){
            sidemenu_display(data_day);
        }
    }
}
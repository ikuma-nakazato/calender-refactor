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


//---------------------------------------------------
//サイドメニュー
//---------------------------------------------------
function sidemenu_date_display(day){
    document.getElementsByClassName("sidemenu_date")[0].innerHTML = year + "年" + month + "月" + day + "日";
}



function sidemenu_task_display(day){
    let sidemenu_task_num = 0;
    let task = document.getElementsByClassName("task");
    let sidemenu_tasks = document.getElementsByClassName("sidemenu_tasks");


    if(isset(document.getElementsByClassName("sidemenu_task")[0]) == true){
        while(sidemenu_tasks[0].firstChild){
            sidemenu_tasks[0].removeChild(sidemenu_tasks[0].firstChild);
        }
    }

    for(var i = 0; i < task.length; i++){
        if(task[i].getAttribute('data-scheduleTaskDate') == day){
            var divElement_sidemenuTask = document.createElement("div");
            divElement_sidemenuTask.setAttribute('class', "sidemenu_task");

            var divElement_sidemenuTask_name = document.createElement("div");
            divElement_sidemenuTask_name.setAttribute('class', "sidemenu_task_name");

            var textTask = document.createTextNode(task[i].textContent);

            sidemenu_tasks[0].appendChild(divElement_sidemenuTask);
            document.getElementsByClassName("sidemenu_task")[sidemenu_task_num].appendChild(divElement_sidemenuTask_name);
            divElement_sidemenuTask_name.appendChild(textTask);

            sidemenu_task_num++;
        }
    }
}



function sidemenu_task_change_form(day){
    let sidemenu_task_name = document.getElementsByClassName("sidemenu_task_name");
    for(let i = 0; i < sidemenu_task_name.length; i++){
        console.log(i);
        sidemenu_task_name[i].onclick = function(){
            document.getElementsByClassName("popup_layer-change")[0].style.display = "block";
            document.getElementsByClassName("popup_form-change")[0].style.display = "block";

            document.getElementsByClassName("popup_form-date-change")[0].innerHTML = year + "年" + month + "月" + day + "日";

            document.getElementsByClassName("popup_form-textarea-change")[0].innerHTML = sidemenu_task_name[i].textContent;

            document.getElementsByClassName("popup_form-pointer")[0].setAttribute('value', i);

            document.getElementsByClassName("popup_form-text-change")[0].setAttribute('action', "./changeDB.php/" + "?year=" + year + "&month=" + month + "&day=" + day);
            
        }
    }
}



function sidemenu_task_delete_button(day){
    let sidemenu_task = document.getElementsByClassName("sidemenu_task");


    for(var i = 0; i < sidemenu_task.length; i++){
        //データ送信用の隠しフォームの定義
        let formElement_sidemenuTask = document.createElement("form");
        formElement_sidemenuTask.setAttribute('class', "sidemenu_task-form");
        formElement_sidemenuTask.setAttribute('action', "./changeDB.php/" + "?year=" + year + "&month=" + month + "&day=" + day);
        formElement_sidemenuTask.setAttribute('method', "post");
        formElement_sidemenuTask.setAttribute('target', "_self");

        //タスク指定子用の隠しデータを含む削除ボタンの定義
        let inputElement_sidemenuTask_hiddenData = document.createElement("input");
        inputElement_sidemenuTask_hiddenData.setAttribute('name', "delete_task");
        inputElement_sidemenuTask_hiddenData.setAttribute('type', "hidden");
        inputElement_sidemenuTask_hiddenData.setAttribute('value', i);

        var inputElement_sidemenuTask_submit = document.createElement("input");
        inputElement_sidemenuTask_submit.setAttribute('type', "submit");
        inputElement_sidemenuTask_submit.setAttribute('value', "削除");

        //ノードの挿入
        sidemenu_task[i].appendChild(formElement_sidemenuTask);
        document.getElementsByClassName("sidemenu_task-form")[i].appendChild(inputElement_sidemenuTask_hiddenData);
        document.getElementsByClassName("sidemenu_task-form")[i].appendChild(inputElement_sidemenuTask_submit);
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
        document.getElementsByClassName("sidemenu-show")[i].onclick = function(){
            sidemenu_date_display(data_day);
            sidemenu_task_display(data_day);
            sidemenu_task_change_form(data_day);
            sidemenu_task_delete_button(data_day);
        }
    }
}
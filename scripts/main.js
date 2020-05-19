"use strict";
var userString; // Пользовательская строка
var resultString; // Результирующая строка
var isToCrypt = 0; // Переключатель для функции смены текстовых полей

var input = document.getElementById('uncrypted');
input.focus();

// Получение данных с локального хранилища об установленной цветовой теме
var isDark = localStorage.getItem('isDark'); 
if(isDark == 1){
    $("head").append($("<link rel='stylesheet' href='styles/darktheme.css'"+" -style.css' type='text/css' media='screen'/>"));
}

//======================= МАССИВЫ СИМВОЛОВ ==========================
// Массив символов латиницы и соответствующий ему массив замены
let notCryptedArr1 = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let cryptedArr1 = ['א','ב','ג','ד','ה','ו','ז','ΐ','ח','ט','י','כ','ל',
'ם','מ','נ','ס','ڄ','څ','چ','ڇ','ΰ','α','β','γ','טּ'];

// Массив символов кириллицы и соответствующий ему массив замены
let notCryptedArr2 = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л',
'м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
let cryptedArr2 = ['#','@','!',')','(','*','&','^','%','i','[',']','1','2','3',
'8','5','9','+','-','/','{','}','>',',','t','h','p','l','k','a','b','c'];

// Массив числовых символов и соответствующий ему массив замены
let notCryptedArr3 = ['1','2','3','4','5','6','7','8','9','0'];
let cryptedArr3 = ['ۃ','ۄ','ۅ','ۆ','ۇ','ۈ','ۉ','ۊ','ۋ','ی'];

// Массив прочих сиволов и соответствующий ему массив замены
let notCryptedArr4 = ['!','@','\'','/','#','№', '$',';','%','^',':','&','?',
'*','(',')','-','+','=','{','}',',','<','>','.'];
let cryptedArr4 = ['ډ','ڊ','ڌ','ڍ','ڎ','ڏ', 'ڐ','ڑ','ڒ','ړ','ի','լ','խ',
'ծ','կ','հ','ձ','ղ','ճ','մ','յ','ն','շ','ո','չ'];

//============ КЛЮЧИ ПРИНАДЛЕЖНОСТИ ТОМУ ИЛИ ИНОМУ МАССИВУ ============
var key1 = '$';
var key2 = '0';
var key3 = '۞';
var key4 = '~';

//==== СИМВОЛ ПРОБЕЛА И СООТВЕТСТВУЮЩИЙ ЕМУ СИМВОЛ ЗАМЕНЫ ====
var notCryptedSpace = ' ';
var CryptedSpace = '_';

// Задание начального значения кода шифрования для страницы
var move = localStorage.getItem('local'); // Код шифрования
if(move!=null){
        document.getElementById('key').innerHTML = move;
        SpliceArrays(move);
}
else{
    document.getElementById('key').innerHTML = "00000000";
}

//================ ФУНКЦИИ ================
// Функция сдвига элементов всех массивов, согласно введённому коду шифрования
function SpliceArrays(move){
    cryptedArr1=cryptedArr1.splice(-Number(move[0])*Number(move[1])).concat(cryptedArr1);
    cryptedArr2=cryptedArr2.splice(-Number(move[2])-Number(move[3])).concat(cryptedArr2);
    cryptedArr3=cryptedArr3.splice(-Number(move[4])*Number(move[5])).concat(cryptedArr3);
    cryptedArr4=cryptedArr4.splice(-Number(move[6])+Number(move[7])).concat(cryptedArr4);

    notCryptedArr1=notCryptedArr1.splice(Number(move[0])*Number(move[1])).concat(notCryptedArr1);
    notCryptedArr2=notCryptedArr2.splice(Number(move[2])+Number(move[3])).concat(notCryptedArr2);
    notCryptedArr3=notCryptedArr3.splice(Number(move[4])*Number(move[5])).concat(notCryptedArr3);
    notCryptedArr4=notCryptedArr4.splice(Number(move[6])-Number(move[7])).concat(notCryptedArr4); 
}

/*
Данная функция сравнивает символ с элементом массива1,
Если сравнение возвращает true,
к результирующей строке добавляется ключ + элемент массива 2 того же индекса
*/
function SymbolChange(symbol, array1, array2, key){
    for(var j = 0; j<array1.length; j++) {
        if(symbol == array1[j]) {
            resultString += key + array2[j];
            break;
        }
    }
}

// Функция шифрования текста
function Crypt(){
    userString = document.getElementById('uncrypted').value; // Получение значения из текстового поля
    userString = userString.toLowerCase();
    resultString = '';
    for(var i = 0; i<userString.length;i++){
        if(userString[i] == notCryptedSpace){
            resultString += CryptedSpace;
        }
        SymbolChange(userString[i], notCryptedArr1, cryptedArr1, key1);
        SymbolChange(userString[i], notCryptedArr2, cryptedArr2, key2);
        SymbolChange(userString[i], notCryptedArr3, cryptedArr3, key3);
        SymbolChange(userString[i], notCryptedArr4, cryptedArr4, key4);
        }
    document.getElementById('crypted').innerHTML = resultString; // Запись значения в текстовое поле
}

// Функция дешифровки текста
function Uncrypt(){
    userString = document.getElementById('crypted').value; // Получение значения из текстового поля
    userString = userString.toLowerCase();
    resultString = '';
    for(var i = 0; i<userString.length;i++){
        switch(userString[i]) {
        case CryptedSpace:
            resultString += notCryptedSpace;
            break;
        case key1:
            SymbolChange(userString[i+1], cryptedArr1, notCryptedArr1, '');
            break;
        case key2:
            SymbolChange(userString[i+1], cryptedArr2, notCryptedArr2, '');
            break;
        case key3:
            SymbolChange(userString[i+1], cryptedArr3, notCryptedArr3, '');
            break;
        case key4:
            SymbolChange(userString[i+1], cryptedArr4, notCryptedArr4, '');
            break;
        }
    document.getElementById('uncrypted').innerHTML = resultString; // Запись значения в текстовое поле
    }
}

// Функция копирования зашифрованного сообщения в буфер обмена
function toClipBoard(){
    var string = document.getElementsByClassName('textarea-right')[0].value;
    var suc = document.getElementById("sound-success");
    var unsuc = document.getElementById("sound-success");
    navigator.clipboard.writeText(string)
  .then(() => {
        suc.play();
  })
  .catch(err => {
        unsuc.play();
    console.log('Something went wrong', err);
  });
}

// Фукнция задания массивам их начальных значений
function Reset(){
    notCryptedArr1 = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    cryptedArr1 = ['א','ב','ג','ד','ה','ו','ז','ΐ','ח','ט','י','כ','ל',
    'ם','מ','נ','ס','ڄ','څ','چ','ڇ','ΰ','α','β','γ','טּ'];
    notCryptedArr2 = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л',
    'м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    cryptedArr2 = ['#','@','!',')','(','*','&','^','%','i','[',']','1','2','3',
    '8','5','9','+','-','/','{','}','>',',','t','h','p','l','k','a','b','c'];
    notCryptedArr3 = ['1','2','3','4','5','6','7','8','9','0'];
    cryptedArr3 = ['ۃ','ۄ','ۅ','ۆ','ۇ','ۈ','ۉ','ۊ','ۋ','ی'];
    notCryptedArr4 = ['!','@','\'','/','#','№', '$',';','%','^',':','&','?',
    '*','(',')','-','+','=','{','}',',','<','>','.'];
    cryptedArr4 = ['ډ','ڊ','ڌ','ڍ','ڎ','ڏ', 'ڐ','ڑ','ڒ','ړ','ի','լ','խ',
    'ծ','կ','հ','ձ','ղ','ճ','մ','յ','ն','շ','ո','չ'];
}    

// Функция, вызывающая диалоговое окно для ввода кода шифрования
function chKeys(){
    if(move!=null) {move = String(prompt('Enter the 8-digit shift code', move));}
    else{move = String(prompt('Enter the 8-digit shift code', '00000000'));}
    if(move == null || move.length != 8){
        alert('The code is in the wrong format!')
        move = document.getElementById('key').innerHTML;
    }
    else if(isNaN(move)){
        if(move == "iamaball") {
            move = document.getElementById('key').innerHTML;
            funWithJacque();
        }
        else{
            alert('The code is in the wrong format!')
            move = document.getElementById('key').innerHTML;
        }
    }
    else{
        Reset();
        SpliceArrays(move);
        localStorage.setItem('local', move); 
        document.getElementById('key').innerHTML = move;
    }
}

// Функция обработки нажатия клавиши для вызова соответсвующих им функций
function moveRect(e){
    switch(e.keyCode){
        case 119:  // если нажата клавиша F8
            chKeys();
            break;
        case 113:  // если нажата клавиша F2
            toClipBoard('one', 'two');
            break;
        case 27:   // если нажата клавиша ESC
            swapAreas();
            break;
    }
}
addEventListener("keyup", moveRect); // Добавление прослушивания нажатия клавиш

// Функция смены цветовой темы интерфейса
function changeTheme(){ 
    if(localStorage.getItem('isDark') == 0){
        // Подключение темной темы
        $("head").append($("<link rel='stylesheet' href='styles/darktheme.css'"+" -style.css' type='text/css' media='screen'/>"));
        localStorage.setItem('isDark', 1); 
    }
    else{
        // Удаление темной темы
        $('link[href="styles/darktheme.css"]').remove();
        localStorage.setItem('isDark', 0); 
    }
}

// Функция смены текстовых полей
function swapAreas(){ 
    if(isToCrypt == 0){
        document.getElementById('crypted').innerHTML = "";
        $(".areaTitle1").html("Encrypted text");
        $(".areaTitle2").html("Plain text");
        $(".textarea-left").attr({"oninput":"Uncrypt()", "id":"crypted"});
        $(".textarea-right").attr({"id":"uncrypted"});
        $(".textarea-left").val("");
        isToCrypt = 1;
    }
    else{
        document.getElementById('uncrypted').innerHTML = "";
        $(".areaTitle1").html("Plain text");
        $(".areaTitle2").html("Encrypted text");
        $(".textarea-left").attr({"oninput":"Crypt()", "id":"uncrypted"});
        $(".textarea-right").attr({"id":"crypted"});
        $(".textarea-left").val("");
        isToCrypt = 0;
    }
}

// Функция для установки ожидания в миллисекундах
function sleep(ms) { 
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Функция-пасхалка
async function funWithJacque(){
    await sleep(2000);
    $(".textarea-left").css({"background": "url(images/backEmpty.jpg", "background-size": "100%",
   "background-repeat": "no-repeat", "opacity": "0.0", "color":"black"});
    for(var i = 0.0; i<=1; i = i + 0.1){
        await sleep(80);
        $(".textarea-left").css({"opacity": String(i)});
    }
    await sleep(2000);
    $(".textarea-left").css({"background": "url(images/backHello.jpg", "background-size": "100%",
   "background-repeat": "no-repeat"});
    await sleep(3000);
    $(".textarea-left").css({"background": "url(images/back.jpg", "background-size": "100%",
   "background-repeat": "no-repeat", "text-indent": "10%", "padding-bottom": "14%",
    "padding-top": "6.15%"});
    
}
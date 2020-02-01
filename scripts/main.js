"use strict";
var userString;
var resultString;
let notCryptedArr1 = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let cryptedArr1 = ['א','ב','ג','ד','ה','ו','ז','ΐ','ח','ט','י','כ','ל',
'ם','מ','נ','ס','ڄ','څ','چ','ڇ','ΰ','α','β','γ','טּ'];
var key1 = '$';
let notCryptedArr2 = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л',
'м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
let cryptedArr2 = ['#','@','!',')','(','*','&','^','%','i','[',']','1','2','3',
'8','5','9','+','-','/','{','}','>',',','t','h','p','l','k','a','b','c'];
var key2 = '0';
let notCryptedArr3 = ['1','2','3','4','5','6','7','8','9','0'];
let cryptedArr3 = ['ۃ','ۄ','ۅ','ۆ','ۇ','ۈ','ۉ','ۊ','ۋ','ی'];
var key3 = '۞';
let notCryptedArr4 = ['!','@','\'','/','#','№', '$',';','%','^',':','&','?',
'*','(',')','-','+','=','{','}',',','<','>','.'];
let cryptedArr4 = ['ډ','ڊ','ڌ','ڍ','ڎ','ڏ', 'ڐ','ڑ','ڒ','ړ','ի','լ','խ',
'ծ','կ','հ','ձ','ղ','ճ','մ','յ','ն','շ','ո','չ'];
var key4 = '~';
var notCryptedSpace = ' ';
var CryptedSpace = '_';
var valuenight = 1;
document.getElementById('key').innerHTML = "00000000";
var move = localStorage.getItem('local');
if(move!=null){
        document.getElementById('key').innerHTML = move;
        cryptedArr1=cryptedArr1.splice(-Number(move[0])*Number(move[1])).concat(cryptedArr1);
        cryptedArr2=cryptedArr2.splice(-Number(move[2])-Number(move[3])).concat(cryptedArr2);
        cryptedArr3=cryptedArr3.splice(-Number(move[4])*Number(move[5])).concat(cryptedArr3);
        cryptedArr4=cryptedArr4.splice(-Number(move[6])+Number(move[7])).concat(cryptedArr4);

        notCryptedArr1=notCryptedArr1.splice(Number(move[0])*Number(move[1])).concat(notCryptedArr1);
        notCryptedArr2=notCryptedArr2.splice(Number(move[2])+Number(move[3])).concat(notCryptedArr2);
        notCryptedArr3=notCryptedArr3.splice(Number(move[4])*Number(move[5])).concat(notCryptedArr3);
        notCryptedArr4=notCryptedArr4.splice(Number(move[6])-Number(move[7])).concat(notCryptedArr4); 
}

function notReady(){
        var unsuc = document.getElementById("audiounsuccesful");
        unsuc.play();
        alert('Эта функция временно недоступна. Нам очень жаль.');
}

function Crypt(){
    userString = document.getElementById('uncrypted').value; // Получение значения из текстового поля
    userString = userString.toLowerCase();
    resultString = '';
    for(var i = 0; i<userString.length;i++){
        switch(userString[i]){
            case notCryptedArr1[0]:
                resultString += key1 + cryptedArr1[0];
                break;
            case notCryptedArr1[1]:
                resultString += key1 + cryptedArr1[1];
                break;
            case notCryptedArr1[2]:
                resultString += key1 + cryptedArr1[2];
                break;
            case notCryptedArr1[3]:
                resultString += key1 + cryptedArr1[3];
                break;
            case notCryptedArr1[4]:
                resultString += key1 + cryptedArr1[4];
                break;
            case notCryptedArr1[5]:
                resultString += key1 + cryptedArr1[5];
                break;
            case notCryptedArr1[6]:
                resultString += key1 + cryptedArr1[6];
                break;
            case notCryptedArr1[7]:
                    resultString += key1 + cryptedArr1[7];
                    break;
            case notCryptedArr1[8]:
                    resultString += key1 + cryptedArr1[8];
                    break;
            case notCryptedArr1[9]:
                    resultString += key1 + cryptedArr1[9];
                    break;
            case notCryptedArr1[10]:
                    resultString += key1 + cryptedArr1[10];
                    break;
            case notCryptedArr1[11]:
                    resultString += key1 + cryptedArr1[11];
                    break;
            case notCryptedArr1[12]:
                    resultString += key1 + cryptedArr1[12];
                    break;
            case notCryptedArr1[13]:
                    resultString += key1 + cryptedArr1[13];
                    break;
            case notCryptedArr1[14]:
                    resultString += key1 + cryptedArr1[14];
                    break;
            case notCryptedArr1[15]:
                    resultString += key1 + cryptedArr1[15];
                    break;
            case notCryptedArr1[16]:
                    resultString += key1 + cryptedArr1[16];
                    break;
            case notCryptedArr1[17]:
                    resultString += key1 + cryptedArr1[17];
                    break;
            case notCryptedArr1[18]:
                    resultString += key1 + cryptedArr1[18];
                    break;
            case notCryptedArr1[19]:
                    resultString += key1 + cryptedArr1[19];
                    break;
            case notCryptedArr1[20]:
                    resultString += key1 + cryptedArr1[20];
                    break;
            case notCryptedArr1[21]:
                    resultString += key1 + cryptedArr1[21];
                    break;
            case notCryptedArr1[22]:
                    resultString += key1 + cryptedArr1[22];
                    break;
            case notCryptedArr1[23]:
                    resultString += key1 + cryptedArr1[23];
                    break;
            case notCryptedArr1[24]:
                    resultString += key1 + cryptedArr1[24];
                    break;
            case notCryptedArr1[25]:
                    resultString += key1 + cryptedArr1[25];
                    break;
            case notCryptedSpace:
                resultString += CryptedSpace;
                break;
        case notCryptedArr2[0]:
        resultString += key2 + cryptedArr2[0];
        break;
    case notCryptedArr2[1]:
        resultString += key2 + cryptedArr2[1];
        break;
    case notCryptedArr2[2]:
        resultString += key2 + cryptedArr2[2];
        break;
    case notCryptedArr2[3]:
        resultString += key2 + cryptedArr2[3];
        break;
    case notCryptedArr2[4]:
        resultString += key2 + cryptedArr2[4];
        break;
    case notCryptedArr2[5]:
        resultString += key2 + cryptedArr2[5];
        break;
    case notCryptedArr2[6]:
        resultString += key2 + cryptedArr2[6];
        break;
    case notCryptedArr2[7]:
            resultString += key2 + cryptedArr2[7];
            break;
    case notCryptedArr2[8]:
            resultString += key2 + cryptedArr2[8];
            break;
    case notCryptedArr2[9]:
            resultString += key2 + cryptedArr2[9];
            break;
    case notCryptedArr2[10]:
            resultString += key2 + cryptedArr2[10];
            break;
    case notCryptedArr2[11]:
            resultString += key2 + cryptedArr2[11];
            break;
    case notCryptedArr2[12]:
            resultString += key2 + cryptedArr2[12];
            break;
    case notCryptedArr2[13]:
            resultString += key2 + cryptedArr2[13];
            break;
    case notCryptedArr2[14]:
            resultString += key2 + cryptedArr2[14];
            break;
    case notCryptedArr2[15]:
            resultString += key2 + cryptedArr2[15];
            break;
    case notCryptedArr2[16]:
            resultString += key2 + cryptedArr2[16];
            break;
    case notCryptedArr2[17]:
            resultString += key2 + cryptedArr2[17];
            break;
    case notCryptedArr2[18]:
            resultString += key2 + cryptedArr2[18];
            break;
    case notCryptedArr2[19]:
            resultString += key2 + cryptedArr2[19];
            break;
    case notCryptedArr2[20]:
            resultString += key2 + cryptedArr2[20];
            break;
    case notCryptedArr2[21]:
            resultString += key2 + cryptedArr2[21];
            break;
    case notCryptedArr2[22]:
            resultString += key2 + cryptedArr2[22];
            break;
    case notCryptedArr2[23]:
            resultString += key2 + cryptedArr2[23];
            break;
    case notCryptedArr2[24]:
            resultString += key2 + cryptedArr2[24];
            break;
    case notCryptedArr2[25]:
            resultString += key2 + cryptedArr2[25];
            break;
            case notCryptedArr2[26]:
            resultString += key2 + cryptedArr2[26];
            break;
            case notCryptedArr2[27]:
            resultString += key2 + cryptedArr2[27];
            break;
            case notCryptedArr2[28]:
            resultString += key2 + cryptedArr2[28];
            break;
            case notCryptedArr2[29]:
            resultString += key2 + cryptedArr2[29];
            break;
            case notCryptedArr2[30]:
            resultString += key2 + cryptedArr2[30];
            break;
            case notCryptedArr2[31]:
            resultString += key2 + cryptedArr2[31];
            break;
            case notCryptedArr2[32]:
            resultString += key2 + cryptedArr2[32];
            break;
            case notCryptedArr3[0]:
        resultString += key3 + cryptedArr3[0];
        break;
    case notCryptedArr3[1]:
        resultString += key3 + cryptedArr3[1];
        break;
    case notCryptedArr3[2]:
        resultString += key3 + cryptedArr3[2];
        break;
    case notCryptedArr3[3]:
        resultString += key3 + cryptedArr3[3];
        break;
    case notCryptedArr3[4]:
        resultString += key3 + cryptedArr3[4];
        break;
    case notCryptedArr3[5]:
        resultString += key3 + cryptedArr3[5];
        break;
    case notCryptedArr3[6]:
        resultString += key3 + cryptedArr3[6];
        break;
    case notCryptedArr3[7]:
            resultString += key3 + cryptedArr3[7];
            break;
    case notCryptedArr3[8]:
            resultString += key3 + cryptedArr3[8];
            break;
    case notCryptedArr3[9]:
            resultString += key3 + cryptedArr3[9];
            break;
            case notCryptedArr4[0]:
                    resultString += key4 + cryptedArr4[0];
                    break;
                case notCryptedArr4[1]:
                    resultString += key4 + cryptedArr4[1];
                    break;
                case notCryptedArr4[2]:
                    resultString += key4 + cryptedArr4[2];
                    break;
                case notCryptedArr4[3]:
                    resultString += key4 + cryptedArr4[3];
                    break;
                case notCryptedArr4[4]:
                    resultString += key4 + cryptedArr4[4];
                    break;
                case notCryptedArr4[5]:
                    resultString += key4 + cryptedArr4[5];
                    break;
                case notCryptedArr4[6]:
                    resultString += key4 + cryptedArr4[6];
                    break;
                case notCryptedArr4[7]:
                        resultString += key4 + cryptedArr4[7];
                        break;
                case notCryptedArr4[8]:
                        resultString += key4 + cryptedArr4[8];
                        break;
                case notCryptedArr4[9]:
                        resultString += key4 + cryptedArr4[9];
                        break;
                case notCryptedArr4[10]:
                        resultString += key4 + cryptedArr4[10];
                        break;
                case notCryptedArr4[11]:
                        resultString += key4 + cryptedArr4[11];
                        break;
                case notCryptedArr4[12]:
                        resultString += key4 + cryptedArr4[12];
                        break;
                case notCryptedArr4[13]:
                        resultString += key4 + cryptedArr4[13];
                        break;
                case notCryptedArr4[14]:
                        resultString += key4 + cryptedArr4[14];
                        break;
                case notCryptedArr4[15]:
                        resultString += key4 + cryptedArr4[15];
                        break;
                case notCryptedArr4[16]:
                        resultString += key4 + cryptedArr4[16];
                        break;
                case notCryptedArr4[17]:
                        resultString += key4 + cryptedArr4[17];
                        break;
                case notCryptedArr4[18]:
                        resultString += key4 + cryptedArr4[18];
                        break;
                case notCryptedArr4[19]:
                        resultString += key4 + cryptedArr4[19];
                        break;
                case notCryptedArr4[20]:
                        resultString += key4 + cryptedArr4[20];
                        break;
                case notCryptedArr4[21]:
                        resultString += key4 + cryptedArr4[21];
                        break;
                case notCryptedArr4[22]:
                        resultString += key4 + cryptedArr4[22];
                        break;
                case notCryptedArr4[23]:
                        resultString += key4 + cryptedArr4[23];
                        break;
                case notCryptedArr4[24]:
                        resultString += key4 + cryptedArr4[24];
                        break;
            
        }
    }
    document.getElementById('crypted').innerHTML = resultString; // Запись значения в текстовое поле
}

function Uncrypt(){
        userString = document.getElementById('crypted').value; // Получение значения из текстового поля
        userString = userString.toLowerCase();
        resultString = '';
        for(var i = 0; i<userString.length;i++){
            switch(userString[i]){
                case CryptedSpace:
                        resultString += notCryptedSpace;
                        break;
            case key1:
                switch(userString[i+1]){
                case cryptedArr1[0]:
                    resultString += notCryptedArr1[0];
                    break;
                case cryptedArr1[1]:
                    resultString += notCryptedArr1[1];
                    break;
                case cryptedArr1[2]:
                    resultString += notCryptedArr1[2];
                    break;
                case cryptedArr1[3]:
                    resultString += notCryptedArr1[3];
                    break;
                case cryptedArr1[4]:
                    resultString += notCryptedArr1[4];
                    break;
                case cryptedArr1[5]:
                    resultString += notCryptedArr1[5];
                    break;
                case cryptedArr1[6]:
                    resultString += notCryptedArr1[6];
                    break;
                case cryptedArr1[7]:
                        resultString += notCryptedArr1[7];
                        break;
                case cryptedArr1[8]:
                        resultString += notCryptedArr1[8];
                        break;
                case cryptedArr1[9]:
                        resultString += notCryptedArr1[9];
                        break;
                case cryptedArr1[10]:
                        resultString += notCryptedArr1[10];
                        break;
                case cryptedArr1[11]:
                        resultString += notCryptedArr1[11];
                        break;
                case cryptedArr1[12]:
                        resultString += notCryptedArr1[12];
                        break;
                case cryptedArr1[13]:
                        resultString += notCryptedArr1[13];
                        break;
                case cryptedArr1[14]:
                        resultString += notCryptedArr1[14];
                        break;
                case cryptedArr1[15]:
                        resultString += notCryptedArr1[15];
                        break;
                case cryptedArr1[16]:
                        resultString += notCryptedArr1[16];
                        break;
                case cryptedArr1[17]:
                        resultString += notCryptedArr1[17];
                        break;
                case cryptedArr1[18]:
                        resultString += notCryptedArr1[18];
                        break;
                case cryptedArr1[19]:
                        resultString += notCryptedArr1[19];
                        break;
                case cryptedArr1[20]:
                        resultString += notCryptedArr1[20];
                        break;
                case cryptedArr1[21]:
                        resultString += notCryptedArr1[21];
                        break;
                case cryptedArr1[22]:
                        resultString += notCryptedArr1[22];
                        break;
                case cryptedArr1[23]:
                        resultString += notCryptedArr1[23];
                        break;
                case cryptedArr1[24]:
                        resultString += notCryptedArr1[24];
                        break;
                case cryptedArr1[25]:
                        resultString += notCryptedArr1[25];
                        break;
                }

                case key2:
                    switch(userString[i+1]){
               case cryptedArr2[0]:
                resultString += notCryptedArr2[0];
                break;
        case cryptedArr2[1]:
            resultString += notCryptedArr2[1];
            break;
        case cryptedArr2[2]:
            resultString += notCryptedArr2[2];
            break;
        case cryptedArr2[3]:
            resultString += notCryptedArr2[3];
            break;
        case cryptedArr2[4]:
            resultString += notCryptedArr2[4];
            break;
        case cryptedArr2[5]:
            resultString += notCryptedArr2[5];
            break;
        case cryptedArr2[6]:
            resultString += notCryptedArr2[6];
            break;
        case cryptedArr2[7]:
                resultString += notCryptedArr2[7];
                break;
        case cryptedArr2[8]:
                resultString += notCryptedArr2[8];
                break;
        case cryptedArr2[9]:
                resultString += notCryptedArr2[9];
                break;
        case cryptedArr2[10]:
                resultString += notCryptedArr2[10];
                break;
        case cryptedArr2[11]:
                resultString += notCryptedArr2[11];
                break;
        case cryptedArr2[12]:
                resultString += notCryptedArr2[12];
                break;
        case cryptedArr2[13]:
                resultString += notCryptedArr2[13];
                break;
        case cryptedArr2[14]:
                resultString += notCryptedArr2[14];
                break;
        case cryptedArr2[15]:
                resultString += notCryptedArr2[15];
                break;
        case cryptedArr2[16]:
                resultString += notCryptedArr2[16];
                break;
        case cryptedArr2[17]:
                resultString += notCryptedArr2[17];
                break;
        case cryptedArr2[18]:
                resultString += notCryptedArr2[18];
                break;
        case cryptedArr2[19]:
                resultString += notCryptedArr2[19];
                break;
        case cryptedArr2[20]:
                resultString += notCryptedArr2[20];
                break;
        case cryptedArr2[21]:
                resultString += notCryptedArr2[21];
                break;
        case cryptedArr2[22]:
                resultString += notCryptedArr2[22];
                break;
        case cryptedArr2[23]:
                resultString += notCryptedArr2[23];
                break;
        case cryptedArr2[24]:
                resultString += notCryptedArr2[24];
                break;
        case cryptedArr2[25]:
                resultString += notCryptedArr2[25];
                break;
                case cryptedArr2[26]:
                resultString += notCryptedArr2[26];
                break;
                case cryptedArr2[27]:
                resultString += notCryptedArr2[27];
                break;
                case cryptedArr2[28]:
                resultString += notCryptedArr2[28];
                break;
                case cryptedArr2[29]:
                resultString += notCryptedArr2[29];
                break;
                case cryptedArr2[30]:
                resultString += notCryptedArr2[30];
                break;
                case cryptedArr2[31]:
                resultString += notCryptedArr2[31];
                break;
                case cryptedArr2[32]:
                resultString += notCryptedArr2[32];
                break;
                    }
                case key3:
                 switch(userString[i+1]){
                case cryptedArr3[0]:
            resultString += notCryptedArr3[0];
            break;
        case cryptedArr3[1]:
            resultString += notCryptedArr3[1];
            break;
        case cryptedArr3[2]:
            resultString += notCryptedArr3[2];
            break;
        case cryptedArr3[3]:
            resultString += notCryptedArr3[3];
            break;
        case cryptedArr3[4]:
            resultString += notCryptedArr3[4];
            break;
        case cryptedArr3[5]:
            resultString += notCryptedArr3[5];
            break;
        case cryptedArr3[6]:
            resultString += notCryptedArr3[6];
            break;
        case cryptedArr3[7]:
                resultString += notCryptedArr3[7];
                break;
        case cryptedArr3[8]:
                resultString += notCryptedArr3[8];
                break;
        case cryptedArr3[9]:
                resultString += notCryptedArr3[9];
                break;
                 }
                 case key4:
                        switch(userString[i+1]){
                case cryptedArr4[0]:
                        resultString += notCryptedArr4[0];
                        break;
                    case cryptedArr4[1]:
                        resultString += notCryptedArr4[1];
                        break;
                    case cryptedArr4[2]:
                        resultString += notCryptedArr4[2];
                        break;
                    case cryptedArr4[3]:
                        resultString += notCryptedArr4[3];
                        break;
                    case cryptedArr4[4]:
                        resultString += notCryptedArr4[4];
                        break;
                    case cryptedArr4[5]:
                        resultString += notCryptedArr4[5];
                        break;
                    case cryptedArr4[6]:
                        resultString += notCryptedArr4[6];
                        break;
                    case cryptedArr4[7]:
                            resultString += notCryptedArr4[7];
                            break;
                    case cryptedArr4[8]:
                            resultString += notCryptedArr4[8];
                            break;
                    case cryptedArr4[9]:
                            resultString += notCryptedArr4[9];
                            break;
                    case cryptedArr4[10]:
                            resultString += notCryptedArr4[10];
                            break;
                    case cryptedArr4[11]:
                            resultString += notCryptedArr4[11];
                            break;
                    case cryptedArr4[12]:
                            resultString += notCryptedArr4[12];
                            break;
                    case cryptedArr4[13]:
                            resultString += notCryptedArr4[13];
                            break;
                    case cryptedArr4[14]:
                            resultString += notCryptedArr4[14];
                            break;
                    case cryptedArr4[15]:
                            resultString += notCryptedArr4[15];
                            break;
                    case cryptedArr4[16]:
                            resultString += notCryptedArr4[16];
                            break;
                    case cryptedArr4[17]:
                            resultString += notCryptedArr4[17];
                            break;
                    case cryptedArr4[18]:
                            resultString += notCryptedArr4[18];
                            break;
                    case cryptedArr4[19]:
                            resultString += notCryptedArr4[19];
                            break;
                    case cryptedArr4[20]:
                            resultString += notCryptedArr4[20];
                            break;
                    case cryptedArr4[21]:
                            resultString += notCryptedArr4[21];
                            break;
                    case cryptedArr4[22]:
                            resultString += notCryptedArr4[22];
                            break;
                    case cryptedArr4[23]:
                            resultString += notCryptedArr4[23];
                            break;
                    case cryptedArr4[24]:
                            resultString += notCryptedArr4[24];
                            break;
                        }
                
            }
        }
        document.getElementById('uncrypted').innerHTML = resultString; // Запись значения в текстовое поле
    }


function toClipBoard(){
    var string = document.getElementById('crypted').value;
    var suc = document.getElementById("audiosuccesful");
    var unsuc = document.getElementById("audiounsuccesful");
    navigator.clipboard.writeText(string)
  .then(() => {
        suc.play();
  })
  .catch(err => {
        unsuc.play();
    console.log('Something went wrong', err);
  });
}

function toClipBoard2(){
        var string = document.getElementById('uncrypted').value;
        var suc = document.getElementById("audiosuccesful");
        var unsuc = document.getElementById("audiounsuccesful");
        navigator.clipboard.writeText(string)
      .then(() => {
            suc.play();
      })
      .catch(err => {
            unsuc.play();
        console.log('Something went wrong', err);
      });
    }


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

function chKeys(){
        Reset();
        if(move!=null) {move = String(prompt('Enter the 8-digit shift number code', move));}
        else{move = String(prompt('Enter the 8-digit shift number code', '00000000'));}
        if(move == null || move.length != 8 ){alert('The code is in the wrong format!')}
        else{
                cryptedArr1=cryptedArr1.splice(-Number(move[0])*Number(move[1])).concat(cryptedArr1);
                cryptedArr2=cryptedArr2.splice(-Number(move[2])-Number(move[3])).concat(cryptedArr2);
                cryptedArr3=cryptedArr3.splice(-Number(move[4])*Number(move[5])).concat(cryptedArr3);
                cryptedArr4=cryptedArr4.splice(-Number(move[6])+Number(move[7])).concat(cryptedArr4);
        
                notCryptedArr1=notCryptedArr1.splice(Number(move[0])*Number(move[1])).concat(notCryptedArr1);
                notCryptedArr2=notCryptedArr2.splice(Number(move[2])+Number(move[3])).concat(notCryptedArr2);
                notCryptedArr3=notCryptedArr3.splice(Number(move[4])*Number(move[5])).concat(notCryptedArr3);
                notCryptedArr4=notCryptedArr4.splice(Number(move[6])-Number(move[7])).concat(notCryptedArr4); 

        localStorage.setItem('local', move); 
        document.getElementById('key').innerHTML = move;
        }
}
function moveRect(e){
        switch(e.keyCode){
             
            case 115:  // если нажата клавиша F4
                chKeys();
                break;
        
        }
    }

    addEventListener("keyup", moveRect);

     


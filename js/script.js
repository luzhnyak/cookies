// ================================ Функція зчитування куків
function getCookie(name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if (end == -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return(setStr);
}

// ================================ Функція запису куків
function setCookie (name, value, expires, path, domain, secure) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + d : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

// ================================ Функція видалення куків
function deleteCookie(name) {
  setCookie(name = name_cookies.value, value = value_cookies.value, expires=-1);
  
}

// ================================ Функція друку куків
function printCookie() {
  print_cookies.innerHTML = "";
  var arr = document.cookie.split(';');;
  Array.prototype.forEach.call(arr, function(key){
               print_cookies.innerHTML += key + "<br>";      
            });

}

// ================================ Отримуємо елементи дерева
var name_cookies = document.getElementById('name_cookies');
var value_cookies = document.getElementById('value_cookies');
var save_cookies = document.getElementById('save_cookies');
var read_cookies = document.getElementById('read_cookies');
var del_cookies = document.getElementById('del_cookies');
var print_cookies = document.getElementById('print_cookies');

// ================================ Призначуєм подію кнопкам
save_cookies.onclick = function(){
  setCookie (name = name_cookies.value, value = value_cookies.value);
  printCookie();
};

read_cookies.onclick = function(){
  alert(getCookie (name_cookies.value));
};

del_cookies.onclick = function(){
  deleteCookie (name_cookies.value);
  printCookie();
};

printCookie();
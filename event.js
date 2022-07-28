document.addEventListener('DOMContentLoaded', init, false);
   
function init(){
    function message () {
      alert("Hello!");
    }

    var button = document.getElementById('button2');
    button.addEventListener('click', message, true);
  };


document.addEventListener('DOMContentLoaded', function() {
    var list = document.querySelectorAll('li');

    list.forEach(function(item) {
        item.addEventListener('click', function(){
                var func = 'exeFunctionByName("' + item.innerHTML +'")';
                chrome.tabs.executeScript(null,{code: func});
        });
    });

});

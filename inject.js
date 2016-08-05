/**
 * Created by oregami on 16/8/5.
 */

injectTools = {
    "alert": function () {
        alert("inject alert in " + location.href);
    },
    "function1": function() {
        console.log('function1');
    },
    "function2": function() {
        console.log('function2');
    },
    "addShowSelectPathListener": function() {
        console.log("addShowSelectPathListener");
        $('body').click(function(event) {

            var pathlist = [];
            while (event.target.nodeName !== 'BODY') {
                var htmlNode = event.target;
                var nodeItem = {};

                nodeItem['nodeName'] = htmlNode.nodeName.toLocaleLowerCase();
                nodeItem['className'] = htmlNode.className.split(" ");
                nodeItem['id'] = htmlNode.id;
                pathlist.unshift(nodeItem);
                event.target = htmlNode.parentNode;
            }
            nodeItem = {nodeName: 'body'};
            pathlist.unshift(nodeItem);
            console.log(pathlist);
            var selectQuery = "";
            for (var item in pathlist) {
                if (pathlist[item].nodeName === 'body') {
                    selectQuery += 'body' + " " + '> ';
                } else {
                    if (pathlist[item].id !== ""){
                        selectQuery += "#"+pathlist[item].id
                    } else {
                        selectQuery += " " + "> " + pathlist[item].nodeName;
                        if (pathlist[item].className.length > 1){
                            for (var classItem in pathlist[item].className) {
                                if(pathlist[item].className[classItem] !== "")
                                selectQuery += '.' + pathlist[item].className[classItem];
                            }
                        } else {
                            selectQuery += '.' + pathlist[item].className[0];
                        }
                    }

                }
            }


            alert(selectQuery);
            alert($(selectQuery).text());
            return false;
        });
    },
    "rmShowSelectPathListerner": function() {
        console.log("rmShowSelectPathListener");
    }
};

exeFunctionByName = function exeFunctionByName(funcName) {
    injectTools[funcName]();
}

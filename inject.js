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
            var originNode = event.target;
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
                    selectQuery += 'body';
                } else {
                    if (pathlist[item].id !== ""){
                        selectQuery += " " +  "> " + "#"+pathlist[item].id;
                    } else {
                        selectQuery += " " + "> " + pathlist[item].nodeName;
                        if (pathlist[item].className.length > 1){
                            for (var classItem in pathlist[item].className) {
                                if(pathlist[item].className[classItem] !== "")
                                selectQuery += '.' + pathlist[item].className[classItem];
                            }
                        }
                        else {
                            if (pathlist[item].className[0] !== "")
                            selectQuery += '.' + pathlist[item].className[0];
                        }
                    }

                }
            }
            var index = false;
            if ($(selectQuery).length === 1) {
                alert(selectQuery + '\n\n' + $(selectQuery).text());
            } else {

                $(selectQuery).each(function(i) {
                    if ($(selectQuery).get(i) == originNode) {
                        index = i;
                    }
                })
            }
            if (index) {
                alert(selectQuery + '\n\n ---result is an array should use eq('+ index+ ')----' + '\n\n' + $(selectQuery).eq(index).text());

            }


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

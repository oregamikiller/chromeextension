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
    }
};

exeFunctionByName = function exeFunctionByName(funcName) {
    injectTools[funcName]();
}

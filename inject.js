/**
 * Created by oregami on 16/8/5.
 */

//alert($('body').find('.hero-content, .text-left').html());
injectTools = {
    "alert": function () {
        alert("inject alert");
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

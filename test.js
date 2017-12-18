;(function () {
    'use strict';

    var $form_add_task = $(".add-task"),
        new_task = {};


    $form_add_task.on('submit', function (e) {
        e.preventDefault();
        console.log("1", 1);
        new_task.content = $(this).find("input[name=content]").val();
        console.log(new_task.content);
    })

})();
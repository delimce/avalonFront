'use strict';
define(['app'], function (app) {

    var controllerId = 'homeController';

    app.register.controller(controllerId, controller);

    controller.$inject = [];

    function controller() {
        var vm = this;

        // Bindable properties and function are places on vm.
        vm.title = controllerId;


        vm.message = 'Everyone come and see how good I look!';
        vm.tittle1 = "maybe we didn't invent the wheel...,  ...but, we have so much fun remake it!"
        vm.tittle2 = "minimalist, powerful and scalable php mvc framework, go ahead, surfing with style!!"


        vm.tittle1Efect = function(){

            $("#tittle1").velocity({
                /* Two-item array format. */
                translateX: [ 0, 300 ],
                /* Three-item array format with a per-property easing. */
                opacity: [ 1, "easeInSine", 0 ]
            });

        };


    }

});
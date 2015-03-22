'use strict';
define(['app'], function (app) {

    var controllerId = 'homeController';

    app.register.controller(controllerId, controller);

    controller.$inject = [];

    function controller() {
        var av = this;

        // Bindable properties and function are places on vm.
        av.title = controllerId;


        av.tittle1 = "maybe we didn't invent the wheel...,  ...but, we have so much fun remake it!"
        av.tittle2 = "minimalist, powerful and scalable php mvc framework, go ahead, surfing with style!!"


        av.tittle1Efect = function(){

            $("#tittle1").velocity({
                /* Two-item array format. */
                translateX: [ 0, 300 ],
                /* Three-item array format with a per-property easing. */
                opacity: [ 1, "easeInSine", 0 ]
            });

        };


    }

});
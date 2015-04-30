'use strict';
define(['app'], function (app) {

    var controllerId = 'contactController';

    app.register.controller(controllerId, controller);

    controller.$inject = [];

    function controller() {
        var av = this;

        // Bindable properties and function are places on vm.
        av.title = controllerId;

        av.subtitleEfect = function(){

            $("#subtitle").velocity({
                /* Two-item array format. */
                translateX: [ 0, 200 ],
                /* Three-item array format with a per-property easing. */
                opacity: [ 1, "easeInSine", 0 ]
            });

        };


    }

});
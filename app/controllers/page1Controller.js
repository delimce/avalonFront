'use strict';
define(['app'], function (app) {

    var controllerId = 'downloadController';

    app.register.controller(controllerId, controller);

    controller.$inject = [];

    function controller() {
        var av = this;

        // Bindable properties and function are places on vm.
        av.title = controllerId;



    }

});
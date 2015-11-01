﻿/// <reference path="constants/paths.ts" />

module App {
    'use strict';

    angular
        .module('app', [
            'ionic',
            Constants.Paths.Core,
            Constants.Paths.Tabs,
            Constants.Paths.Side.Module,
            Constants.Paths.Home.Module,
            Constants.Paths.Actions.Module,
            Constants.Paths.Buttons.Module
        ])
        .config(statesConfiguration);

    window['ionic'].Platform.ready(function() {
        angular.bootstrap(document.querySelector('body'), ['app']);
    });

    // Configure routes
    function statesConfiguration(
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $ionicConfigProvider: ionic.utility.IonicConfigProvider
        ): void {

        $ionicConfigProvider.scrolling.jsScrolling(false);
        $urlRouterProvider.otherwise('/tabs/home');
    }
}

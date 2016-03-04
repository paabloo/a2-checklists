System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './services/lists-service', './app'], function(exports_1) {
    var browser_1, router_1, http_1, lists_service_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (lists_service_1_1) {
                lists_service_1 = lists_service_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [lists_service_1.ListsService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map
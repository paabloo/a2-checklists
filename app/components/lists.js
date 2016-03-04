System.register(['angular2/core', 'angular2/router', '../services/lists-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, lists_service_1;
    var Lists;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lists_service_1_1) {
                lists_service_1 = lists_service_1_1;
            }],
        execute: function() {
            // import {Http, HTTP_PROVIDERS} from 'angular2/http';
            Lists = (function () {
                function Lists(listsService) {
                    var _this = this;
                    this.date = new Date();
                    listsService.lists
                        .subscribe(function (lists) { return _this.allLists = lists; }, function () { return console.log('Completed!'); });
                }
                Lists = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/templates/lists.html'
                    }),
                    __param(0, core_1.Inject(lists_service_1.ListsService)), 
                    __metadata('design:paramtypes', [lists_service_1.ListsService])
                ], Lists);
                return Lists;
            })();
            exports_1("Lists", Lists);
        }
    }
});
//# sourceMappingURL=lists.js.map
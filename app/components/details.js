System.register(["angular2/core", 'angular2/router', '../services/lists-service'], function(exports_1) {
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
    var Details;
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
            Details = (function () {
                // constructor(
                //     public _service: ListsService,
                //     private _router: Router,
                //     routeParams: RouteParams) {
                //         this._selectedId = +routeParams.get('id');
                //         this.localStorageNamespace = 'pagepro_checklists_';
                //         this.lists = this._service.lists;
                //         this.setCurrentChecklist();
                //         if(!window.localStorage[this.localStorageNamespace.toString() + this._selectedId]) {
                //             window.localStorage[this.localStorageNamespace.toString() + this._selectedId] = JSON.stringify({});
                //         }
                //         this.checkboxList = JSON.parse(window.localStorage[this.localStorageNamespace.toString() + this._selectedId]);
                //   }
                function Details(listsService, _router, routeParams) {
                    var _this = this;
                    this._router = _router;
                    // @Input() currentChecklist: Observable<Array<Object>>;
                    this.date = new Date();
                    this._selectedId = +routeParams.get('id');
                    this.localStorageNamespace = 'pagepro_checklists_';
                    this.checkForLocalstorage();
                    this.testObj = { t1: null, t2: null };
                    setTimeout(function () {
                        _this.testObj = {
                            t1: 't1',
                            t2: 't2'
                        };
                    }, 2000);
                    listsService.lists
                        .subscribe(function (lists) { _this.allLists = lists; _this.setCurrentChecklist(); }, function () { return console.error('500'); });
                }
                Details.prototype.checkForLocalstorage = function () {
                    if (!window.localStorage[this.localStorageNamespace.toString() + this._selectedId]) {
                        window.localStorage[this.localStorageNamespace.toString() + this._selectedId] = JSON.stringify({});
                    }
                    this.checkboxList = JSON.parse(window.localStorage[this.localStorageNamespace.toString() + this._selectedId]);
                };
                Details.prototype.setCurrentChecklist = function () {
                    var _this = this;
                    this.allLists.forEach(function (elem) {
                        if (+elem['id'] === +_this._selectedId) {
                            _this.currentChecklist = elem;
                            console.log(_this.currentChecklist);
                            return;
                        }
                    });
                };
                Details.prototype.changed = function (input) {
                    this.checkboxList[input.name] = input.checked;
                    window.localStorage[this.localStorageNamespace.toString() + this._selectedId] = JSON.stringify(this.checkboxList);
                };
                Details = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/templates/details.html'
                    }),
                    __param(0, core_1.Inject(lists_service_1.ListsService)), 
                    __metadata('design:paramtypes', [lists_service_1.ListsService, router_1.Router, router_1.RouteParams])
                ], Details);
                return Details;
            })();
            exports_1("Details", Details);
        }
    }
});
//# sourceMappingURL=details.js.map
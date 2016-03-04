import {Input, Inject, Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {ListsService} from '../services/lists-service';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/templates/details.html'
})

export class Details {
    // @Input() currentChecklist: Observable<Array<Object>>;
    date = new Date();
    currentChecklist: Object;
    allLists: Array<Object>;
    checkboxList: Object;
    _selectedId: Number;
    localStorageNamespace: String;
    testObj: Object;

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
    constructor (
      @Inject(ListsService) listsService:ListsService,
      private _router: Router,
      routeParams: RouteParams
    ) {
      this._selectedId = +routeParams.get('id');
      this.localStorageNamespace = 'pagepro_checklists_';
      this.checkForLocalstorage();
      this.testObj = {t1: null,t2: null};
      setTimeout(() => {
        this.testObj = {
          t1: 't1',
          t2: 't2'
        };
      }, 2000)
      listsService.lists
        .subscribe(
          lists => {this.allLists = lists;this.setCurrentChecklist();},
          () => console.error('500')
        );
    }

    checkForLocalstorage () {
      if(!window.localStorage[this.localStorageNamespace.toString() + this._selectedId]) {
          window.localStorage[this.localStorageNamespace.toString() + this._selectedId] = JSON.stringify({});
      }
      this.checkboxList = JSON.parse(window.localStorage[this.localStorageNamespace.toString() + this._selectedId]);
    }

    setCurrentChecklist () {
        this.allLists.forEach((elem) => {
            if (+elem['id'] === +this._selectedId) {
                this.currentChecklist = elem;
                console.log(this.currentChecklist);
                return;
            }
        })
    }

    changed(input:any) {
        this.checkboxList[input.name] = input.checked;
        window.localStorage[this.localStorageNamespace.toString() + this._selectedId] = JSON.stringify(this.checkboxList);
    }
}

import {Inject, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListsService} from '../services/lists-service';
// import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/templates/lists.html'
})

export class Lists {
    date = new Date();
    allLists: Array<Object>;

    constructor(@Inject(ListsService) listsService:ListsService) {
        listsService.lists
          .subscribe(
            lists => this.allLists = lists,
            () => console.log('Completed!')
          );
    }
}

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Lists} from './components/lists';
import {Details} from './components/details';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path: '/lists', name: 'Lists', component: Lists, useAsDefault: true},
    {path: '/details/:id', name: 'Details', component: Details}
])
export class App { }

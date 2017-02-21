import {Component} from '@angular/core';
import {GuardAuthorizeService} from "./services/guard-authorize.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GuardAuthorizeService]
})
export class AppComponent {
    title = 'aNote';
}

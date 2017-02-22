import {Component} from '@angular/core';
import {AuthorizeService} from "./services/authorize.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthorizeService]
})
export class AppComponent {
    title = 'aNote';
}

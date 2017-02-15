import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'an-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    logo:string = 'aNote';
    status:boolean;

    constructor() {
    }

    ngOnInit() {
    }

    onMouseClicked(e):void {
        e.preventDefault();
    }

    onStatusClicked(status) {
        this.status = status;
    }

}

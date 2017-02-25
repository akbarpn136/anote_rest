import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'an-catatan',
    templateUrl: './catatan.component.html',
    styleUrls: ['./catatan.component.css']
})
export class CatatanComponent implements OnInit {
    isShow:boolean;

    constructor(private router: Router) {
        this.router.events.subscribe(
            (val) => {
                if (val instanceof NavigationEnd) {
                    if (router.url === '/kegiatan') {
                        this.isShow = true;
                    }

                    else {
                        this.isShow = false;
                    }
                }
            }
        );
    }

    ngOnInit() {
    }

}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthorizeService} from "../services/authorize.service";
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'an-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    logo: string;
    status: boolean;
    isAuth: boolean = false;
    isShow: boolean;
    name: string;
    private sub: any;

    constructor(private auth: AuthorizeService,
                private router: Router) {
        this.sub = this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                if (localStorage.getItem('qwerty')) {
                    this.isAuth = true;
                    this.name = localStorage.getItem('user');
                }

                else {
                    this.name = 'Pengaturan';
                }
            }
        });
    }

    ngOnInit() {
        this.logo = 'aNote';
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onMouseClicked(e): void {
        e.preventDefault();
    }

    onMouseDropdownClicked(e): void {
        e.preventDefault();
    }

    onStatusClicked(status) {
        this.status = status;
    }

    onLogoutClick(event): void {
        this.auth.cobaLogout();
        this.isAuth = false;
        this.isShow = false;

        //noinspection JSIgnoredPromiseFromCall
        this.router.navigate(['']);

        event.preventDefault();
    }
}

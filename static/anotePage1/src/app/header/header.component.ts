import {Component, OnInit} from '@angular/core';
import {GuardAuthorizeService} from "../services/guard-authorize.service";
import {AuthorizeService} from "../services/authorize.service";
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'an-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    logo: string = 'aNote';
    status: boolean;
    isAuth: boolean = false;

    constructor(private guard: GuardAuthorizeService,
                private auth: AuthorizeService,
                private router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                if (!this.guard.canActivate()) {
                    this.isAuth = true;
                }
            }
        });
    }

    ngOnInit() {
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
        //noinspection JSIgnoredPromiseFromCall
        this.router.navigate(['']);

        event.preventDefault();
    }
}

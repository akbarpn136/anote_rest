import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from "../services/authorize.service";
import {Router} from "@angular/router";

@Component({
    selector: 'an-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    warnStat: boolean = false;
    message: string = 'Username/password salah...';

    constructor(private auth: AuthorizeService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onAuthSubmit() {
        this.auth.cobaLogin(this.username, this.password).subscribe(
            (data) => {
                if (data.hasOwnProperty('token')) {
                    this.warnStat = false;
                    //noinspection JSIgnoredPromiseFromCall
                    this.router.navigate(['']);
                }

                else {
                    this.warnStat = true;
                    this.message = data.toString();
                }
            }
        );
    }
}

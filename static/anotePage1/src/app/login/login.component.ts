import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthorizeService} from "../services/authorize.service";
import {Router} from "@angular/router";
import {GuardAuthorizeService} from "../services/guard-authorize.service";

@Component({
    selector: 'an-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    username: string;
    password: string;
    warnStat: boolean = false;
    message: string = 'Username/password salah...';
    private sub:any;

    constructor(private auth: AuthorizeService,
                private guard: GuardAuthorizeService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onAuthSubmit() {
        this.sub = this.auth.cobaLogin(this.username, this.password).subscribe(
            (data) => {
                if (data.hasOwnProperty('token')) {
                    this.warnStat = false;
                    this.guard.checkKeyValid(data['token']).subscribe(
                        (name) => {
                            localStorage.setItem('user', name['name']);
                        }
                    );
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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

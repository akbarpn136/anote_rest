import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {CanActivate} from "@angular/router";

@Injectable()
export class GuardAuthorizeService implements CanActivate {
    private CHECK_TOKEN_URL = 'http://127.0.0.1:8000/api_1/kegiatan/token-check/';

    constructor(private http: Http) {
    }

    canActivate() {
        let qwerty = localStorage.getItem('qwerty');

        if (qwerty) {
            this.checkKeyValid(qwerty).subscribe((exist) => {
                return !exist['exist'];
            });
        }

        else {
            return true;
        }
    }

    checkKeyValid(qwerty) {
        let header = new Headers({'Content-Type': 'application/json'});
        let option = new RequestOptions({headers: header});

        return this.http.get(`${this.CHECK_TOKEN_URL}${qwerty}`, option)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err: Response | any) => {
                if (err instanceof Response) {
                    return err.json()
                }

                else {
                    return err.message;
                }
            });
    }
}

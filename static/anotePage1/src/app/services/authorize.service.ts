import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthorizeService {
    private TOKEN_URL = 'http://127.0.0.1:8000/api_1/kegiatan/token-auth/';

    constructor(private http: Http) {
    }

    cobaLogin(user, pass) {
        let body = {
            'username': user,
            'password': pass
        };

        let headers = new Headers();
        headers.set('Content-Type', 'application/json');

        let option = new RequestOptions({headers: headers});

        return this.http.post(this.TOKEN_URL, body, option)
            .map((res: Response) => {
                let body = res.json();

                localStorage.setItem('qwerty', body['token']);
                return body;
            })
            .catch((err: Response | any) => {
                if (err instanceof Response) {
                    let body = err.json();

                    return body['non_field_errors'];
                }
                else {
                    return err.message;
                }
            });
    }
}

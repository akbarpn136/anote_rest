import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {GuardAuthorizeService} from "./guard-authorize.service";
import {Observable} from "rxjs";

@Injectable()
export class KegiatanService {
    private KEGIATAN_URL: string = 'http://127.0.0.1:8000/api_1/kegiatan/';

    constructor(private http: Http,
                private guard: GuardAuthorizeService) {
    }

    getKegiatan(offset) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params = new URLSearchParams();

        // params.set('limit', limit);
        params.set('offset', offset);

        if (!this.guard.canActivate()) {
            headers.set('Authorization', `token ${localStorage.getItem('qwerty')}`)
        }

        let options = new RequestOptions({headers: headers, search: params});

        return this.http.get(this.KEGIATAN_URL, options)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err: Response | any) => {
                if (err instanceof Response) {
                    return err.json();
                }
                else {
                    return err.message;
                }
            });
    }

    tambahKegiatan(data) {
        let headers = new Headers({'Content-Type': 'application/json'});

        headers.set('Authorization', `token ${localStorage.getItem('qwerty')}`);

        let options = new RequestOptions({headers: headers});

        return this.http.post(this.KEGIATAN_URL, data, options)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err: Response | any) => {
                if (err instanceof Response) {
                    return Observable.throw(err.json());
                }
                else {
                    return err.message;
                }
            });
    }
}

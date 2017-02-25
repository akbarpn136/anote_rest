import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, Response} from "@angular/http";
import {GuardAuthorizeService} from "./guard-authorize.service";

@Injectable()
export class CatatanKegiatanService {
    private KEGIATAN_URL: string = 'http://127.0.0.1:8000/api_1/kegiatan/';
    private qwerty: string;

    constructor(private http: Http, private guard: GuardAuthorizeService) {
    }

    getCatatan(kegiatan_id, offset) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params = new URLSearchParams();

        // params.set('limit', limit);
        params.set('offset', offset);

        let options = new RequestOptions({headers: headers, search: params});

        if (!this.guard.canActivate()) {
            this.qwerty = localStorage.getItem('qwerty');
            headers.set('Authorization', `token ${this.qwerty}`);
        }

        else {
            this.qwerty = '';
        }

        return this.http.get(`${this.KEGIATAN_URL}${kegiatan_id}/catatan/`, options)
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
}

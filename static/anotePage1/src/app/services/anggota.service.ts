import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AnggotaService {
    private ANGGOTA_KEGIATAN_URL: string = 'http://localhost:8000/api_1/kegiatan/';
    private PERSONIL_URL: string = 'http://localhost:8000/api_1/profil/';
    qwerty: string;

    constructor(private http: Http) {
    }

    ambilAnggota(kegiatan_id, offset) {
        this.qwerty = localStorage.getItem('qwerty');
        let headers = new Headers({'Content-Type': 'application/json'});
        let params = new URLSearchParams();

        // params.set('limit', limit);
        params.set('offset', offset);
        headers.set('Authorization', `token ${this.qwerty}`);

        let options = new RequestOptions({headers: headers, search: params});

        return this.http.get(`${this.ANGGOTA_KEGIATAN_URL}${kegiatan_id}/anggota/`, options)
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

    tambahAnggota(kegiatan_id, data) {
        this.qwerty = localStorage.getItem('qwerty');
        let headers = new Headers({'Content-Type': 'application/json'});

        headers.set('Authorization', `token ${this.qwerty}`);

        let options = new RequestOptions({headers: headers});

        return this.http.post(`${this.ANGGOTA_KEGIATAN_URL}${kegiatan_id}/anggota/`, data, options)
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

    ambilPersonil(personil_id) {
        this.qwerty = localStorage.getItem('qwerty');
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.set('Authorization', `token ${this.qwerty}`);

        let options = new RequestOptions({headers: headers});

        return this.http.get(`${this.PERSONIL_URL}${personil_id}/personil/`, options)
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

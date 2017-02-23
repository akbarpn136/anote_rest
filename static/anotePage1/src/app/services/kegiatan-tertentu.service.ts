import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class KegiatanTertentuService {
    private KEGIATAN_URL: string = 'http://localhost:8000/api_1/kegiatan/';

    constructor(private http: Http) {
    }

    getKegiatanTertentu(id) {
        let headers = new Headers({'Content-Type': 'application/json'});

        let options = new RequestOptions({headers: headers});

        return this.http.get(`${this.KEGIATAN_URL}${id}/`, options)
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

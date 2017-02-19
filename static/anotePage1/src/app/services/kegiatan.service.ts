import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class KegiatanService {
    private KEGIATAN_URL: string = 'http://127.0.0.1:8000/api_1/kegiatan/';

    constructor(private http: Http) {
    }

    getKegiatan(offset) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let params = new URLSearchParams();

        // params.set('limit', limit);
        params.set('offset', offset);

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

}

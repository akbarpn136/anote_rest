import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class KegiatanService {
    private KEGIATAN_URL: string = 'http://127.0.0.1:8000/api_1/kegiatan/';

    constructor(private http: Http) {
    }

    getKegiatan() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.KEGIATAN_URL, options)
            .map((res: Response) => {
                let body = res.json();
                return body;
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

import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UtilitiService {
    private USER_URL = 'http://localhost:8000/api_1/utiliti/user/';
    private JABATAN_URL = 'http://localhost:8000/api_1/utiliti/jabatan/';

    constructor(private http: Http) {
    }

    ambilUser() {
        return this.http.get(this.USER_URL)
            .map(
                (res: Response) => {
                    return res.json();
                }
            )
            .catch(
                (err: Response | any) => {
                    if (err instanceof Response) {
                        return Observable.throw(err.json());
                    }

                    else {
                        return err.message();
                    }
                }
            );
    }

    ambilJabatan() {
        return this.http.get(this.JABATAN_URL)
            .map(
                (res: Response) => {
                    return res.json();
                }
            )
            .catch(
                (err: Response | any) => {
                    if (err instanceof Response) {
                        return Observable.throw(err.json());
                    }

                    else {
                        return err.message();
                    }
                }
            );
    }
}

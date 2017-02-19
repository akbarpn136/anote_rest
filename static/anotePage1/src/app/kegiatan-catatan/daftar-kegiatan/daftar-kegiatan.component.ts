import {Component, OnInit} from '@angular/core';

import {KegiatanService} from "../../services/kegiatan.service";

@Component({
    selector: 'an-daftar-kegiatan',
    templateUrl: './daftar-kegiatan.component.html',
    styleUrls: ['./daftar-kegiatan.component.css']
})
export class DaftarKegiatanComponent implements OnInit {
    DaftarKegiatan:any;
    next:any;
    previous:any;
    total:number;

    private offset:number = 0;

    constructor(private kegiatanService: KegiatanService) {}

    ngOnInit() {
        this.getKegiatan(this.offset);
    }

    onNewOffset(number):void {
        this.getKegiatan(this.offset + number);
    }

    getKegiatan(offset) {
        return this.kegiatanService.getKegiatan(offset).subscribe(
            (kegiatan) => {
                this.DaftarKegiatan = kegiatan['results'];
                this.next = kegiatan['next'];
                this.previous = kegiatan['previous'];
                this.total = kegiatan['count'];
            },
            (error) => {console.log(error)}
            );
    }

}

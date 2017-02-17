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

    constructor(private kegiatanService: KegiatanService) {
    }

    ngOnInit() {
        this.getKegiatan();
    }

    getKegiatan() {
        this.kegiatanService.getKegiatan().subscribe(
            (kegiatan) => {
                this.DaftarKegiatan = kegiatan['results'];
                this.next = kegiatan['next'];
                this.previous = kegiatan['previous'];
            },
            (error) => {console.log(error)}
            );
    }

}

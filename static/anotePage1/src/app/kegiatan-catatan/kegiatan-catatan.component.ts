import {Component, OnInit} from '@angular/core';
import {KegiatanService} from "../services/kegiatan.service";
import {KegiatanTertentuService} from "../services/kegiatan-tertentu.service";

@Component({
    selector: 'an-kegiatan-catatan',
    templateUrl: './kegiatan-catatan.component.html',
    styleUrls: ['./kegiatan-catatan.component.css'],
    providers: [KegiatanService, KegiatanTertentuService]
})
export class KegiatanCatatanComponent implements OnInit {
    kegiatan_terpilih:any;

    constructor() {
    }

    ngOnInit() {
    }

    onKegiatan(kegiatan) {
        this.kegiatan_terpilih = kegiatan;
    }
}

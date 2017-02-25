import {Component, OnInit} from '@angular/core';
import {KegiatanService} from "../services/kegiatan.service";
import {KegiatanTertentuService} from "../services/kegiatan-tertentu.service";
import {CatatanKegiatanService} from "../services/catatan-kegiatan.service";

@Component({
    selector: 'an-kegiatan-catatan',
    templateUrl: './kegiatan-catatan.component.html',
    styleUrls: ['./kegiatan-catatan.component.css'],
    providers: [KegiatanService, KegiatanTertentuService, CatatanKegiatanService]
})
export class KegiatanCatatanComponent implements OnInit {
    kegiatan_terpilih: any;
    catatan_terkait: any;

    constructor() {
    }

    ngOnInit() {
    }

    onKegiatan(kegiatan) {
        this.kegiatan_terpilih = kegiatan;
    }

    onCatatanTerkait(catatan) {
        this.catatan_terkait = catatan;
    }
}

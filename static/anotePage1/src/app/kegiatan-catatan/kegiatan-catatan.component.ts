import {Component, OnInit} from '@angular/core';
import {KegiatanService} from "../services/kegiatan.service";

@Component({
    selector: 'an-kegiatan-catatan',
    templateUrl: './kegiatan-catatan.component.html',
    styleUrls: ['./kegiatan-catatan.component.css'],
    providers: [KegiatanService]
})
export class KegiatanCatatanComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

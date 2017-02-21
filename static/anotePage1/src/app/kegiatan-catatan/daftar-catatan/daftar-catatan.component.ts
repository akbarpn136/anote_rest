import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'an-daftar-catatan',
    templateUrl: './daftar-catatan.component.html',
    styleUrls: ['./daftar-catatan.component.css']
})
export class DaftarCatatanComponent implements OnInit {
    headerText:string;
    deskripsi:string;

    constructor() {}

    ngOnInit() {
        this.headerText = 'INFO';
        this.deskripsi = 'Tekan tautan kegiatan disamping untuk melihat catatan terakhir.';
    }
}

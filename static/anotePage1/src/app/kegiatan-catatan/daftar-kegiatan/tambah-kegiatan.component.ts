import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'an-tambah-kegiatan',
    templateUrl: './tambah-kegiatan.component.html',
    styleUrls: ['./tambah-kegiatan.component.css']
})
export class TambahKegiatanComponent implements OnInit {
    @Input() isShow: boolean = false;
    @Output() isModalShow = new EventEmitter<boolean>();

    private nama:string;
    private stkk:string;
    private kode:string;
    private tanggal:string;

    constructor() {
    }

    ngOnInit() {
    }

    onModalClose() {
        this.isShow = false;
        this.isModalShow.emit(false);
    }
}

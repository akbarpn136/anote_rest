import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {KegiatanService} from "../../services/kegiatan.service";
import {Router} from "@angular/router";

@Component({
    selector: 'an-tambah-kegiatan',
    templateUrl: './tambah-kegiatan.component.html',
    styleUrls: ['./tambah-kegiatan.component.css']
})
export class TambahKegiatanComponent implements OnInit {
    @Input() isShow: boolean = false;
    @Output() isModalShow = new EventEmitter<boolean>();

    private nama: string;
    private stkk: string;
    private manual: string;
    private kode: string;
    private tanggal: string;
    private warnStat: boolean;
    private message: any;
    private key: any;

    constructor(private kegiatanService: KegiatanService, private router: Router) {
    }

    ngOnInit() {
    }

    onModalClose() {
        this.isShow = false;
        this.isModalShow.emit(false);
    }

    onTambahKegiatanSubmit() {
        let data = {
            'nama': this.nama,
            'stkk': this.stkk,
            'manual': this.manual,
            'kode': this.kode,
            'tanggal': this.tanggal,
        };

        this.kegiatanService.tambahKegiatan(data).subscribe(
            () => {
                this.onModalClose();
                //noinspection JSIgnoredPromiseFromCall
                this.router.navigate(['']);
            },
            (err) => {
                this.warnStat = true;
                this.key = Object.keys(err);
                this.message = err;

                this.nama = this.key.indexOf('nama') !== -1 ? '' : this.nama;
                this.stkk = this.key.indexOf('stkk') !== -1 ? '' : this.stkk;
                this.kode = this.key.indexOf('kode') !== -1 ? '' : this.kode;
            }
        );
    }
}

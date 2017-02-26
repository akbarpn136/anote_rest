import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {KegiatanService} from "../../services/kegiatan.service";
import {KegiatanTertentuService} from "../../services/kegiatan-tertentu.service";
import {CatatanKegiatanService} from "../../services/catatan-kegiatan.service";
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'an-daftar-kegiatan',
    templateUrl: './daftar-kegiatan.component.html',
    styleUrls: ['./daftar-kegiatan.component.css']
})
export class DaftarKegiatanComponent implements OnInit {
    DaftarKegiatan: any;
    @Output() kegiatan:any = new EventEmitter<any>();
    @Output() catatan_terkait:any = new EventEmitter<any>();

    next: any;
    previous: any;
    total: number;

    private offset: number = 0;
    private isDisable: boolean = true;

    constructor(private kegiatanService: KegiatanService,
                private catatanService: CatatanKegiatanService,
                private kegiatanTertentu:KegiatanTertentuService,
                private router: Router) {
        this.router.events.subscribe(
            (val) => {
                if (val instanceof NavigationEnd) {
                    this.getKegiatan(this.offset);
                }
            }
        );
    }

    ngOnInit() {
        this.getKegiatan(this.offset);
    }

    onNewOffset(number): void {
        this.getKegiatan(this.offset + number);
    }

    getKegiatan(offset) {
        this.kegiatanService.getKegiatan(offset).subscribe(
            (kegiatan) => {
                this.DaftarKegiatan = kegiatan['results'];
                this.next = kegiatan['next'];
                this.previous = kegiatan['previous'];
                this.total = kegiatan['count'];

                this.isDisable = !(localStorage.getItem('super') && localStorage.getItem('super') == 'true');
            },
            (error) => {
                console.log(error)
            }
        );
    }

    getCatatanTerkait(id, offset) {
        this.catatanService.getCatatan(id, offset).subscribe(
            (catatan) => {
                this.catatan_terkait.emit(catatan['results']);
            },
            () => {
                this.catatan_terkait.emit([]);
            }
        );
    }

    onKegiatanClicked(event, id): void {
        event.preventDefault();

        this.kegiatanTertentu.getKegiatanTertentu(id).subscribe(
            (kegiatan) => {
                this.kegiatan.emit(kegiatan);
            },
            (err) => {
                console.log(err);
            }
        );

        this.getCatatanTerkait(id, this.offset);
    }
}

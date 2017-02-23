import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {KegiatanService} from "../../services/kegiatan.service";
import {KegiatanTertentuService} from "../../services/kegiatan-tertentu.service";

@Component({
    selector: 'an-daftar-kegiatan',
    templateUrl: './daftar-kegiatan.component.html',
    styleUrls: ['./daftar-kegiatan.component.css']
})
export class DaftarKegiatanComponent implements OnInit {
    DaftarKegiatan: any;
    @Output() kegiatan:any = new EventEmitter<any>();
    next: any;
    previous: any;
    total: number;

    private offset: number = 0;

    constructor(private kegiatanService: KegiatanService,
                private kegiatanTertentu:KegiatanTertentuService) {
    }

    ngOnInit() {
        this.getKegiatan(this.offset);
    }

    onNewOffset(number): void {
        this.getKegiatan(this.offset + number);
    }

    getKegiatan(offset) {
        return this.kegiatanService.getKegiatan(offset).subscribe(
            (kegiatan) => {
                this.DaftarKegiatan = kegiatan['results'];
                this.next = kegiatan['next'];
                this.previous = kegiatan['previous'];
                this.total = kegiatan['count'];
                // this.prog.done();
            },
            (error) => {
                console.log(error)
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
    }
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {CatatanKegiatanService} from "../../services/catatan-kegiatan.service";
import {ActivatedRoute} from "@angular/router";
import {KegiatanTertentuService} from "../../services/kegiatan-tertentu.service";
import {GuardAuthorizeService} from "../../services/guard-authorize.service";

@Component({
    selector: 'an-daftar-catatan',
    templateUrl: './daftar-catatan.component.html',
    styleUrls: ['./daftar-catatan.component.css']
})
export class DaftarCatatanComponent implements OnInit, OnDestroy {
    headerText: string;
    deskripsi: string;
    private kegiatan_id: any;
    private sub;
    private offset: any;
    private catatan_terkait: any;
    private kegiatan_terpilih: any;
    private catatan_next: any;
    private catatan_previous: any;
    private catatan_total: any;
    private isMenuOpsShow: boolean;

    constructor(private catatanService: CatatanKegiatanService,
                private kegiatanTerpilih: KegiatanTertentuService,
                private guard: GuardAuthorizeService,
                private activ: ActivatedRoute) {
        this.sub = this.activ.params.subscribe(
            (val) => {
                this.kegiatan_id = val['id'];
                this.getKegiatanTerpilih(this.kegiatan_id);

                if (!this.guard.canActivate()) {
                    this.isMenuOpsShow = true;
                    this.getCatatanTerkait(this.kegiatan_id, this.offset);
                }
            }
        );
    }

    ngOnInit() {
        this.headerText = 'INFO';
        this.deskripsi = 'Tekan tautan kegiatan disamping untuk melihat catatan terakhir.';
        this.offset = 0;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onNewOffset(id, offset) {
        this.offset += offset;

        this.catatanService.getCatatan(id, this.offset).subscribe(
            (catatan) => {
                this.catatan_terkait = catatan['results'];
                this.catatan_next = catatan['next'];
                this.catatan_previous = catatan['previous'];
                this.catatan_total = catatan['count'];
            },
            () => {
                this.catatan_terkait = [];
            }
        );
    }

    getCatatanTerkait(id, offset) {
        this.catatanService.getCatatan(id, offset).subscribe(
            (catatan) => {
                this.catatan_terkait = catatan['results'];
                this.catatan_next = catatan['next'];
                this.catatan_previous = catatan['previous'];
                this.catatan_total = catatan['count'];
            },
            () => {
                this.catatan_terkait = [];
            }
        );
    }

    getKegiatanTerpilih(id) {
        this.kegiatanTerpilih.getKegiatanTertentu(id).subscribe(
            (kegiatan) => {
                this.kegiatan_terpilih = kegiatan;
            }
        );
    }
}

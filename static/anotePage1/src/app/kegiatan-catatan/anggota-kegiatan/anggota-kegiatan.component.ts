import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnggotaService} from "../../services/anggota.service";

@Component({
    selector: 'an-anggota-kegiatan',
    templateUrl: './anggota-kegiatan.component.html',
    styleUrls: ['./anggota-kegiatan.component.css'],
    providers: [AnggotaService]
})
export class AnggotaKegiatanComponent implements OnInit {
    kegiatan_id: number;
    anggota_kegiatan: any;
    anggota_next: any;
    anggota_previous: any;
    anggota_count: any;
    key: any;
    messages: any;
    offset: number = 0;

    isShow: boolean;

    constructor(private active: ActivatedRoute,
                private anggota: AnggotaService) {
        this.active.parent.params.subscribe(val => {
            this.kegiatan_id = +val['id'];
            this.ambilAnggota(this.kegiatan_id, this.offset);
        });
    }

    ngOnInit() {
    }

    onNewOffset(event) {
        this.offset += +event;
        this.ambilAnggota(this.kegiatan_id, this.offset);
    }

    ambilAnggota(id, offset) {
        this.anggota.ambilAnggota(id, offset).subscribe(
            (anggota) => {
                this.anggota_kegiatan = anggota['results'];
                this.anggota_next = anggota['next'];
                this.anggota_previous = anggota['previous'];
                this.anggota_count = anggota['count'];
            },
            (err) => {
                this.messages = err;
                this.key = Object.keys(this.messages);
            }
        );
    }

    onTambahAnggota() {
        this.isShow = true;
    }

    receiveIsShow(e) {
        this.isShow = e;
    }

    receiveReloadAnggota(e) {
        if (e === true) {
            this.ambilAnggota(this.kegiatan_id, this.offset);
        }
    }
}

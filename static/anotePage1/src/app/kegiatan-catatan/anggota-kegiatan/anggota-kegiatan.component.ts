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

    constructor(private active: ActivatedRoute,
                private anggota: AnggotaService) {
        this.active.parent.params.subscribe(val => {
            this.kegiatan_id = +val['id'];
            this.anggota.ambilAnggota(this.kegiatan_id).subscribe(
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
        });
    }

    ngOnInit() {
    }
}

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UtilitiService} from "../../../services/utiliti.service";
import {AnggotaService} from "../../../services/anggota.service";
import {Location} from "@angular/common";

@Component({
    selector: 'an-manage-anggota',
    templateUrl: './manage-anggota.component.html',
    styleUrls: ['./manage-anggota.component.css'],
    providers: [UtilitiService]
})
export class ManageAnggotaComponent implements OnInit {
    anggotaForm: FormGroup;
    kegiatan_id: number;
    anggota_id: number;

    jabatan: any;
    user: any;
    key: any;
    message: any;
    warnStat: boolean;
    sub_title: string;

    constructor(private fb: FormBuilder,
                private activ: ActivatedRoute,
                private ut: UtilitiService,
                private anggota: AnggotaService,
                private loc: Location) {
        if (this.activ.url['value'].length === 2) {
            this.kegiatan_id = +this.activ.parent.snapshot.params['id'];
            this.sub_title = 'Tambah';
            this.createFormAnggota({});
        }

        else {
            this.anggota_id = +this.activ.snapshot.params['id'];
            this.kegiatan_id = +this.activ.parent.snapshot.params['id'];

            this.sub_title = 'Modifikasi';
            this.createFormAnggota({});
            this.anggota.ambilAnggotaTertentu(this.kegiatan_id, this.anggota_id).subscribe(
                val => {
                    this.createFormAnggota(val);
                }
            );
        }

        this.ut.ambilUser().subscribe(
            user => {
                this.user = user
            },

            () => {
                this.user = {};
            }
        );

        this.ut.ambilJabatan().subscribe(
            jabatan => {
                this.jabatan = jabatan
            },

            () => {
                this.jabatan = {};
            }
        );
    }

    ngOnInit() {}

    createFormAnggota(data) {
        this.anggotaForm = this.fb.group({
            kegiatan: this.fb.control(data.kegiatan),
            personil: this.fb.control(data.personil, Validators.compose([Validators.required])),
            jabatan: this.fb.control(data.jabatan, Validators.compose([Validators.required])),
            kode_jabatan: this.fb.control(data.kode_jabatan, Validators.compose([Validators.required])),
            order: this.fb.control(data.order, Validators.compose([Validators.required])),
        });
    }

    onAnggotaSubmit(kegiatan_id, anggota_id = null, data) {
        if (!anggota_id) {
            this.anggota.tambahAnggota(kegiatan_id, data).subscribe(
                () => {
                    this.loc.back();
                },

                err => {
                    this.warnStat = true;
                    this.key = Object.keys(err);
                    this.message = err;
                }
            );
        }

        else {
            this.anggota.ubahAnggota(kegiatan_id, anggota_id, data).subscribe(
                () => {
                    this.loc.back();
                },

                err => {
                    this.warnStat = true;
                    this.key = Object.keys(err);
                    this.message = err;
                }
            );
        }
    }

    onKembali() {
        this.loc.back();
    }
}

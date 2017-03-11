import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {KegiatanTertentuService} from "../../services/kegiatan-tertentu.service";
import {KegiatanService} from "../../services/kegiatan.service";

@Component({
    selector: 'an-modif-kegiatan',
    templateUrl: './modif-kegiatan.component.html',
    styleUrls: ['./modif-kegiatan.component.css']
})
export class ModifKegiatanComponent implements OnInit {
    kegiatanForm: FormGroup;
    kegiatan_id: any;
    warnStat: boolean;
    key: any;
    message: any;

    constructor(private fb: FormBuilder,
                private loc: Location,
                private active: ActivatedRoute,
                private router: Router,
                private kegTerp: KegiatanTertentuService,
                private kegiatan: KegiatanService) {
        this.active.params.subscribe((params) => {
            this.kegiatan_id = +params['id'];
            this.kegTerp.getKegiatanTertentu(this.kegiatan_id).subscribe((keg) => {
                this.createFOrm(keg);
            });
        });
    }

    ngOnInit() {
        this.createFOrm({});
    }

    createFOrm(data) {
        this.kegiatanForm = this.fb.group({
            nama: this.fb.control(data.nama, Validators.compose([Validators.required])),
            stkk: this.fb.control(data.stkk, Validators.compose([Validators.required])),
            manual: this.fb.control(data.manual),
            kode: this.fb.control(data.kode, Validators.compose([Validators.required])),
            tanggal: this.fb.control(data.tanggal, Validators.compose([Validators.required])),
        });
    }

    onKembali() {
        this.loc.back();
    }

    onSimpanKegiatanSubmit(kegiatan_id, simpan_data) {
        this.kegiatan.simpanKegiatan(kegiatan_id, simpan_data).subscribe(
            () => {
                this.onKembali();
            },
            (err) => {
                this.warnStat = true;
                this.key = Object.keys(err);
                this.message = err;
            }
        );
    }

    onHapusKegiatan(kegiatan_id) {
        if (window.confirm('Hapus kegiatan ini?')) {
            this.kegiatan.hapusKegiatan(kegiatan_id).subscribe(
                () => {
                    //noinspection JSIgnoredPromiseFromCall
                    this.router.navigate(['']);
                },
                (err) => {
                    this.warnStat = true;
                    this.key = Object.keys(err);
                    this.message = err;
                }
            );
        }
    }
}

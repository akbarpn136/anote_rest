import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UtilitiService} from "../../../services/utiliti.service";
import {AnggotaService} from "../../../services/anggota.service";

@Component({
    selector: 'an-manage-anggota',
    templateUrl: './manage-anggota.component.html',
    styleUrls: ['./manage-anggota.component.css'],
    providers: [UtilitiService]
})
export class ManageAnggotaComponent implements OnInit {
    @Input() isShow: boolean = true;
    @Output() sendIsShow = new EventEmitter<boolean>();
    @Output() sendReloadAnggota = new EventEmitter<boolean>();

    anggotaForm: FormGroup;
    kegiatan_id: number;
    url_segments: number;

    jabatan: any;
    user: any;
    key: any;
    message: any;
    warnStat: boolean;

    constructor(private fb: FormBuilder,
                private activ: ActivatedRoute,
                private ut: UtilitiService,
                private anggota: AnggotaService) {
        this.activ.parent.params.subscribe(
            val => {
                this.kegiatan_id = +val['id'];
                this.url_segments = +this.activ.url['value'].length;
            }
        );

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

    ngOnInit() {
        if (this.url_segments === 1) {
            this.createFormAnggota({});
        }
    }

    onModalClose() {
        this.isShow = false;
        this.sendIsShow.emit(false);
    }

    createFormAnggota(data) {
        this.anggotaForm = this.fb.group({
            kegiatan: this.fb.control(data.kegiatan),
            personil: this.fb.control(data.personil, Validators.compose([Validators.required])),
            jabatan: this.fb.control(data.jabatan, Validators.compose([Validators.required])),
            kode_jabatan: this.fb.control(data.kode, Validators.compose([Validators.required])),
            order: this.fb.control(data.kode, Validators.compose([Validators.required])),
        });
    }

    onAnggotaSubmit(kegiatan_id, data) {
        this.anggota.tambahAnggota(kegiatan_id, data).subscribe(
            () => {
                this.isShow = false;
                this.sendReloadAnggota.emit(true);
            },

            err => {
                this.warnStat = true;
                this.key = Object.keys(err);
                this.message = err;
            }
        );
    }
}

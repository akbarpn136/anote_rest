import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'an-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    @Input() hasNext:boolean;
    @Input() hasPrev:boolean;
    @Input() total:number;
    @Input() range:number;
    @Output() offset = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    onNext(event) {
        event.preventDefault();
        this.offset.emit(this.range);
    }
    onPrev(event) {
        event.preventDefault();
        this.offset.emit(-this.range);
    }
}

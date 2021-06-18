import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JobService } from 'src/app/services/job.service';

@Component({
    selector: 'app-job-detail',
    templateUrl: './job-detail.component.html',
    styleUrls: ['./job-detail.component.css'],
    providers: [],
})

export class JobDetailComponent implements OnInit {
    @Input() name;
    details: object;

    constructor(
        public activeModal: NgbActiveModal,
        private jobService: JobService,
    ) {}

    ngOnInit(): void {
        this.jobService.getJob(this.name)
        .subscribe(res => {
            this.details = res;
        }, Error => {
            console.log(Error);
        });
    }
}
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Job } from '../../models/job';

import { JobService } from '../../services/job.service';
import { JobDetailComponent } from './job-detail/job-detail.component';

@Component({
  selector : 'app-job-table',
  templateUrl : './job-table.component.html',
  styleUrls: ['./job-table.component.css'],
  providers : [],
})

export class JobTableComponent implements OnInit {
  
  jobs: Array<Job> = [];
  sortArray: Array<{ id: number, name: string}> = [];
  currentPage: number;
  pages: number;
  totalJobs: number;

  @Input()
  filterTarget: string;
  filterStatus: number;
  sortTarget: string;
  errorMessage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService,
    private modalService: NgbModal,
  ) {}

  // when page initializes, fetch data. Will get page 1 or Page XX if value is enter in URL by user
  ngOnInit(): void {
    this.sortTarget = "-postedDate";
    this.filterStatus = 1;
    this.sortArray = [
      { id:1, name : "Active"},
      { id:0, name : "All"},
      { id:-1, name : "Inactive"}
    ]
    this.route.paramMap.pipe(switchMap(params => {
      return this.jobService.getJobs(Number(params.get('page')) || 1);
    }))
      .subscribe(res => {
        this.jobs = res.jobs;
        this.currentPage = res.currentPage;
        this.pages = res.pages;
        this.totalJobs = res.totalJobs;
      }, Error => {
        console.log(Error);
      });   
  }

  // post to fetch next/prev page and data
  fetchJobs(): void {
    this.jobService.filterJobs({
      filterTarget: this.filterTarget,
      filterStatus: this.filterStatus,
      sortTarget: this.sortTarget,
      currentPage: this.currentPage,
    })
    .subscribe(res => {
      this.jobs = res.jobs;
      this.currentPage = res.currentPage;
      this.pages = res.pages;
      this.totalJobs = res.totalJobs;
    }, Error => {
      console.log(Error);
    })
  }

  // checks if sort target is set, if not updates taget and fetches new data to match
  sort(sortTarget: string): void {
    if (this.sortTarget){
      if(this.sortTarget.indexOf(sortTarget) !== -1){
        (this.sortTarget[0] == "-") ? this.sortTarget = this.sortTarget.slice(1,) : this.sortTarget = "-" + this.sortTarget;
      } else {
        this.sortTarget = "-" + sortTarget;
      }
    } else {
      this.sortTarget = sortTarget;
    }
    this.fetchJobs();
  }

 onChangeFilter(): void {
   // limited to minimum of 3 characters to search on so we're not finding every word with the letter A for instance
    if(this.filterTarget.length >= 3){
      this.currentPage = 1;
      this.fetchJobs();
    } else if (this.filterTarget.length == 0){
      // like nginit but for when user sets search field to empty by deleting all characters
      this.currentPage = 1;
      this.fetchJobs();
    }
  }

  onChangeStatus(newValue: number): void {
    if(newValue == 1 || newValue == 0 || newValue == -1){
      this.filterStatus = newValue;     
      this.fetchJobs();
    }
  }
 
  // deprecate or at X in search field
  clear(): void {
    this.filterTarget = '';
    this.filterStatus = 1;
    this.currentPage = 1;
    this.fetchJobs();
  }

  nextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.filterTarget = this.filterTarget || '';
    this.fetchJobs();
  }

  prevPage(): void {
    this.currentPage = this.currentPage - 1;
    this.filterTarget = this.filterTarget || '';
    this.fetchJobs();
  }

  open(detailTarget: string): void {
    const modalRef = this.modalService.open(JobDetailComponent);
    modalRef.componentInstance.name = detailTarget;
  }
}

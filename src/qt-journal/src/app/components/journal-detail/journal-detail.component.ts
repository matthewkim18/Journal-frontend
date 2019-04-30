import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Journal } from '../model/journal';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JournalService } from 'src/app/services/journal.service';
import { Subscription } from 'rxjs';


@Component({
selector: 'app-journal-detail',
templateUrl: './journal-detail.component.html',
styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit, OnDestroy {
private journal = new Journal();
private subscription = new Subscription();

constructor(
  private location: Location,
  private route: ActivatedRoute,
  private journalService: JournalService
) {}


ngOnInit(): void {
  this.getJournal();

  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

  getJournal(): void {
    this.route.params.subscribe(params => {
      this.subscription = this.journalService.getJournalbyID(params['id'])
      .subscribe(journal => this.journal = journal);
    });

  }
  updateJournal() {
   this.subscription = this.route.params.subscribe(params => {
      this.subscription = this.journalService.updateJournal(params['id'], this.journal)
      .subscribe(data => {
          this.goBack();
      },
      error => {
          console.log(error);
      });
    });
  }
  deleteJournal() {
   this.subscription =  this.route.params.subscribe(params => {
      this.subscription  = this.journalService.deleteJournal(params['id'])
      .subscribe(journal => this.journal = journal);
    });
   this.goBack();
  }

goBack(): void {
this.location.back();
}

}

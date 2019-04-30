import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {JournalService} from '../../services/journal.service';
import {Journal} from '../model/journal';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})


export class JournalComponent implements OnInit {
  journals: Journal[];
  model = new Journal();
  displayedColumns: string[] = ['id', 'subject', 'text'];
constructor(private journalService: JournalService, private router: Router) {

}

ngOnInit() {
  this.getJournals();
}

getJournals() {
  this.journalService.getJournals()
  .subscribe(data => {
    console.log(JSON.stringify(data));
    this.journals = data;
  },
  error => {
    console.log(error);
  });
}

addJournal() {
  console.log(this.model);
  this.journalService.addJournal(this.model)
    .subscribe(data => {
        console.log(JSON.stringify(data));
        this.getJournals();
    },
    error => {
        console.log(error);
    });
}
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalComponent } from './components/journal/journal.component';
import { JournalDetailComponent } from './components/journal-detail/journal-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'journal', pathMatch: 'full'},
  {path: 'journal', component: JournalComponent},
  {path: 'journal-detail/:id', component: JournalDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

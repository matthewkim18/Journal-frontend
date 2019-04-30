// album-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Journal} from '../components/model/journal';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  uri = 'localhost:8080';
  constructor(private http: HttpClient) {
  }

  addJournal(journal: Journal) {
    return this.http.post<Journal>(`/api/journals/create`, journal);
  }
  getJournals() {
    return this.http.get<Journal[]>(`/api/journals`);
  }
  getJournalbyID(id) {
    return this.http.get<Journal>(`/api/journals/${id}`);
  }
  deleteJournal(id) {
    return this.http.delete<Journal>(`/api/journals/${id}/delete`);
  }
  updateJournal(id, journal: Journal) {
    return this.http.put<Journal>(`/api/journals/${id}/update`, journal);
  }

}

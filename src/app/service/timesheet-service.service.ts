import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Timesheet } from '../model/timesheet';

interface TimesheetData {
  timesheets: Timesheet[];
}

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  private apiUrl = '../../../db.json';

  constructor(private http: HttpClient) { }

  getTimesheets(): Observable<Timesheet[]> {
    return this.http.get<TimesheetData>(this.apiUrl)
      .pipe(
        map(data => data.timesheets)
      );
  }

  getTimesheet(id: number): Observable<Timesheet | undefined> {
    return this.getTimesheets()
      .pipe(
        map(timesheets => timesheets.find(t => t.idTimesheet === id))
      );
  }

  addTimesheet(timesheet: Timesheet): Observable<Timesheet> {
    return this.http.post<Timesheet>(this.apiUrl, timesheet);
  }

  updateTimesheet(timesheet: Timesheet): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${timesheet.idTimesheet}`, timesheet);
  }

  deleteTimesheet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
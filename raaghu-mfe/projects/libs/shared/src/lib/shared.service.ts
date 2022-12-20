import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() { }

  public getNavHead$: BehaviorSubject<string> = new BehaviorSubject('');

  getTopNavTitle(): Observable<any> {
    return this.getNavHead$.asObservable();
  }

  setTopNavTitle(title: string) {
    this.getNavHead$.next(title);
  }

  public getSidebarStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getSideBarStatus(): Observable<any> {
    return this.getSidebarStatus$.asObservable();
  }

  setSideBarStatus(status: boolean) {
    this.getSidebarStatus$.next(status);
  }

  subjects: { [key: string]: Subject<any> } = {};
}

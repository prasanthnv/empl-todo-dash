import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Page } from '../../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private pageMeta:BehaviorSubject<Page> = new BehaviorSubject<Page>({title: '', badge: ''});

  constructor() { }

  getPageMeta() {
    return this.pageMeta.asObservable();
  }

  setPageMeta(page:Page) {
    this.pageMeta.next(page);
  }

  updatePageBadge(badge:string | number) {
  this.pageMeta.next({
    ...this.pageMeta.getValue(),
badge
  })
   }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaders: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor() {}
  showLoader(): void {
    this.loaders.next(this.loaders.getValue() + 1)
  }
  hideLoader(): void {
    this.loaders.next(this.loaders.getValue() - 1)
  }

  getLoader(): Observable<number> {
    return this.loaders.asObservable();
  }

}

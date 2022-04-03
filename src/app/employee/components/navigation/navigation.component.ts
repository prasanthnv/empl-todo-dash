import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation/navigation.service';
import { Page } from '../../models/page.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  pageMeta!: Page;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navigationService: NavigationService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.navigationService
      .getPageMeta()
      .subscribe((page) => (this.pageMeta = page));
  }

  logout(): void {
   if(confirm("Are you sure to Logout ? ")){
    this.authService.logOut();
    this.router.navigate(['/auth']);
   }
    
  }
}

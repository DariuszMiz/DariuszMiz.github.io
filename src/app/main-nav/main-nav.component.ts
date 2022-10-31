import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  public display = false;

  constructor(private router: Router) {}

  public route(path: string): void {
    this.router.navigateByUrl(`/${path}`, { skipLocationChange: true });
  }
}

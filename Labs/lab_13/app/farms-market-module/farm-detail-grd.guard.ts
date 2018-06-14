import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FarmsDBService } from './farms-db.service';

@Injectable({
  providedIn: 'root'
})
export class FarmDetailGrdGuard implements CanActivate {

  constructor(private router: Router, private db: FarmsDBService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (next.params['id']) {
        if (this.db.getDataAt(next.params['id']))
          return true;
        else {
          this.router.navigate(['farmsMarket/error']);
        }
      } else {
        this.router.navigate(['farmsMarket/error']);
      }
  }
}

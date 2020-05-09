import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor( private auth: AuthService, private router: Router ) {}
  canActivate(next, state): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['sessions/not-permitted'])
        }
      })
    )
  }
}

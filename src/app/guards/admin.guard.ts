import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authSvc: AuthService, 
    private router: Router
  ) { }
  
  canActivate(): Observable<boolean> {
    return this.authSvc.user$.pipe(map(user => {
      if(user.perfil === 'administrador') 
        return true;

      console.log('Access Denied');
      this.router.navigate(['/perfil']);
      return false;  
    }));;
  }
  
}

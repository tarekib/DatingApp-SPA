import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  photoUrl: string;


  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = this.photoUrl);
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    console.log('logged out');
    this.router.navigate(['home']);
  }
}

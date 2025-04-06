import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// import autoTable from 'jspdf-autotable';
import 'jspdf-autotable';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule, CommonModule, RouterOutlet],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit(){
    //sessionstorage doesn't have 
      // sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify({ username, password }));
      //route to login
      if(sessionStorage.getItem('user_credentials') == null){
        this.router.navigate(['/login']);
      }
  }
}
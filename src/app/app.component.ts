import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

// import autoTable from 'jspdf-autotable';
import 'jspdf-autotable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule, CommonModule, RouterOutlet],
  providers: [],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit(){
      if(sessionStorage.getItem('user_credentials') == null){
        this.router.navigate(['/login']);
      }
  }
}
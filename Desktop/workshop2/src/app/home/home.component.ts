
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  residences = [
    { id: 1, name: 'Residence 1' },
    { id: 2, name: 'Residence 2' },
    { id: 3, name: 'Residence 3' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDetails(residenceId: number) {
    this.router.navigate(['/residence', residenceId]);
  }
}


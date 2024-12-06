
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {

  residences = [
    { id: 1, name: 'Residence 1' },
    { id: 2, name: 'Residence 2' },
    { id: 3, name: 'Residence 3' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  // Méthode pour rediriger vers la page des appartements de la résidence
  viewApartments(residenceId: number) {
    this.router.navigate(['/apartmentsbyresidence', residenceId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartmentsbyresidence.component.html',
  styleUrls: ['./apartmentsbyresidence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {

  residenceId: number = 0;

  apartments = [
    { apartNum: 101, floorNum: 1, surface: 50, category: 'Studio' },
    { apartNum: 102, floorNum: 1, surface: 75, category: 'T2' },
    { apartNum: 201, floorNum: 2, surface: 100, category: 'T3' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('residenceId')!; // Récupérer l'ID de la résidence depuis l'URL
  }
}

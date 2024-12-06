
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('id')!;
  }
}


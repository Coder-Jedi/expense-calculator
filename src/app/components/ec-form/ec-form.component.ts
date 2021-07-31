import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ec-form',
  templateUrl: './ec-form.component.html',
  styleUrls: ['./ec-form.component.css'],
})
export class EcFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  itemForm = new FormGroup({
    type: new FormControl(''),
    amount: new FormControl(''),
    description: new FormControl(''),
  });
}

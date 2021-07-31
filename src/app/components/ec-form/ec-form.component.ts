import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ec-form',
  templateUrl: './ec-form.component.html',
  styleUrls: ['./ec-form.component.css'],
})
export class EcFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  itemForm = new FormGroup({
    type: new FormControl('', Validators.required),
    amount: new FormControl(0, [
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]),
    description: new FormControl(''),
  });

  onSubmit() {
    console.log(this.itemForm.value);
  }
}

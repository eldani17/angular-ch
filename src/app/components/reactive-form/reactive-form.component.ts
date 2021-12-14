import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: [''],
      zip: ['']
    });
  }

  ngOnInit(): void {
  }

  public handleSave(): void {
    console.log("form", this.profileForm.value);
  }

}

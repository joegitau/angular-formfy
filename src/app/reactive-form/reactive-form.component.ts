import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ratingRange } from '../utils/rating-validator';

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"]
})
export class ReactiveFormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        confirmEmail: ['', Validators.required]
      }),
      phone: [''],
      notification: 'email',
      // rating: [null, [Validators.min(1), Validators.max(5)]],
      rating: [null, ratingRange(1, 5) ],
      address: ['', Validators.required],
      address2: "",
      city: "",
      postalCode: ['', [Validators.required]],
      sendNewsletter: true
    });
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');

    if(notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity(); // updates and re-validates the form control state
  }

  mockData(): void {
    this.customerForm.patchValue({
      firstName: "Joseph",
      lastName: "Karanja"
    });
  };

  save() {
    console.log(this.customerForm);
    console.log("Saved: " + JSON.stringify(this.customerForm.value));
  };
}

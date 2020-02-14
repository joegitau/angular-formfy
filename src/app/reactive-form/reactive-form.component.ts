import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import { Customer } from "../customer";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"]
})
export class ReactiveFormComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      address2: "",
      city: "",
      postalCode: "",
      sendNewsletter: true
    });
  }

  save() {
    console.log(this.customerForm);
    console.log("Saved: " + JSON.stringify(this.customerForm.value));
  }

  mockData(): void {
    this.customerForm.patchValue({
      firstName: "Joseph",
      lastName: "Karanja"
    });
  }
}

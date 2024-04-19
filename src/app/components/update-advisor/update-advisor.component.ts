import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-advisor',
  templateUrl: './update-advisor.component.html',
  styleUrl: './update-advisor.component.css'
})
export class UpdateAdvisorComponent {
  advisor = [{ name: 'Jhon', SIN: "231456789", address: 'H', phone: "1234567890" }];
  advisorForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.advisorForm = this.formBuilder.group({
      Name: ['', Validators.required],
      SIN: ['', Validators.required],
      Address: ['', Validators.required],
      Phone: ['', Validators.required]
    });
  }
  advisors = [{ id: 1, name: 'Jhon' },
  { id: 2, name: 'Lee' },
  { id: 3, name: 'Sammy' }];
  name = 'Jhon';
  SIN = "231456789";
  address = 'H';
  phone = "1234567890"
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.advisorForm.valid) {
      this.advisorForm.reset();
      alert('Advisor details upfated successfully.');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsForm } from '../models';

const SIZES: string[] = [
  "Personal - 6 inches",
  "Regular - 9 inches",
  "Large - 12 inches",
  "Extra Large - 15 inches"
]

const PizzaToppings: string[] = [
    'chicken', 'seafood', 'beef', 'vegetables',
    'cheese', 'arugula', 'pineapple'
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pizzaSize = SIZES[0]

  pizzaForm!: FormGroup
  detailsForm !: DetailsForm
  

  constructor(private fb: FormBuilder, private router : Router) {}

  ngOnInit(): void {
    this.pizzaForm = this.fb.group({
      name: this.fb.control('Imaan Rowter', [Validators.required]),
      email: this.fb.control('nadzir.4@gmail.com', [Validators.required, Validators.email]),
      size: this.fb.control(6, [Validators.required]),
      base: this.fb.control('', [Validators.required]),
      sauce: this.fb.control('', [Validators.required]),
      toppings: this.fb.control('chicken,seafood', [Validators.required]),
      comments: this.fb.control('', [Validators.required]),
    })

    // this.detailsForm = this.fb.group({
    //   name: this.fb.control('Imaan Rowter', [Validators.required]),
    //   email: this.fb.control('nadzir.4@gmail.com', [Validators.required, Validators.email]),
    // })
  }

  updateSize(size: string) {
    this.pizzaSize = SIZES[parseInt(size)]
  }

  processOrder() {
    console.info(">>>>> order button ")
    console.info(">>>> form value", this.pizzaForm.value)
    this.router.navigate( [`order/${this.pizzaForm.value.email}`])
  }

  getDetails() {

    this.detailsForm = {
      name: this.pizzaForm.value.email,
      email: this.pizzaForm.value.email
    }

    console.info(">>>> get Details pressed", this.detailsForm)
    this.router.navigate( [`order/${this.detailsForm.email}`])
  }

}

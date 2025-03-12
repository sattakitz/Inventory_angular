import { Component } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../../shared/models/product.detail';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  imports: [NavbarComponent,
    ReactiveFormsModule,
    CommonModule

  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  production: ProductDetails[] = [];

  productForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
    this.productForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      sales: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.production = this.productService.getProductrations();

    this.productForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      sales: ['', Validators.required],
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      let production = this.productService.getProductions(id);

      if (production) this.productForm.patchValue(production);
    }


  }

  onSubmit() {
    if (this.productForm.valid) {
      let production: ProductDetails = this.productForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        // Update
        this.productService.updateProducttion(id, production);
      } else {
        // New
        this.productService.addProducttion(production);
      }

      this.router.navigate(['/product/']);
    }
  }
}

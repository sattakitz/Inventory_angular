import { Component, OnInit } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ProductDetails } from '../../shared/models/product.detail';


@Component({
  selector: 'app-product',
  imports: [
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {

  production: ProductDetails[] = [];

  productForm: FormGroup = new FormGroup({});

  selectedItem: ProductDetails | null = null;

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

      // this.router.navigate(['/product/']);
      this.closeModal();
      window.location.reload();
    }
  }

  deleteRegistration(id: string) {
    this.productService.deleteProductration(id);
  }

  isModalOpen: boolean = false;

  openEditModal(id: any): void {
    this.isModalOpen = true;
    
    this.selectedItem = id;

    this.productForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      sales: ['', Validators.required],
    });

    let edit = this.activatedRoute.snapshot.paramMap.get('id');

    if (edit) {
      let production = this.productService.getProductions(id);

      if (production) this.productForm.patchValue(production);
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // saveLocalStorage() {
  //   const Str = JSON.stringify({ id: 1, name: 'product_name', price: 100, quantity: 1 });
  //   localStorage.setItem('product', Str);
  // }

  // getLocalStorage() {
  //   const Object = JSON.parse(localStorage.getItem('product') || '{}');
  //   return Object;
  // }

  // deleteLocalStorage() {
  //   localStorage.removeItem('product');
  // }

  // ngOnInit(): void {
  //   console.log(this.getLocalStorage);
  // }

}

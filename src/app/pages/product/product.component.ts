import { Component, OnInit } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../../interfaces/product.detail';


@Component({
  selector: 'app-product',
  imports: [
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule
],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  isEditMode = false;

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
      id: '',
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      sales: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.production = this.productService.getProductrations();

    this.productForm = this.formBuilder.group({
      id: '',
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

      let id = this.activatedRoute.snapshot.paramMap.get('id') || this.productForm.value.id;

      if (id) {
        // Update Product
        this.productService.updateProducttion(id, production);
        this.closeModal();
        window.location.reload();
      } else {
        // New Product
        this.productService.addProducttion(production);
        this.closeModal();
        window.location.reload();
      }

      // this.router.navigate(['/product/']);
      // this.closeModal();
      // window.location.reload();
    }
  }

  deleteRegistration(id: string) {
    this.productService.deleteProductration(id);

  }

  isModalOpen: boolean = false;

  openEditModal(id: any): void {
    this.isEditMode = true;
    this.isModalOpen = true;
    let production = this.productService.getProductions(id);
    if (production) {
      this.productForm.patchValue(production);
      console.log(production);
    }

  }

  openModal() {
    this.isModalOpen = true;
    this.isEditMode = false;
  }

  closeModal() {
    this.isModalOpen = false;
    this.productForm.reset();
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

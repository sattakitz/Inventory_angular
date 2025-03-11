import { Injectable } from '@angular/core';
import { ProductDetails } from '../shared/models/product.detail';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private productDetails: ProductDetails[] = [];

    constructor() {
        let savedProductions = localStorage.getItem('product');
        this.productDetails = savedProductions
            ? JSON.parse(savedProductions)
            : [];
    }
    getProductrations(): ProductDetails[] {
        return this.productDetails;
    }

    getProductions(id: string): ProductDetails | undefined {
        return this.productDetails.find((res) => res.id === id);
    }

    addProducttion(reservation: ProductDetails): void {
        reservation.id = Date.now().toString();

        this.productDetails.push(reservation);
        localStorage.setItem('product', JSON.stringify(this.productDetails));
    }

    deleteProductration(id: string): void {
        let index = this.productDetails.findIndex((res) => res.id === id);
        this.productDetails.splice(index, 1);
        localStorage.setItem('product', JSON.stringify(this.productDetails));
    }

    updateProducttion(id: string, updatedReservation: ProductDetails): void {
        let index = this.productDetails.findIndex((res) => res.id === id);
        this.productDetails[index] = updatedReservation;
        localStorage.setItem('product', JSON.stringify(this.productDetails));
    }
}

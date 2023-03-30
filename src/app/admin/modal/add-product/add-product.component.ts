import { Component, inject, Inject, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreServicesService } from 'src/app/services/store-services.service';
import {MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm!: UntypedFormGroup;
  errorMessage!: string;
  durationInSeconds = 2;

  constructor(
    private storeService: StoreServicesService,
    private formBuilder: UntypedFormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { productId: string, productName: string }) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(5)]],
      productPrice: ['', [Validators.required, Validators.min(0)]],
      productFor: ['', [Validators.required, Validators.minLength(3)]],
      productType: ['', [Validators.required, Validators.minLength(3)]],
      productColor: ['', [Validators.required, Validators.minLength(3)]],
      productImagePath: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {

    const productFormValue: ProductForm = this.productForm.value;
    this.storeService.addProduct(productFormValue).subscribe(
      response => {
        if (response.status === 200) {
          this.openSnackBar({status:response.status, message:"Product added successfully"})
        }
        this.dialogRef.close(response.status)
      },
      error => {
        this.openSnackBar({status:500, message:"Error occured while adding the new product"})
      }
    );
  }

  openSnackBar(data:{status:number,message:string}) {
    this._snackBar.openFromComponent(ProductAddAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
      data: data
    });
  }

  //convenience getter for easy access to form fields
  get form(): { [key: string]: AbstractControl; } {
    return this.productForm.controls;
  }
}

interface ProductForm {
  productName: string;
  productPrice: number;
  productFor: string;
  productType: string;
  productColor: string;
  productImagePath: string;
}


@Component({
  selector: 'snack-bar-success',
  template: `
    <span class="{{data.status==200?'operation-success':'operation-error'}}" matSnackBarLabel>
      {{data.message}}
    </span>`,
  styles: [
    `
    :host {
      display: flex;
    }

    .operation-success {
      color: #5dce99;
    }
    .operation-error {
      color: #ff9999;
    }
  `,
  ],
})
export class ProductAddAnnotatedComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any){}
}

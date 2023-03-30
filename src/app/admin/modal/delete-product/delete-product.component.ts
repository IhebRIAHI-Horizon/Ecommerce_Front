import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { StoreServicesService } from 'src/app/services/store-services.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  durationInSeconds = 3;

  constructor(
    private storeService: StoreServicesService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {productId:number,productName:string}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSubmit() {

    this.storeService.deleteProduct(this.data.productId).subscribe(
      response => {
        if (response.status === 200) {
          this.openSnackBar({status:response.status, message:"Product deleted successfully"})
        }
        this.dialogRef.close(response.status)
      },
      error => {
        this.openSnackBar({status:500, message:"Error occured while deleting the product"})
      }
    );
  }

  openSnackBar(data:{status:number,message:string}) {
    this._snackBar.openFromComponent(ProductDeleteAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
      data: data
    });
  }

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
export class ProductDeleteAnnotatedComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any){}
}

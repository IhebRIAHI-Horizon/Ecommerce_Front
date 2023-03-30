import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { StoreServicesService } from 'src/app/services/store-services.service';

@Component({
  selector: 'app-delete-multiple-products',
  templateUrl: './delete-multiple-products.component.html',
  styleUrls: ['./delete-multiple-products.component.scss']
})
export class DeleteMultipleProductsComponent implements OnInit {

  durationInSeconds = 3;

  constructor(
    private storeService: StoreServicesService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteMultipleProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { productsList: number[] }) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  async onSubmit() {
    let selectedNumber = this.data.productsList.length;
    let deletedNumber = 0;
    for (let i = 0; i < selectedNumber; i++) {
      try {
        const response = await this.storeService.deleteProduct(this.data.productsList[i]).toPromise();
        if (response?.status === 200) {
          deletedNumber++;
        }
      } catch (error) {
        // Handle error here
      }
    }

    if (deletedNumber == selectedNumber) {
      this.openSnackBar({ status: 2, message: "All products are deleted successfully" });
      this.dialogRef.close("ALL");
    } else if (deletedNumber == 0) {
      this.openSnackBar({ status: 0, message: "An error occurred! No products deleted!!" });
      this.dialogRef.close("NONE");
    } else {
      this.openSnackBar({
        status: 1,
        message: "An error occurred! Some products are not deleted!! deleted:" + deletedNumber + " of " + selectedNumber
      });
      this.dialogRef.close("SOME");
    }
    
  }

  openSnackBar(data: { status: number, message: string }) {
    this._snackBar.openFromComponent(MultipleProductsDeleteAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
      data: data
    });
  }
}

@Component({
  selector: 'snack-bar-success',
  template: `
    <span class="{{data.status==2?'operation-success':(data.status==1?'operation-warn':'operation-error')}}" matSnackBarLabel>
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
    .operation-warn {
      color: #F9F254;
    }
  `,
  ],
})
export class MultipleProductsDeleteAnnotatedComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
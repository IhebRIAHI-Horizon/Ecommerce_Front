import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StoreServicesService } from 'src/app/services/store-services.service';
import { AddProductComponent } from '../../modal/add-product/add-product.component';
import { DeleteMultipleProductsComponent } from '../../modal/delete-multiple-products/delete-multiple-products.component';
import { DeleteProductComponent } from '../../modal/delete-product/delete-product.component';
import { EditProductComponent } from '../../modal/edit-product/edit-product.component';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent implements OnInit {

  store$!: Observable<any>;
  currentPage = 0;
  vetor: any;
  totalPages: number = 0;
  totalElements: number = 0;
  data!: { productId: string,productName: string };
  store:any;
  selectedProductsList: number[]=[]

  constructor(private storeService: StoreServicesService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      // Retrieve the query parameter value from the URL
      let page = Number(params.get('page'));
      this.currentPage = page;

      this.getProducts(page)

    });
  }

  getProducts(page: number) {

    this.store$ = this.storeService.getProducts(page).pipe(
      tap(response => {
        this.vetor = response.content;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      })
    );
  }


  range() {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.router.navigate(['/admin/products/manage'], { queryParams: { page: this.currentPage } });
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.router.navigate(['/admin/products/manage'], { queryParams: { page: this.currentPage } });
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  getCurrentUrl() {
    return "/admin/products/manage"
  }

  selectProducts(id:number){
    var element = <HTMLInputElement> document.getElementById(id.toString());
    if(element.checked && this.selectedProductsList.indexOf(id)==-1){
      this.selectedProductsList.push(id);
    }
    else{
      this.selectedProductsList.splice(this.selectedProductsList.indexOf(id),1)
    }
  }

  openDialogDeleteProduct(productId:number,productName:string): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '300px',
      data: {productId:productId, productName:productName }
    });
    
    dialogRef.afterClosed().subscribe(result=> {
      if(result==200){
        this.getProducts(this.currentPage)
      }
    })
  }

  openDialogDeleteMultipleProducts(): void {
    const dialogRef = this.dialog.open(DeleteMultipleProductsComponent, {
      width: '300px',
      data: {productsList: this.selectedProductsList }
    });
    
    dialogRef.afterClosed().subscribe(result=> {
      if(result){
        this.selectedProductsList=[]
        this.getProducts(this.currentPage)
      }
    })
  }

  openDialogEditProduct(productId:string): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '300px',
      data: {productId:productId }
    });
    
    dialogRef.afterClosed().subscribe(result=> {
      if(result==200){
        this.getProducts(this.currentPage)
      }
    })
  }
  

  openDialogAddProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '300px'
    });
    
    dialogRef.afterClosed().subscribe(result=> {
      if(result==200){
        this.getProducts(this.currentPage)
      }
    })
  }
  
}

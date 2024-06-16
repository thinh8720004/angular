import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Products, Product } from '../shared/models/product.model';
import { CatogoriesService } from '../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  categories: any = [];
  productsById: any = [];

  // hiển thị cattegory ở phần header
  // categories: any[]; = [
  //   {
  //     name: 'Laptops',
  //   },
  //   {
  //     name: 'Accessories',
  //   },
  //   {
  //     name: 'Điện tử',
  //   },
  // ];
  loading = false;
  productPageCounter = 1;
  additionalLoading = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private categoriesService : CatogoriesService
  ) {}

  public screenWidth: any;
  public screenHeight: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.loading = true;
    setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = res;
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }, 500);
// lấy tất cả các res từ localhost của categori
    this.categoriesService.listProduct().subscribe((res:any) => {
      // this.productsById = res;
      // console.log(this.productsById);
      console.log(res);
    })

    this.categoriesService.listCategories().subscribe((res:any) => {
      this.categories = res;
      console.log(this.categories);
    })


  }

  showMoreProducts(): void {
    this.additionalLoading = true;
    this.productPageCounter = this.productPageCounter + 1;
    setTimeout(() => {
      this.productService.getAllProducts(9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = [...this.products, ...res];
          this.additionalLoading = false;
        },
        (err) => {
          console.log(err);
          this.additionalLoading = false;
        }
      );
    }, 500);
  }
}

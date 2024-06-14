import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products, Product } from '../shared/models/product.model';
// import { localStorage } from '@angular/common';
import { ProductManagementComponentComponent } from '../product-management-component/product-management-component.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']

})

export class EditProductComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' };
  isEditing = false;
  selectedProduct: Product = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' };
  productPageCounter = 1;
  categories = [
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Laptop' },
  ];
  constructor(private productService: ProductService,
  ) { }

  ngOnInit(): void {
    const productString = localStorage.getItem('data');
    console.log(productString);
  if (productString) {
    this.products = JSON.parse(productString); // Parse into an object
    console.log(this.products)
    console.log(this.products)
  }
  }



  // Hàm thêm sản phẩm
  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(
      (res: Product) => {
        this.products.push(res); // Thêm sản phẩm vào danh sách
        this.newProduct = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' }; // Đặt lại form
        alert("Thêm sản phẩm thành công");
      
        window.location.reload();
      },
      (err) => {
        console.error("Lỗi khi thêm sản phẩm: ", err);
        alert("Thêm sản phẩm thành công");
       
        window.location.reload();

      }
    );
  }

  // Hàm bắt đầu chỉnh sửa sản phẩm
  editProduct(product: Product): void {
    this.selectedProduct = { ...product };
    console.log(this.selectedProduct); // In ra để kiểm tra giá trị
    this.isEditing  =true;
  }

  // Hàm cập nhật sản phẩm sau khi chỉnh sửa
  updateProduct(): void {
    this.productService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(
      (res: Product) => {
        const index = this.products.findIndex((p) => p.id === res.id);
        if (index !== -1) {
          this.products[index] = { ...res }; // Cập nhật sản phẩm trong danh sách
        }
        this.isEditing = false; // Kết thúc chỉnh sửa
        this.selectedProduct = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' };
        
        alert("Cập nhật sản phẩm thành công");
        window.location.reload();  


      },
      (err) => {
        console.error("Lỗi khi cập nhật sản phẩm: ", err);
        alert("Cập nhật sản phẩm thành công");
        
        window.location.reload();
      }
    );
  }

  // Hàm xóa sản phẩm
 
}

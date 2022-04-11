import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [

  {
    path: "admin", component: AdminComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "addproduct", component: AddProductComponent },
      { path: "addcategory", component: AddCategoryComponent },
      { path: "listproduct", component: ListProductComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

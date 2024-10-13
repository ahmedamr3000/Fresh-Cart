import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './Core/login.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./blank-layout/blank/blank.component').then(
        (m) => m.BlankComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./Components/home/home.component').then(
            (m) => m.HomeComponent
          ),
        title: 'home',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./Components/products/products.component').then(
            (m) => m.ProductsComponent
          ),
        title: 'home',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./Components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
        title: 'cart',
      },
      {
        path: 'checkout/:id',
        loadComponent: () =>
          import('./Components/checkout/checkout.component').then(
            (e) => e.CheckoutComponent
          ),
      },

      {
        path: 'brands',
        loadComponent: () =>
          import('./Components/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
        title: 'brands',
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./Components/wishlist/wishlist.component').then(
            (m) => m.WishlistComponent
          ),
        title: 'brands',
      },
      {
        path: 'categoryProducts/:id',
        loadComponent: () =>
          import(
            './Components/category-products/category-products.component'
          ).then((m) => m.CategoryProductsComponent),
        title: 'brands',
      },
      {
        path: 'categoris',
        loadComponent: () =>
          import('./Components/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
        title: 'categoris',
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./Components/detils/detils.component').then(
            (m) => m.DetilsComponent
          ),
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./Components/allorders/allorders.component').then(
            (m) => m.AllordersComponent
          ),
        title: 'categoris',
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./auth-layout/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./Components/login/login.component').then(
            (m) => m.LoginComponent
          ),
        title: 'login',
      },
      {
        path: 'regster',
        loadComponent: () =>
          import('./Components/regester/regester.component').then(
            (m) => m.RegesterComponent
          ),
        title: 'regester',
      },
      {
        path: 'forget',
        loadComponent: () =>
          import('./Components/forget/forget.component').then(
            (e) => e.ForgetpasswordComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Components/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';

import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: 'products', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'users', component: UserListComponent},
    {path: 'profile/:username', component: UserProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'authentication', component: AuthenticationComponent, data: {showNavbar: false}},
];

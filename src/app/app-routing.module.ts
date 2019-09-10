import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'user',
    loadChildren: () => import('src/app/pages/user/user.module').then(userMod => userMod.UserModule)
  }, {
    path: 'ticket',
    loadChildren: () => import('src/app/pages/ticket/ticket.module').then(ticketMod => ticketMod.TicketModule),
    canActivate: [AuthGuard]
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

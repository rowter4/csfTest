import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';

import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzaService } from './pizza.service';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './components/main.service';

const appPath: Routes = [
  {path: '', component: MainComponent},
  {path: 'orders/:email',component: OrdersComponent },
  {path: '**', redirectTo:'/', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appPath, {useHash : true}),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [ PizzaService, MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';

import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appPath: Routes = [
  {path: '', component: MainComponent},
  {path: 'order/:email',component: OrdersComponent },
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
    FormsModule
  ],

  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

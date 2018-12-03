import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ChangeOwnerComponent } from './change-owner/change-owner.component';
import { ChangeColorComponent } from './change-color/change-color.component';
import { SearchByOwnerComponent } from './search-by-owner/search-by-owner.component';
import { CarHistoryComponent } from './car-history/car-history.component';
import { WhoIsMeComponent } from './who-is-me/who-is-me.component';
import { BlockViewComponent } from './block-view/block-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SidebarComponent,
    AddCarComponent,
    ChangeOwnerComponent,
    ChangeColorComponent,
    SearchByOwnerComponent,
    CarHistoryComponent,
    WhoIsMeComponent,
    BlockViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import {AddCarComponent} from './add-car/add-car.component';
import {ChangeOwnerComponent} from './change-owner/change-owner.component';
import {ChangeColorComponent} from './change-color/change-color.component';
import {SearchByOwnerComponent} from './search-by-owner/search-by-owner.component';
import {CarHistoryComponent} from './car-history/car-history.component';
import {WhoIsMeComponent} from './who-is-me/who-is-me.component';
import {BlockViewComponent} from './block-view/block-view.component';
 
const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddCarComponent
  },
  {
    path: 'change-owner',
    component: ChangeOwnerComponent
  }
  ,
  {
    path: 'change-color',
    component: ChangeColorComponent
  }
  ,
  {
    path: 'search-by-owner',
    component: SearchByOwnerComponent
  }
  ,
  {
    path: 'car-history',
    component: CarHistoryComponent
  }
  ,
  {
    path: 'who-is-me',
    component: WhoIsMeComponent
  }
  ,
  {
    path: 'block-view',
    component: BlockViewComponent
  }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

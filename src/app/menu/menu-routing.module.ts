import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path:'meteo', loadChildren:()=> import('../meteo/meteo.module').then(m =>m.MeteoPageModule)
      },
      {
        path:'location', loadChildren:()=>import('../locations/locations.module').then(m=>m.LocationsPageModule)
      },
      {
        path:'gallery',loadChildren: () => import('../gallery/gallery.module').then( m =>m.GalleryPageModule)
      },
      {
        path: 'new-location',
        loadChildren: () => import('../new-location/new-location.module').then( m => m.NewLocationPageModule)
      },
      {
        path: 'location-details',
        loadChildren: () => import('../location-details/location-details.module').then( m => m.LocationDetailsPageModule)
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

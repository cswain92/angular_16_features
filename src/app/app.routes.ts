import { Routes } from "@angular/router";
import { SignalsComponent } from "./signals/signals.component";
import { homeResolver } from "./resolvers/home.resolver";
import { AsyncPipeComponent } from "./async-pipe/async-pipe.component";
import { BoxModelComponent } from "./box-model/box-model.component";
import { ParentComponent } from "./parent/parent.component";
import { ContentProjectionComponent } from "./content-projection/content-projection.component";


export const routes: Routes = [
  {
    path: 'signals',
    component: SignalsComponent,
    // resolve: {
    //   data: homeResolver
    // },
    // data: {resolvedata: 'signal page'}
  },
  {
    path: 'async-pipe',
    component: AsyncPipeComponent
  },
  {
    path: 'box-model',
    component: BoxModelComponent
  },
  {
    path: 'view-encapsulation',
    component: ParentComponent
  },
  {
    path: 'content-projection',
    component: ContentProjectionComponent
  }
];
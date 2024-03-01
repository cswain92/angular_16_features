import { Routes } from "@angular/router";
import { SignalsComponent } from "./signals/signals.component";
import { homeResolver } from "./resolvers/home.resolver";
import { AsyncPipeComponent } from "./async-pipe/async-pipe.component";
import { BoxModelComponent } from "./box-model/box-model.component";


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
    }
  ];
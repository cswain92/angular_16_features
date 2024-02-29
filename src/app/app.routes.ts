import { Routes } from "@angular/router";
import { SignalsComponent } from "./signals/signals.component";
import { homeResolver } from "./resolvers/home.resolver";


export const routes: Routes = [
    {
      path: 'signals',
      component: SignalsComponent,
      resolve: {
        data: homeResolver
      },
      // data: {resolvedata: 'signal page'}
    }
  ];
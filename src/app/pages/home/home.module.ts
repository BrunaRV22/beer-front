import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeResolverService } from './home-resolver.service';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          produtos: HomeResolverService
        }
      }
    ])
  ],
  declarations: [HomeComponent],
  providers: [HomeResolverService]
})
export class HomePageModule { }

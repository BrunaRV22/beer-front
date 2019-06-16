import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HomeResolverService } from './home-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        resolve: {
          produtos: HomeResolverService
        }
      }
    ])
  ],
  declarations: [HomePage],
  providers: [ HomeResolverService ]
})
export class HomePageModule {}

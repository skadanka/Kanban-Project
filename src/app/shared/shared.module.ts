import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShellComponent } from './shell/shell.component';


const components = [
                    ShellComponent,
                  ];

const modules = [ CommonModule,
                  RouterModule,
                  MatButtonModule,
                  MatButtonModule,
                  RouterModule,
                  MatToolbarModule,
                  MatIconModule,
                  LayoutModule,
                  MatSidenavModule,
                  MatListModule,
                  MatMenuModule,
                  MatCardModule,
                  MatFormFieldModule,
                  MatInputModule,
                  MatSnackBarModule,];

@NgModule({
  declarations: [...components],
  imports: [...modules  ],
  exports: [
    ...modules,
    ...components,
    ]
})
export class SharedModule { }

// Shell - for service side rendering 
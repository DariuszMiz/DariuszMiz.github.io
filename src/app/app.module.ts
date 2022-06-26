import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { PdfDialogComponent } from './projects/pdf-dialog/pdf-dialog.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ProjectsComponent,
    PdfDialogComponent,
  ],
  imports: [
    SidebarModule,
    BrowserModule,
    GalleriaModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    DynamicDialogModule,
    PdfViewerModule,
    DataViewModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}

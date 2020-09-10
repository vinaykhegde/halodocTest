import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ContentAreaComponent } from './content-area/content-area.component';
import { HeaderComponent } from './header/header.component';
import { GithubIssuesComponent } from './content-area/github-issues/github-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentAreaComponent,
    HeaderComponent,
    GithubIssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

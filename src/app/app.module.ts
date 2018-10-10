import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableModule } from 'ng-contenteditable';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { ExampleComponent } from './example/example.component';
@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    RadioComponent,
    SelectComponent,
    InputComponent,
    HomeComponent,
    ExampleComponent,
    // BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ContenteditableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

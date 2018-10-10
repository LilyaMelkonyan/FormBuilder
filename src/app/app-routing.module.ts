import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
    { path: 'question', component: InputComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'example',
        component: ExampleComponent,
        children: [
            {
                path: 'select',
                component: SelectComponent
            },
            {
                path: 'question',
                component: InputComponent
            },
        ]
    },
    {
        path: 'select',
        component: SelectComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }

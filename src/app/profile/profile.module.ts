import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { ProfileComponent } from './profile.component';
import { AvatarModule } from '../avatar/avatar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProfileComponent },
];

@NgModule({
    declarations: [
        ProfileComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MaterialUiModule,
        AvatarModule,
    ]
})
export class ProfileModule { }

import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    {path:"projects",component:ProjectsComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent}
];

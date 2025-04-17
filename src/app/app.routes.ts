import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { LearningComponent } from './pages/learning/learning.component';
import { BindingDataComponent } from './pages/binding-data/binding-data.component';
import { ComponentComponent } from './components/component.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { FormBasicComponent } from './pages/form-basic/form-basic.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductComponent },
    { path: 'learning', component: LearningComponent },
    { path: 'binding-data', component: BindingDataComponent },
    { path: 'component', component: ComponentComponent },
    { path: 'pipe', component: PipeComponent },
    { path: 'form-basic', component: FormBasicComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Changed forChild to forRoot
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { ChildActivationEnd, Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { AttributeDirectiveComponent } from './Components/attribute-directive/attribute-directive.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ControlFlowComponent } from './Components/control-flow/control-flow.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { FormsHomeComponent } from './Components/forms/forms-home/forms-home.component';
import { ReactiveFormsComponent } from './Components/forms/reactive-forms/reactive-forms.component';
import { TemplateFormComponent } from './Components/forms/template-form/template-form.component';
import { GetApiComponent } from './Components/api/get-api/get-api.component';
import { PostApiComponent } from './Components/api/post-api/post-api.component';
import { LifeCycleComponent } from './Components/life-cycle/life-cycle.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'structural-directives',
    component: DirectivesComponent,
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'forms',
    component: FormsHomeComponent,
    children: [
      {
        path: 'reactive',
        component: ReactiveFormsComponent,
      },
      {
        path: 'template',
        component: TemplateFormComponent,
      },
    ],
  },
  {
    path: 'http-api',
    children: [
      {
        path: '',
        redirectTo: 'get',
        pathMatch: 'full',
      },
      {
        path: 'get',
        component: GetApiComponent,
      },
      {
        path: 'post',
        component: PostApiComponent,
      },
    ],
  },
  {
    path: 'lifecyclehooks',
    component: LifeCycleComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules
} from "@angular/router";

const routes: Routes = [
  {
    path: "overview",
    loadChildren: "./overview/overview.module#OverviewModule"
  },
  {
    path: "experience",
    loadChildren: "./experience/experience.module#ExperienceModule"
  },
  {
    path:'education',
    loadChildren:'./education/education.module#EducationModule'
  },
  {
    path:'contact',
    loadChildren:'./contact/contact.module#ContactModule'
  },
  {
    path:'projects',
    loadChildren:'./projects/projects.module#ProjectsModule'
  },
  {
    path:'about',
    loadChildren:'./about/about.module#AboutModule'
  },
  {
    path:'volunteering',
    loadChildren:'./volunteering/volunteering.module#VolunteeringModule'
  },
  {
    path: "",
    redirectTo: "overview",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

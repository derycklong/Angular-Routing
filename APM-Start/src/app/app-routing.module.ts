import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WelcomeComponent } from './home/welcome.component'
import { PageErrorComponent } from './page-error.component'
import { PageNotFoundComponent } from './page-not-found.component'

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path:'welcome', component: WelcomeComponent},
            { path:'error', component:PageErrorComponent},
            { path:'', redirectTo:'welcome', pathMatch: 'full' },
            { path:'**', component:PageNotFoundComponent}
            ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { Router1Component } from './components/router1/router1.component';
import { Router2Component } from './components/router2/router2.component';
import { HookComponent } from './components/hook/hook.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HerosComponent } from './components/heros/heros.component';
import { HightlightComponent } from './components/hightlight/hightlight.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HttpTestComponent } from './components/http-test/http-test.component';
import { LoginComponent } from './components/login/login.component';
import { FilePathComponent } from './components/file-path/file-path.component';

const  appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full',
        data: {
            title: 'base route page'
        }
    }, {
        path: 'router1',
        component: Router1Component,
        data: { animation: 'hero' }
    }, {
        path: 'router2/:id/:type',
        component: Router2Component
    }, {
        path: 'hook',
        component: HookComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'file-path',
        component: FilePathComponent
    }, {
        path: 'highlight',
        loadChildren: './components/hightlight/hightlight.module#HightlightModule'
    }, {
        path: 'http-test',
        component: HttpTestComponent
    }, {
        path: 'heroes',
        component: HerosComponent,
        canActivate: [ AuthGuard ],
        data: {
            title: 'hero list',
            animation: 'heroes'
        },
        children: [
            {
                 path: 'hero-detail/:id/:name',
                // path: 'hero-detail',
                component: HeroDetailComponent,
            }
        ]
    }, {
        path: '**',                        // 404路由，适合放在最后
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes,
        //    { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [RouterModule]
})

export class RoutingModule { }

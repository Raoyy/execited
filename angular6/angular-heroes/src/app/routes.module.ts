import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { router1 } from './router1/router1' 
import { router2 } from './router2/router2'

const  appRoutes: Routes = [
    { 
        path: 'router1', 
        component: router1
    },{ 
        path: 'router2/:id', 
        component: router2 
    },{
        path: '',
        component: router1,
        data: { }
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes,
        //    { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations:[
        router1,
        router2
    ],
    exports: [RouterModule]
})

export class RoutingModule {}
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { HightlightComponent } from './hightlight.component';

const routes: Routes = [
    {
        path: '',                           // 此处使用'',默认路由
        component: HightlightComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HightlightRoutingModule {}

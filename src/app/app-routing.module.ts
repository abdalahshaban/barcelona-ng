import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { FormLayoutDemoComponent } from './demo/view/formlayoutdemo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MediaDemoComponent } from './demo/view/mediademo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    { path: '', component: DashboardDemoComponent },
                    {
                        path: 'plugin', children: [
                            { path: 'components/panels', component: PanelsDemoComponent },
                            { path: 'components/overlays', component: OverlaysDemoComponent },
                            { path: 'components/menus', component: MenusDemoComponent },
                            { path: 'components/messages', component: MessagesDemoComponent },
                            { path: 'components/misc', component: MiscDemoComponent },
                            { path: 'pages/empty', component: EmptyDemoComponent },
                            { path: 'components/charts', component: ChartsDemoComponent },
                            { path: 'components/file', component: FileDemoComponent },
                            { path: 'documentation', component: DocumentationComponent }
                        ]
                    },
                    {
                        path: 'user',
                        loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
                    },
                    {
                        path: '',
                        loadChildren: () => import('./modules/product-management/product-management.module').then(m => m.ProductManagementModule)
                    },
                    {
                        path: 'repair-requests',
                        loadChildren: () => import('./modules/repair-requests-management/repair-requests-management.module').then(m => m.RepairRequestsManagementModule)
                    },
                ]
            },
            { path: 'error', component: AppErrorComponent },
            { path: 'access', component: AppAccessdeniedComponent },
            { path: 'notfound', component: AppNotfoundComponent },
            { path: 'login', component: AppLoginComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

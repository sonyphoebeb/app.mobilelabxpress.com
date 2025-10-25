import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { AddPatient } from './pages/orders/add-patient/add-patient';
import { CaseInformation } from './pages/orders/case-information/case-information';
import { CreateNewOrder } from './pages/orders/create-new-order/create-new-order';
import { InsuranceInformation } from './pages/orders/insurance-information/insurance-information';
import { ManageOrders } from './pages/orders/manage-orders/manage-orders';
import { OrderInformation } from './pages/orders/order-information/order-information';
import { Preview } from './pages/orders/preview/preview';
import { Layout } from './layout/layout';

export const routes: Routes = [
    { path: 'login', component: Login },

    { path: 'layout', component: Layout, 
      children: [
        { path: 'manage-orders', component: ManageOrders },
        { path: 'add-patient', component: AddPatient },
        { path: 'create-new-order', component: CreateNewOrder },
        { path: 'case-information', component: CaseInformation },
        { path: 'order-information', component: OrderInformation },
        { path: 'insurance-information', component: InsuranceInformation },
        { path: 'preview', component: Preview }
      ]
    }
];

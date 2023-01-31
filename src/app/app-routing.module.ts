import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerDetailsComponent } from "./customer-list/customer-details/customer-details.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";


const routes: Routes = [
    {
        path: "customer-list",
        component: CustomerListComponent
    },
    {
        path:  "customer-list/:customer-id",
        component: CustomerDetailsComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
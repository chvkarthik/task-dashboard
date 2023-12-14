import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { RouterModule, Routes } from "@angular/router";
import { routing } from "../routing/routing";

const routes: Routes = [
    {path: '', component: LayoutComponent, children: routing}
]

@NgModule({
    declarations:[LayoutComponent],
    imports: [RouterModule.forChild(routes)]
})

export class LayoutModule{}
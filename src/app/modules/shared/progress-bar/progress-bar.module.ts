import { NgModule } from "@angular/core";
import { ProgressBarComponent } from "./progress-bar.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[ProgressBarComponent],
    imports: [CommonModule, FormsModule],
    exports:[ProgressBarComponent]
})

export class ProgressBarModule{}
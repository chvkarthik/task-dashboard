import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CustomModalComponent } from "./custom-modal.component";

@NgModule({
    declarations:[CustomModalComponent],
    imports: [CommonModule, FormsModule],
    exports:[CustomModalComponent]
})

export class CustomModalModule{}
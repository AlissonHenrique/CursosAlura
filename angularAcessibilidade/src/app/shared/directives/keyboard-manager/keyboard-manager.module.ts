import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";



import { keyboardMamagerDirective } from './keyboard-mamager.directive';
import { keyboardMamagedItemDirective } from "./keyboard-managed-item.directive";

@NgModule({
  imports: [CommonModule],
  exports: [keyboardMamagerDirective,keyboardMamagedItemDirective],
  declarations: [keyboardMamagerDirective,keyboardMamagedItemDirective],
  providers: [],
})
export class keyboardManagerModule { }

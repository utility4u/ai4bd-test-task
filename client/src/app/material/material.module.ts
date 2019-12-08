import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		Material.MatCardModule,
		Material.MatIconModule,
		Material.MatListModule,
		Material.MatButtonModule
	],
	exports: [ Material.MatCardModule, 
		Material.MatIconModule, 
		Material.MatListModule, 
		Material.MatButtonModule ]
})
export class MaterialModule {}

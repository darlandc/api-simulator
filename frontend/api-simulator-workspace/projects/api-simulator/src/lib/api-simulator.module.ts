import { NgModule } from '@angular/core';
import { ApiSimulatorComponent } from './api-simulator.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ApiSimulatorComponent],
  imports: [
    HttpClientModule
  ],
  exports: [ApiSimulatorComponent]
})
export class ApiSimulatorModule { }

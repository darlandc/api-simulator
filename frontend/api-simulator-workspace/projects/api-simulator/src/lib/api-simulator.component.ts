import { ApiSimulatorService } from './api-simulator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-api-simulator',
  template: `
    <p>
      api-simulator works!
    </p>
  `,
  styles: [
  ]
})
export class ApiSimulatorComponent implements OnInit {

  USER = {
    name: 'darlan'
  };

  constructor(private api: ApiSimulatorService) { }

  ngOnInit(): void {
    this.api.connect(this.USER);

  }

}

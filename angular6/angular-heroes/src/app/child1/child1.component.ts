import { Component, Input } from '@angular/core';

@Component({
  selector: 'child1-component',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class childComponent {
  @Input() hero: Object;
    
}

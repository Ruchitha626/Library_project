import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-re-use',
  templateUrl: './re-use.component.html',
  styleUrls: ['./re-use.component.css']
})
export class ReUseComponent {

  @Input() some: string = '';

}

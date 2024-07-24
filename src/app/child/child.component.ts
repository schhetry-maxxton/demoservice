import { Component,Input,OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // @Input() greetMessage!: string ;
  @Input() PData!: string;
  @Output() childEvent = new EventEmitter();
  constructor(){}
  onChange(value : any) {
    this.childEvent.emit(value);
  }
  ngOnInit(){}
}

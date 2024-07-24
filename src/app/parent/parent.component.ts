import { Component,Input,OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
// message : string = "I am Parent";
// childmessage : string = "I am passed from Parent to child component";
public CData!: string;
constructor() { }
ngOnInit() {}
}

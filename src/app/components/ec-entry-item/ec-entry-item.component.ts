import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ec-entry-item',
  templateUrl: './ec-entry-item.component.html',
  styleUrls: ['./ec-entry-item.component.css']
})
export class EcEntryItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() amount: number = 0;
  @Input() description: string = '';
  @Input() entryType: string = '';

  onEditClick() {
    console.log('Edit Button was Clicked!');
  }

}

import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[amountHighlight]',
})
export class amountHighlight implements OnInit {
  ngOnInit() {
    this.incomeBool = this.entryType === 'income';
    this.expenseBool = this.entryType === 'expense';
  }

  @Input() entryType = '';

  @HostBinding('class.amount-income') incomeBool = false;
  @HostBinding('class.amount-expense') expenseBool = false;
}

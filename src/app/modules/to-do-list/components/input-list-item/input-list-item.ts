import { Component, EventEmitter, Input, Output } from '@angular/core';

// Interface
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-item',
  imports: [],
  templateUrl: './input-list-item.html',
  styleUrl: './input-list-item.scss',
})
export class InputListItem {
  @Input({ required: true }) public inputListItems: IListItems[] = [];

  @Output() outputUpdateItemCheckbox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();
  public updateItemCheckbox(id: string, checked: boolean) {
    return this.outputUpdateItemCheckbox.emit({ id, checked });
  }

  @Output() outputUpdateItemText = new EventEmitter<{
    id: string;
    value: string;
  }>();
  public updateItemText(id: string, value: string) {
    return this.outputUpdateItemText.emit({ id, value });
  }

  @Output() outputDeleteItem = new EventEmitter<string>();
  public deleteItem(id: string) {
    return this.outputDeleteItem.emit(id);
  }
}

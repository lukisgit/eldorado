import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GAME } from '../../../constants/games';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-items-filter',
  templateUrl: './items-filter.component.html',
  styleUrls: ['./items-filter.component.scss'],
})
export class ItemsFilterComponent implements OnInit {
  @Input() game: { id: GAME; label: string };
  @Input() loading: boolean = true;
  @Input() initAttributes: boolean = false;
  @Input() attributes: any = null;

  @Output() onFilter: EventEmitter<{
    id: string;
    value: string;
  }> = new EventEmitter<{ id: string; value: string }>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onChange(id, event) {
    this.onFilter.emit({ id, value: event.target.value });
  }
}

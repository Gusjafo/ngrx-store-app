import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment} from 'src/app/counter/counter.actions';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {


  constructor(private store: Store) {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}

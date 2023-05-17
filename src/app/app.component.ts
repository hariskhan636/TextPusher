import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'text_pusher';

  itemForm!: FormGroup;
  data = '';
  array: any[] = [];
  count = 0;

  ngOnInit() {
    this.itemForm = new FormGroup({
      item: new FormControl('', [Validators.required]),
    });
  }

  pushText() {
    this.count++;
    this.array.push(this.data);
    this.data = '';
  }

  popText(i: number) {
    this.array.splice(i, 1);
    this.count--;
  }
}

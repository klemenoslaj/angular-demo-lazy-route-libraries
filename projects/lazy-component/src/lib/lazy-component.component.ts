import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lazy-component',
  template: `
    <p>
      lazy-component works!
    </p>
  `,
  styles: []
})
export class LazyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

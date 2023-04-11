import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css'],
})
export class SpinComponent implements OnInit {
  showInstructions = true;

  constructor(private router: Router) {}

  reverseInstruction() {
    this.showInstructions = false;
  }

  setStart() {
    this.router.navigateByUrl('spin/game');
  }

  ngOnInit(): void {}
}

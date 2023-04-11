import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catching',
  templateUrl: './catching.component.html',
  styleUrls: ['./catching.component.css'],
})
export class CatchingComponent implements OnInit {
  showInstructions = true;

  constructor(private router: Router) {}

  reverseInstruction() {
    this.showInstructions = false;
  }

  setStart() {
    this.router.navigateByUrl('catching/game');
  }

  ngOnInit(): void {}
}

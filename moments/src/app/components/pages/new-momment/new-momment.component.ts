import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-momment',
  templateUrl: './new-momment.component.html',
  styleUrls: ['./new-momment.component.scss']
})
export class NewMommentComponent implements OnInit {
  btnText = "Compartilhar!"
  constructor() { }

  ngOnInit(): void {
  }

}

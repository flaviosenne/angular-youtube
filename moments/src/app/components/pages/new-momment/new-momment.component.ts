import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-momment',
  templateUrl: './new-momment.component.html',
  styleUrls: ['./new-momment.component.scss']
})
export class NewMommentComponent implements OnInit {
  btnText = "Compartilhar!"
  
  constructor(
    private momentService: MomentService, 
    private messageService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append('title', moment.title)
    formData.append('description', moment.description)

    if(moment.image){
      formData.append('image', moment.image)
    }

    this.momentService.createMoment(formData).subscribe()

    this.messageService.add('Momento adicionado com sucesso!')

    this.router.navigate(['/'])


  }
}

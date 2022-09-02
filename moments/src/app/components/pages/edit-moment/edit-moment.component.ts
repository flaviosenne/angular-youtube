import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.scss']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment
  btnText: string = 'Edit'

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe(item => {
      const { data } = item
      this.moment = data
    })
  }

  editHandler(momentData: Moment) {
    const id = this.moment.id
    const formData = new FormData()

    formData.append('title', momentData.title)
    formData.append('description', momentData.description)

    if (momentData.image) {
      formData.append('image', momentData.image)
    }

    try {
      this.momentService.updateMoment(id!, formData).subscribe(_ => {
        this.messagesService.add(`momento ${id} foi atualizado com sucesso`)
        this.router.navigate(['/'])
      })
    } catch (error) {
      this.messagesService.add('Não foi possível editar esse momento')
      this.router.navigate(['/'])
    }
  }

}

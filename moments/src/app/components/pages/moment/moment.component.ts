import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Comments } from 'src/app/Comment';
import { Moment } from 'src/app/Moment';
import { CommentService } from 'src/app/services/comment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {
  moment?: Moment
  baseApiUrl = environment.baseApiUrl
  
  faTimes = faTimes
  faEdit = faEdit
  
  commentForm!: FormGroup

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe(item => this.moment = item.data)
    
    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    })


  }

  get text(){
    return this.commentForm.get('text')!
  }

  get username(){
    return this.commentForm.get('username')!
  }

  async removeHandler(id: number) {
    try{

      this.momentService.removeMoment(id).subscribe(_ => {
        this.messagesService.add('Momento excluido com sucesso')
        this.router.navigate(['/'])
      })
    }catch(error){
      this.messagesService.add('Não foi possível exluir esse momento')
      this.router.navigate(['/'])
    }


  }

  onSubmit(formDirective:FormGroupDirective){
    if(this.commentForm.invalid){
      return
    }

    const data: Comments = this.commentForm.value
    data.momentId = Number(this.moment!.id)

    this.commentService.createComment(data).subscribe(comment => {
      this.moment?.comments?.push(comment.data)

      this.messagesService.add(`Comentário adicionado`)
      
      // reset form
      this.commentForm.reset()
      formDirective.resetForm()
    })
  }
}

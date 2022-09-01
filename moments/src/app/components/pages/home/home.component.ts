import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = []
  moments: Moment[] = []
  baseAPiUrl = environment.baseApiUrl

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe(items => {
      const {data} = items

      data.map(item =>{
        item.created_at = new Date(item.created_at!).toLocaleTimeString('pt-BR')
      })
      
      this.allMoments = data
      this.moments = data
    })
  }

}

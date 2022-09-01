import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {
  moment?: Moment

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.momentService.getMoment(id).subscribe(item => this.moment = item.data)

  }

}

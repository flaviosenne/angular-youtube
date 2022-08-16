import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = []
  animalDetails = ''

  constructor(private service: ListService) {
      this.getAnimals()
   }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)`
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter(a => a.name !== animal.name)
    this.service.remove(animal.id).subscribe()
    // this.animals = this.service.remove(this.animals, animal)    
  }

  getAnimals(): void{
    this.service.getAll().subscribe(result => this.animals = result)
  }
}

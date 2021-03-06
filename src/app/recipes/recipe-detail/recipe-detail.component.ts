import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Input} from '@angular/core'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe : Recipe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

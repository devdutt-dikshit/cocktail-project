import { Component, OnInit } from '@angular/core';
import { GetwineService } from '../getwine.service';
import { Single_WineData } from '../wine';
@Component({
  selector: 'app-wineapp',
  templateUrl: './wineapp.component.html',
  styleUrls: ['./wineapp.component.css']
})
export class WineappComponent implements OnInit {
  detailedWine: any;
  ingredients : any[];
  public data = [];
  cname : string;
  filter: any;

  ingredientDetails : any[];

  constructor(private wineList: GetwineService) { }

  ngOnInit(): void {
    this.wineList.getWine().subscribe((data1: any[])=>{
      this.data =  data1['drinks'];
    })
  }

  search(x){
    if(x==""){
      this.ngOnInit()
    }else{
      this.wineList.SearchWine(x).subscribe(data => {
        this.data =  data['drinks'];
      });
    }
  }

  FetchData(id){
    this.wineList.SearchWineById(id).subscribe((data) => {
      this.detailedWine = data['drinks'];
      console.log(this.detailedWine)
      this.Ingredients(this.detailedWine[0])
    })
  }

  Ingredients(data){
    let x = Object.keys(data).filter(data => data.includes("Ingredient")).filter((i)=>{ if(data[i]){return data[i] }})
    this.ingredients = x.map((i) => {return data[i]});
  }

  checkSelect(x){
    if(x=="none"){
      this.ngOnInit()
    }else{
    this.wineList.Alcoholic(x).subscribe((data) => {
      this.data = data['drinks'];
    })}
  }
  IngredientModal(x){
    this.wineList.SearchIngredientByName(x).subscribe(data => {
      this.ingredientDetails =  data['ingredients'];
      console.log(data['ingredients'])
    });

  }
}

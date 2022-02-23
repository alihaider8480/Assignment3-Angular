import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  ngproductname:string = "";  // ya ngModel usr kia ha ya html ma bhi agar same name ho to wo khud bind karlata h
  ngquantity:number = 0;

  productsList =[
    {
      name: 'hp',
      quantity: 6
    },
    {
      name: 'dell',
      quantity: 2
    },
    {
      name: 'intell',
      quantity:3
    },
  ]

  constructor()
  {
    this.SecondProcutList = this.productsList;
   }

  ngOnInit(): void {
  }

  submitProduct(){
    this.productsList.push(
      {
        name:this.ngproductname,
        quantity:this.ngquantity
      });
  }

  SecondProcutList:any [] = this.productsList;

  searchPro(proName: any)
  {
         proName = proName.target.value;
        this.SecondProcutList = this.productsList.filter(
          (proNameFinal) =>{
            return proNameFinal.name.includes(proName);
          }
        );
  }
  editPopUp(first: string,second: string)
  {

  }
}

import { Component, OnInit } from '@angular/core';
import { AppService,Tester } from '../app.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-testers',
  templateUrl: './testers.component.html',
  styleUrls: ['./testers.component.css']
})

export class TestersComponent implements OnInit {
  testers:Tester[];
  testerName:string;
  isError:boolean=false;

  constructor(
    private httpService:AppService
  ) { }

  ngOnInit() {
    console.log("testers component onInit");   
    this.httpService.getAllTesters().subscribe(data => this.testers=data);
       
  }

  getTester(name:string){
    if(name==="all"){
      this.httpService.getAllTesters().subscribe(data => this.testers=data);
    }else{
      this.httpService.getTester(name).subscribe(data => this.testers=[data]);
    }
    
  }
  

}

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

  constructor(
    private httpService:AppService
  ) { }

  ngOnInit() {
    console.log("testers component onInit");   
    this.httpService.getAllTesters().subscribe(data => this.testers=data);

    
  }

  getTester(name:string){
    //this.httpService.getTester(name).subscribe(data => this.testers=[data]);
  }
  

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit{
  userData$: Observable<any> | undefined;

  constructor(private data:DataService){

  }
  ngOnInit(): void {
    this.userData$ = this.data.getData();
  }




}

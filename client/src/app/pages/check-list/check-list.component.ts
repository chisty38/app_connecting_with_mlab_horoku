import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  title: string;
  condition: string;

  masterSelected:boolean;
  checklist:any;
  checkedList:any;

  constructor(private route: ActivatedRoute) {

    this.masterSelected = false;
      this.checklist = [
        {id:1,value:'I am occasionally nauseated in the AM',isSelected:false},
        {id:2,value:'I feel dizzy or lightheaded at times.',isSelected:false},
        {id:3,value:'I feel anxiousness or anxiety',isSelected:false},
        {id:4,value:'I get frequent headaches or migraines',isSelected:false}
      ];
      //this.getCheckedItemList();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];

    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      {
        //this.checkedList.push(this.checklist[i].value);

        if(this.checklist[i].id == '1' || this.checklist[i].id == '2')
        {
          this.condition = 'It can be a cold. We advise you to visit your family doctor.';
          this.checkedList = JSON.stringify(this.condition);
        }
        else if (this.checklist[i].id == '3' || this.checklist[i].id == '4')
        {
          this.condition = 'It can be anxiety disorders. We advise you to visit your family doctor.';
          this.checkedList = JSON.stringify(this.condition);
        }
      }
    }

    //this.checkedList = JSON.stringify(this.checkedList, null, '\n');
  }

  ngOnInit() {
    this.title = "Self Check List";
  }
}

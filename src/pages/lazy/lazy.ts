import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

interface LookUpItem {
  id: number;
  parentId: number;
  name: string;
  children: LookUpItem[];
}

@IonicPage()
@Component({
  selector: 'page-lazy',
  templateUrl: 'lazy.html'
})
export class LazyLoadedPage {

  public form: FormGroup;
  public mySelectData: LookUpItem[];

  constructor(private formBuilder: FormBuilder) {
    this.form = null;
    this.mySelectData = [
      {
        id: 661,
        parentId: null,
        name: 'Firewall',
        children: []
      },
      {
        id: 249,
        parentId: null,
        name: 'Hardware',
        children: [
          {
            id: 298,
            parentId: 249,
            name: 'Desktop',
            children: []
          },
          {
            id: 747,
            parentId: 249,
            name: 'Vacuum cleaner',
            children: []
          },
          {
            id: 300,
            parentId: 249,
            name: 'Virtual',
            children: []
          }
        ]
      },
      {
        id: 745,
        parentId: null,
        name: 'Laptop',
        children: []
      },
      {
        id: 2482,
        parentId: null,
        name: 'Other',
        children: []
      },
      {
        id: 662,
        parentId: null,
        name: 'Printer',
        children: []
      },
      {
        id: 746,
        parentId: null,
        name: 'Server',
        children: []
      },
      {
        id: 663,
        parentId: null,
        name: 'Switch',
        children: []
      },
      {
        id: 2449,
        parentId: null,
        name: 'type123',
        children: []
      },
      {
        id: 744,
        parentId: null,
        name: 'Virtual Machine',
        children: []
      }
    ];
  }

  public ionViewDidLoad() {
    this.form = this.formBuilder.group({
      mySelect: [null]
    });
  }

}

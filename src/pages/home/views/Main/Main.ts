import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';

import { Tab1 } from './Views/tab-1/tab-1'
import { Tab2 } from './Views/tab-2/tab-2'
import { Tab3 } from './Views/tab-3/tab-3'

import {CategoriesServices} from '../../../Shared/categories/categories.service'

/*
  Generated class for the Main tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'Main.html'
})
export class Main {

  tab1Root: any = Tab1;
  tab2Root: any = Tab2;
  tab3Root: any = Tab3;

  tabsData:any = [];



  constructor(public navCtrl: NavController, private categoriesServices:CategoriesServices) {

    // this.tabsData = [
    //   {title:'Movies' , value: true },
    //   {title:'Music' , value: true },
    //   {title:'Sports' , value: true }
    // ];

    // this.tabsData = ['Movies','Music','Sports']

    // console.log( this.tabsData[0])

  }

  ngOnInit(){
    // this.categoriesServices.getTabs().then(data => {
    //    this.tabsData = data;
    //    console.log('tabtitles',this.tabsData)
    //  })
    this.tabsData = this.categoriesServices.getTabs();
    console.log('init one')
  }

}

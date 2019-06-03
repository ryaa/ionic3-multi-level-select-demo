import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyLoadedPage } from './lazy';

import { IonicMultiLevelSelectModule, MultiLevelSelectComponent, MultiLevelSelectDialogComponent } from 'ionic3-multi-level-select';

@NgModule({
  declarations: [
    LazyLoadedPage
  ],
  imports: [
    IonicPageModule.forChild(LazyLoadedPage),
    IonicMultiLevelSelectModule
  ],
  entryComponents: [
    MultiLevelSelectComponent,
    MultiLevelSelectDialogComponent,
    LazyLoadedPage
  ]
})
export class LazyLoadedPageModule {}
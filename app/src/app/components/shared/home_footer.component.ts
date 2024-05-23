// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home_footer',
  templateUrl: './home_footer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class home_footerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_AF8lhhmyqOMFCymo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AF8lhhmyqOMFCymo(bh) {
    try {
      bh = this.sd_fPLi930HWZQSny6s(bh);
      //appendnew_next_sd_AF8lhhmyqOMFCymo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AF8lhhmyqOMFCymo');
    }
  }

  //appendnew_flow_home_footerComponent_start

  sd_fPLi930HWZQSny6s(bh) {
    try {
      bh = this.sd_7gfjrecDpNKV8VUQ(bh);
      //appendnew_next_sd_fPLi930HWZQSny6s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fPLi930HWZQSny6s');
    }
  }

  sd_7gfjrecDpNKV8VUQ(bh) {
    try {
      const page = this.page;
      page.menuItems = [
        {
          image: '../../../assets/Web/Images/home.PNG',
          menuName: 'Home',
          routes: '/logged_in_landing/home',
        },
        {
          image: '../../../assets/Web/Images/card.jpg',
          menuName: 'Cards',
          routes: '/logged_in_landing/cards',
        },
        {
          image: '../../../assets/Web/Images/trans.jpg',
          menuName: 'Transact',
          routes: '/logged_in_landing/transact',
        },
        {
          image: '../../../assets/Web/Images/message.png',
          menuName: 'Messages',
          routes: '/logged_in_landing/messages',
        },
        {
          image: '../../../assets/Web/Images/explore.jpg',
          menuName: 'Explore',
          routes: '/logged_in_landing/explore',
        },
      ];
      //appendnew_next_sd_7gfjrecDpNKV8VUQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7gfjrecDpNKV8VUQ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_home_footerComponent_Catch
}

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
  selector: 'bh-sidenav',
  templateUrl: './sidenav.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sidenavComponent {
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
      this.sd_9zi3ynftUbaH5N6S(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9zi3ynftUbaH5N6S(bh) {
    try {
      bh = this.sd_o8U93aMFu8A74mwG(bh);
      //appendnew_next_sd_9zi3ynftUbaH5N6S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9zi3ynftUbaH5N6S');
    }
  }

  sidenavshow(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_DICsI6jwZThjABaz(bh);
      //appendnew_next_sidenavshow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r7O4zdl4qvAle9JE');
    }
  }
  //appendnew_flow_sidenavComponent_start

  sd_o8U93aMFu8A74mwG(bh) {
    try {
      this.page.name = undefined;
      this.page.sidenavOpen = true;
      bh = this.sd_pFk4BIOonAcaIknb(bh);
      //appendnew_next_sd_o8U93aMFu8A74mwG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o8U93aMFu8A74mwG');
    }
  }

  sd_pFk4BIOonAcaIknb(bh) {
    try {
      const page = this.page;
      page.name = 'angel';

      //appendnew_next_sd_pFk4BIOonAcaIknb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pFk4BIOonAcaIknb');
    }
  }

  sd_DICsI6jwZThjABaz(bh) {
    try {
      const page = this.page;
      page.sidenavOpen = false;
      //appendnew_next_sd_DICsI6jwZThjABaz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DICsI6jwZThjABaz');
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
  //appendnew_flow_sidenavComponent_Catch
}

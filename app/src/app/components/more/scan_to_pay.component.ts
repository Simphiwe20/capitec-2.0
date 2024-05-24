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
  selector: 'bh-scan_to_pay',
  templateUrl: './scan_to_pay.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class scan_to_payComponent {
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
      this.sd_3atS8q01zOCtM5Yg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3atS8q01zOCtM5Yg(bh) {
    try {
      bh = this.sd_tSQIFFsqjdZkMzg4(bh);
      //appendnew_next_sd_3atS8q01zOCtM5Yg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3atS8q01zOCtM5Yg');
    }
  }

  viewData(action: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action };
      bh.local = {};
      bh = this.sd_iDWBGrb7ZN7K6OJV(bh);
      //appendnew_next_viewData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rWyRUT8P5BOi0lE2');
    }
  }
  //appendnew_flow_scan_to_payComponent_start

  sd_tSQIFFsqjdZkMzg4(bh) {
    try {
      //appendnew_next_sd_tSQIFFsqjdZkMzg4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tSQIFFsqjdZkMzg4');
    }
  }

  sd_iDWBGrb7ZN7K6OJV(bh) {
    try {
      const page = this.page;
      const data = JSON.stringify(bh.input.action.data.value[0].value);
      const parsed = JSON.parse(data);
      console.log(JSON.parse(parsed));

      //appendnew_next_sd_iDWBGrb7ZN7K6OJV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iDWBGrb7ZN7K6OJV');
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
  //appendnew_flow_scan_to_payComponent_Catch
}
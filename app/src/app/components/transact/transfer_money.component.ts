// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-transfer_money',
  templateUrl: './transfer_money.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class transfer_moneyComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_9JJE1r6t5rU3CeIp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9JJE1r6t5rU3CeIp(bh) {
    try {
      bh = this.sd_HVeLHK8Jw8RAoyMc(bh);
      //appendnew_next_sd_9JJE1r6t5rU3CeIp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9JJE1r6t5rU3CeIp');
    }
  }

  //appendnew_flow_transfer_moneyComponent_start

  sd_HVeLHK8Jw8RAoyMc(bh) {
    try {
      //appendnew_next_sd_HVeLHK8Jw8RAoyMc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HVeLHK8Jw8RAoyMc');
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
  //appendnew_flow_transfer_moneyComponent_Catch
}

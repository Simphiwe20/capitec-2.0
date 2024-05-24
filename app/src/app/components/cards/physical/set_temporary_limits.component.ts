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
  selector: 'bh-set_temporary_limits',
  templateUrl: './set_temporary_limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class set_temporary_limitsComponent {
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
      this.sd_2YRXm4Tbe0pjaOyS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2YRXm4Tbe0pjaOyS(bh) {
    try {
      bh = this.sd_RAdaP8970VHkaTqq(bh);
      //appendnew_next_sd_2YRXm4Tbe0pjaOyS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2YRXm4Tbe0pjaOyS');
    }
  }

  sd_lrSazY4fn1uhibmj(el: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { el };
      bh.local = {};
      bh = this.sd_po2FqxldVy7WklLJ(bh);
      //appendnew_next_sd_lrSazY4fn1uhibmj
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lrSazY4fn1uhibmj');
    }
  }
  //appendnew_flow_set_temporary_limitsComponent_start

  sd_RAdaP8970VHkaTqq(bh) {
    try {
      //appendnew_next_sd_RAdaP8970VHkaTqq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RAdaP8970VHkaTqq');
    }
  }

  sd_po2FqxldVy7WklLJ(bh) {
    try {
      const page = this.page;
      console.log(bh.input.el);
      //appendnew_next_sd_po2FqxldVy7WklLJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_po2FqxldVy7WklLJ');
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
  //appendnew_flow_set_temporary_limitsComponent_Catch
}

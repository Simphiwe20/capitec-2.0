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
  selector: 'bh-Email',
  templateUrl: './Email.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class EmailComponent {
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
      this.sd_vySl4XHPSURg3BlS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_vySl4XHPSURg3BlS(bh) {
    try {
      bh = this.sd_bXamP2fsESvyedSq(bh);
      //appendnew_next_sd_vySl4XHPSURg3BlS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vySl4XHPSURg3BlS');
    }
  }

  //appendnew_flow_EmailComponent_start

  sd_bXamP2fsESvyedSq(bh) {
    try {
      //appendnew_next_sd_bXamP2fsESvyedSq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bXamP2fsESvyedSq');
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
  //appendnew_flow_EmailComponent_Catch
}

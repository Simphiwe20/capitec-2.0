// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm_reg_cancellation',
  templateUrl: './confirm_reg_cancellation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_reg_cancellationComponent {
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
      this.sd_snG1FzZXi7NCbxQn(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_snG1FzZXi7NCbxQn(bh) {
    try {
      bh = this.sd_V54YWIgpEtru80rZ(bh);
      //appendnew_next_sd_snG1FzZXi7NCbxQn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_snG1FzZXi7NCbxQn');
    }
  }

  routeToFtLanding(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_idM0DwSZNUNVC87o(bh);
      //appendnew_next_routeToFtLanding
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yNq1oj4Qi4UE0I4l');
    }
  }

  closeDialog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ilMyhbYdOPfQDDJP(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gGH0cnDL4raxvwb8');
    }
  }
  //appendnew_flow_confirm_reg_cancellationComponent_start

  sd_V54YWIgpEtru80rZ(bh) {
    try {
      //appendnew_next_sd_V54YWIgpEtru80rZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V54YWIgpEtru80rZ');
    }
  }

  async sd_idM0DwSZNUNVC87o(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ft-landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_idM0DwSZNUNVC87o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_idM0DwSZNUNVC87o');
    }
  }

  sd_ilMyhbYdOPfQDDJP(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.dialogData);

      //appendnew_next_sd_ilMyhbYdOPfQDDJP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ilMyhbYdOPfQDDJP');
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
  //appendnew_flow_confirm_reg_cancellationComponent_Catch
}

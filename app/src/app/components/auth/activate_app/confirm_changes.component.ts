// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm_changes',
  templateUrl: './confirm_changes.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_changesComponent {
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
      this.sd_X43hHusUCSh5EbP7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_X43hHusUCSh5EbP7(bh) {
    try {
      bh = this.sd_des0FFu4NxtWjAAB(bh);
      //appendnew_next_sd_X43hHusUCSh5EbP7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X43hHusUCSh5EbP7');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_SVLKP95u2L0OVGae(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0McrJnllRvRetsza');
    }
  }
  //appendnew_flow_confirm_changesComponent_start

  sd_des0FFu4NxtWjAAB(bh) {
    try {
      this.page.userInfor = undefined;
      this.page.submitted = undefined;
      this.page.userNewInfor = undefined;
      bh = this.sd_ZBGg6bNeb7u39JfW(bh);
      //appendnew_next_sd_des0FFu4NxtWjAAB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_des0FFu4NxtWjAAB');
    }
  }

  async sd_ZBGg6bNeb7u39JfW(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getInfor();
      this.page.user = outputVariables.local.userInfor;

      bh = this.sd_mHhEhFhJltePZkEK(bh);
      //appendnew_next_sd_ZBGg6bNeb7u39JfW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZBGg6bNeb7u39JfW');
    }
  }

  sd_mHhEhFhJltePZkEK(bh) {
    try {
      const page = this.page;
      page.userInfor = { confirmEmail: '' };
      console.log('New user:', page.user);

      page.userNewInfor = { email: '' };

      page.userNewInfor.email = page.user?.email ?? '';

      console.log('New user infor', page.userNewInfor);
      //appendnew_next_sd_mHhEhFhJltePZkEK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mHhEhFhJltePZkEK');
    }
  }

  sd_SVLKP95u2L0OVGae(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh = this.sd_4QrBukANe8g6ofL3(bh);
      //appendnew_next_sd_SVLKP95u2L0OVGae
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SVLKP95u2L0OVGae');
    }
  }

  async sd_4QrBukANe8g6ofL3(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_S52ewlgCKHXEjcgy(bh);
      } else {
        bh = await this.sd_DSXLckbHBWSHyC0F(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4QrBukANe8g6ofL3');
    }
  }

  sd_S52ewlgCKHXEjcgy(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.form.value.confirmEmail,
          this.page.userInfor.email,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_QrsYFOsROqJjxL94(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S52ewlgCKHXEjcgy');
    }
  }

  sd_QrsYFOsROqJjxL94(bh) {
    try {
      const page = this.page;
      console.log('Form: ', bh.input.form);
      //appendnew_next_sd_QrsYFOsROqJjxL94
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QrsYFOsROqJjxL94');
    }
  }

  sd_DSXLckbHBWSHyC0F(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please enter confirm email', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_DSXLckbHBWSHyC0F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DSXLckbHBWSHyC0F');
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
  //appendnew_flow_confirm_changesComponent_Catch
}

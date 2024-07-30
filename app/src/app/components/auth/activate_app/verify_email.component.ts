// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { confirmComponent } from 'app/components/PopUps/confirm.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-verify_email',
  templateUrl: './verify_email.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verify_emailComponent {
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
      this.sd_PLQUkX067fLebPjG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PLQUkX067fLebPjG(bh) {
    try {
      bh = this.sd_vzXLdEOjnxmFKYqo(bh);
      //appendnew_next_sd_PLQUkX067fLebPjG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PLQUkX067fLebPjG');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9qgYdQ1491Nzjino(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lOsNMFLjdQnNb3Bx');
    }
  }

  verify(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ZGMYuC6WCzpatvrr(bh);
      //appendnew_next_verify
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tAvudP61oYFU5bTr');
    }
  }
  //appendnew_flow_verify_emailComponent_start

  sd_vzXLdEOjnxmFKYqo(bh) {
    try {
      this.page.isEmailVerified = undefined;
      bh = this.sd_Q1bzDYK8egIYJuEn(bh);
      //appendnew_next_sd_vzXLdEOjnxmFKYqo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vzXLdEOjnxmFKYqo');
    }
  }

  sd_Q1bzDYK8egIYJuEn(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_kB4rch7Mo3gK5bez(bh);
      //appendnew_next_sd_Q1bzDYK8egIYJuEn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q1bzDYK8egIYJuEn');
    }
  }

  async sd_kB4rch7Mo3gK5bez(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getCustomers();
      this.page.users = outputVariables.local.customers;

      bh = this.sd_6RcsMyNZBztM90lv(bh);
      //appendnew_next_sd_kB4rch7Mo3gK5bez
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kB4rch7Mo3gK5bez');
    }
  }

  sd_6RcsMyNZBztM90lv(bh) {
    try {
      const page = this.page;
      page.user = page.users.find((user) => user.email == page.user.email);

      console.log('User: ', page.user);

      page.isEmailVerified = page.user.isEmailVerified;
      //appendnew_next_sd_6RcsMyNZBztM90lv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6RcsMyNZBztM90lv');
    }
  }

  async sd_9qgYdQ1491Nzjino(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_9qgYdQ1491Nzjino
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qgYdQ1491Nzjino');
    }
  }

  sd_ZGMYuC6WCzpatvrr(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_x3xiBXMBHrkyRIQB(bh);
      //appendnew_next_sd_ZGMYuC6WCzpatvrr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZGMYuC6WCzpatvrr');
    }
  }

  sd_x3xiBXMBHrkyRIQB(bh) {
    try {
      const page = this.page;
      bh.msg = {
        _type: 'Verificatiion Sent',
        msg: 'A verification code has been sent to the supplied email address. Once received, please enter the code or tap cancel to enter it later.',
        placeholder: 'Enter code',
        verify: true,
      };

      bh.code = Math.floor(Math.random() * 90000) + 10000;

      bh.body = {
        email: page.user.email,
        code: bh.code,
      };

      bh.url = page.ssdURL + 'send-code';
      bh = this.sd_gCiCuzqoK1gQZFHr(bh);
      //appendnew_next_sd_x3xiBXMBHrkyRIQB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x3xiBXMBHrkyRIQB');
    }
  }

  async sd_gCiCuzqoK1gQZFHr(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_HVwHBU0HE7uYxDDs(bh);
      this.sd_HSoHucpetnF5Etob(bh);
      //appendnew_next_sd_gCiCuzqoK1gQZFHr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gCiCuzqoK1gQZFHr');
    }
  }

  async sd_HVwHBU0HE7uYxDDs(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.setCode(bh.code);

      bh = this.sd_QhRd2xVq2BIFecAP(bh);
      //appendnew_next_sd_HVwHBU0HE7uYxDDs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HVwHBU0HE7uYxDDs');
    }
  }

  sd_QhRd2xVq2BIFecAP(bh) {
    try {
      const confirmDialog = this.__page_injector__.get(MatDialog);
      const confirmDialogRef = confirmDialog.open(confirmComponent, {
        data: bh.msg,
      });
      confirmDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_EakgprLpSPflN4om(bh);
        this.sd_ElRZbsmjoNUpO5Xe(bh);

        //appendnew_next_sd_QhRd2xVq2BIFecAP;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QhRd2xVq2BIFecAP');
    }
  }

  sd_EakgprLpSPflN4om(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Your email address was sucessfully verified', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_EakgprLpSPflN4om
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EakgprLpSPflN4om');
    }
  }

  sd_ElRZbsmjoNUpO5Xe(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'update';

      page.user.isEmailVerified = true;

      page.isEmailVerified = true;
      bh = this.sd_uoSyfCzLtpYlM9zz(bh);
      //appendnew_next_sd_ElRZbsmjoNUpO5Xe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ElRZbsmjoNUpO5Xe');
    }
  }

  async sd_uoSyfCzLtpYlM9zz(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.user,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      this.sd_vW7FerdH2SVC42lN(bh);
      //appendnew_next_sd_uoSyfCzLtpYlM9zz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uoSyfCzLtpYlM9zz');
    }
  }

  sd_vW7FerdH2SVC42lN(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.res);
      //appendnew_next_sd_vW7FerdH2SVC42lN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vW7FerdH2SVC42lN');
    }
  }

  sd_HSoHucpetnF5Etob(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.res);
      //appendnew_next_sd_HSoHucpetnF5Etob
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HSoHucpetnF5Etob');
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
  //appendnew_flow_verify_emailComponent_Catch
}

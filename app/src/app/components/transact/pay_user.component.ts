// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pay_user',
  templateUrl: './pay_user.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pay_userComponent {
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
      this.sd_ALDaNOXxkNjfA91l(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ALDaNOXxkNjfA91l(bh) {
    try {
      bh = this.sd_6osKV4KRTsH0Agg3(bh);
      //appendnew_next_sd_ALDaNOXxkNjfA91l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ALDaNOXxkNjfA91l');
    }
  }

  pay(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_4fDLnHQZIgXLTS7J(bh);
      //appendnew_next_pay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0QzAQMQjTp1C0EK7');
    }
  }
  //appendnew_flow_pay_userComponent_start

  sd_6osKV4KRTsH0Agg3(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_OKwdCJYrfyWRgvA7(bh);
      //appendnew_next_sd_6osKV4KRTsH0Agg3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6osKV4KRTsH0Agg3');
    }
  }

  sd_OKwdCJYrfyWRgvA7(bh) {
    try {
      this.page.routeData = undefined;
      this.page.ben = undefined;
      this.page.userInitials = undefined;
      this.page.payBen = undefined;
      this.page.submitted = false;
      bh = this.sd_CbCTCOV3O1UM5x2j(bh);
      //appendnew_next_sd_OKwdCJYrfyWRgvA7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OKwdCJYrfyWRgvA7');
    }
  }

  sd_CbCTCOV3O1UM5x2j(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.routeData = route.snapshot.queryParams;
      bh = this.sd_ywZo8242QsO12AYj(bh);
      //appendnew_next_sd_CbCTCOV3O1UM5x2j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CbCTCOV3O1UM5x2j');
    }
  }

  sd_ywZo8242QsO12AYj(bh) {
    try {
      const page = this.page;
      page.routeData = JSON.parse(page.routeData.routeData);

      console.log(page.routeData);
      bh = this.sd_V7AX2BRuCDIKb4po(bh);
      //appendnew_next_sd_ywZo8242QsO12AYj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywZo8242QsO12AYj');
    }
  }

  sd_V7AX2BRuCDIKb4po(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_7fJfR7xvigVTc3aS(bh);
      //appendnew_next_sd_V7AX2BRuCDIKb4po
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V7AX2BRuCDIKb4po');
    }
  }

  async sd_7fJfR7xvigVTc3aS(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getCustomers();
      bh.customers = outputVariables.local.customers;

      bh = this.sd_OxBOEpd1QeA4Gj9w(bh);
      //appendnew_next_sd_7fJfR7xvigVTc3aS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7fJfR7xvigVTc3aS');
    }
  }

  sd_OxBOEpd1QeA4Gj9w(bh) {
    try {
      const page = this.page;
      page.ben = bh.customers.find(
        (cus: any) => cus.contacts == page.routeData.benNumber
      );

      // Ben initials
      page.benInitials = `${page.ben.fullName.split(' ')[0][0]} ${
        page.ben.fullName.split(' ')[page.ben.fullName.split(' ').length - 1]
      }`;
      bh.benInitials = `${page.ben.fullName.split(' ')[0][0]} ${
        page.ben.fullName.split(' ')[page.ben.fullName.split(' ').length - 1]
      }`;
      console.log(page.ben);
      console.log(bh.benInitials);

      // User Inintials
      page.userInitials = `${page.user.fullName.split(' ')[0][0]} ${
        page.user.fullName.split(' ')[page.user.fullName.split(' ').length - 1]
      }`;

      page.payBen = {
        amount: '',
        paymentType: '',
        benRef: page.userInitials,
        statement: page.routeData.benName,
        transDate: new Date(),
        moneyType: 'moneyOut',
        transType: 'Digital Payment',
      };

      page.available_balance =
        Math.round(page.user['available balance'] * 100) / 100;

      console.log(page.available_balance);
      //appendnew_next_sd_OxBOEpd1QeA4Gj9w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OxBOEpd1QeA4Gj9w');
    }
  }

  sd_4fDLnHQZIgXLTS7J(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_ICO37wevYxw0tp87(bh);
      //appendnew_next_sd_4fDLnHQZIgXLTS7J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4fDLnHQZIgXLTS7J');
    }
  }

  sd_ICO37wevYxw0tp87(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_oCSE1xDw0kw75STp(bh);
      } else if (
        this.sdService.operators['false'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_dG520SOVEstSWTi0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ICO37wevYxw0tp87');
    }
  }

  sd_oCSE1xDw0kw75STp(bh) {
    try {
      const page = this.page;
      bh.balance = page.user['available balance'];
      bh.amount = Number(page.payBen.amount);
      console.log(typeof bh.amount);
      bh = this.sd_n8kdlSinOYLmhTW5(bh);
      //appendnew_next_sd_oCSE1xDw0kw75STp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oCSE1xDw0kw75STp');
    }
  }

  async sd_n8kdlSinOYLmhTW5(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          bh.amount,
          bh.balance,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ixm6rE3WTUbtW0hD(bh);
      } else {
        bh = await this.sd_pOQZLnOArFJ2If7e(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8kdlSinOYLmhTW5');
    }
  }

  sd_ixm6rE3WTUbtW0hD(bh) {
    try {
      const page = this.page;
      page.user['available balance'] = bh.balance - bh.amount;
      page.routeData = {
        routeData: JSON.stringify(page.routeData),
        _type: 'payment',
      };

      bh.url = page.ssdURL + 'pay-ben';
      bh = this.sd_kfwazcU6m6nQlbym(bh);
      //appendnew_next_sd_ixm6rE3WTUbtW0hD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ixm6rE3WTUbtW0hD');
    }
  }

  sd_kfwazcU6m6nQlbym(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(this.page.user));
      bh = this.sd_BKdzjdEhB7d9iC94(bh);
      //appendnew_next_sd_kfwazcU6m6nQlbym
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kfwazcU6m6nQlbym');
    }
  }

  async sd_BKdzjdEhB7d9iC94(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.payBen,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_HrCtVmrSucrmYJy3(bh);
      //appendnew_next_sd_BKdzjdEhB7d9iC94
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BKdzjdEhB7d9iC94');
    }
  }

  async sd_HrCtVmrSucrmYJy3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_HrCtVmrSucrmYJy3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HrCtVmrSucrmYJy3');
    }
  }

  sd_pOQZLnOArFJ2If7e(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("You can't buy above your balance", 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_pOQZLnOArFJ2If7e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pOQZLnOArFJ2If7e');
    }
  }

  sd_dG520SOVEstSWTi0(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All required field should be filled', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_dG520SOVEstSWTi0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dG520SOVEstSWTi0');
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
  //appendnew_flow_pay_userComponent_Catch
}

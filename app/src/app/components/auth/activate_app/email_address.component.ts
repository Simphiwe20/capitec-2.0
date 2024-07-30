// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { confirmComponent } from 'app/components/PopUps/confirm.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-email_address',
  templateUrl: './email_address.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class email_addressComponent {
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
      this.sd_jdrtFv0BL017qkbX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jdrtFv0BL017qkbX(bh) {
    try {
      bh = this.sd_m35PA5ZgPCIx9jOd(bh);
      //appendnew_next_sd_jdrtFv0BL017qkbX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jdrtFv0BL017qkbX');
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
      bh = this.sd_6FAab10u2XuGCd4L(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J73Ih0YGaVYCLKEP');
    }
  }

  verify(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_9IVfv0NVL5lUwmQj(bh);
      //appendnew_next_verify
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wfgtj7xjaO7LtRzt');
    }
  }
  //appendnew_flow_email_addressComponent_start

  sd_m35PA5ZgPCIx9jOd(bh) {
    try {
      this.page.emails = undefined;
      this.page.localStorage = undefined;
      bh = this.sd_c1gppj4K16JqHoKF(bh);
      //appendnew_next_sd_m35PA5ZgPCIx9jOd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m35PA5ZgPCIx9jOd');
    }
  }

  sd_c1gppj4K16JqHoKF(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_QYbpYiiBrMoiTYzx(bh);
      //appendnew_next_sd_c1gppj4K16JqHoKF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c1gppj4K16JqHoKF');
    }
  }

  async sd_QYbpYiiBrMoiTYzx(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getCustomers();
      this.page.users = outputVariables.local.customers;

      bh = this.sd_wJKA2oiPQJNQbXo9(bh);
      //appendnew_next_sd_QYbpYiiBrMoiTYzx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QYbpYiiBrMoiTYzx');
    }
  }

  sd_wJKA2oiPQJNQbXo9(bh) {
    try {
      const page = this.page;
      page.localStorage = page.user;

      page.user = page.users.find((user) => user.email == page.user.email);

      page.emails = { email: page.user.email, confirmEmail: page.user.email };

      console.log('User: ', page.localStorage);

      page.isEmailVerified = page.user.isEmailVerified;
      //appendnew_next_sd_wJKA2oiPQJNQbXo9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wJKA2oiPQJNQbXo9');
    }
  }

  async sd_6FAab10u2XuGCd4L(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_6FAab10u2XuGCd4L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6FAab10u2XuGCd4L');
    }
  }

  async sd_9IVfv0NVL5lUwmQj(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_mbMJJx88F7T7OmDk(bh);
      } else {
        bh = await this.sd_E7iw4eWWGeOBSf15(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9IVfv0NVL5lUwmQj');
    }
  }

  async sd_mbMJJx88F7T7OmDk(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.input.form.value.email,
          bh.input.form.value.confirmEmail,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4noCfEpBcFkthBlU(bh);
      } else {
        bh = await this.sd_tGDhZKrk9EAKR7VO(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mbMJJx88F7T7OmDk');
    }
  }

  sd_4noCfEpBcFkthBlU(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_lzOZoV39wb5gnGet(bh);
      //appendnew_next_sd_4noCfEpBcFkthBlU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4noCfEpBcFkthBlU');
    }
  }

  sd_lzOZoV39wb5gnGet(bh) {
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
        email: bh.input.form.value.email,
        code: bh.code,
      };

      bh.url = page.ssdURL + 'send-code';
      bh = this.sd_dcf4XlcxaLaRKVZ8(bh);
      //appendnew_next_sd_lzOZoV39wb5gnGet
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzOZoV39wb5gnGet');
    }
  }

  async sd_dcf4XlcxaLaRKVZ8(bh) {
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
      bh = this.sd_6obITYeaj7vE6eil(bh);
      this.sd_1Pk0wwjav60kYvRl(bh);
      //appendnew_next_sd_dcf4XlcxaLaRKVZ8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dcf4XlcxaLaRKVZ8');
    }
  }

  async sd_6obITYeaj7vE6eil(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.setCode(bh.code);

      bh = this.sd_l2E7qkE3FwgxITh1(bh);
      //appendnew_next_sd_6obITYeaj7vE6eil
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6obITYeaj7vE6eil');
    }
  }

  sd_l2E7qkE3FwgxITh1(bh) {
    try {
      const confirmDialog = this.__page_injector__.get(MatDialog);
      const confirmDialogRef = confirmDialog.open(confirmComponent, {
        data: bh.msg,
      });
      confirmDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_iQjpCi4MV8snQcxH(bh);
        this.sd_7FwQBnbXkbDeMOHY(bh);

        //appendnew_next_sd_l2E7qkE3FwgxITh1;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l2E7qkE3FwgxITh1');
    }
  }

  sd_iQjpCi4MV8snQcxH(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Email address was updated successfuly', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_iQjpCi4MV8snQcxH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iQjpCi4MV8snQcxH');
    }
  }

  sd_7FwQBnbXkbDeMOHY(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'update';

      console.log('User: ', page.localStorage);

      page.isEmailVerified = true;

      page.user.isEmailVerified = page.isEmailVerified;
      page.user.email = bh.input.form.value.email;

      page.localStorage.email = bh.input.form.value.email;

      console.log('Updatted User: ', page.user);
      bh = this.sd_m8ouTbMOYseKJPFd(bh);
      //appendnew_next_sd_7FwQBnbXkbDeMOHY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7FwQBnbXkbDeMOHY');
    }
  }

  sd_m8ouTbMOYseKJPFd(bh) {
    try {
      localStorage.setItem('accNo', JSON.stringify(this.page.localStorage));
      bh = this.sd_0x70Mjb84xODJM4r(bh);
      //appendnew_next_sd_m8ouTbMOYseKJPFd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m8ouTbMOYseKJPFd');
    }
  }

  async sd_0x70Mjb84xODJM4r(bh) {
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
      this.sd_vqrrs5HzwBlN3s6h(bh);
      //appendnew_next_sd_0x70Mjb84xODJM4r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0x70Mjb84xODJM4r');
    }
  }

  sd_vqrrs5HzwBlN3s6h(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.res);
      //appendnew_next_sd_vqrrs5HzwBlN3s6h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vqrrs5HzwBlN3s6h');
    }
  }

  sd_1Pk0wwjav60kYvRl(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.res);
      //appendnew_next_sd_1Pk0wwjav60kYvRl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Pk0wwjav60kYvRl');
    }
  }

  sd_tGDhZKrk9EAKR7VO(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      bh = this.sd_OPZeC1VJNCzbiGPN(bh);
      //appendnew_next_sd_tGDhZKrk9EAKR7VO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tGDhZKrk9EAKR7VO');
    }
  }

  sd_OPZeC1VJNCzbiGPN(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Email addresses are not the same', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_OPZeC1VJNCzbiGPN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OPZeC1VJNCzbiGPN');
    }
  }

  sd_E7iw4eWWGeOBSf15(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Both fields are required', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_E7iw4eWWGeOBSf15
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E7iw4eWWGeOBSf15');
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
  //appendnew_flow_email_addressComponent_Catch
}

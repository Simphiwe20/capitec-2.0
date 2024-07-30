// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { confirmComponent } from 'app/components/PopUps/confirm.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ele',
  templateUrl: './ele.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class eleComponent {
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
      this.sd_ElqLfE5Vukot2Pk2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ElqLfE5Vukot2Pk2(bh) {
    try {
      bh = this.sd_RPawcl3sEzQynRMA(bh);
      //appendnew_next_sd_ElqLfE5Vukot2Pk2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ElqLfE5Vukot2Pk2');
    }
  }

  buyElectric(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_sxOBl0AtYhmgk6mN(bh);
      //appendnew_next_buyElectric
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tnr87i7sU5qGDib3');
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
      bh = this.sd_AyMc23F67a8WKcop(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NIZ8zwFrjb4BY8vH');
    }
  }

  confirm(data: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data };
      bh.local = {};
      bh = this.sd_SaOLcjqAktmjC0G8(bh);
      //appendnew_next_confirm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sz19sywiSfRuBM0p');
    }
  }
  //appendnew_flow_eleComponent_start

  sd_RPawcl3sEzQynRMA(bh) {
    try {
      this.page.selected = undefined;
      this.page.electricForm = undefined;
      this.page.user = undefined;
      this.page.submitted = false;
      this.page.bal = undefined;
      this.page.routeData = undefined;
      this.page.message = undefined;
      bh = this.sd_Ypckas6FBahls4ox(bh);
      //appendnew_next_sd_RPawcl3sEzQynRMA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RPawcl3sEzQynRMA');
    }
  }

  sd_Ypckas6FBahls4ox(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_OPniTi0PYFf4XAOT(bh);
      //appendnew_next_sd_Ypckas6FBahls4ox
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ypckas6FBahls4ox');
    }
  }

  sd_OPniTi0PYFf4XAOT(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-customers';

      bh = this.sd_DEKJM31bAxWyDYzd(bh);
      //appendnew_next_sd_OPniTi0PYFf4XAOT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OPniTi0PYFf4XAOT');
    }
  }

  sd_DEKJM31bAxWyDYzd(bh) {
    try {
      this.page.selected = JSON.parse(sessionStorage.getItem('electricBen'));
      bh = this.sd_70nSj10BiaGC5l6z(bh);
      //appendnew_next_sd_DEKJM31bAxWyDYzd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DEKJM31bAxWyDYzd');
    }
  }

  sd_70nSj10BiaGC5l6z(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_qDYMyCcxde1rQisC(bh);
      //appendnew_next_sd_70nSj10BiaGC5l6z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_70nSj10BiaGC5l6z');
    }
  }

  async sd_qDYMyCcxde1rQisC(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_qPS2ENof2zGBzHSC(bh);
      //appendnew_next_sd_qDYMyCcxde1rQisC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qDYMyCcxde1rQisC');
    }
  }

  sd_qPS2ENof2zGBzHSC(bh) {
    try {
      const page = this.page;
      page.electricForm = {
        amount: '',
        to: page.selected.meterNumber,
        belongsTo: page.user.accountNumber,
        transDate: new Date(),
        transType: 'Electricity',
        benName: page.selected.benName,
        moneyType: 'moneyOut',
      };

      // console.log("balance ==>" ,page.user)
      console.log(page.user);
      page.user = page.res.find(
        (user) => page.user.accountNumber == user.accountNumber
      );
      console.log('user ==>', page.user);

      //appendnew_next_sd_qPS2ENof2zGBzHSC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qPS2ENof2zGBzHSC');
    }
  }

  sd_sxOBl0AtYhmgk6mN(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      if (page.user['available_balance']) {
        page.bal = page.user['available_balance'];
      } else {
        page.bal = page.user['available_balance'];
      }
      console.log(typeof page.bal);
      console.log(typeof page.electricForm.amount);
      bh = this.sd_HD6foY1u8TCHdcnM(bh);
      //appendnew_next_sd_sxOBl0AtYhmgk6mN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sxOBl0AtYhmgk6mN');
    }
  }

  async sd_HD6foY1u8TCHdcnM(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_sQgOOel4slHYkaZb(bh);
      } else {
        bh = await this.sd_idUGsFe7vL7ZiTaQ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HD6foY1u8TCHdcnM');
    }
  }

  sd_sQgOOel4slHYkaZb(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_qk0uDfeytHrhDCxl(bh);
      //appendnew_next_sd_sQgOOel4slHYkaZb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sQgOOel4slHYkaZb');
    }
  }

  async sd_qk0uDfeytHrhDCxl(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.bal,
          this.page.electricForm.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Zjl8aFu13LJgM18S(bh);
      } else {
        bh = await this.sd_fv7jO6zLohdWjKpz(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qk0uDfeytHrhDCxl');
    }
  }

  sd_Zjl8aFu13LJgM18S(bh) {
    try {
      const page = this.page;
      bh.confirm = {
        _type: 'Buy Electricity',
        msg: `Enter a Remote Pin to buy electricity for ${page.electricForm.benName}`,
      };
      bh = this.sd_fdOydRg5NNpYNqbP(bh);
      //appendnew_next_sd_Zjl8aFu13LJgM18S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zjl8aFu13LJgM18S');
    }
  }

  sd_fdOydRg5NNpYNqbP(bh) {
    try {
      let outputVariables = this.confirm(bh.confirm);

      //appendnew_next_sd_fdOydRg5NNpYNqbP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fdOydRg5NNpYNqbP');
    }
  }

  sd_fv7jO6zLohdWjKpz(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("ELECTRICITY AMOUNT CAN'T BE MORE THAN CURRENT BALANCE", 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      this.sd_YaWxql2wWodOZKT2(bh);
      this.sd_HQyu3iYXMDoOpTv9(bh);
      //appendnew_next_sd_fv7jO6zLohdWjKpz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fv7jO6zLohdWjKpz');
    }
  }

  sd_YaWxql2wWodOZKT2(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.bal);
      //appendnew_next_sd_YaWxql2wWodOZKT2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YaWxql2wWodOZKT2');
    }
  }

  sd_HQyu3iYXMDoOpTv9(bh) {
    try {
      console.log(
        new Date().toLocaleTimeString(),
        this.page.electricForm.amount
      );
      //appendnew_next_sd_HQyu3iYXMDoOpTv9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HQyu3iYXMDoOpTv9');
    }
  }

  sd_idUGsFe7vL7ZiTaQ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('INVALID FIELDS', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_idUGsFe7vL7ZiTaQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_idUGsFe7vL7ZiTaQ');
    }
  }

  async sd_AyMc23F67a8WKcop(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_AyMc23F67a8WKcop
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AyMc23F67a8WKcop');
    }
  }

  sd_SaOLcjqAktmjC0G8(bh) {
    try {
      const confirmDialog = this.__page_injector__.get(MatDialog);
      const confirmDialogRef = confirmDialog.open(confirmComponent, {
        data: bh.input.data,
      });
      confirmDialogRef.afterClosed().subscribe((event) => {
        this.page.result = event;
        this.sd_W7PwuRSH9qwOphs4(bh);

        //appendnew_next_sd_SaOLcjqAktmjC0G8;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SaOLcjqAktmjC0G8');
    }
  }

  sd_W7PwuRSH9qwOphs4(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Vgvi2AvZVgiYX833(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W7PwuRSH9qwOphs4');
    }
  }

  sd_Vgvi2AvZVgiYX833(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'buy-electricity';
      bh.update = page.ssdUrl + 'update';
      bh.newUser = page.ssdUrl + 'find-one-user';
      bh.difference = page.user['available_balance'] - page.electricForm.amount;

      bh.userEmail = {
        collection: 'users',
      };

      // bh.body = {
      //     email: page.user.email,
      //     available_balance: bh.difference
      // }

      page.user.available_balance = bh.difference;

      bh.date = page.electricForm.transDate.toDateString();
      bh.date = bh.date.split(' ');
      bh.date = `${bh.date[1]} ${bh.date[2]} ${bh.date[3]}`;

      page.message = `Capitec: Payment -R${page.electricForm.amount} from Savings Ref; ${page.electricForm.transType}. Avail R${bh.difference}; ${bh.date}.info: 082 123 1234`;
      page.message = {
        message: page.message,
        read: false,
        _type: 'Electricity purchased',
        belongsTo: page.electricForm.belongsTo,
      };

      console.log(page.message);

      page.routeData = {
        routeData: JSON.stringify(page.electricForm),
        _type: 'ele',
      };
      bh = this.sd_SrdMyvwztgWJWcgK(bh);
      //appendnew_next_sd_Vgvi2AvZVgiYX833
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vgvi2AvZVgiYX833');
    }
  }

  async sd_SrdMyvwztgWJWcgK(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.addTransMessage(
        this.page.message
      );

      bh = this.sd_aPveZ9xF3QZiAwgu(bh);
      //appendnew_next_sd_SrdMyvwztgWJWcgK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SrdMyvwztgWJWcgK');
    }
  }

  async sd_aPveZ9xF3QZiAwgu(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.updateUser(
        this.page.user
      );

      bh = this.sd_U91veNvpxJUkTSvo(bh);
      //appendnew_next_sd_aPveZ9xF3QZiAwgu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aPveZ9xF3QZiAwgu');
    }
  }

  async sd_U91veNvpxJUkTSvo(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.electricForm,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_QWMqxzjtfICsCdxS(bh);
      //appendnew_next_sd_U91veNvpxJUkTSvo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U91veNvpxJUkTSvo');
    }
  }

  async sd_QWMqxzjtfICsCdxS(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_QWMqxzjtfICsCdxS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QWMqxzjtfICsCdxS');
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
  //appendnew_flow_eleComponent_Catch
}

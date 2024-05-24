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
  selector: 'bh-medium_card',
  templateUrl: './medium_card.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class medium_cardComponent {
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
      this.sd_zH9yRGJhq9fOVEcJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zH9yRGJhq9fOVEcJ(bh) {
    try {
      bh = this.sd_TqDatvZrTQgXaayj(bh);
      //appendnew_next_sd_zH9yRGJhq9fOVEcJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zH9yRGJhq9fOVEcJ');
    }
  }

  //appendnew_flow_medium_cardComponent_start

  sd_TqDatvZrTQgXaayj(bh) {
    try {
      this.page.cardsInfor = undefined;
      bh = this.sd_W30lVBTItkzfqGjd(bh);
      //appendnew_next_sd_TqDatvZrTQgXaayj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TqDatvZrTQgXaayj');
    }
  }

  sd_W30lVBTItkzfqGjd(bh) {
    try {
      this.page.cardsInfor = JSON.parse(localStorage.getItem('myFav'));
      bh = this.sd_dwviufaEUSxef65M(bh);
      //appendnew_next_sd_W30lVBTItkzfqGjd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W30lVBTItkzfqGjd');
    }
  }

  sd_dwviufaEUSxef65M(bh) {
    try {
      const page = this.page;
      let card = { cards: [] };
      let cards = [];
      page.cardsInfor = page.cardsInfor?.forEach((_card: any, i: number) => {
        if (card.cards.length <= 2) {
          card.cards.push(_card);
        }
        console.log(
          '2 lengths conditions',
          card.cards.length == 1 && page.cardsInfor.length - 1 == i
        );
        console.log('length condition', card.cards.length == 1);
        if (
          (card.cards.length == 1 && page.cardsInfor.length - 1 == i) ||
          card.cards.length == 2
        ) {
          cards.push(card);
          card = { cards: [] };
        }
        // if()
        // if(page.cardsInfor[i+1]){
        //    cards.push({
        //        "cards" : [].push(_card)
        //    })
        // }else{
        //     cards.push({
        //        "cards" : [].push(_card)
        //    })
        // }
      });

      console.log(cards);

      page.cardsInfor = cards;
      //appendnew_next_sd_dwviufaEUSxef65M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dwviufaEUSxef65M');
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
  //appendnew_flow_medium_cardComponent_Catch
}

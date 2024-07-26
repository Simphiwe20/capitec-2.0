// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { jsPDF } from 'jspdf'; //_splitter_
import * as autoTable from 'jspdf-autotable'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pdf_statement',
  templateUrl: './pdf_statement.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pdf_statementComponent {
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
      this.sd_fN2cljXF7vQz5034(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fN2cljXF7vQz5034(bh) {
    try {
      bh = this.sd_KyrwwlxmBEBQOZup(bh);
      //appendnew_next_sd_fN2cljXF7vQz5034
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fN2cljXF7vQz5034');
    }
  }

  generatePdf(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4OZE4Mm6Z29wsmzq(bh);
      //appendnew_next_generatePdf
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bSckPQsAgq3f4ATW');
    }
  }

  base64ToBlob(base64: any = undefined, fileType = '', ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { base64, fileType };
      bh.local = { blob: undefined };
      bh = this.sd_bAYD6IimXJbSvNNF(bh);
      //appendnew_next_base64ToBlob
      return bh.local.blob;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XJnxDMHRWusvPnOG');
    }
  }
  //appendnew_flow_pdf_statementComponent_start

  sd_KyrwwlxmBEBQOZup(bh) {
    try {
      this.page.sanitizer = this.__page_injector__.get(DomSanitizer);
      bh = this.sd_OfFL6vbANAbsE1wY(bh);
      //appendnew_next_sd_KyrwwlxmBEBQOZup
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KyrwwlxmBEBQOZup');
    }
  }

  sd_OfFL6vbANAbsE1wY(bh) {
    try {
      bh = this.sd_rlJlqniaGe1hXtAL(bh);
      //appendnew_next_sd_OfFL6vbANAbsE1wY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OfFL6vbANAbsE1wY');
    }
  }

  sd_rlJlqniaGe1hXtAL(bh) {
    try {
      this.page.jspdf = jsPDF;
      bh = this.sd_1xKnTij9d6QXmSVi(bh);
      //appendnew_next_sd_rlJlqniaGe1hXtAL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rlJlqniaGe1hXtAL');
    }
  }

  sd_1xKnTij9d6QXmSVi(bh) {
    try {
      this.page.autoTable = autoTable;
      bh = this.sd_4tFEyJDQ2TGNjp4P(bh);
      //appendnew_next_sd_1xKnTij9d6QXmSVi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1xKnTij9d6QXmSVi');
    }
  }

  sd_4tFEyJDQ2TGNjp4P(bh) {
    try {
      this.page.options = undefined;
      this.page.jsPDF = undefined;
      this.page.str = this.page.safeURL;
      bh = this.sd_3AUw8tEtnFy3klkh(bh);
      //appendnew_next_sd_4tFEyJDQ2TGNjp4P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4tFEyJDQ2TGNjp4P');
    }
  }

  sd_3AUw8tEtnFy3klkh(bh) {
    try {
      const page = this.page;
      page.options = [
        { name: 'Last 1 month' },
        { name: 'Last 3 month' },
        { name: 'Last 6 month' },
        { name: 'Last 12 month' },
        { name: 'Choose date range', range: 'Up to 3 years' },
      ];

      // page.str= new SafeResourceUrl

      console.log(page.sanitizer);
      console.log(page.str);

      // let w = window.open('', '_blank')
      // console.log('Window: ', w)

      page.jsPDF = new page.jspdf();

      console.log('PDF', page.jsPDF);
      // let autoTable: autoTable
      // console.log('Table: ', page.autoTable)
      // console.log('Table: ', autoTable)

      bh = this.sd_ZPHKZioxvW4PM1yX(bh);
      //appendnew_next_sd_3AUw8tEtnFy3klkh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3AUw8tEtnFy3klkh');
    }
  }

  sd_ZPHKZioxvW4PM1yX(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_Y3EKPFLYHc8oNt5u(bh);
      //appendnew_next_sd_ZPHKZioxvW4PM1yX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZPHKZioxvW4PM1yX');
    }
  }

  sd_Y3EKPFLYHc8oNt5u(bh) {
    try {
      const page = this.page; // Add content to the PDF.
      page.jsPDF.setFontSize(16);
      page.jsPDF.text('Savings Account Statement', 10, 10);
      page.jsPDF.setFontSize(12);
      page.jsPDF.text(`${page.user.fullName}`, 10, 20);

      let capitecLogo = new Image();
      capitecLogo.src = '../../../assets/Web/Images/capitec-l.png';
      page.jsPDF.addImage(capitecLogo, 'PNG', 130, 1, 70, 20);

      // Create a table using `jspdf-autotable`.
      const headers = [
        [
          'Transaction Date',
          'Description',
          'Money In(R)',
          'Money Out(R)',
          'Balance(R)',
        ],
      ];
      const data = [
        [new Date().toDateString(), 'Preapaid aitime', '200', '', '200'],
        [new Date().toDateString(), 'Payment made', '', '- 200', '0.50'],
        // ...
      ];

      // console.log('autoTable: ', page.jsPDF.autoTable)
      console.log('jsPDF: ', page.jsPDF);

      console.log('Autotable in jsPDF: ', page.jsPDF.autoTable);

      page.jsPDF.autoTable({
        head: headers,
        body: data,
        startY: 30, // Adjust the `startY` position as needed.
      });

      let str = page.jsPDF.output('datauristring');

      // page.str = "<embed width='100%' height='100%' src='" + str + "'/>"

      page.str = page.jsPDF.output('datauristring');
      // page.str = str

      // const blob = this.base64ToBlob(page.str, 'application/pdf');
      // page.str = URL.createObjectURL(blob);

      page.str = page.sanitizer.bypassSecurityTrustResourceUrl(page.str);
      console.log('Blob: ', page.str);
      // var embed = "<embed width='100%' height='100%' src='" + str + "'/>"

      // console.log(embed)
      // console.log(window)
      // let win = window.open('', '_blank').document.write(embed);
      // let w = window.open('', '_blank');
      // console.log('Win: ', win)
      // win.document.open();

      // win.document.write(embed);
      // win.document.close()
      //appendnew_next_sd_Y3EKPFLYHc8oNt5u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y3EKPFLYHc8oNt5u');
    }
  }

  sd_4OZE4Mm6Z29wsmzq(bh) {
    try {
      const page = this.page; // Add content to the PDF.
      page.jsPDF.setFontSize(16);
      page.jsPDF.text('Savings Account Statement', 10, 10);
      page.jsPDF.setFontSize(12);
      page.jsPDF.text(`${page.user.fullName}`, 10, 20);

      let capitecLogo = new Image();
      capitecLogo.src = '../../../assets/Web/Images/capitec-l.png';
      page.jsPDF.addImage(capitecLogo, 'PNG', 130, 1, 70, 20);

      // Create a table using `jspdf-autotable`.
      const headers = [
        [
          'Posting Date',
          'Transaction Date',
          'Description',
          'Money In(R)',
          'Money Out(R)',
          'Balance(R)',
        ],
      ];
      const data = [
        [
          new Date().toDateString(),
          new Date().toDateString(),
          'Sweden',
          '200',
          '',
          '200',
        ],
        [
          new Date().toDateString(),
          new Date().toDateString(),
          'Spain',
          '',
          '- 200',
          '0.50',
        ],
        // ...
      ];

      // console.log('autoTable: ', page.jsPDF.autoTable)
      console.log('jsPDF: ', page.jsPDF);

      console.log('Autotable in jsPDF: ', page.jsPDF.autoTable);

      page.jsPDF.autoTable({
        head: headers,
        body: data,
        startY: 30, // Adjust the `startY` position as needed.
      });

      var str = page.jsPDF.output('datauristring');

      var embed = "<embed width='100%' height='100%' src='" + str + "'/>";

      console.log(embed);
      console.log(window);
      let win = window.open('', '_blank').document.write(embed);
      // let w = window.open('', '_blank');
      console.log('Win: ', win);
      // win.document.open();

      // win.document.write(embed);
      // win.document.close()
      //appendnew_next_sd_4OZE4Mm6Z29wsmzq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4OZE4Mm6Z29wsmzq');
    }
  }

  sd_bAYD6IimXJbSvNNF(bh) {
    try {
      const page = this.page;
      const byteCharacters = atob(bh.input.base64.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      // let _type: Blob = bh.input.fileType

      console.log('byteNumbers: ', byteNumbers);
      console.log('byteCharacters: ', byteCharacters);

      // bh.blob = new Blob([byteArray], { _type });
      //appendnew_next_sd_bAYD6IimXJbSvNNF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bAYD6IimXJbSvNNF');
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
  //appendnew_flow_pdf_statementComponent_Catch
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-api-test-api-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/api-test/api-test.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/api-test/api-test.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Api Test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"getExampleData()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    getExampleData\n  </ion-button>\n  <ion-button (click)=\"getExampleDataToProm()\" expand=\"full\" fill=\"clear\" shape=\"round\">\n    getExampleDataToProm\n  </ion-button>\n  <ion-button (click)=\"getBouchonData()\" color=\"secondary\" expand=\"full\" fill=\"clear\" shape=\"round\">\n    getBouchonData\n  </ion-button>\n  <ion-button (click)=\"data=''\" color=\"danger\" expand=\"full\">\n    Reset\n  </ion-button>\n  \n  <ion-item>\n    <ion-textarea [(ngModel)]=\"data\" placeholder=\"En attente de data...\"></ion-textarea>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/api-test/api-test-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/api-test/api-test-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ApiTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTestPageRoutingModule", function() { return ApiTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-test.page */ "./src/app/pages/api-test/api-test.page.ts");




const routes = [
    {
        path: '',
        component: _api_test_page__WEBPACK_IMPORTED_MODULE_3__["ApiTestPage"]
    }
];
let ApiTestPageRoutingModule = class ApiTestPageRoutingModule {
};
ApiTestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApiTestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/api-test/api-test.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/api-test/api-test.module.ts ***!
  \***************************************************/
/*! exports provided: ApiTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTestPageModule", function() { return ApiTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _api_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-test-routing.module */ "./src/app/pages/api-test/api-test-routing.module.ts");
/* harmony import */ var _api_test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-test.page */ "./src/app/pages/api-test/api-test.page.ts");







let ApiTestPageModule = class ApiTestPageModule {
};
ApiTestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _api_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApiTestPageRoutingModule"]
        ],
        declarations: [_api_test_page__WEBPACK_IMPORTED_MODULE_6__["ApiTestPage"]]
    })
], ApiTestPageModule);



/***/ }),

/***/ "./src/app/pages/api-test/api-test.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/api-test/api-test.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwaS10ZXN0L2FwaS10ZXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/api-test/api-test.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/api-test/api-test.page.ts ***!
  \*************************************************/
/*! exports provided: ApiTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTestPage", function() { return ApiTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_http_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/http-data.service */ "./src/app/providers/http-data.service.ts");




let ApiTestPage = class ApiTestPage {
    constructor(httpData, loadingController) {
        this.httpData = httpData;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        console.log('OnInit');
    }
    createLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Patientez...'
            });
            yield this.loading.present();
        });
    }
    /**
     * Appel d'un observable (attente d'un flux)
     * Ne pas oulbier de le unsuscribe en quittant la page
     */
    getExampleData() {
        this.createLoading();
        this.httpSus$ = this.httpData.getDataExample().subscribe(res => {
            this.data = JSON.stringify(res);
        }, err => console.error('HTTP Error', err), () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('HTTP request completed.');
            yield this.loading.dismiss();
        }));
    }
    /**
     * Appel d'un observable qui ne renvoit qu'une donnée => on peut le convertir en Promise et utiliser await
     */
    getExampleDataToProm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.createLoading();
            try {
                this.data = JSON.stringify(yield this.httpData.getDataExample().toPromise());
            }
            catch (err) {
                console.error('HTTP Error', err);
            }
            finally {
                console.log('HTTP request completed.');
                yield this.loading.dismiss();
            }
        });
    }
    /**
     * Utilisation d'un bouchon, aucune gestion d'erreur
     */
    getBouchonData() {
        this.createLoading();
        setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.data = JSON.stringify(yield this.httpData.getBouchonData().toPromise());
            yield this.loading.dismiss();
        }), 1000);
    }
    /**
     * Détruire les suscribes en cours avant de quitter
     */
    ngOnDestroy() {
        if (this.httpSus$) {
            console.log('unsubscribe : OK');
            this.httpSus$.unsubscribe();
        }
    }
};
ApiTestPage.ctorParameters = () => [
    { type: _providers_http_data_service__WEBPACK_IMPORTED_MODULE_3__["HttpDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ApiTestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-api-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api-test.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/api-test/api-test.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api-test.page.scss */ "./src/app/pages/api-test/api-test.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_http_data_service__WEBPACK_IMPORTED_MODULE_3__["HttpDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ApiTestPage);



/***/ }),

/***/ "./src/app/providers/http-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/http-data.service.ts ***!
  \************************************************/
/*! exports provided: HttpDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDataService", function() { return HttpDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpDataService = class HttpDataService {
    constructor(http) {
        this.http = http;
    }
    getDataExample() {
        return this.http.get('https://r7.bo.yoxam.com/api/login?email=dr&password=admin');
    }
    getBouchonData() {
        return this.http.get('../assets/data/data.json');
    }
};
HttpDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HttpDataService);



/***/ })

}]);
//# sourceMappingURL=pages-api-test-api-test-module-es2015.js.map
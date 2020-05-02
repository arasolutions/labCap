function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-api-test-api-test-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/api-test/api-test.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/api-test/api-test.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesApiTestApiTestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Api Test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"getExampleData()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    getExampleData\n  </ion-button>\n  <ion-button (click)=\"getExampleDataToProm()\" expand=\"full\" fill=\"clear\" shape=\"round\">\n    getExampleDataToProm\n  </ion-button>\n  <ion-button (click)=\"getBouchonData()\" color=\"secondary\" expand=\"full\" fill=\"clear\" shape=\"round\">\n    getBouchonData\n  </ion-button>\n  <ion-button (click)=\"data=''\" color=\"danger\" expand=\"full\">\n    Reset\n  </ion-button>\n  \n  <ion-item>\n    <ion-textarea [(ngModel)]=\"data\" placeholder=\"En attente de data...\"></ion-textarea>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/api-test/api-test-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/api-test/api-test-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ApiTestPageRoutingModule */

  /***/
  function srcAppPagesApiTestApiTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiTestPageRoutingModule", function () {
      return ApiTestPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api-test.page */
    "./src/app/pages/api-test/api-test.page.ts");

    var routes = [{
      path: '',
      component: _api_test_page__WEBPACK_IMPORTED_MODULE_3__["ApiTestPage"]
    }];

    var ApiTestPageRoutingModule = function ApiTestPageRoutingModule() {
      _classCallCheck(this, ApiTestPageRoutingModule);
    };

    ApiTestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ApiTestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/api-test/api-test.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/api-test/api-test.module.ts ***!
    \***************************************************/

  /*! exports provided: ApiTestPageModule */

  /***/
  function srcAppPagesApiTestApiTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiTestPageModule", function () {
      return ApiTestPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _api_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./api-test-routing.module */
    "./src/app/pages/api-test/api-test-routing.module.ts");
    /* harmony import */


    var _api_test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./api-test.page */
    "./src/app/pages/api-test/api-test.page.ts");

    var ApiTestPageModule = function ApiTestPageModule() {
      _classCallCheck(this, ApiTestPageModule);
    };

    ApiTestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _api_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApiTestPageRoutingModule"]],
      declarations: [_api_test_page__WEBPACK_IMPORTED_MODULE_6__["ApiTestPage"]]
    })], ApiTestPageModule);
    /***/
  },

  /***/
  "./src/app/pages/api-test/api-test.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/api-test/api-test.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesApiTestApiTestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwaS10ZXN0L2FwaS10ZXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/api-test/api-test.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/api-test/api-test.page.ts ***!
    \*************************************************/

  /*! exports provided: ApiTestPage */

  /***/
  function srcAppPagesApiTestApiTestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiTestPage", function () {
      return ApiTestPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_http_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/http-data.service */
    "./src/app/providers/http-data.service.ts");

    var ApiTestPage = /*#__PURE__*/function () {
      function ApiTestPage(httpData, loadingController) {
        _classCallCheck(this, ApiTestPage);

        this.httpData = httpData;
        this.loadingController = loadingController;
      }

      _createClass(ApiTestPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('OnInit');
        }
      }, {
        key: "createLoading",
        value: function createLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Patientez...'
                    });

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * Appel d'un observable (attente d'un flux)
         * Ne pas oulbier de le unsuscribe en quittant la page
         */

      }, {
        key: "getExampleData",
        value: function getExampleData() {
          var _this = this;

          this.createLoading();
          this.httpSus$ = this.httpData.getDataExample().subscribe(function (res) {
            _this.data = JSON.stringify(res);
          }, function (err) {
            return console.error('HTTP Error', err);
          }, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('HTTP request completed.');
                      _context2.next = 3;
                      return this.loading.dismiss();

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
        /**
         * Appel d'un observable qui ne renvoit qu'une donnée => on peut le convertir en Promise et utiliser await
         */

      }, {
        key: "getExampleDataToProm",
        value: function getExampleDataToProm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.createLoading();
                    _context3.prev = 1;
                    _context3.t0 = JSON;
                    _context3.next = 5;
                    return this.httpData.getDataExample().toPromise();

                  case 5:
                    _context3.t1 = _context3.sent;
                    this.data = _context3.t0.stringify.call(_context3.t0, _context3.t1);
                    _context3.next = 12;
                    break;

                  case 9:
                    _context3.prev = 9;
                    _context3.t2 = _context3["catch"](1);
                    console.error('HTTP Error', _context3.t2);

                  case 12:
                    _context3.prev = 12;
                    console.log('HTTP request completed.');
                    _context3.next = 16;
                    return this.loading.dismiss();

                  case 16:
                    return _context3.finish(12);

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[1, 9, 12, 17]]);
          }));
        }
        /**
         * Utilisation d'un bouchon, aucune gestion d'erreur
         */

      }, {
        key: "getBouchonData",
        value: function getBouchonData() {
          var _this2 = this;

          this.createLoading();
          setTimeout(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.t0 = JSON;
                      _context4.next = 3;
                      return this.httpData.getBouchonData().toPromise();

                    case 3:
                      _context4.t1 = _context4.sent;
                      this.data = _context4.t0.stringify.call(_context4.t0, _context4.t1);
                      _context4.next = 7;
                      return this.loading.dismiss();

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, 1000);
        }
        /**
         * Détruire les suscribes en cours avant de quitter
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.httpSus$) {
            console.log('unsubscribe : OK');
            this.httpSus$.unsubscribe();
          }
        }
      }]);

      return ApiTestPage;
    }();

    ApiTestPage.ctorParameters = function () {
      return [{
        type: _providers_http_data_service__WEBPACK_IMPORTED_MODULE_3__["HttpDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    ApiTestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-api-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./api-test.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/api-test/api-test.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./api-test.page.scss */
      "./src/app/pages/api-test/api-test.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_http_data_service__WEBPACK_IMPORTED_MODULE_3__["HttpDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], ApiTestPage);
    /***/
  },

  /***/
  "./src/app/providers/http-data.service.ts":
  /*!************************************************!*\
    !*** ./src/app/providers/http-data.service.ts ***!
    \************************************************/

  /*! exports provided: HttpDataService */

  /***/
  function srcAppProvidersHttpDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpDataService", function () {
      return HttpDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HttpDataService = /*#__PURE__*/function () {
      function HttpDataService(http) {
        _classCallCheck(this, HttpDataService);

        this.http = http;
      }

      _createClass(HttpDataService, [{
        key: "getDataExample",
        value: function getDataExample() {
          return this.http.get('https://r7.bo.yoxam.com/api/login?email=dr&password=admin');
        }
      }, {
        key: "getBouchonData",
        value: function getBouchonData() {
          return this.http.get('../assets/data/data.json');
        }
      }]);

      return HttpDataService;
    }();

    HttpDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HttpDataService);
    /***/
  }
}]);
//# sourceMappingURL=pages-api-test-api-test-module-es5.js.map
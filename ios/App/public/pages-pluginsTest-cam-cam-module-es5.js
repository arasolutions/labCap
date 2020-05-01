function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pluginsTest-cam-cam-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pluginsTest/cam/cam.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pluginsTest/cam/cam.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPluginsTestCamCamPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Camera Test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"takePicture()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Take picture\n  </ion-button>\n  {{image}}\n  <img [src]=\"image\"/>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/pluginsTest/cam/cam-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pluginsTest/cam/cam-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CamPageRoutingModule */

  /***/
  function srcAppPagesPluginsTestCamCamRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamPageRoutingModule", function () {
      return CamPageRoutingModule;
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


    var _cam_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cam.page */
    "./src/app/pages/pluginsTest/cam/cam.page.ts");

    var routes = [{
      path: '',
      component: _cam_page__WEBPACK_IMPORTED_MODULE_3__["CamPage"]
    }];

    var CamPageRoutingModule = function CamPageRoutingModule() {
      _classCallCheck(this, CamPageRoutingModule);
    };

    CamPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CamPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pluginsTest/cam/cam.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/pluginsTest/cam/cam.module.ts ***!
    \*****************************************************/

  /*! exports provided: CamPageModule */

  /***/
  function srcAppPagesPluginsTestCamCamModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamPageModule", function () {
      return CamPageModule;
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


    var _cam_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cam-routing.module */
    "./src/app/pages/pluginsTest/cam/cam-routing.module.ts");
    /* harmony import */


    var _cam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cam.page */
    "./src/app/pages/pluginsTest/cam/cam.page.ts");

    var CamPageModule = function CamPageModule() {
      _classCallCheck(this, CamPageModule);
    };

    CamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cam_routing_module__WEBPACK_IMPORTED_MODULE_5__["CamPageRoutingModule"]],
      declarations: [_cam_page__WEBPACK_IMPORTED_MODULE_6__["CamPage"]]
    })], CamPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pluginsTest/cam/cam.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/pluginsTest/cam/cam.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPluginsTestCamCamPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsdWdpbnNUZXN0L2NhbS9jYW0ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/pluginsTest/cam/cam.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/pluginsTest/cam/cam.page.ts ***!
    \***************************************************/

  /*! exports provided: CamPage */

  /***/
  function srcAppPagesPluginsTestCamCamPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamPage", function () {
      return CamPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var CamPage = /*#__PURE__*/function () {
      function CamPage() {
        _classCallCheck(this, CamPage);

        this.image = '';
      }

      _createClass(CamPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "takePicture",
        value: function takePicture() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var Camera, image, imageUrl;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera;
                    _context.next = 3;
                    return Camera.getPhoto({
                      quality: 90,
                      allowEditing: true,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri
                    });

                  case 3:
                    image = _context.sent;
                    // image.webPath will contain a path that can be set as an image src. 
                    // You can access the original file using image.path, which can be 
                    // passed to the Filesystem API to read the raw data of the image, 
                    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                    imageUrl = image.webPath; // Can be set to the src of an image now

                    this.image = imageUrl;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CamPage;
    }();

    CamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cam.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pluginsTest/cam/cam.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cam.page.scss */
      "./src/app/pages/pluginsTest/cam/cam.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CamPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pluginsTest-cam-cam-module-es5.js.map
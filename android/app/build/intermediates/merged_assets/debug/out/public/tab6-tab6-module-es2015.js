(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab6-tab6-module"],{

/***/ "./src/app/tab6/tab6-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab6/tab6-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab6PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageRoutingModule", function() { return Tab6PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab6.page */ "./src/app/tab6/tab6.page.ts");





const routes = [
    {
        path: '',
        component: _tab6_page__WEBPACK_IMPORTED_MODULE_2__["Tab6Page"]
    }
];
class Tab6PageRoutingModule {
}
Tab6PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Tab6PageRoutingModule });
Tab6PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Tab6PageRoutingModule_Factory(t) { return new (t || Tab6PageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Tab6PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tab6PageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tab6/tab6.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab6/tab6.module.ts ***!
  \*************************************/
/*! exports provided: Tab6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageModule", function() { return Tab6PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab6_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab6-routing.module */ "./src/app/tab6/tab6-routing.module.ts");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab6.page */ "./src/app/tab6/tab6.page.ts");







class Tab6PageModule {
}
Tab6PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Tab6PageModule });
Tab6PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Tab6PageModule_Factory(t) { return new (t || Tab6PageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _tab6_routing_module__WEBPACK_IMPORTED_MODULE_4__["Tab6PageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Tab6PageModule, { declarations: [_tab6_page__WEBPACK_IMPORTED_MODULE_5__["Tab6Page"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _tab6_routing_module__WEBPACK_IMPORTED_MODULE_4__["Tab6PageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tab6PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _tab6_routing_module__WEBPACK_IMPORTED_MODULE_4__["Tab6PageRoutingModule"]
                ],
                declarations: [_tab6_page__WEBPACK_IMPORTED_MODULE_5__["Tab6Page"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tab6/tab6.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab6/tab6.page.ts ***!
  \***********************************/
/*! exports provided: Tab6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6Page", function() { return Tab6Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class Tab6Page {
    constructor() { }
    ngOnInit() {
    }
}
Tab6Page.ɵfac = function Tab6Page_Factory(t) { return new (t || Tab6Page)(); };
Tab6Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Tab6Page, selectors: [["app-tab6"]], decls: 23, vars: 0, consts: [["translucent", "", "no-border", ""], ["fullscreen", "true", "slot", "fixed"], [1, "card"], [1, "header"], [1, "avatar"], ["src", "https://www.sacintarzin.com/sites/default/files/styles/article_slider/public/media/2016/07/robert-downey-jr-hairstyle.jpg?itok=YqAAB4av", "alt", ""], [1, "card-body"], [1, "user-meta", "ion-text-center"], [1, "playername"], [1, "country"], [1, "ranking"], ["expand", "full", "color", "dark"], ["expand", "full", "color", "primary"]], template: function Tab6Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Kerem Do\uF8FFan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Computer Education Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total Upload/Post: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email Address: kerem@boun.edu.tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(\"https://i2.wp.com/www.amfiweb.net/wp-content/uploads/2019/10/bo%C4%9Fazi%C3%A7i.jpg?fit=1024%2C679&ssl=1\") no-repeat top center/cover fixed, #fff;\n  position: relative;\n  height: 50%;\n  width: 100%;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  background-color: #fff;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh - (200px + 56px));\n  overflow: hidden;\n}\n\n.card-body[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n\n.card-body[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .playername[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvYm91bi9zcmMvYXBwL3RhYjYvdGFiNi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjYvdGFiNi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvS0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUVBLHNCQUFBO0FDQWhCOztBRE1BO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtJO0VBQ0ksaUJBQUE7QUNIUjs7QURLUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNIWjs7QURNUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDSloiLCJmaWxlIjoic3JjL2FwcC90YWI2L3RhYjYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pMi53cC5jb20vd3d3LmFtZml3ZWIubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL2JvJUM0JTlGYXppJUMzJUE3aS5qcGc/Zml0PTEwMjQlMkM2Nzkmc3NsPTFcIikgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgICAgLnBsYXllcm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBjb2xvcjogIzk0OWVhNjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pMi53cC5jb20vd3d3LmFtZml3ZWIubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL2JvJUM0JTlGYXppJUMzJUE3aS5qcGc/Zml0PTEwMjQlMkM2Nzkmc3NsPTFcIikgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLnBsYXllcm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzOTQwO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjOTQ5ZWE2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tab6Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab6',
                templateUrl: './tab6.page.html',
                styleUrls: ['./tab6.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=tab6-tab6-module-es2015.js.map
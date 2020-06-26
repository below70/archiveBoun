(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["math101-math101-module"],{

/***/ "./src/app/math101/math101-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/math101/math101-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Math101PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math101PageRoutingModule", function() { return Math101PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _math101_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math101.page */ "./src/app/math101/math101.page.ts");





const routes = [
    {
        path: '',
        component: _math101_page__WEBPACK_IMPORTED_MODULE_2__["Math101Page"]
    }
];
class Math101PageRoutingModule {
}
Math101PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Math101PageRoutingModule });
Math101PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Math101PageRoutingModule_Factory(t) { return new (t || Math101PageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Math101PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Math101PageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/math101/math101.module.ts":
/*!*******************************************!*\
  !*** ./src/app/math101/math101.module.ts ***!
  \*******************************************/
/*! exports provided: Math101PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math101PageModule", function() { return Math101PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _math101_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math101-routing.module */ "./src/app/math101/math101-routing.module.ts");
/* harmony import */ var _math101_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math101.page */ "./src/app/math101/math101.page.ts");







class Math101PageModule {
}
Math101PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Math101PageModule });
Math101PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Math101PageModule_Factory(t) { return new (t || Math101PageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _math101_routing_module__WEBPACK_IMPORTED_MODULE_4__["Math101PageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Math101PageModule, { declarations: [_math101_page__WEBPACK_IMPORTED_MODULE_5__["Math101Page"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _math101_routing_module__WEBPACK_IMPORTED_MODULE_4__["Math101PageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Math101PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _math101_routing_module__WEBPACK_IMPORTED_MODULE_4__["Math101PageRoutingModule"]
                ],
                declarations: [_math101_page__WEBPACK_IMPORTED_MODULE_5__["Math101Page"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/math101/math101.page.ts":
/*!*****************************************!*\
  !*** ./src/app/math101/math101.page.ts ***!
  \*****************************************/
/*! exports provided: Math101Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math101Page", function() { return Math101Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class Math101Page {
    constructor() { }
    ngOnInit() {
    }
}
Math101Page.ɵfac = function Math101Page_Factory(t) { return new (t || Math101Page)(); };
Math101Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Math101Page, selectors: [["app-math101"]], decls: 20, vars: 0, consts: [["href", "./tabs/tab4"], ["fill", "filled", "slot", "end"], ["name", "return-up-back-outline"], ["width", "480", "height", "360", "src", "https://www.youtube.com/embed/fYyARMqiaag?list=PLF797E961509B4EB5", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["href", " https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/lecture-notes/unit1_sept08.pdf", 1, "lectureNote"], ["fill", "solid", "expand", "block", "color", "primary"], ["src", "../assets/images/sketchbook.svg", "width", "480", "height", "360", "alt", ""], [1, "card"], ["href", " http://www.math.boun.edu.tr/personal/archives/arsiv101/arsiv101.html"], ["fill", "solid", "expand", "block", "color", "danger"], ["width", "480", "height", "360", "src", "../assets/images/exam1.svg", "alt", ""]], template: function Math101Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Math-101");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lecture Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Exam Archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"]], styles: ["ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #f65152;\n}\n\nion-title[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: xx-large;\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvYm91bi9zcmMvYXBwL21hdGgxMDEvbWF0aDEwMS5wYWdlLnNjc3MiLCJzcmMvYXBwL21hdGgxMDEvbWF0aDEwMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtBQ0FKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRElFO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDRSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbWF0aDEwMS9tYXRoMTAxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbiAgaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tY29sb3I6ICAjZjY1MTUyO1xuICB9XG4gIGlvbi10aXRsZXsgXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG5cbiAiLCJpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWNvbG9yOiAjZjY1MTUyO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Math101Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-math101',
                templateUrl: './math101.page.html',
                styleUrls: ['./math101.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=math101-math101-module-es2015.js.map
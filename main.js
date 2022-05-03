"use strict";
(self["webpackChunkwarnings_ng"] = self["webpackChunkwarnings_ng"] || []).push([["main"],{

/***/ 6562:
/*!****************************************************!*\
  !*** ./src/app/alert-card/alert-card.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertCardComponent": () => (/* binding */ AlertCardComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ 6748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = ["hiddencontainer"];
const _c1 = ["poly"];
const _c2 = ["alert", ""];
function AlertCardComponent_div_0_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hail: ", ctx_r6.alert.hailSize, " in");
} }
function AlertCardComponent_div_0_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Wind gusts: ", ctx_r7.alert.windGust, " MPH");
} }
function AlertCardComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertCardComponent_div_0_div_13_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlertCardComponent_div_0_div_13_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.alert.hailSize > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.alert.windGust > 0);
} }
function AlertCardComponent_div_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("T-Storm Damage: ", ctx_r8.alert.thunderstormDamageThreat, "");
} }
function AlertCardComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertCardComponent_div_0_div_14_div_1_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.alert.thunderstormDamageThreat);
} }
function AlertCardComponent_div_0_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r9.getTorDetectionClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Tornado: ", ctx_r9.alert.tornadoDetection, " ");
} }
function AlertCardComponent_div_0_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tornado damage: ", ctx_r10.alert.tornadoDamageThreat, "");
} }
function AlertCardComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertCardComponent_div_0_div_15_div_1_Template, 3, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlertCardComponent_div_0_div_15_div_2_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.alert.tornadoDetection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.alert.tornadoDamageThreat);
} }
function AlertCardComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertCardComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.toggleDescription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AlertCardComponent_div_0_div_13_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AlertCardComponent_div_0_div_14_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AlertCardComponent_div_0_div_15_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AlertCardComponent_div_0_div_16_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10, 11)(19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r0.getClass(), " alert-card-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.alert.getClassification().modifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("From: ", ctx_r0.alert.sender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.alert.areaDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Expires in: ", ctx_r0.alert.timeUntilExpiration(), " minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.shouldDisplayHazards());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.shouldDisplaySvrHazards());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.shouldDisplayTorHazards());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.alert.polygon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.alert.description);
} }
class AlertCardComponent {
    ngAfterViewInit() {
        this.drawCanvas();
    }
    ngOnInit() {
    }
    getTitle() {
        return this.alert.getClassification().title;
    }
    drawCanvas() {
        let ctx = this.polyCanvas.nativeElement.getContext('2d');
        if (ctx === null) {
            return;
        }
        console.log('Drawing');
        console.log('Polygon: ' + JSON.stringify(this.alert.polygon));
        if (this.alert.polygon.length == 0) {
            return;
        }
        let adjusted = _utils__WEBPACK_IMPORTED_MODULE_0__.Point.adjustArray(this.alert.polygon);
        console.log(adjusted);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.transform(1, 0, 0, -1, 0, this.polyCanvas.nativeElement.height);
        ctx.beginPath();
        let current = adjusted[0];
        ctx.moveTo(current.x, current.y);
        for (let index = 1; index < adjusted.length; index++) {
            current = adjusted[index];
            ctx.lineTo(current.x, current.y);
        }
        ctx.closePath();
        ctx.stroke();
    }
    shouldDisplayHazards() {
        return (this.alert !== undefined &&
            (this.alert.windGust > 0 ||
                this.alert.hailSize > 0));
    }
    shouldDisplaySvrHazards() {
        return (this.alert !== undefined &&
            (this.alert.thunderstormDamageThreat.length > 0));
    }
    shouldDisplayTorHazards() {
        return (this.alert !== undefined &&
            (this.alert.tornadoDetection.length > 0));
    }
    toggleDescription() {
        if (this.hiddenContainer.nativeElement.classList.contains('hidden')) {
            this.hiddenContainer.nativeElement.classList.remove('hidden');
        }
        else {
            this.hiddenContainer.nativeElement.classList.add('hidden');
        }
    }
    getClass() {
        return this.alert.getClassification().css_class;
    }
    getTorDetectionClass() {
        if (this.alert.eventType === _utils__WEBPACK_IMPORTED_MODULE_0__.EventType.SVR) {
            return "red";
        }
        return "";
    }
}
AlertCardComponent.ɵfac = function AlertCardComponent_Factory(t) { return new (t || AlertCardComponent)(); };
AlertCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertCardComponent, selectors: [["app-alert-card", "alert", ""]], viewQuery: function AlertCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hiddenContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.polyCanvas = _t.first);
    } }, inputs: { alert: "alert" }, attrs: _c2, decls: 1, vars: 1, consts: [[3, "class", "click", 4, "ngIf"], [3, "click"], [1, "header"], [1, "title"], [1, "modifier"], [1, "subtitle"], ["class", "hazards", 4, "ngIf"], ["class", "svrHazards", 4, "ngIf"], ["class", "torHazards", 4, "ngIf"], ["class", "polygon", 4, "ngIf"], [1, "hidden"], ["hiddencontainer", ""], [1, "desc"], [1, "hazards"], ["class", "left hazard-item", 4, "ngIf"], ["class", "right hazard-item", 4, "ngIf"], [1, "left", "hazard-item"], [1, "right", "hazard-item"], [1, "svrHazards"], [4, "ngIf"], [1, "torHazards"], [1, "polygon"], ["width", "50px", "height", "50px", "id", "polygon"], ["poly", ""]], template: function AlertCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertCardComponent_div_0_Template, 21, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alert);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".polygon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n}\n\n.header[_ngcontent-%COMP%] {\n  min-height: 50px;\n  padding-bottom: 5px;\n  width: 300px;\n  margin: 0 auto\n}\n\n.desc[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  margin-top: 5px;\n  padding:0 5px 0 5px;\n}\n\n.alert-card-container[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 2px;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 2px 2px lightslategray;\n  position:relative;\n}\n\ndiv.alert-card-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 3px;\n  margin-bottom: 3px;;\n}\n\n.modifier[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 5px;;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.subtitle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:last-child) {\n   margin-bottom: 2px;\n }\n\n.hazards[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n.svrHazards[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.torHazards[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: rgb(167, 0, 0);\n  padding: 0 3px 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQztHQUNFLGtCQUFrQjtDQUNwQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJhbGVydC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9seWdvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG59XG5cbi5oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvXG59XG5cbi5kZXNjIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6MCA1cHggMCA1cHg7XG59XG5cbi5hbGVydC1jYXJkLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAycHggMnB4IGxpZ2h0c2xhdGVncmF5O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuZGl2LmFsZXJ0LWNhcmQtY29udGFpbmVyPmRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDs7XG59XG5cbi5tb2RpZmllciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDs7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIC5zdWJ0aXRsZT5kaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICBtYXJnaW4tYm90dG9tOiAycHg7XG4gfVxuXG4uaGF6YXJkcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdnJIYXphcmRzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvckhhemFyZHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJnYigxNjcsIDAsIDApO1xuICBwYWRkaW5nOiAwIDNweCAwIDNweDtcbn1cblxuIl19 */"] });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 6748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cap.service */ 6935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _count_card_count_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-card/count-card.component */ 8275);
/* harmony import */ var _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-card/alert-card.component */ 6562);






const _c0 = ["counts"];
const _c1 = ["plus"];
const _c2 = ["minus"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_app_count_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-count-card", 14);
} if (rf & 2) {
    const e_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("entry", e_r8);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.showCounts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Counts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AppComponent_div_3_app_count_card_12_Template, 1, 1, "app-count-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.getCounts());
} }
function AppComponent_app_alert_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-alert-card", 15);
} if (rf & 2) {
    const alert_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alert", alert_r11);
} }
class AppComponent {
    constructor(capService) {
        this.capService = capService;
        this.title = 'warnings-ng';
        this.loaded = false;
        this.classes = [
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.SWS,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.SVR,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.SVRCON,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.SVRDES,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.TORRDR,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.TOROBS,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.TORCON,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.TORCAT,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.TORPDS,
            _utils__WEBPACK_IMPORTED_MODULE_0__.Classification.TORE
        ];
        this.alerts = [];
    }
    toggleHidden(element) {
        if (element.nativeElement.classList.contains('hidden')) {
            element.nativeElement.classList.remove('hidden');
        }
        else {
            element.nativeElement.classList.add('hidden');
        }
    }
    showCounts() {
        this.toggleHidden(this.counts);
        this.toggleHidden(this.plus);
        this.toggleHidden(this.minus);
    }
    getCounts() {
        let arr = [];
        this.classes.forEach(x => {
            arr.push(new _utils__WEBPACK_IMPORTED_MODULE_0__.Entry(x, this.alerts.filter(y => y.getClassification() === x).length));
        });
        return arr;
    }
    getCount(c) {
        return this.alerts.filter(x => x.getClassification() === c).length;
    }
    ngOnInit() {
        this.capService.getAlerts()
            .then((alerts) => {
            this.alerts = alerts;
            console.log('Setting loaded to true');
            this.loaded = true;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_cap_service__WEBPACK_IMPORTED_MODULE_1__.CapService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.counts = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.plus = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.minus = _t.first);
    } }, decls: 5, vars: 4, consts: [["id", "container"], ["class", "loading", 4, "ngIf"], ["class", "counts-container", 4, "ngIf"], [3, "alert", 4, "ngFor", "ngForOf"], [1, "loading"], [1, "counts-container"], [1, "counts-header", 3, "click"], [1, "icon"], ["plus", ""], [1, "icon", "hidden"], ["minus", ""], [1, "counts", "hidden"], ["counts", ""], [3, "entry", 4, "ngFor", "ngForOf"], [3, "entry"], [3, "alert"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppComponent_div_3_Template, 13, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AppComponent_app_alert_card_4_Template, 1, 1, "app-alert-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.alerts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.alerts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _count_card_count_card_component__WEBPACK_IMPORTED_MODULE_2__.CountCardComponent, _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_3__.AlertCardComponent], styles: ["#container[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: larger;\n}\n\n.counts-header[_ngcontent-%COMP%] {\n  font-size: large;\n  text-align: center;\n  display: inline-flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.counts-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  margin-bottom: 5px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: medium;\n  position:absolute;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5sb2FkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmNvdW50cy1oZWFkZXIge1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb3VudHMtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-card/alert-card.component */ 6562);
/* harmony import */ var _count_card_count_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-card/count-card.component */ 8275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_1__.AlertCardComponent,
        _count_card_count_card_component__WEBPACK_IMPORTED_MODULE_2__.CountCardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule] }); })();


/***/ }),

/***/ 6935:
/*!********************************!*\
  !*** ./src/app/cap.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapService": () => (/* binding */ CapService)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 6748);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class CapService {
    constructor() {
        this.URLS = {
            "active": "http://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement",
            "tornadoes": "http://api.weather.gov/alerts?event=Tornado%20Warning"
        };
    }
    processJson(data, resolve, reject) {
        let features = data.features;
        resolve(features
            .filter(elem => {
            if (elem.properties.event === 'Special Weather Statement') {
                return elem.properties.description.includes('thunderstorm');
            }
            return true;
        })
            .map(f => new _utils__WEBPACK_IMPORTED_MODULE_0__.Alert(f))
            .sort((a, b) => b.priority() - a.priority()));
    }
    getAlerts() {
        console.log('loading...');
        return new Promise((resolve, reject) => {
            console.time('local-storage-get');
            chrome.storage.local.get(['source', 'file'])
                .then((result) => {
                const source = result['source'];
                console.timeEnd('local-storage-get');
                console.log("Current source is: " + source);
                if (source === 'file') {
                    const filename = result['file'];
                    console.log('Filename is ', filename);
                    jquery__WEBPACK_IMPORTED_MODULE_1__.getJSON(filename).done((data) => {
                        this.processJson(data, resolve, reject);
                    });
                }
                else {
                    const url = this.URLS[source];
                    const headers = { 'method': 'GET', 'headers': { 'Accept': 'application/geo+json' } };
                    console.log('URL: ', url);
                    console.log('HEADERS: ', headers);
                    fetch(url, headers)
                        .then(response => response.json())
                        .then((json) => this.processJson(json, resolve, reject));
                }
            });
        });
    }
}
CapService.ɵfac = function CapService_Factory(t) { return new (t || CapService)(); };
CapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CapService, factory: CapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8275:
/*!****************************************************!*\
  !*** ./src/app/count-card/count-card.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountCardComponent": () => (/* binding */ CountCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CountCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CountCardComponent.ɵfac = function CountCardComponent_Factory(t) { return new (t || CountCardComponent)(); };
CountCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountCardComponent, selectors: [["app-count-card"]], inputs: { entry: "entry" }, decls: 5, vars: 5, consts: [[1, "left"], [1, "right"]], template: function CountCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.entry.cls.css_class, " line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.entry.cls.modifier + " " + ctx.entry.cls.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.entry.count, " ");
    } }, styles: [".line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkIiwiZmlsZSI6ImNvdW50LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6748:
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventType": () => (/* binding */ EventType),
/* harmony export */   "BoundingRectangle": () => (/* binding */ BoundingRectangle),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Alert": () => (/* binding */ Alert),
/* harmony export */   "Classification": () => (/* binding */ Classification),
/* harmony export */   "Entry": () => (/* binding */ Entry)
/* harmony export */ });
class EventType {
    constructor(text, cssClass, pri) {
        this.text = text;
        this.cssClass = cssClass;
        this.priority = pri;
    }
    static fromCaps(capsFeature) {
        switch (capsFeature.properties.event) {
            case this.TOR.text:
                return this.TOR;
            case this.SVR.text:
                return this.SVR;
            case this.SWS.text:
                return this.SWS;
            default:
                return this.OTHER;
        }
    }
}
EventType.TOR = new EventType("Tornado Warning", "tor", 2);
EventType.SVR = new EventType("Severe Thunderstorm Warning", "svr", 1);
EventType.SWS = new EventType("Special Weather Statement", "spec", 0);
EventType.OTHER = new EventType("Other", "", -1);
class BoundingRectangle {
    constructor() {
        this.minX = 0;
        this.minY = 0;
        this.maxX = 0;
        this.maxY = 0;
    }
}
class Point {
    constructor(arr) {
        this.x = arr[0];
        this.y = arr[1];
    }
    static fromFeature(feature) {
        if (feature.geometry === null || feature.geometry.coordinates === null) {
            return [];
        }
        console.log('Coordinates: ' + JSON.stringify(feature.geometry.coordinates));
        console.log('Coordinates inner: ' + JSON.stringify(feature.geometry.coordinates[0]));
        return feature.geometry.coordinates[0].map((coord) => new Point(coord));
    }
    static getBoundingRectangle(arr) {
        let result = new BoundingRectangle();
        result.minX = Math.min(...arr.map(e => e.x));
        result.minY = Math.min(...arr.map(e => e.y));
        result.maxX = Math.max(...arr.map(e => e.x));
        result.maxY = Math.max(...arr.map(e => e.y));
        return result;
    }
    static adjustArray(arr) {
        let boundingRect = Point.getBoundingRectangle(arr);
        let longestDiff = Math.max(boundingRect.maxX - boundingRect.minX, boundingRect.maxY - boundingRect.minY);
        console.log('Longest diff: ' + longestDiff);
        let factor = longestDiff / 50.0 * 100.0;
        console.log('Factor: ' + factor);
        return arr.map(p => new Point([Math.floor((p.x - boundingRect.minX) * 100.0 / factor), Math.floor((p.y - boundingRect.minY) * 100.0 / factor)]));
    }
}
class Alert {
    constructor(feature) {
        let props = feature.properties;
        this.event = props.event;
        this.eventType = EventType.fromCaps(feature);
        this.description = props.description || "";
        this.areaDesc = props.areaDesc;
        this.effective = new Date(props.effective);
        this.expires = new Date(props.expires);
        this.sender = props.senderName;
        this.polygon = Point.fromFeature(feature);
        this.windGust = 0;
        if ('maxWindGust' in props.parameters) {
            this.windGust = props.parameters.maxWindGust[0].slice(0, -4).replace('Up to', '');
        }
        this.hailSize = 0;
        if ('maxHailSize' in props.parameters) {
            this.hailSize = props.parameters.maxHailSize[0];
        }
        this.tornadoDetection = '';
        if ('tornadoDetection' in props.parameters) {
            this.tornadoDetection = props.parameters.tornadoDetection[0];
        }
        this.thunderstormDamageThreat = '';
        if ('thunderstormDamageThreat' in props.parameters) {
            this.thunderstormDamageThreat = props.parameters.thunderstormDamageThreat[0];
        }
        this.tornadoDamageThreat = '';
        if ('tornadoDamageThreat' in props.parameters) {
            this.tornadoDamageThreat = props.parameters.tornadoDamageThreat[0];
        }
    }
    getClassification() {
        switch (this.eventType) {
            case EventType.SWS:
                return Classification.SWS;
            case EventType.SVR:
                switch (this.thunderstormDamageThreat) {
                    case "CONSIDERABLE":
                        return Classification.SVRCON;
                    case "DESTRUCTIVE":
                        return Classification.SVRDES;
                    default:
                        return Classification.SVR;
                }
            case EventType.TOR:
                if (this.description && this.description.toLowerCase().includes('tornado emergency')) {
                    return Classification.TORE;
                }
                if (this.description && this.description.toLowerCase().includes('particularly dangerous situation')) {
                    return Classification.TORPDS;
                }
                if (this.tornadoDamageThreat === "CATASTROPHIC") {
                    return Classification.TORCAT;
                }
                if (this.tornadoDamageThreat === "CONSIDERABLE") {
                    return Classification.TORCON;
                }
                if (this.tornadoDetection === "OBSERVED") {
                    return Classification.TOROBS;
                }
                return Classification.TORRDR;
            default:
                console.log("Could not classify alert: " + this);
                return Classification.UNKNOWN;
        }
    }
    timeUntilExpiration() {
        const now = (new Date).getTime();
        const diff = this.expires.getTime() - now;
        return Math.round(diff / 1000 / 60);
    }
    priority() {
        //https://www.weather.gov/media/alert/CAP_v12_guide_05-16-2017.pdf
        let current = this.eventType.priority;
        if (this.thunderstormDamageThreat.length > 0) {
            switch (this.thunderstormDamageThreat) {
                case "CONSIDERABLE":
                    current += .1;
                    break;
                case "DESTRUCTIVE":
                    current += .2;
                    break;
                default:
                    break;
            }
        }
        //TOR only
        if (this.tornadoDamageThreat.length > 0) {
            switch (this.tornadoDamageThreat) {
                case "CONSIDERABLE":
                    current += .1;
                    break;
                case "CATASTRPHIC":
                    current += .2;
                    break;
                default:
                    break;
            }
        }
        // possible on SVR
        if (this.tornadoDetection.length > 0) {
            switch (this.tornadoDetection) {
                case "POSSIBLE":
                    current += .05;
                    break;
                case "RADAR INDICATED":
                    current += .2;
                    break;
                case "OBSERVED":
                    current += .3;
                    break;
                default:
                    break;
            }
        }
        return current;
    }
}
class Classification {
    constructor(css_class, title, modifier = '') {
        this.css_class = css_class;
        this.title = title;
        this.modifier = modifier;
    }
}
Classification.TORE = new Classification('tor-emergency', 'Tornado Warning', 'TORNADO EMERGENCY');
Classification.TORPDS = new Classification('tor-pds', 'Tornado Warning', 'PDS');
Classification.TORCAT = new Classification('tor-catastrophic', 'Tornado Warning', 'Catastrophic');
Classification.TORCON = new Classification('tor-considerable', 'Tornado Warning', 'Considerable');
Classification.TOROBS = new Classification('tor-observed', 'Tornado Warning', 'Observed');
Classification.TORRDR = new Classification('tor-radar', 'Tornado Warning', 'Radar Indicated');
Classification.SVRDES = new Classification('svr-destructive', 'Severe Thunderstorm Warning', 'Destructive');
Classification.SVRCON = new Classification('svr-considerable', 'Severe Thunderstorm Warning', 'Considerable');
Classification.SVR = new Classification('svr', 'Severe Thunderstorm Warning');
Classification.SWS = new Classification('sws', 'Special Weather Statement');
Classification.UNKNOWN = new Classification('', 'Unknown Event');
class Entry {
    constructor(cls, count) {
        this.cls = cls;
        this.count = count;
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
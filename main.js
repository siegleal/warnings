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
function AlertCardComponent_div_0_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hail: ", ctx_r6.alert.hailSize, " in");
} }
function AlertCardComponent_div_0_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Wind gusts: ", ctx_r7.alert.windGust, " MPH");
} }
function AlertCardComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertCardComponent_div_0_div_11_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlertCardComponent_div_0_div_11_div_2_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.alert.hailSize > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.alert.windGust > 0);
} }
function AlertCardComponent_div_0_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("T-Storm Damage: ", ctx_r8.alert.thunderstormDamage, "");
} }
function AlertCardComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertCardComponent_div_0_div_12_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.alert.thunderstormDamage);
} }
function AlertCardComponent_div_0_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
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
function AlertCardComponent_div_0_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tornado damage: ", ctx_r10.alert.tornadoDamage, "");
} }
function AlertCardComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertCardComponent_div_0_div_13_div_1_Template, 3, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlertCardComponent_div_0_div_13_div_2_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.alert.tornadoDetection);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.alert.tornadoDamage);
} }
function AlertCardComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertCardComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.toggleDescription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AlertCardComponent_div_0_div_11_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AlertCardComponent_div_0_div_12_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AlertCardComponent_div_0_div_13_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AlertCardComponent_div_0_div_14_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9, 10)(17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r0.getClass(), " alert-card-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("From: ", ctx_r0.alert.sender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.alert.areaDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Expires in: ", ctx_r0.timeUntilExpiration(), " minutes");
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
        return this.alert.event;
    }
    timeUntilExpiration() {
        const now = (new Date).getTime();
        const diff = new Date(this.alert.expires).getTime() - now;
        return Math.round(diff / 1000 / 60);
    }
    drawCanvas() {
        if (this.polyCanvas === undefined) {
            console.warn("Polygon canvas was undefined");
            return;
        }
        let ctx = this.polyCanvas.nativeElement.getContext('2d');
        if (ctx === null) {
            return;
        }
        if (this.alert.polygon.length == 0) {
            return;
        }
        let adjusted = _utils__WEBPACK_IMPORTED_MODULE_0__.Point.adjustArray(this.alert.polygon);
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
            (this.alert.thunderstormDamage.length > 0));
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
        return this.alert.alertClass.name.toLowerCase();
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
    } }, inputs: { alert: "alert" }, attrs: _c2, decls: 1, vars: 1, consts: [[3, "class", "click", 4, "ngIf"], [3, "click"], [1, "header"], [1, "title"], [1, "subtitle"], ["class", "hazards", 4, "ngIf"], ["class", "svrHazards", 4, "ngIf"], ["class", "torHazards", 4, "ngIf"], ["class", "polygon", 4, "ngIf"], [1, "hidden"], ["hiddencontainer", ""], [1, "desc"], [1, "hazards"], ["class", "left hazard-item", 4, "ngIf"], ["class", "right hazard-item", 4, "ngIf"], [1, "left", "hazard-item"], [1, "right", "hazard-item"], [1, "svrHazards"], [4, "ngIf"], [1, "torHazards"], [1, "polygon"], ["width", "50px", "height", "50px", "id", "polygon"], ["poly", ""]], template: function AlertCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertCardComponent_div_0_Template, 19, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alert);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".polygon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n}\n\n.header[_ngcontent-%COMP%] {\n  min-height: 50px;\n  padding-bottom: 5px;\n  width: 300px;\n  margin: 0 auto\n}\n\n.desc[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  margin-top: 5px;\n  padding:0 5px 0 5px;\n}\n\n.alert-card-container[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 2px;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);\n  position:relative;\n  transition: .3s;\n}\n\n.alert-card-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\ndiv.alert-card-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 3px;\n  margin-bottom: 3px;;\n}\n\n.modifier[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 5px;;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.subtitle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:last-child) {\n   margin-bottom: 2px;\n }\n\n.hazards[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n.svrHazards[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.torHazards[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: rgb(167, 0, 0);\n  padding: 0 3px 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVDO0dBQ0Usa0JBQWtCO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImFsZXJ0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2x5Z29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbn1cblxuLmhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG9cbn1cblxuLmRlc2Mge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzowIDVweCAwIDVweDtcbn1cblxuLmFsZXJ0LWNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwIDAgMCAvIDIwJSk7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAuM3M7XG59XG5cbi5hbGVydC1jYXJkLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbmRpdi5hbGVydC1jYXJkLWNvbnRhaW5lcj5kaXYge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7O1xufVxuXG4ubW9kaWZpZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7O1xufVxuXG4uc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiAuc3VidGl0bGU+ZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuIH1cblxuLmhhemFyZHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3ZySGF6YXJkcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b3JIYXphcmRzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZ2IoMTY3LCAwLCAwKTtcbiAgcGFkZGluZzogMCAzcHggMCAzcHg7XG59XG5cbiJdfQ== */"] });


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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source */ 6264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cap.service */ 6935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _count_card_count_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./count-card/count-card.component */ 8275);
/* harmony import */ var _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-card/alert-card.component */ 6562);








const _c0 = ["counts"];
const _c1 = ["plus"];
const _c2 = ["minus"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Source: ", ctx_r6.source.name, "");
} }
function AppComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "NOT LIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AppComponent_div_3_div_1_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.source);
} }
function AppComponent_div_3_div_2_app_count_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-count-card", 19);
} if (rf & 2) {
    const e_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("entry", e_r11);
} }
function AppComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_div_3_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r12.showCounts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Counts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AppComponent_div_3_div_2_app_count_card_12_Template, 1, 1, "app-count-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.getCounts());
} }
function AppComponent_div_3_app_alert_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-alert-card", 20);
} if (rf & 2) {
    const alert_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alert", alert_r14);
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AppComponent_div_3_div_1_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AppComponent_div_3_div_2_Template, 13, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AppComponent_div_3_app_alert_card_3_Template, 1, 1, "app-alert-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.saveButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Save JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isLive);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.alerts.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.alerts);
} }
class AppComponent {
    constructor(capService /*LocalgoService*/) {
        this.capService = capService;
        this.title = 'warnings-ng';
        this.loaded = false;
        this.isLive = true;
        this.source = null;
        this.classes = [
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.SWS,
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.SVR,
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.SVRCON,
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.SVRDES,
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.TORRDR,
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.TOROBS,
            // AlertClass.TORCON,
            // AlertClass.TORCAT,
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.TORPDS,
            _utils__WEBPACK_IMPORTED_MODULE_0__.AlertClass.TORE
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
    saveButton() {
        this.capService.getLastJson()
            .catch((reason) => console.log(reason))
            .then((json) => {
            let jsonString = JSON.stringify(json);
            let blob = new Blob([jsonString], { type: "application/json;charset=utf-8" });
            let now = new Date();
            file_saver__WEBPACK_IMPORTED_MODULE_1__(blob, `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.json`);
        });
    }
    showCounts() {
        this.toggleHidden(this.counts);
        this.toggleHidden(this.plus);
        this.toggleHidden(this.minus);
    }
    getCounts() {
        let arr = [];
        this.classes.forEach(x => {
            // arr.push(new Entry(x, this.alerts.filter(y => y.getClassification() === x).length))
            arr.push(new _utils__WEBPACK_IMPORTED_MODULE_0__.Entry(x, this.alerts.filter(y => y.alertClass === x).length));
        });
        return arr;
    }
    // getCount(c: Classification) {
    //   return this.alerts.filter(x => x.getClassification() === c).length
    // }
    ngOnInit() {
        chrome.storage.local.get(['source', 'file'])
            .then((result) => {
            let source = result['source'];
            this.source = _source__WEBPACK_IMPORTED_MODULE_2__.Source.findSource(source);
            let file = result['file'];
            this.isLive = source === _source__WEBPACK_IMPORTED_MODULE_2__.Source.ACTIVE.value;
            this.capService.getAlerts(source, file)
                .then((alerts) => {
                this.alerts = alerts;
                console.log('Setting loaded to true');
                this.loaded = true;
            });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_cap_service__WEBPACK_IMPORTED_MODULE_3__.CapService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.counts = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.plus = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.minus = _t.first);
    } }, decls: 4, vars: 3, consts: [["id", "container"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], [1, "loading"], ["class", "live-container", 4, "ngIf"], ["class", "counts-container", 4, "ngIf"], [3, "alert", 4, "ngFor", "ngForOf"], [1, "save-button", 3, "click"], [1, "live-container"], [1, "live"], [1, "counts-container"], [1, "counts-header", 3, "click"], [1, "icon"], ["plus", ""], [1, "icon", "hidden"], ["minus", ""], [1, "counts", "hidden"], ["counts", ""], [3, "entry", 4, "ngFor", "ngForOf"], [3, "entry"], [3, "alert"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AppComponent_div_3_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.alerts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _count_card_count_card_component__WEBPACK_IMPORTED_MODULE_4__.CountCardComponent, _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_5__.AlertCardComponent], styles: ["#container[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: larger;\n}\n\n.counts-header[_ngcontent-%COMP%] {\n  font-size: large;\n  text-align: center;\n  display: inline-flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.counts-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  margin-bottom: 5px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: medium;\n  position:absolute;\n  right: 20px;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  outline:none;\n  display: block;\n  width: 100%;\n}\n\n.live-container[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.live[_ngcontent-%COMP%] {\n  color: RED;\n  font-size: larger;\n  font-weight: bold;\n  text-align: center;\n  display: block;\n  width: 100%;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uY291bnRzLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvdW50cy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5zYXZlLWJ1dHRvbiB7XG4gIG91dGxpbmU6bm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGl2ZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmxpdmUge1xuICBjb2xvcjogUkVEO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4iXX0= */"] });


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
/* harmony import */ var _Users_andrew_dev_warnings_warnings_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ 6748);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class CapService {
  constructor() {
    this.URLS = {
      "active": "http://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement",
      "tornadoes": "http://api.weather.gov/alerts?event=Tornado%20Warning"
    };
    this.lastJson = null;
  }

  getLastJson() {
    return new Promise((resolve, reject) => {
      if (this.lastJson !== null) {
        resolve(this.lastJson);
      }

      reject('lastJson is not set');
    });
  }

  processJson(data) {
    this.lastJson = data;
    let features = data.features;
    return features.filter(elem => {
      if (elem.properties.event === 'Special Weather Statement') {
        return elem.properties.description ? elem.properties.description.includes('thunderstorm') : false;
      }

      return true;
    }).map(f => new _utils__WEBPACK_IMPORTED_MODULE_1__.Alert(f)).sort((a, b) => a.alertClass.priority - b.alertClass.priority);
  }

  getAlerts(source = 'active', filename = null) {
    console.log('loading...');
    return new Promise((resolve, reject) => {
      console.log("Current source is: " + source);

      if (source === 'file') {
        console.log('Filename is ', filename);
        jquery__WEBPACK_IMPORTED_MODULE_2__.getJSON(filename).done(data => {
          let alerts = this.processJson(data);
          resolve(alerts);
        });
      } else {
        const url = this.URLS[source];
        const headers = {
          'method': 'GET',
          'headers': {
            'Accept': 'application/geo+json'
          }
        };
        console.log('URL: ', url);
        console.log('HEADERS: ', headers);
        fetch(url, headers).then(response => response.json()).then(json => this.processJson(json)).then( /*#__PURE__*/function () {
          var _ref = (0,_Users_andrew_dev_warnings_warnings_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (alerts) {
            yield chrome.storage.local.set({
              'alerts': alerts.map(a => a.id)
            });
            resolve(alerts);
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    });
  }

}

CapService.ɵfac = function CapService_Factory(t) {
  return new (t || CapService)();
};

CapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CapService,
  factory: CapService.ɵfac,
  providedIn: 'root'
});

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.entry.cls.name, " line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.entry.cls.name, " ");
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

/***/ 6264:
/*!***********************!*\
  !*** ./src/source.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => (/* binding */ Source)
/* harmony export */ });
class Source {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    static findSource(sourceValue) {
        switch (sourceValue) {
            case this.ACTIVE.value:
                return this.ACTIVE;
            case this.PAST_TOR.value:
                return this.PAST_TOR;
            case this.FILE.value:
                return this.FILE;
            default:
                return new Source('', '');
        }
    }
}
Source.ACTIVE = new Source('Active Alerts', 'active');
Source.PAST_TOR = new Source('Past Tornadoes', 'tornadoes');
Source.FILE = new Source('File', 'file');


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
/* harmony export */   "AlertClass": () => (/* binding */ AlertClass),
/* harmony export */   "Alert": () => (/* binding */ Alert),
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
class AlertClass {
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
    }
}
AlertClass.TORE = new AlertClass('TOR-E', 0);
AlertClass.TORPDS = new AlertClass('TOR-PDS', 1);
// static readonly TORCAT = new AlertClass('tor-catastrophic','Tornado Warning', 'Catastrophic');
// static readonly TORCON = new AlertClass('tor-considerable','Tornado Warning', 'Considerable');
AlertClass.TOROBS = new AlertClass('TOR-OBS', 2);
AlertClass.TORRDR = new AlertClass('TOR-RI', 3);
AlertClass.TOR = new AlertClass('TOR', 4);
AlertClass.SVRDES = new AlertClass('SVR-DES', 5);
AlertClass.SVRCON = new AlertClass('SVR-CON', 6);
AlertClass.SVR = new AlertClass('SVR', 7);
AlertClass.SWS = new AlertClass('SWS', 8);
AlertClass.UNKNOWN = new AlertClass('OTHER', 9);
class Alert {
    constructor(feature) {
        let props = feature.properties;
        this.id = feature.id;
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
        this.thunderstormDamage = '';
        if ('thunderstormDamageThreat' in props.parameters) {
            this.thunderstormDamage = props.parameters.thunderstormDamageThreat[0];
        }
        this.tornadoDamage = '';
        if ('tornadoDamageThreat' in props.parameters) {
            this.tornadoDamage = props.parameters.tornadoDamageThreat[0];
        }
        switch (this.event.toLowerCase()) {
            case "tornado warning":
                if (this.description.toLowerCase().includes('tornado emergency')) {
                    this.alertClass = AlertClass.TORE;
                    break;
                }
                if (this.description.toLowerCase().includes('particularly dangerous situation')) {
                    this.alertClass = AlertClass.TORPDS;
                    break;
                }
                if (this.tornadoDetection.toLowerCase() === "observed") {
                    this.alertClass = AlertClass.TOROBS;
                    break;
                }
                if (this.tornadoDetection.toLowerCase() === "radar indicated") {
                    this.alertClass = AlertClass.TORRDR;
                    break;
                }
                this.alertClass = AlertClass.TOR;
                break;
            case "severe thunderstorm warning":
                switch (this.thunderstormDamage.toLowerCase()) {
                    case "considerable":
                        this.alertClass = AlertClass.SVRCON;
                        break;
                    case "destructive":
                        this.alertClass = AlertClass.SVRDES;
                        break;
                    default:
                        this.alertClass = AlertClass.SVR;
                        break;
                }
                break;
            case "special weather statement":
                this.alertClass = AlertClass.SWS;
                break;
            default:
                this.alertClass = AlertClass.UNKNOWN;
                break;
        }
    }
    timeUntilExpiration() {
        const now = (new Date).getTime();
        const diff = this.expires.getTime() - now;
        return Math.round(diff / 1000 / 60);
    }
}
class Entry {
    constructor(cls, count) {
        this.cls = cls;
        this.count = count;
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
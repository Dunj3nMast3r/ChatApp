(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<app-header></app-header>\n\n<!-- routes will be rendered here -->\n<app-home>\n</app-home>\n<router-outlet></router-outlet>\n\n<!-- footer -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AP Chat';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/chat/chat.component */ "./src/app/home/chat/chat.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _home_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/chat/chat.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/chat/chat.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  font-weight: 400;\r\n  list-style-type: none;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(to right, #c04848, #480048);\r\n  height: 100vh;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 65px;\r\n  top: 60px;\r\n}\r\n\r\ndiv {\r\n  line-height: 1.4;\r\n  font-family: \"Space Mono\", monospace;\r\n  background: #1d1f20;\r\n  padding: 25px 35px;\r\n  width: 300px;\r\n  top: calc(50vh - 247px);\r\n  top: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  border-radius: 16px;\r\n  box-shadow: 0 0 60px -15px black;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  transition: all 0.25s;\r\n  font-size: 18px\r\n}\r\n\r\n.menu {\r\n  -webkit-transform: scale(1) rotate(0deg);\r\n          transform: scale(1) rotate(0deg);\r\n}\r\n\r\ndiv>ol>li {\r\n  margin: 20px 0;\r\n  color: #efc371;\r\n}\r\n\r\ndiv a:hover {\r\n  color: #dd925f;\r\n}\r\n\r\nh3 {\r\n  position: fixed;\r\n  font-family: \"Roboto Mono\", monospace;\r\n  font-size: 60px;\r\n  color: #cfd8dc;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\nh3:hover {\r\n  border-bottom: 6px dotted #cfd8dc;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.fa-comments {\r\n  color: crimson;\r\n}\r\n\r\nfa-comments::before,\r\nfa-comments::after {\r\n  box-sizing: border-box;\r\n  z-index: 10000;\r\n  color: crimson;\r\n  bottom: 50px;\r\n}\r\n\r\n.form-control {\r\n  text-align: -webkit-center;\r\n}\r\n\r\np {\r\n  font-family: \"Roboto Mono\", monospace;\r\n  float: right;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  color: #cfd8dc;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.float-right {\r\n  float: right;\r\n}\r\n\r\ntextarea {\r\n  width: 100%;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font: 14px/22px \"Lato\", Arial, sans-serif;\r\n  margin-bottom: 10px;\r\n  border-radius: 5px;\r\n  resize: none;\r\n\r\n}\r\n\r\n.fa-file-o,\r\n.fa-file-image-o {\r\n  font-size: 16px;\r\n  color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\n.my-message {\r\n  background: #86BB71;\r\n  border-radius: 3px;\r\n  display: block;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  text-align: justify;\r\n  text-align: left;\r\n  font-size: small;\r\n  color: #480048\r\n}\r\n\r\n.other-message {\r\n  background: #94C2ED;\r\n  border-radius: 3px;\r\n  display: block;\r\n  padding: 10px;\r\n  text-align: justify;\r\n  margin-top: 10px;\r\n  text-align: right;\r\n  font-size: small;\r\n  color: #480048\r\n}\r\n\r\n.message-box {\r\n  overflow-y: auto;\r\n  width: -webkit-fill-available;\r\n  height: 250px;\r\n  max-height: 250px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLFFBQVE7RUFDUixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQywyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2MwNDg0OCwgIzQ4MDA0OCk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJvdHRvbTogNjVweDtcclxuICB0b3A6IDYwcHg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBmb250LWZhbWlseTogXCJTcGFjZSBNb25vXCIsIG1vbm9zcGFjZTtcclxuICBiYWNrZ3JvdW5kOiAjMWQxZjIwO1xyXG4gIHBhZGRpbmc6IDI1cHggMzVweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgdG9wOiBjYWxjKDUwdmggLSAyNDdweCk7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4IC0xNXB4IGJsYWNrO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gIGZvbnQtc2l6ZTogMThweFxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbn1cclxuXHJcbmRpdj5vbD5saSB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY29sb3I6ICNlZmMzNzE7XHJcbn1cclxuXHJcbmRpdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2RkOTI1ZjtcclxufVxyXG5cclxuaDMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGNvbG9yOiAjY2ZkOGRjO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbmgzOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiA2cHggZG90dGVkICNjZmQ4ZGM7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mYS1jb21tZW50cyB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbmZhLWNvbW1lbnRzOjpiZWZvcmUsXHJcbmZhLWNvbW1lbnRzOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNjZmQ4ZGM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250OiAxNHB4LzIycHggXCJMYXRvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5mYS1maWxlLW8sXHJcbi5mYS1maWxlLWltYWdlLW8ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5teS1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiAjODZCQjcxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6ICM0ODAwNDhcclxufVxyXG5cclxuLm90aGVyLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICM5NEMyRUQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6ICM0ODAwNDhcclxufVxyXG5cclxuLm1lc3NhZ2UtYm94IHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogMjUwcHhcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/chat/chat.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/chat/chat.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 (click)=\"toggle()\" style=\"padding-bottom: 55px\"><i class=\"fa fa-comments \"></i></h3>\n<p (click)=\"toggle()\">close</p>\n<div class=\"menu\" *ngIf=\"show_dialog\">\n  <ol class=\"sub-menu\" *ngIf=\"!show_dialog_msg\">\n    <li class=\"menu-item\"><a href=\"#\">Username</a></li>\n    <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" required>\n    <li class=\"menu-item\"><a href=\"#\">Password</a></li>\n    <input type=\"text\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\" required>\n    <li class=\"menu-item\"><a href=\"#\">Topic</a></li>\n    <input type=\"text\" class=\"form-control\" id=\"topic\" [(ngModel)]=\"user.topic\" required>\n    <li class=\"menu-item\"><a href=\"#\">{{message}}</a></li>\n    <li class=\"menu-item\"><a (click)=\"connect()\" class=\"btn btn-primary btn-lg active\" style=\"cursor: pointer\"\n        role=\"button\">Submit</a></li>\n  </ol>\n  <ol class=\"talk-bubble tri-right round btm-left\" *ngIf=\"show_dialog_msg\">\n    <p (click)=\"toggle()\">close</p>\n    <li class=\"message-box\">\n      <ol class=\"message other-message\" *ngFor=\"let msg of content\">\n        {{msg}}\n      </ol>\n    </li>\n    <li class=\"chat-message clearfix\">\n      <textarea name=\"message-to-send\" id=\"message-to-send\" placeholder=\"Type your message\" rows=\"3\"\n        [(ngModel)]=\"textmessage\"></textarea>\n      <i class=\"fa fa-file-o\"></i> &nbsp;\n      <i class=\"fa fa-file-image-o\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <ol class=\"btn btn-primary btn-lg active\" style=\"cursor: pointer\" role=\"button\" (click)=\"sendName()\">Send\n      </ol>\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/home/chat/chat.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/chat/chat.component.ts ***!
  \*********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/index.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);




var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.show_dialog_msg = false;
        this.show_dialog = false;
        this.isCollapsed = true;
        this.user = {
            username: "",
            password: "",
            topic: ""
        };
        this.topicList = [{ "name": "Lifestyle", "value": "Lifestyle" }, { "name": "Travel", "value": "Travel" }, { "name": "Career", "value": "Career" }];
        this.message = '';
        this.textmessage = '';
        this.content = ["Hello", "Hi"];
        this.stompClient = null;
        this.disabled = true;
    }
    ChatComponent.prototype.serverUrl = function (serverUrl) {
        throw new Error("Method not implemented.");
    };
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.toggle = function () {
        this.show_dialog = !this.show_dialog;
    };
    ChatComponent.prototype.setConnected = function (connected) {
        this.disabled = !connected;
        if (connected) {
            this.content = [];
        }
    };
    ChatComponent.prototype.connect = function () {
        if (this.user.username && this.user.password && this.user.topic) {
            this.show_dialog_msg = !this.show_dialog_msg;
            console.log("HIiii >>>>>>>" + this.user.topic);
            var topic = this.user.topic;
            var username = this.user.username;
            this.message = "";
            var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__('http://localhost:8080/chat-app');
            this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](socket);
            var _this_1 = this;
            this.stompClient.connect({}, function (frame) {
                _this_1.setConnected(true);
                console.log('Connected: ' + frame);
                _this_1.stompClient.subscribe('/topic/hi', function (hello) {
                    console.log("tatatata ::" + JSON.parse(hello.body));
                    _this_1.showGreeting(JSON.parse(hello.body).msg);
                });
            });
        }
        else {
            this.message = "Please enter all field";
        }
    };
    ChatComponent.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
        this.setConnected(false);
        console.log('Disconnected!');
    };
    ChatComponent.prototype.sendName = function () {
        this.stompClient.send('/chat/hello', {}, JSON.stringify({ 'msg': this.textmessage }));
        this.textmessage = '';
    };
    ChatComponent.prototype.showGreeting = function (messages) {
        this.content.push(messages);
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/home/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/home/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Easy. Private. Personalized Social Messaging Platform</h1>\n      <p>APChat application is social messaging platform where you invite and get connected to people across the globe and start interacting for free. </p>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\" >\n        <h2>ABSOLUTELY PRIVATE</h2>\n        <p> unconditionally serious about its Users' privacy.No need to share your phone number.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div>\n      <div class=\"col-md-9\">\n        <h2>SMART CUSTOMIZATION</h2>\n        <p>You have very smart, flexible and detailed options for customization for Notifications and Sound.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div>\n      <div class=\"col-md-9\">\n        <h2>CONTROLLED GROUP MANAGEMENT</h2>\n        <p>Decide whether to be part of any Group or not. Block messages from groups on demand.</p>\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n      </div>\n    </div>\n    <hr>\n  </div> <!-- /container -->\n  <app-chat></app-chat>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container, .inner-footer {\r\n    text-align: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    width: 100%;\r\n    position: fixed;        \r\n    background: #333;\r\n    bottom: 0;\r\n    color: #fff;\r\n}\r\n.inner-footer {\r\n    height: 50px;\r\n}\r\n.container {\r\n    height: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLCAuaW5uZXItZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaW5uZXItZm9vdGVyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n    <div class=\"navbar-expand m-auto navbar-text\">\n        Copyrights 2019 <i class=\"fa fa-copyright\"></i> <a> Arpit Mahajan</a>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-comments {\r\n    color: crimson;\r\n  }\r\n\r\n.navbar-brand {\r\n    padding-left: 10px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0FBRUY7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1jb21tZW50cyB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICB9XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n    <i class=\"fa fa-comments fa-3x\"></i>  \n  <a class=\"navbar-brand\" href=\"/\">AP Chat</a>\n    <div class=\"navbar-expand mr-auto\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" href=\"#\">Home</a>\n        <a class=\"nav-item nav-link\" href=\"#\">About</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Contact</a>\n      </div>\n    </div>\n    <div class=\"navbar-expand ml-auto navbar-nav\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" href=\"https://github.com\" target=\"_blank\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arpit\Documents\Arpit\ChatBot\ChatAppUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
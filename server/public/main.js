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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base href=\"/\">\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/rooms/rooms.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/dash/dash.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/dbbackend.service */ "./src/app/services/dbbackend.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./room-view/room-view.component */ "./src/app/room-view/room-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'view', component: _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_23__["RoomViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_11__["RoomsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _dash_dash_component__WEBPACK_IMPORTED_MODULE_18__["DashComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                _room_view_room_view_component__WEBPACK_IMPORTED_MODULE_23__["RoomViewComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase, 'angular-auth-firebase'),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"], _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_20__["DbbackendService"], _services_room_service__WEBPACK_IMPORTED_MODULE_22__["RoomService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dash/dash.component.css":
/*!*****************************************!*\
  !*** ./src/app/dash/dash.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dash/dash.component.html":
/*!******************************************!*\
  !*** ./src/app/dash/dash.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{ mate | json }}</p>\n\n<ng-template #roomInfo let-c=\"close\" let-d=\"dismiss\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Room Info</h4>\n    <button class=\"close\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <form action=\"\" class=\"form-horizontal\" [formGroup]=\"form\">\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-12\">\n          <label for=\"roomName\" class=\"control-label required\">Room name:</label>\n          <input type=\"text\" id=\"roomName\" class=\"form-control\" formControlName=\"roomName\">\n          <div class=\"err\" *ngIf=\"!this.form.get('roomName').valid && this.form.get('roomName').touched\">\n            Please Enter a Room Name\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button mat-raised-button type=\"button\" [disabled]=\"!form.valid\" (click)=\"createRoom(); c('Close click')\">Create</button>\n    <button mat-button type=\"button\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<ng-template #joinRoomModal let-c=\"close\" let-d=\"dismiss\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Join Room</h4>\n    <button class=\"close\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <form action=\"\" class=\"form-horizontal\" [formGroup]=\"joinForm\">\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-12\">\n          <label for=\"roomKey\" class=\"control-label required\">Room key:</label>\n          <input type=\"text\" id=\"roomKey\" class=\"form-control\" formControlName=\"roomKey\">\n          <div class=\"err\" *ngIf=\"!this.joinForm.get('roomKey').valid && this.joinForm.get('roomKey').touched\">\n            Please Enter a Room Key\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button mat-raised-button type=\"button\" [disabled]=\"!joinForm.valid\" (click)=\"joinRoom(); c('Close click')\">Join</button>\n    <button mat-button type=\"button\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n\n<mat-form-field *ngIf=\"this.mate.rooms.length > 0\">\n  <mat-select [(value)]=\"selectedRoomId\" (selectionChange)=\"selectRoom()\">\n    <mat-option *ngFor=\"let room of this.mate.rooms\" [value]=\"room._id\">{{ room.name }}</mat-option>\n  </mat-select>\n</mat-form-field>\n<button mat-button (click)=\"createRoomModal(roomInfo)\">Create Room</button>\n<button mat-button (click)=\"createRoomModal(joinRoomModal)\">Join Room</button>"

/***/ }),

/***/ "./src/app/dash/dash.component.ts":
/*!****************************************!*\
  !*** ./src/app/dash/dash.component.ts ***!
  \****************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dbbackend.service */ "./src/app/services/dbbackend.service.ts");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashComponent = /** @class */ (function () {
    function DashComponent(modalService, roomservice, router, dbbackendservice, formBuilder) {
        this.modalService = modalService;
        this.roomservice = roomservice;
        this.router = router;
        this.dbbackendservice = dbbackendservice;
        this.formBuilder = formBuilder;
        this.mate = this.dbbackendservice.returnUser();
    }
    DashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dbbackendservice.trackMate.subscribe(function (currentMate) {
            _this.mate = currentMate;
        });
        this.form = this.formBuilder.group({
            roomName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.joinForm = this.formBuilder.group({
            roomKey: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    DashComponent.prototype.createRoomModal = function (content) {
        this.modalService.open(content, { centered: true });
    };
    DashComponent.prototype.createRoom = function () {
        var _this = this;
        var name = this.form.value.roomName.trim();
        var admin = new _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_2__["Mate"]();
        admin._id = this.mate._id;
        admin.name = this.mate.name;
        this.roomservice.createRoom(name, admin).then(function () {
            _this.dbbackendservice.getMate(_this.mate._id); //Just updates the user's info
        });
    };
    DashComponent.prototype.selectRoom = function () {
        this.roomservice.loadRoom(this.selectedRoomId).catch(function (err) { return console.log(err); });
    };
    DashComponent.prototype.joinRoom = function () {
        var key = this.joinForm.value.roomKey.trim();
        var userid = this.mate._id;
        var name = this.mate.name;
        this.roomservice.joinRoom(userid, name, key);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('switch'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DashComponent.prototype, "selectRoom", null);
    DashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.css */ "./src/app/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_2__["DbbackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goToLogin()\">Login</button>\r\n<button (click)=\"goToSignup()\">Sign up</button>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    HomeComponent.prototype.goToSignup = function () {
        this.router.navigate(['signup']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n<form class=\"form-horizontal\" [formGroup]=\"form\">\n  \n  <div class=\"form-group\">\n    <div class=\"col-sm-12\">\n      <label for=\"email\" class=\"control-label\">Email</label>\n      <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n      <div class=\"err\" *ngIf=\"!this.form.get('email').valid && this.form.get('email').touched\">\n        Please Enter a Valid Email\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-12\">\n      <label for=\"password\" class=\"control-label\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"signInWithEmail()\">Login</button>\n  <button class=\"btn\" (click)=\"reset()\">Clear</button>\n\n  <div class=\"err\" *ngIf=\"loginFailed\">\n    Email or password is incorrect\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dbbackend.service */ "./src/app/services/dbbackend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, dbbackendservice, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.dbbackendservice = dbbackendservice;
        this.formBuilder = formBuilder;
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.loginFailed = false;
        var email = this.form.value.email.trim();
        var password = this.form.value.password;
        this.authService.signInRegular(email, password).then(function (res) {
            console.log(res);
            _this.dbbackendservice.getMateByEmail(email).then(function (res) {
                console.log(res);
                _this.router.navigate(['view']);
            }).catch(function (err) {
                console.log(err);
                _this.loginFailed = true;
                _this.authService.logout();
            });
        }).catch(function (err) {
            console.log('error: ' + err);
            _this.loginFailed = true;
        });
    };
    LoginComponent.prototype.reset = function () {
        this.form.reset();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_3__["DbbackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/room-view/room-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/room-view/room-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/room-view/room-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/room-view/room-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dash></app-dash>\n\n<p>{{ room | json }}</p>\n\n<button *ngIf=\"this.room\" mat-button (click)=\"createRoomModal(inviteModal)\">Invite Mate</button>\n<ng-template #inviteModal let-c=\"close\" let-d=\"dismiss\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Invite</h4>\n    <button class=\"close\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <form action=\"\" class=\"form-horizontal\" [formGroup]=\"emailInviteForm\">\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-12\">\n          <label for=\"emailInvite\" class=\"control-label required\">Email:</label>\n          <input type=\"email\" id=\"emailInvite\" class=\"form-control\" formControlName=\"emailInvite\">\n          <div class=\"err\" *ngIf=\"!this.emailInviteForm.get('emailInvite').valid && this.emailInviteForm.get('emailInvite').touched\">\n            Please Enter a valid email\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button mat-raised-button type=\"button\" [disabled]=\"!emailInviteForm.valid\" (click)=\"inviteMate(); c('Close click')\">Invite</button>\n    <button mat-button type=\"button\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<mat-form-field *ngIf=\"this.room\">\n  <mat-select [(value)]=\"selectedMateId\" (change)=\"selectMate()\">\n    <mat-option *ngFor=\"let mate of this.mates\" [value]=\"mate._id\">{{ mate.name }}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div *ngIf=\"this.selectedMateId\">\n  {{ selectedMate | json }}\n  <h1 *ngIf=\"this.selectedMate.owed > 0\">You owe {{this.selectedMate.name}} ${{this.selectedMate.owed}}</h1>\n  <h1 *ngIf=\"this.selectedMate.owed < 0\">{{this.selectedMate.name}} owes you ${{this.selectedMate.owed}}</h1>\n  <h1 *ngIf=\"this.selectedMate.owed == 0\">No money owed between you and {{this.selectedMate.name}}</h1>\n\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>Give money to {{this.selectedMate.name}}</mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <mat-form-field [formGroup]=\"sendMoneyForm\">\n\n          <div class=\"form-group\">\n            <div class=\"col-lg\">\n              <label for=\"moneyReason\" class=\"control-label required\">Reason:</label>\n              <input matInput type=\"text\" id=\"moneyReason\" class=\"form-control\" formControlName=\"moneyReason\">\n              <div class=\"err\" *ngIf=\"!this.sendMoneyForm.get('moneyReason').valid && this.sendMoneyForm.get('moneyReason').touched\">\n                Please Enter a reason for this transaction;\n              </div>\n            </div>\n          </div>\n      </mat-form-field>\n      <mat-form-field [formGroup]=\"sendMoneyForm\">\n          <div class=\"form-group\">\n            <div class=\"col-lg\">\n              <label for=\"amount\" class=\"control-label required\">Amount:</label>\n              <input matInput type=\"number\" min=\"0\" id=\"amount\" formControlName=\"amount\" class=\"form-control\">\n            </div>\n          </div>\n      </mat-form-field>\n      <button mat-raised-button type=\"button\" [disabled]=\"!sendMoneyForm.valid\" (click)=\"sendMoney()\">Give money</button>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>"

/***/ }),

/***/ "./src/app/room-view/room-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/room-view/room-view.component.ts ***!
  \**************************************************/
/*! exports provided: RoomViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomViewComponent", function() { return RoomViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomViewComponent = /** @class */ (function () {
    function RoomViewComponent(roomService, modalService, formBuilder) {
        this.roomService = roomService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.selectedMate = null;
        this.selectedMateId = null;
    }
    RoomViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.changeRoom.subscribe(function (currentRoom) {
            _this.room = currentRoom;
            _this.mates = _this.roomService.allMates();
        });
        this.emailInviteForm = this.formBuilder.group({
            emailInvite: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
        this.sendMoneyForm = this.formBuilder.group({
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            moneyReason: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    RoomViewComponent.prototype.createRoomModal = function (content) {
        this.modalService.open(content, { centered: true });
    };
    RoomViewComponent.prototype.selectMate = function () {
        var _this = this;
        this.selectedMateIndex = this.mates.findIndex(function (item) { return item._id == _this.selectedMateId; });
        this.selectedMate = this.mates[this.selectedMateIndex];
    };
    RoomViewComponent.prototype.inviteMate = function () {
        this.roomService.inviteMate(this.emailInviteForm.value.emailInvite.trim());
    };
    RoomViewComponent.prototype.sendMoney = function () {
        var toid = this.selectedMateId;
        var roomid = this.room._id;
        var amount = this.sendMoneyForm.value.amount;
        var reason = this.sendMoneyForm.value.moneyReason;
        this.roomService.sendMoney(roomid, toid, amount, reason);
    };
    RoomViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-view',
            template: __webpack_require__(/*! ./room-view.component.html */ "./src/app/room-view/room-view.component.html"),
            styles: [__webpack_require__(/*! ./room-view.component.css */ "./src/app/room-view/room-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RoomViewComponent);
    return RoomViewComponent;
}());



/***/ }),

/***/ "./src/app/rooms/rooms.component.css":
/*!*******************************************!*\
  !*** ./src/app/rooms/rooms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rooms/rooms.component.html":
/*!********************************************!*\
  !*** ./src/app/rooms/rooms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rooms works!\n</p>\n"

/***/ }),

/***/ "./src/app/rooms/rooms.component.ts":
/*!******************************************!*\
  !*** ./src/app/rooms/rooms.component.ts ***!
  \******************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomsComponent = /** @class */ (function () {
    function RoomsComponent() {
    }
    RoomsComponent.prototype.ngOnInit = function () {
    };
    RoomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ./rooms.component.css */ "./src/app/rooms/rooms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        this._firebaseAuth.auth.signOut().then();
    };
    AuthService.prototype.returnEmail = function () {
        return this._firebaseAuth.auth.currentUser.email;
    };
    AuthService.prototype.createUser = function (name, email, password) {
        return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.deleteUser = function () {
        return this.userDetails.delete();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/dbbackend.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dbbackend.service.ts ***!
  \***********************************************/
/*! exports provided: Mate, Transaction, DbbackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mate", function() { return Mate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbbackendService", function() { return DbbackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/ErrorObservable */ "./node_modules/rxjs-compat/_esm5/observable/ErrorObservable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Mate = /** @class */ (function () {
    function Mate() {
    }
    return Mate;
}());

var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());

var DbbackendService = /** @class */ (function () {
    function DbbackendService(http) {
        this.http = http;
        this.trackMate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = 'http://localhost:80/api';
        this.currentUser = null;
    }
    DbbackendService.prototype.returnUser = function () {
        return this.currentUser;
    };
    DbbackendService.prototype.returnUserId = function () {
        return this.currentUser._id;
    };
    DbbackendService.prototype.returnUserName = function () {
        return this.currentUser.name;
    };
    DbbackendService.prototype.createMate = function (name, email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, httpOptions, user, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/mate/create';
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                                'Content-Type': 'application/json'
                            })
                        };
                        user = new Mate();
                        user.name = name;
                        user.email = email;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.post(thisUrl, user, httpOptions)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) { return _this.handleError(res); })).subscribe(function (mate) { _this.currentUser = mate; resolve('success'); });
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.trackMate.emit(this.currentUser);
                            return [2 /*return*/, 'Mate Created'];
                        }
                        else {
                            throw 'Error creating mate';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DbbackendService.prototype.getMate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/mate/' + id;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.get(thisUrl)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) { return _this.handleError(res); })).subscribe(function (mate) { _this.currentUser = mate; resolve('success'); });
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.trackMate.emit(this.currentUser);
                            return [2 /*return*/, result];
                        }
                        else {
                            throw 'Unable to retrieve mate';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DbbackendService.prototype.getMateByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/mateEmail/' + email;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.get(thisUrl)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) { return _this.handleError(res); })).subscribe(function (mate) { _this.currentUser = mate; resolve('success'); });
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.trackMate.emit(this.currentUser);
                            return [2 /*return*/, 'Mate retrieved'];
                        }
                        else {
                            throw 'Unable to retrieve mate';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DbbackendService.prototype.createTransaction = function (title, description, fromid, toid, amount) {
    };
    DbbackendService.prototype.getTransaction = function (id) {
    };
    DbbackendService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
        }
        return new rxjs_observable_ErrorObservable__WEBPACK_IMPORTED_MODULE_2__["ErrorObservable"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DbbackendService.prototype, "trackMate", void 0);
    DbbackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DbbackendService);
    return DbbackendService;
}());



/***/ }),

/***/ "./src/app/services/room.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: genericId, Room, RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericId", function() { return genericId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dbbackend.service */ "./src/app/services/dbbackend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var genericId = /** @class */ (function () {
    function genericId() {
    }
    return genericId;
}());

var Room = /** @class */ (function () {
    function Room() {
        this.admin = new genericId();
        this.recentlyAdded = new genericId();
    }
    return Room;
}());

var RoomService = /** @class */ (function () {
    function RoomService(http, dbbackendservice) {
        this.http = http;
        this.dbbackendservice = dbbackendservice;
        this.changeRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = 'http://localhost:80/api';
        this.currentRoom = null;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    RoomService.prototype.returnRoom = function () {
        return this.currentRoom;
    };
    RoomService.prototype.createRoom = function (name, creator) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, room, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/room/create';
                        room = new Room();
                        room.name = name;
                        room.admin.id = creator._id;
                        room.admin.name = creator.name;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.post(thisUrl, room, _this.httpOptions)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _this.dbbackendservice.handleError(res); })).subscribe(function (room) { resolve('Room created'); });
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, 'Room created'];
                        }
                        else {
                            throw 'Unable to create room';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomService.prototype.loadRoom = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/room/' + id;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.get(thisUrl)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _this.dbbackendservice.handleError(res); })).subscribe(function (room) { _this.currentRoom = room; resolve('success'); });
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.changeRoom.emit(this.currentRoom);
                            return [2 /*return*/, this.currentRoom];
                        }
                        else {
                            throw 'Unable to load room';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomService.prototype.joinRoom = function (id, name, key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, userId, info, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/joinRoom';
                        userId = this.dbbackendservice.returnUserId();
                        info.id = id;
                        info.name = name;
                        info.roomKey = key;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.post(thisUrl, info, _this.httpOptions)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _this.dbbackendservice.handleError(res); })).subscribe(function (room) { _this.dbbackendservice.getMate(userId); }); // refresh user's rooms
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, 'Room joined'];
                        }
                        else {
                            throw 'Unable to join room';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomService.prototype.allMates = function () {
        var balances = new Array();
        var userId = this.dbbackendservice.returnUserId();
        for (var _i = 0, _a = this.currentRoom.balances; _i < _a.length; _i++) {
            var balance = _a[_i];
            if (balance.aid == userId) {
                balances.push({ _id: balance.bid, name: balance.bname, owed: balance.owed });
            }
            else if (balance.bid == userId) {
                balances.push({ _id: balance.aid, name: balance.aname, owed: -balance.owed });
            }
        }
        return balances;
    };
    RoomService.prototype.inviteMate = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, info, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/userMgmt/invite';
                        info = { email: '', inviter: '', room: '', roomKey: '' };
                        info.email = email;
                        info.inviter = this.dbbackendservice.returnUserName();
                        info.room = this.currentRoom.name;
                        info.roomKey = this.currentRoom.key;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.post(thisUrl, info, _this.httpOptions)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _this.dbbackendservice.handleError(res); })).subscribe(function (json) { return resolve(json); });
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomService.prototype.sendMoney = function (roomid, toid, amount, reason) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var thisUrl, transaction, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thisUrl = this.url + '/transaction/create';
                        transaction = new _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
                        transaction.amount = amount;
                        transaction.roomid = roomid;
                        transaction.toid = toid;
                        transaction.fromid = this.dbbackendservice.returnUserId();
                        transaction.title = reason;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.post(thisUrl, transaction, _this.httpOptions)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _this.dbbackendservice.handleError(res); })).subscribe(function (transaction) { return resolve(transaction); });
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.loadRoom(this.currentRoom._id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RoomService.prototype, "changeRoom", void 0);
    RoomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_3__["DbbackendService"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n<form action=\"\" class=\"form-horizontal\" [formGroup]=\"form\">\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-12\">\n      <label for=\"name\" class=\"control-label required\">Name</label>\n      <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\n      <div class=\"err\" *ngIf=\"!this.form.get('name').valid && this.form.get('name').touched\">\n        Please Enter a Name\n      </div>     \n    </div>  \n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-12\">\n      <label for=\"email\" class=\"control-label required\">Email</label>\n      <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n      <div class=\"err\" *ngIf=\"!this.form.get('email').valid && this.form.get('email').touched\">\n        Please Enter a Valid Email\n      </div> \n    </div>  \n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-12\">\n      <label for=\"password\" class=\"control-label required\">Password</label>\n      <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n      <div class=\"err\" *ngIf=\"!this.form.get('password').valid && this.form.get('password').touched\">\n        Please enter a password  with 6 or more characters\n      </div> \n    </div>  \n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signUp()\" [disabled]=\"!form.valid\">\n    Sign up\n  </button>\n  <button class=\"btn\" (click)=\"reset()\">Clear</button>\n\n  <div class=\"err\" *ngIf=\"emailTaken\">\n    Email already in use.\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dbbackend.service */ "./src/app/services/dbbackend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, dbbackendservice, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.dbbackendservice = dbbackendservice;
        this.formBuilder = formBuilder;
        this.user = {
            name: '',
            email: '',
            password: ''
        };
        this.emailTaken = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.emailTaken = false;
        var name = this.form.value.name.trim();
        var email = this.form.value.email.trim();
        var password = this.form.value.password;
        this.authService.createUser(name, email, password).then(function (res) {
            res.updateProfile({ displayName: name });
            _this.authService.signInRegular(email, password).then(function (res) {
                console.log(res);
                _this.dbbackendservice.createMate(name, email).then(function (res) {
                    console.log(res);
                    _this.router.navigate(['view']);
                }).catch(function (err) {
                    console.log('Error creating mate');
                    _this.authService.deleteUser();
                });
            }).catch(function (err) { return console.log('error: ' + err); });
        }).catch(function (err) {
            console.log('error: ' + err);
            _this.emailTaken = true;
        });
    };
    SignupComponent.prototype.reset = function () {
        this.form.reset();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_dbbackend_service__WEBPACK_IMPORTED_MODULE_3__["DbbackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD34j1ps1AQQiwriJsdMauxsmzZUGX5SA8",
        authDomain: "roomio-63fc5.firebaseapp.com",
        databaseURL: "https://roomio-63fc5.firebaseio.com",
        projectId: "roomio-63fc5",
        storageBucket: "roomio-63fc5.appspot.com",
        messagingSenderId: "138792748529"
    }
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/e/LinuxStuff/roomio/roomio-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_footer_footer_module_ts"],{

/***/ 9782:
/*!*************************************************!*\
  !*** ./src/app/footer/footer-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.page */ 67);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ 8458);





const routes = [
    {
        path: 'tabs',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        children: [
            {
                path: 'social',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'camera',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_camera-tab_camera-tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../camera-tab/camera-tab.module */ 8338)).then(m => m.CameraTabModule)
            },
            {
                path: 'feed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/social',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/tabs/camera',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 6444:
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-routing.module */ 9782);
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.page */ 67);







let FooterModule = class FooterModule {
};
FooterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_1__.FooterComponent]
    })
], FooterModule);



/***/ }),

/***/ 67:
/*!***************************************!*\
  !*** ./src/app/footer/footer.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.page.html?ngResource */ 5298);
/* harmony import */ var _footer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.page.scss?ngResource */ 9939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FooterComponent = class FooterComponent {
    constructor() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _footer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 2010);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 9444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ 4260);






let LoginComponent = class LoginComponent {
    constructor(formBuilder, socialAuthService) {
        this.formBuilder = formBuilder;
        this.socialAuthService = socialAuthService;
        this.isLoggedin = false;
        this.googleLoginOptions = {
            scope: 'https://www.googleapis.com/auth/photoslibrary'
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = (user != null);
            this.socialUserAuthToken = this.socialUser.authToken;
            console.log(this.socialUser.authToken);
        });
    }
    ;
    loginWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions);
    }
    ;
    logOut() {
        this.socialAuthService.signOut();
    }
    ;
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__.SocialAuthService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 9939:
/*!****************************************************!*\
  !*** ./src/app/footer/footer.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".footer-line {\n  height: 1px;\n  width: 100%;\n  background-color: #6e6e6e;\n}\n\n.footer-wrapper {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0 15px;\n  background-color: #191919;\n}\n\n.footer-icon-wrapper {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.footer-icon-wrapper img {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImZvb3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWxpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAyNSwgMjUpO1xufVxuXG4uZm9vdGVyLWljb24td3JhcHBlciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZm9vdGVyLWljb24td3JhcHBlciBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9444:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5298:
/*!****************************************************!*\
  !*** ./src/app/footer/footer.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <div class=\"footer-line\"></div>\n  <div class=\"footer-wrapper\">\n    <ion-tab-button class=\"footer-icon-wrapper\" tab=\"social\">\n      <img src=\"../../assets/icons/social_tab_white.svg\">\n    </ion-tab-button>\n    <ion-tab-button class=\"footer-icon-wrapper\" tab=\"camera\">\n      <img src=\"../../assets/icons/camera_tab_white.svg\">\n    </ion-tab-button>\n    <ion-tab-button class=\"footer-icon-wrapper\" tab=\"feed\">\n      <img src=\"../../assets/icons/feed_tab_white.svg\">\n    </ion-tab-button>\n  </div>\n</ion-tabs>\n";

/***/ }),

/***/ 2010:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n\n  <div class=\"container\" style=\"max-width: 550px\">\n    <h2 class=\"text-center mb-5\">Angular Login with Google</h2>\n  \n    <div *ngIf=\"isLoggedin === false\">\n      <div>\n        <img src=\"../assets/img/google_login_btn/btn_google_signin_dark_normal_web.png\" type=\"button\" (click)=\"loginWithGoogle()\" class=\"btn btn-danger\">\n      </div>\n    </div>\n  \n    <div *ngIf=\"isLoggedin === true\">\n      <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" class=\"form-control\" [value]=\"socialUser.firstName\" id=\"firstname\" readonly>\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" class=\"form-control\" [value]=\"socialUser.lastName\" id=\"lastname\" readonly>\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\" [value]=\"socialUser.email\" id=\"email\" readonly>\n      </div>\n  \n      <button type=\"button\" (click)=\"logOut()\" class=\"btn btn-primary\">Log Out</button>\n    </div>\n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_footer_footer_module_ts.js.map
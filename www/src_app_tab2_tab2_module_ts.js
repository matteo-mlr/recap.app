"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3703:
/*!*******************************************************!*\
  !*** ./src/app/tab2/feed-item/feed-item.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedItemComponent": () => (/* binding */ FeedItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feed_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed-item.component.html?ngResource */ 5872);
/* harmony import */ var _feed_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed-item.component.scss?ngResource */ 5132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let FeedItemComponent = class FeedItemComponent {
    constructor() {
        this.currentIndex = 0;
    }
    ngOnInit() {
        this.posts = this.group.posts.slice(0, 3);
        this.date = this.posts[0].date;
    }
    slideChanged() {
        this.slides.getActiveIndex().then(index => {
            this.currentIndex = index;
        });
    }
    ;
};
FeedItemComponent.ctorParameters = () => [];
FeedItemComponent.propDecorators = {
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSlides,] }]
};
FeedItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-feed-item',
        template: _feed_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feed_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedItemComponent);



/***/ }),

/***/ 2223:
/*!*******************************************************!*\
  !*** ./src/app/tab2/feed-list/feed-list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedListComponent": () => (/* binding */ FeedListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feed_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed-list.component.html?ngResource */ 8777);
/* harmony import */ var _feed_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed-list.component.scss?ngResource */ 8499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/group.service */ 1805);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let FeedListComponent = class FeedListComponent {
    constructor(router) {
        this.router = router;
        this.groupService = new src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__.GroupService();
        this.groups = this.groupService.getGroups();
    }
    ngOnInit() { }
    goToGroup(group) {
        this.router.navigate(['/tabs/social/group-detail', group.id]);
    }
};
FeedListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
FeedListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-feed-list',
        template: _feed_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feed_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedListComponent);



/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed-list/feed-list.component */ 2223);
/* harmony import */ var _feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-item/feed-item.component */ 3703);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab2PageRoutingModule
        ],
        declarations: [
            _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
            _feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_2__.FeedItemComponent,
            _feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_1__.FeedListComponent
        ]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Tab2Page = class Tab2Page {
    constructor() { }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 5132:
/*!********************************************************************!*\
  !*** ./src/app/tab2/feed-item/feed-item.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".feed-item-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.picture-slider {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.picture-wrapper {\n  border-radius: 10px;\n}\n\n.picture {\n  padding-top: 50%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  border-radius: 10px;\n}\n\n.item-footer {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin: 20px 0 25px 0;\n}\n\n.item-description {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.item-description p {\n  margin: 0;\n  color: #ffffff;\n  font-size: 10pt;\n}\n\n.item-description p:first-child {\n  margin-top: -4px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.item-description p:nth-child(2) {\n  margin: 3px 0 0 0;\n  color: #c8c8c8;\n  font-size: 7pt;\n}\n\n.index-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.index-element {\n  height: 7px;\n  width: 7px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  margin: 0 3.5px;\n  opacity: 0.5;\n  transition: all 150ms;\n}\n\n.index-element.active {\n  opacity: 1;\n  transition: all 150ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoiZmVlZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQtaXRlbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5waWN0dXJlLXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucGljdHVyZS13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBpY3R1cmUge1xuICBwYWRkaW5nLXRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaXRlbS1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAyMHB4IDAgMjVweCAwO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gcDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gcDpudGgtY2hpbGQoMikge1xuICBtYXJnaW46IDNweCAwIDAgMDtcbiAgY29sb3I6ICNjOGM4Yzg7XG4gIGZvbnQtc2l6ZTogN3B0O1xufVxuXG4uaW5kZXgtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5kZXgtZWxlbWVudCB7XG4gIGhlaWdodDogN3B4O1xuICB3aWR0aDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCAzLjVweDtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXM7XG59XG5cbi5pbmRleC1lbGVtZW50LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcztcbn1cbiJdfQ== */";

/***/ }),

/***/ 8499:
/*!********************************************************************!*\
  !*** ./src/app/tab2/feed-list/feed-list.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".container {\n  padding: 0px 20px;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 100%;\n  background-color: #191919;\n}\n\n.header {\n  display: flex;\n  width: 100%;\n  padding: 40px 0px 20px 0px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n}\n\n.icon {\n  font-size: 30px;\n}\n\n.title {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4IDBweCAyMHB4IDBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 5872:
/*!********************************************************************!*\
  !*** ./src/app/tab2/feed-item/feed-item.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"feed-item-container\">\n  <ion-slides class=\"picture-slider\" (ionSlideDidChange)=\"slideChanged()\">\n    <ion-slide class=\"picture-wrapper\" *ngFor='let post of posts'>\n      <div class=\"picture\" style=\"background-image: url(/assets/{{post.img}}/)\"></div>\n    </ion-slide>\n  </ion-slides>\n  <div class=\"item-footer\">\n    <div class=\"item-description\">\n      <p>{{group.name}}</p>\n      <p>{{date}}</p>\n    </div>\n    <div class=\"index-wrapper\">\n      <div class=\"index-element\" *ngFor=\"let post of posts; let i = index\" class=\"{{i === currentIndex ? 'active' : ''}}\"></div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 8777:
/*!********************************************************************!*\
  !*** ./src/app/tab2/feed-list/feed-list.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"feed-list-container\">\n  <app-feed-item *ngFor='let group of groups; let i = index' [group]=groups[i] (click)='goToGroup(group)'></app-feed-item>\n</div>\n";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <div class=\"container\">\n    <div class=\"header\">\n      <div class=\"camera-button icon\">\n        <ion-icon name=\"camera-outline\" routerLink='/tabs/camera'></ion-icon>\n      </div>\n      <div class=\"title\">Feed</div>\n      <div class=\"contact-button icon\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n      </div>\n    </div>\n    <app-feed-list></app-feed-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map
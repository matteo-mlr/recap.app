"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 7659:
/*!***********************************************************!*\
  !*** ./src/app/tab1/friend-list/friend-list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendListComponent": () => (/* binding */ FriendListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _friend_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend-list.component.html?ngResource */ 9151);
/* harmony import */ var _friend_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend-list.component.scss?ngResource */ 8866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FriendListComponent = class FriendListComponent {
    constructor() {
        this.friends = [
            { name: 'Max', img: 'pp1.jpg', imgCount: 6 },
            { name: 'Matteo', img: 'pp2.jpg', imgCount: 3 },
            { name: 'Alex', img: 'pp3.jpg', imgCount: 8 },
            { name: 'Robin', img: 'pp4.jpg', imgCount: 10 }
        ];
    }
    ngOnInit() { }
};
FriendListComponent.ctorParameters = () => [];
FriendListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-friend-list',
        template: _friend_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_friend_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FriendListComponent);



/***/ }),

/***/ 5880:
/*!*************************************************************!*\
  !*** ./src/app/tab1/group-detail/group-detail.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupDetailComponent": () => (/* binding */ GroupDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _group_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-detail.component.html?ngResource */ 3677);
/* harmony import */ var _group_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-detail.component.scss?ngResource */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ 1805);






let GroupDetailComponent = class GroupDetailComponent {
    constructor(groupService, route) {
        this.groupService = groupService;
        this.route = route;
        this.group = { id: 0, path: '', name: '', members: 0 };
    }
    ngOnInit() {
        const routeSnapshot = this.route.snapshot;
        const id = routeSnapshot.params.id;
        this.group = this.groupService.getGroup(+id);
    }
};
GroupDetailComponent.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__.GroupService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
GroupDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-group-detail',
        template: _group_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_group_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GroupDetailComponent);



/***/ }),

/***/ 6106:
/*!***********************************************!*\
  !*** ./src/app/tab1/group/group.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupComponent": () => (/* binding */ GroupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group.component.html?ngResource */ 8529);
/* harmony import */ var _group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.component.scss?ngResource */ 7619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/group.service */ 1805);





let GroupComponent = class GroupComponent {
    // [
    //   {path:'img1.jpg', name:'Berlin', members:4},
    //   {path:'img2.jpg', name:'Rio', members:3},
    //   {path:'img3.jpg', name:'Milano', members:15},
    //   {path:'img4.jpg', name:'Rom', members:7},
    //   {path:'img1.jpg', name:'Berlin', members:4},
    //   {path:'img2.jpg', name:'Rio', members:3},
    //   {path:'img3.jpg', name:'Milano', members:15},
    //   {path:'img4.jpg', name:'Rom', members:7},
    // ];
    constructor(groupService) {
        this.groupService = groupService;
        this.groups = [];
    }
    ngOnInit() {
        this.groups = this.groupService.getGroups();
    }
};
GroupComponent.ctorParameters = () => [
    { type: _services_group_service__WEBPACK_IMPORTED_MODULE_2__.GroupService }
];
GroupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-group',
        template: _group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
    //TODO: eher groupListComponent
], GroupComponent);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-detail/group-detail.component */ 5880);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page */ 6923);





const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_1__.Tab1Page,
        pathMatch: 'full'
    },
    {
        path: 'group-detail/:id',
        component: _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_0__.GroupDetailComponent,
        pathMatch: 'full'
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group/group.component */ 6106);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friend-list/friend-list.component */ 7659);
/* harmony import */ var _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-detail/group-detail.component */ 5880);










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [
            _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
            _group_group_component__WEBPACK_IMPORTED_MODULE_1__.GroupComponent,
            _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_3__.FriendListComponent,
            _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_4__.GroupDetailComponent
        ]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Tab1Page = class Tab1Page {
    constructor() {
        this.activeButton = 0;
    }
    tabAction(buttonNumber) {
        this.activeButton = buttonNumber;
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8866:
/*!************************************************************************!*\
  !*** ./src/app/tab1/friend-list/friend-list.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".list-item {\n  display: flex;\n  width: 100%;\n  padding: 15px 0px;\n  border-bottom: solid #707070;\n}\n\n.profile-picture {\n  min-height: 70px;\n  min-width: 70px;\n  background-size: cover;\n  border-radius: 100%;\n  margin-right: 20px;\n}\n\n.friend-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.friend-name {\n  padding-bottom: 5px;\n}\n\n.friend-detail {\n  font-weight: normal;\n  font-size: 14px;\n}\n\n.list-buttons {\n  display: flex;\n  align-items: center;\n  color: white;\n  font-size: 30px;\n}\n\n.list-button {\n  margin-right: 15px;\n}\n\n.list-button:last-child {\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSiIsImZpbGUiOiJmcmllbmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICM3MDcwNzA7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmV7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mcmllbmQtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG59XHJcblxyXG4uZnJpZW5kLW5hbWUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmZyaWVuZC1kZXRhaWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmxpc3QtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubGlzdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubGlzdC1idXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 8806:
/*!**************************************************************************!*\
  !*** ./src/app/tab1/group-detail/group-detail.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  padding: 0px 20px;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 100%;\n  background-color: #191919;\n}\n\n.test {\n  width: 100%;\n  color: white;\n}\n\n.header {\n  display: flex;\n  width: 100%;\n  padding: 40px 0px 20px 0px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n}\n\n.icon {\n  font-size: 30px;\n}\n\n.back-button {\n  margin-right: 10px;\n}\n\n.header-info {\n  width: 100%;\n}\n\n.header-title {\n  margin-bottom: 5px;\n}\n\n.header-details {\n  font-size: 14px;\n  color: #707070;\n}\n\n.list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.post {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.post-img {\n  background-color: #222222;\n  width: 100%;\n  padding-top: 100%;\n  background-size: cover;\n  height: 0px;\n  border-radius: 10px;\n}\n\n.post-details {\n  display: flex;\n  margin-top: 10px;\n}\n\n.post-info {\n  width: 100%;\n  color: white;\n}\n\n.post-author {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.post-date {\n  font-size: 10px;\n  font-weight: bold;\n  color: #707070;\n}\n\n.button-container {\n  display: flex;\n  color: #C95064;\n}\n\n.like-button {\n  font-size: 22px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJncm91cC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG59XHJcblxyXG4udGVzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweCAyMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItZGV0YWlscyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnBvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucG9zdC1pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnBvc3QtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBvc3QtaW5mbyB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wb3N0LWF1dGhvciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnBvc3QtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICNDOTUwNjQ7XHJcbn1cclxuXHJcbi5saWtlLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7619:
/*!************************************************************!*\
  !*** ./src/app/tab1/group/group.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.list-item {\n  background-color: #222222;\n  width: 47.5%;\n  padding-top: 47.5%;\n  background-size: cover;\n  height: 0px;\n  border-radius: 10px;\n  margin-bottom: 5%;\n}\n\n.flex-row {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.group-info {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  bottom: 30px;\n  padding: 0px 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFHSSxXQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFKSiIsImZpbGUiOiJncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuLmxpc3QtaXRlbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcclxuICAgIHdpZHRoOiA0Ny41JTtcclxuICAgIHBhZGRpbmctdG9wOiA0Ny41JTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgIC8vZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmdyb3VwLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".container {\n  padding: 0px 20px;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 100%;\n  background-color: #191919;\n}\n\n.header {\n  display: flex;\n  width: 100%;\n  padding: 40px 0px 20px 0px;\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n}\n\n.icon {\n  font-size: 30px;\n}\n\n.title {\n  width: 100%;\n  text-align: center;\n}\n\n.tabs {\n  display: flex;\n  width: 100%;\n  font-size: 22px;\n  font-weight: bold;\n  color: #707070;\n  margin-bottom: 30px;\n}\n\n.tab {\n  width: 100%;\n  text-align: center;\n}\n\n.active {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNDBweCAwcHggMjBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGFiIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gICAgY29sb3I6d2hpdGVcclxufVxyXG5cclxuXHJcblxyXG4vLyBhcHAtZ3JvdXAge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcclxuLy8gfVxyXG5cclxuLy8gLmdyb3VwLWNvbXBvbmVudHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDUwJTtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMjBweDsgXHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGFwcC1ncm91cDpsYXN0LWNoaWxke1xyXG4vLyAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4vLyB9XHJcbiJdfQ== */";

/***/ }),

/***/ 9151:
/*!************************************************************************!*\
  !*** ./src/app/tab1/friend-list/friend-list.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"list\">\n\n  <div *ngFor=\"let friend of friends\" class=\"list-item\">\n\n    <div class=\"profile-picture\" style=\"background-image: url('/assets/{{friend.img}}');\"></div>\n\n    <div class=\"friend-info\">\n      <div class=\"friend-name\">{{friend.name}}</div>\n      <div class=\"friend-detail\">{{friend.imgCount}} Fotos</div>\n    </div>\n\n    <div class=\"list-buttons\">\n      <ion-icon class=\"list-button\" name=\"camera-outline\" routerLink='/tabs/camera'></ion-icon>\n      <ion-icon class=\"list-button\" name=\"ellipsis-horizontal\"></ion-icon>\n    </div>\n\n  </div>\n\n</div>\n";

/***/ }),

/***/ 3677:
/*!**************************************************************************!*\
  !*** ./src/app/tab1/group-detail/group-detail.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n\n  <div class=\"container\">\n\n    <div class=\"header\">\n\n      <div routerLink=\"../..\" class=\"back-button icon\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </div>\n\n      <div class=\"header-info\">\n        <div class=\"header-title\">{{group.name}}</div>\n        <div class=\"header-details\">10.09.21 - 13.09.21</div>\n      </div>\n\n      <div class=\"camera-button icon\">\n        <ion-icon name=\"camera-outline\" routerLink='/tabs/camera'></ion-icon>\n      </div>\n    </div>\n\n\n    <div class=\"list\">\n\n      <div *ngFor=\"let post of group.posts\"  class=\"post\">\n        <div class=\"post-img\" style=\"background-image: url('/assets/{{post.img}}');\"></div>\n\n        <div class=\"post-details\">\n\n          <div class=\"post-info\">\n            <div class=\"post-author\">Posted by {{post.author}} </div>\n            <div class=\"post-date\">{{post.date}} Uhr</div>\n          </div>\n\n          <div class=\"button-container\">\n            {{post.likes}}<ion-icon class=\"like-button\" name=\"heart\"></ion-icon>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 8529:
/*!************************************************************!*\
  !*** ./src/app/tab1/group/group.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"list\">\n\n        <div *ngFor=\"let group of groups\"\n            style=\"background-image: url('/assets/{{group.path}}/');\"\n            class=\"list-item\"\n            [routerLink]=\"['group-detail', group.id]\"\n             >\n            <div class=\"group-info\">\n                <div class=\"group-name\">{{group.name}}</div>\n                <div class=\"group-members\">{{group.members}} <ion-icon name=\"person\"></ion-icon></div>\n            </div>\n        </div>\n\n</div>\n";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n\n  <div class=\"container\">\n    <div class=\"header\">\n      <div class=\"camera-button icon\">\n        <ion-icon name=\"camera-outline\" routerLink='/tabs/camera'></ion-icon>\n      </div>\n      <div class=\"title\" >Social</div>\n      <div class=\"contact-button icon\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n      </div>\n    </div>\n\n    <div class=\"tabs\">\n      <div (click)=\"tabAction(0)\" class=\"friends tab {{activeButton === 0 ? 'active' : ''}}\">Groups</div>\n      <div (click)=\"tabAction(1)\" class=\"groups tab {{activeButton === 1 ? 'active' : ''}}\">Friends</div>\n    </div>\n\n    <app-group *ngIf=\"activeButton === 0\"></app-group>\n    <app-friend-list *ngIf=\"activeButton === 1\"></app-friend-list>\n\n    <div class=\"footer\">\n    </div>\n\n  </div>\n\n<!-- <ion-router-outlet></ion-router-outlet> -->\n<!-- <router-outlet></router-outlet> -->\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map
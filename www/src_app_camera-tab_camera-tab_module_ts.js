"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_camera-tab_camera-tab_module_ts"],{

/***/ 7213:
/*!***********************************************************************!*\
  !*** ./src/app/camera-tab/camera-preview/camera-preview.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPreviewComponent": () => (/* binding */ CameraPreviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camera_preview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-preview.component.html?ngResource */ 6874);
/* harmony import */ var _camera_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-preview.component.scss?ngResource */ 2250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 3694);







let CameraPreviewComponent = class CameraPreviewComponent {
    constructor(route, router, cookieService) {
        this.route = route;
        this.router = router;
        this.cookieService = cookieService;
        this.images = [];
        this.currentIndex = 0;
    }
    ngOnInit() {
        this.getCookieImages();
        const eventEmitter = this.route.snapshot.paramMap.get('eventEmitter');
        if (eventEmitter == 'camera') {
            this.images.push(this.route.snapshot.paramMap.get('photo'));
            this.setCookieImages();
        }
        else {
            const images = this.route.snapshot.paramMap.get('images').split(',');
            for (const image of images) {
                this.images.push(image);
            }
        }
    }
    ;
    setCookieImages() {
        let cookieImages = this.images.join(',');
        this.cookieService.set('previewImages', cookieImages);
        console.log(cookieImages);
    }
    ;
    getCookieImages() {
        if (this.cookieService.check('previewImages')) {
            let cookieImages = this.cookieService.get('previewImages');
            this.images = cookieImages.split(',');
        }
    }
    slideChanged() {
        this.slides.getActiveIndex().then(index => {
            this.currentIndex = index;
        });
    }
    ;
    goToSendPage() {
        this.router.navigate(['/tabs/camera/camera-send']);
    }
};
CameraPreviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService }
];
CameraPreviewComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSlides,] }]
};
CameraPreviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-camera-preview',
        template: _camera_preview_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camera_preview_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CameraPreviewComponent);



/***/ }),

/***/ 6423:
/*!*****************************************************************!*\
  !*** ./src/app/camera-tab/camera-send/camera-send.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSendComponent": () => (/* binding */ CameraSendComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camera_send_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-send.component.html?ngResource */ 5408);
/* harmony import */ var _camera_send_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-send.component.scss?ngResource */ 4);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let CameraSendComponent = class CameraSendComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.activeButton = 0;
    }
    ngOnInit() { }
    tabAction(buttonNumber) {
        this.activeButton = buttonNumber;
    }
    goBack() {
        this.router.navigate(['..']);
    }
};
CameraSendComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
CameraSendComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-camera-send',
        template: _camera_send_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camera_send_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CameraSendComponent);



/***/ }),

/***/ 4844:
/*!*********************************************************!*\
  !*** ./src/app/camera-tab/camera-tab-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraTabRoutingModule": () => (/* binding */ CameraTabRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-preview/camera-preview.component */ 7213);
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera/camera.component */ 9730);
/* harmony import */ var _camera_tab_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-tab.page */ 9986);
/* harmony import */ var _camera_send_camera_send_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera-send/camera-send.component */ 6423);







const routes = [
    {
        path: '',
        component: _camera_tab_page__WEBPACK_IMPORTED_MODULE_2__.CameraTabComponent,
        children: [
            {
                path: 'camera-live',
                component: _camera_camera_component__WEBPACK_IMPORTED_MODULE_1__.CameraComponent
            },
            {
                path: 'camera-preview',
                component: _camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_0__.CameraPreviewComponent
            },
            {
                path: 'camera-send',
                component: _camera_send_camera_send_component__WEBPACK_IMPORTED_MODULE_3__.CameraSendComponent
            },
            {
                path: '',
                redirectTo: 'camera-live',
                pathMatch: 'full'
            }
        ]
    }
];
let CameraTabRoutingModule = class CameraTabRoutingModule {
};
CameraTabRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], CameraTabRoutingModule);



/***/ }),

/***/ 8338:
/*!*************************************************!*\
  !*** ./src/app/camera-tab/camera-tab.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraTabModule": () => (/* binding */ CameraTabModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _camera_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-tab.page */ 9986);
/* harmony import */ var _camera_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-tab-routing.module */ 4844);
/* harmony import */ var _camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-preview/camera-preview.component */ 7213);
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera/camera.component */ 9730);
/* harmony import */ var _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-gallery/user-gallery.component */ 3538);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-webcam */ 9839);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ 3694);













let CameraTabModule = class CameraTabModule {
};
CameraTabModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _camera_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__.CameraTabRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            ngx_webcam__WEBPACK_IMPORTED_MODULE_11__.WebcamModule
        ],
        declarations: [
            _camera_tab_page__WEBPACK_IMPORTED_MODULE_0__.CameraTabComponent,
            _camera_camera_component__WEBPACK_IMPORTED_MODULE_3__.CameraComponent,
            _camera_preview_camera_preview_component__WEBPACK_IMPORTED_MODULE_2__.CameraPreviewComponent,
            _user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_4__.UserGalleryComponent
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__.CookieService
        ]
    })
], CameraTabModule);



/***/ }),

/***/ 9986:
/*!***********************************************!*\
  !*** ./src/app/camera-tab/camera-tab.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraTabComponent": () => (/* binding */ CameraTabComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camera_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-tab.page.html?ngResource */ 5148);
/* harmony import */ var _camera_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-tab.page.scss?ngResource */ 7166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CameraTabComponent = class CameraTabComponent {
    constructor() { }
    ;
};
CameraTabComponent.ctorParameters = () => [];
CameraTabComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _camera_tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camera_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CameraTabComponent);



/***/ }),

/***/ 9730:
/*!*******************************************************!*\
  !*** ./src/app/camera-tab/camera/camera.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraComponent": () => (/* binding */ CameraComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camera_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.component.html?ngResource */ 2660);
/* harmony import */ var _camera_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.component.scss?ngResource */ 7906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/camera.service */ 3942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let CameraComponent = class CameraComponent {
    constructor(cameraService, router) {
        this.cameraService = cameraService;
        this.router = router;
    }
    ngOnInit() { }
    get triggerObservable() {
        return this.cameraService.triggerObservable;
    }
    triggerPhoto() {
        this.cameraService.triggerPhoto();
    }
    takePhoto(webcamImage) {
        this.capturedPhoto = this.cameraService.handleImage(webcamImage);
        this.router.navigate(['/tabs/camera/camera-preview', { eventEmitter: 'camera', photo: this.capturedPhoto }]);
    }
    showNextWebcam(directionOrDeviceId) {
        this.cameraService.showNextWebcam(directionOrDeviceId);
    }
    cameraWasSwitched(deviceId) {
        this.cameraService.cameraWasSwitched(deviceId);
    }
    get nextWebcamObservable() {
        return this.cameraService.nextWebcamObservable;
    }
};
CameraComponent.ctorParameters = () => [
    { type: _services_camera_service__WEBPACK_IMPORTED_MODULE_2__.CameraService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CameraComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-camera',
        template: _camera_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camera_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CameraComponent);



/***/ }),

/***/ 7989:
/*!*********************************************************!*\
  !*** ./src/app/camera-tab/user-gallery/gallery-item.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryItem": () => (/* binding */ GalleryItem)
/* harmony export */ });
class GalleryItem {
    constructor(imagePath, selected) {
        this.imagePath = imagePath;
        this.selected = selected;
    }
    ;
}


/***/ }),

/***/ 3538:
/*!*******************************************************************!*\
  !*** ./src/app/camera-tab/user-gallery/user-gallery.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGalleryComponent": () => (/* binding */ UserGalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-gallery.component.html?ngResource */ 2307);
/* harmony import */ var _user_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-gallery.component.scss?ngResource */ 1595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _gallery_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-item */ 7989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let UserGalleryComponent = class UserGalleryComponent {
    constructor(router) {
        this.router = router;
        this.images = [new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_1.jpg', false), new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_2.jpg', false),
            new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_3.jpg', false), new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_4.jpg', false),
            new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_5.jpg', false), new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_6.jpg', false),
            new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_7.jpg', false), new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_8.jpg', false),
            new _gallery_item__WEBPACK_IMPORTED_MODULE_2__.GalleryItem('../../assets/img/img_9.jpg', false),];
    }
    ngOnInit() { }
    changeSelectedState(index) {
        this.images[index].selected = !this.images[index].selected;
    }
    getImageSelected() {
        for (const image of this.images) {
            if (image.selected === true) {
                return true;
            }
        }
        return false;
    }
    getSelectedImages() {
        const selectedImages = [];
        for (const image of this.images) {
            if (image.selected === true) {
                selectedImages.push(image.imagePath);
            }
        }
        return selectedImages;
    }
    unselectAllImages() {
        for (const image of this.images) {
            image.selected = false;
        }
    }
    routeToPreview() {
        const selectedImages = this.getSelectedImages();
        this.router.navigate(['/tabs/camera/camera-preview', { images: selectedImages }]);
        this.unselectAllImages();
    }
};
UserGalleryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserGalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-gallery',
        template: _user_gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserGalleryComponent);



/***/ }),

/***/ 3942:
/*!********************************************!*\
  !*** ./src/app/services/camera.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraService": () => (/* binding */ CameraService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);



let CameraService = class CameraService {
    constructor() {
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.webcamImage = null;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    triggerPhoto() {
        this.trigger.next();
    }
    handleImage(webcamImage) {
        return webcamImage['_imageAsDataUrl'];
    }
    showNextWebcam(directionOrDeviceId) {
        this.nextWebcam.next(directionOrDeviceId);
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
};
CameraService.ctorParameters = () => [];
CameraService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CameraService);



/***/ }),

/***/ 2250:
/*!************************************************************************************!*\
  !*** ./src/app/camera-tab/camera-preview/camera-preview.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".camera-preview-component {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #191919;\n}\n\n.top-camera-preview-control-panel {\n  width: 100%;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 25px;\n}\n\n.top-camera-preview-control-panel-part {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-camera-preview-control-panel-part:nth-child(1) {\n  justify-content: flex-start;\n}\n\n.top-camera-preview-control-panel-part:nth-child(2) p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: 0.25px;\n  color: #fff;\n}\n\n.top-camera-preview-control-panel img {\n  width: 12px;\n}\n\n.picture-preview-component {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.picture-slider {\n  height: 450px;\n  width: 100%;\n}\n\n.picture {\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 80%;\n  border-radius: 10px;\n}\n\n.index-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.index-element {\n  height: 7px;\n  width: 7px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  margin: 0 3.5px;\n  opacity: 0.5;\n  transition: all 150ms;\n}\n\n.index-element.active {\n  opacity: 1;\n  transition: all 150ms;\n}\n\n.button-wrapper {\n  position: absolute;\n  bottom: 50px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.button-wrapper-part {\n  width: 30%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.next-button {\n  height: 60px;\n  width: 60px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.next-button:active {\n  transform: scale(0.95);\n  transition: all 50ms;\n}\n\n.next-button img {\n  width: 16px;\n  transform: translateX(1.5px) rotate(180deg);\n}\n\n.add-button img {\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwREFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoiY2FtZXJhLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtZXJhLXByZXZpZXctY29tcG9uZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG59XG5cbi50b3AtY2FtZXJhLXByZXZpZXctY29udHJvbC1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xufVxuXG4udG9wLWNhbWVyYS1wcmV2aWV3LWNvbnRyb2wtcGFuZWwtcGFydCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wLWNhbWVyYS1wcmV2aWV3LWNvbnRyb2wtcGFuZWwtcGFydDpudGgtY2hpbGQoMSkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50b3AtY2FtZXJhLXByZXZpZXctY29udHJvbC1wYW5lbC1wYXJ0Om50aC1jaGlsZCgyKSBwIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvcC1jYW1lcmEtcHJldmlldy1jb250cm9sLXBhbmVsIGltZyB7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4ucGljdHVyZS1wcmV2aWV3LWNvbXBvbmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGljdHVyZS1zbGlkZXIge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBpY3R1cmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluZGV4LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmluZGV4LWVsZW1lbnQge1xuICBoZWlnaHQ6IDdweDtcbiAgd2lkdGg6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgMy41cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xufVxuXG4uaW5kZXgtZWxlbWVudC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXM7XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24td3JhcHBlci1wYXJ0IHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZXh0LWJ1dHRvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG5cbi5uZXh0LWJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgNTBtcztcbn1cblxuLm5leHQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cHgpIHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uYWRkLWJ1dHRvbiBpbWcge1xuICB3aWR0aDogMjVweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 4:
/*!******************************************************************************!*\
  !*** ./src/app/camera-tab/camera-send/camera-send.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".camera-send-wrapper {\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 100%;\n  width: 100%;\n  background-color: #191919;\n}\n\n.top-camera-preview-control-panel {\n  width: 100%;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 25px;\n  z-index: 1;\n}\n\n.top-camera-preview-control-panel-part {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-camera-preview-control-panel-part:nth-child(1) {\n  justify-content: flex-start;\n}\n\n.top-camera-preview-control-panel-part:nth-child(2) p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n  letter-spacing: 0.25px;\n  color: #fff;\n}\n\n.top-camera-preview-control-panel img {\n  width: 12px;\n}\n\n.tabs {\n  display: flex;\n  width: 100%;\n  font-size: 22px;\n  font-weight: bold;\n  color: #707070;\n  margin-bottom: 30px;\n}\n\n.tab {\n  width: 100%;\n  text-align: center;\n}\n\n.active {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS1zZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiY2FtZXJhLXNlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtZXJhLXNlbmQtd3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xufVxuXG4udG9wLWNhbWVyYS1wcmV2aWV3LWNvbnRyb2wtcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgei1pbmRleDogMTtcbn1cblxuLnRvcC1jYW1lcmEtcHJldmlldy1jb250cm9sLXBhbmVsLXBhcnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcC1jYW1lcmEtcHJldmlldy1jb250cm9sLXBhbmVsLXBhcnQ6bnRoLWNoaWxkKDEpIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udG9wLWNhbWVyYS1wcmV2aWV3LWNvbnRyb2wtcGFuZWwtcGFydDpudGgtY2hpbGQoMikgcCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b3AtY2FtZXJhLXByZXZpZXctY29udHJvbC1wYW5lbCBpbWcge1xuICB3aWR0aDogMTJweDtcbn1cblxuLnRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50YWIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aXZle1xuICBjb2xvcjp3aGl0ZVxufVxuIl19 */";

/***/ }),

/***/ 7166:
/*!************************************************************!*\
  !*** ./src/app/camera-tab/camera-tab.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1lcmEtdGFiLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7906:
/*!********************************************************************!*\
  !*** ./src/app/camera-tab/camera/camera.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  background-color: #191919;\n}\n\n.camera-component-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.camera-component {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  overflow-y: hidden;\n}\n\n.top-camera-control-panel {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.top-camera-control-panel img {\n  width: 25px;\n}\n\n.bottom-camera-control-panel {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: row;\n  padding: 15px 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.bottom-camera-control-panel-part {\n  flex: 1;\n}\n\n.bottom-camera-control-panel-part {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bottom-camera-control-panel img {\n  width: 25px;\n}\n\n.shutter-button {\n  height: 60px;\n  width: 60px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  transition: 50ms cubic-bezier(0.55, 0.085, 0.68, 0.53);\n}\n\n.shutter-button:active {\n  opacity: 0.5;\n}\n\nwebcam {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImNhbWVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbn1cblxuLmNhbWVyYS1jb21wb25lbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FtZXJhLWNvbXBvbmVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnRvcC1jYW1lcmEtY29udHJvbC1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbn1cblxuLnRvcC1jYW1lcmEtY29udHJvbC1wYW5lbCBpbWcge1xuICB3aWR0aDogMjVweDtcbn1cblxuLmJvdHRvbS1jYW1lcmEtY29udHJvbC1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xufVxuXG4uYm90dG9tLWNhbWVyYS1jb250cm9sLXBhbmVsLXBhcnQge1xuICBmbGV4OiAxO1xufVxuXG4uYm90dG9tLWNhbWVyYS1jb250cm9sLXBhbmVsLXBhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvdHRvbS1jYW1lcmEtY29udHJvbC1wYW5lbCBpbWcge1xuICB3aWR0aDogMjVweDtcbn1cblxuLnNodXR0ZXItYnV0dG9uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiA1MG1zIGN1YmljLWJlemllcigwLjU1LCAwLjA4NSwgMC42OCwgMC41Myk7XG59XG5cbi5zaHV0dGVyLWJ1dHRvbjphY3RpdmUge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbndlYmNhbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 1595:
/*!********************************************************************************!*\
  !*** ./src/app/camera-tab/user-gallery/user-gallery.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".user-gallery-component {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  margin-bottom: 3.2%;\n  position: relative;\n}\n\n.gallery-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  flex-direction: row;\n  width: 100%;\n}\n\napp-user-gallery-image {\n  width: 28%;\n  margin-top: 3.2%;\n}\n\n.gallery-image {\n  width: 28%;\n  padding-top: 28%;\n  background-position: center;\n  background-size: cover;\n  transition: all 100ms;\n  margin-top: 3.2%;\n  border-radius: 10px;\n  position: relative;\n}\n\n.gallery-image.selected {\n  transition: all 100ms;\n  opacity: 0.5;\n}\n\n.select-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  border-radius: 50%;\n  border: 2.5px solid #ffffff;\n  height: 20px;\n  width: 20px;\n  transition: all 100ms;\n}\n\n.select-icon.selected {\n  background-color: #ffffff;\n  transition: all 100ms;\n}\n\n.next-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  height: 60px;\n  width: 60px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(100px);\n  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.next-button.selected {\n  transform: translateY(0);\n  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.next-button:active {\n  transform: scale(0.95);\n  transition: all 50ms;\n}\n\n.next-button img {\n  width: 16px;\n  transform: translateX(1.5px) rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7QUFDRiIsImZpbGUiOiJ1c2VyLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1nYWxsZXJ5LWNvbXBvbmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMy4yJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ2FsbGVyeS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC11c2VyLWdhbGxlcnktaW1hZ2Uge1xuICB3aWR0aDogMjglO1xuICBtYXJnaW4tdG9wOiAzLjIlO1xufVxuXG4uZ2FsbGVyeS1pbWFnZSB7XG4gIHdpZHRoOiAyOCU7XG4gIHBhZGRpbmctdG9wOiAyOCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zO1xuICBtYXJnaW4tdG9wOiAzLjIlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5nYWxsZXJ5LWltYWdlLnNlbGVjdGVkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zZWxlY3QtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZmZmZmY7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcztcbn1cblxuLnNlbGVjdC1pY29uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zO1xufVxuXG4ubmV4dC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG5cbi5uZXh0LWJ1dHRvbi5zZWxlY3RlZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cblxuLm5leHQtYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zaXRpb246IGFsbCA1MG1zO1xufVxuXG4ubmV4dC1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVweCkgcm90YXRlKDE4MGRlZyk7XG59XG4iXX0= */";

/***/ }),

/***/ 6874:
/*!************************************************************************************!*\
  !*** ./src/app/camera-tab/camera-preview/camera-preview.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"camera-preview-component\">\n    <div class=\"top-camera-preview-control-panel\">\n      <div class=\"top-camera-preview-control-panel-part\">\n        <img src=\"../../assets/icons/back_arrow_white.svg\" routerLink='..' routerDirection='back'>\n      </div>\n      <div class=\"top-camera-preview-control-panel-part\">\n        <p>Post</p>\n      </div>\n      <div class=\"top-camera-preview-control-panel-part\"></div>\n    </div>\n    <div class=\"picture-preview-component\">\n      <ion-slides class=\"picture-slider\" (ionSlideDidChange)=\"slideChanged()\">\n        <ion-slide class=\"picture-item\" *ngFor=\"let image of images\">\n          <div class=\"picture\" style=\"background-image: url({{image}})\"></div>\n        </ion-slide>\n      </ion-slides>\n      <div class=\"index-wrapper\">\n        <div class=\"index-element\" *ngFor=\"let image of images; let i = index\" class=\"{{i === currentIndex ? 'active' : ''}}\"></div>\n      </div>\n    </div>\n    <div class=\"button-wrapper\">\n      <div class=\"add-button button-wrapper-part\">\n        <img src=\"../../../assets/icons/add_white.svg\" routerLink='../'>\n      </div>\n      <div class=\"next-button-wrapper button-wrapper-part\">\n        <div class=\"next-button\" (click)='goToSendPage()'>\n          <img src=\"../../../assets/icons/back_arrow_grey.svg\">\n        </div>\n      </div>\n      <div class=\"button-wrapper-part\"></div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 5408:
/*!******************************************************************************!*\
  !*** ./src/app/camera-tab/camera-send/camera-send.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"camera-send-wrapper\">\n    <div class=\"top-camera-preview-control-panel\">\n      <div class=\"top-camera-preview-control-panel-part\">\n        <img src=\"../../assets/icons/back_arrow_white.svg\" routerLink='..'>\n      </div>\n      <div class=\"top-camera-preview-control-panel-part\">\n        <p>Post</p>\n      </div>\n      <div class=\"top-camera-preview-control-panel-part\"></div>\n    </div>\n\n    <!-- <app-group *ngIf=\"activeButton === 0\"></app-group> -->\n    <!--<app-friend-list *ngIf=\"activeButton === 1\"></app-friend-list> -->\n\n    <div class=\"tabs\">\n      <div (click)=\"tabAction(0)\" class=\"friends tab {{activeButton === 0 ? 'active' : ''}}\">Groups</div>\n      <div (click)=\"tabAction(1)\" class=\"groups tab {{activeButton === 1 ? 'active' : ''}}\">Friends</div>\n    </div>\n\n    <app-group *ngIf=\"activeButton === 0\"></app-group>\n    <app-friend-list *ngIf=\"activeButton === 1\"></app-friend-list>\n    \n  </div>\n</ion-content>\n";

/***/ }),

/***/ 5148:
/*!************************************************************!*\
  !*** ./src/app/camera-tab/camera-tab.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-router-outlet></ion-router-outlet>\n<!-- <app-camera></app-camera> -->\n";

/***/ }),

/***/ 2660:
/*!********************************************************************!*\
  !*** ./src/app/camera-tab/camera/camera.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content\n  class=\"camera-component-wrapper\"\n  [scrollEvents]=\"true\"\n  overflow-scroll=\"true\">\n  <div class=\"camera-component\">\n    <!--<div class=\"cameraPreview\" id=\"cameraPreview\"></div>-->\n    <webcam [height]=\"2000\" [width]=\"1100\" (imageCapture)=\"takePhoto($event)\" [trigger]=\"triggerObservable\" [imageQuality]=\"10\" (cameraSwitched)=\"cameraWasSwitched($event)\" [switchCamera]=\"nextWebcamObservable\"></webcam>\n    <div class=\"top-camera-control-panel\">\n      <div class=\"platzhalter\"></div>\n      <img src=\"../../assets/icons/flash_white.svg\">\n    </div>\n    <div class=\"bottom-camera-control-panel\">\n      <div class=\"gallery-icon-wrapper bottom-camera-control-panel-part\">\n        <img src=\"../../assets/icons/gallery_white.svg\">\n      </div>\n      <div class=\"bottom-camera-control-panel-part\">\n        <div class=\"shutter-button\" (click)=\"triggerPhoto()\"></div>\n      </div>\n      <div class=\"bottom-camera-control-panel-part\">\n        <img src=\"../../assets/icons/swap_cameras_white.svg\" (click)=\"showNextWebcam(true);\">\n      </div>\n    </div>\n  </div>\n  <app-user-gallery></app-user-gallery>\n</ion-content>\n";

/***/ }),

/***/ 2307:
/*!********************************************************************************!*\
  !*** ./src/app/camera-tab/user-gallery/user-gallery.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"user-gallery-component\">\n  <div class=\"gallery-wrapper\">\n    <!-- <app-user-gallery-image *ngFor=\"let image of images\" image={{image}}></app-user-gallery-image> -->\n    <div class=\"gallery-image\" class=\"{{images[i].selected === true ? 'selected' : ''}}\" *ngFor=\"let image of images; let i = index\" style=\"background-image: url({{image.imagePath}})\" (click)='changeSelectedState(i)'>\n      <div class=\"select-icon\" class=\"{{images[i].selected === true ? 'selected' : ''}}\"></div>\n    </div>\n  </div>\n  <div class=\"next-button\" class=\"{{getImageSelected() === true ? 'selected' : ''}}\" (click)='routeToPreview()'>\n    <img src=\"../../../assets/icons/back_arrow_grey.svg\">\n  </div>\n</div>\n";

/***/ }),

/***/ 9839:
/*!*********************************************************!*\
  !*** ./node_modules/ngx-webcam/fesm2015/ngx-webcam.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamComponent": () => (/* binding */ WebcamComponent),
/* harmony export */   "WebcamImage": () => (/* binding */ WebcamImage),
/* harmony export */   "WebcamInitError": () => (/* binding */ WebcamInitError),
/* harmony export */   "WebcamMirrorProperties": () => (/* binding */ WebcamMirrorProperties),
/* harmony export */   "WebcamModule": () => (/* binding */ WebcamModule),
/* harmony export */   "WebcamUtil": () => (/* binding */ WebcamUtil)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);




/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */

const _c0 = ["video"];
const _c1 = ["canvas"];

function WebcamComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r3.rotateVideoInput(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

class WebcamImage {
  constructor(imageAsDataUrl, mimeType, imageData) {
    this._mimeType = null;
    this._imageAsBase64 = null;
    this._imageAsDataUrl = null;
    this._imageData = null;
    this._mimeType = mimeType;
    this._imageAsDataUrl = imageAsDataUrl;
    this._imageData = imageData;
  }
  /**
   * Extracts the Base64 data out of the given dataUrl.
   * @param dataUrl the given dataUrl
   * @param mimeType the mimeType of the data
   */


  static getDataFromDataUrl(dataUrl, mimeType) {
    return dataUrl.replace(`data:${mimeType};base64,`, '');
  }
  /**
   * Get the base64 encoded image data
   * @returns base64 data of the image
   */


  get imageAsBase64() {
    return this._imageAsBase64 ? this._imageAsBase64 : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
  }
  /**
   * Get the encoded image as dataUrl
   * @returns the dataUrl of the image
   */


  get imageAsDataUrl() {
    return this._imageAsDataUrl;
  }
  /**
   * Get the ImageData object associated with the canvas' 2d context.
   * @returns the ImageData of the canvas's 2d context.
   */


  get imageData() {
    return this._imageData;
  }

}

class WebcamUtil {
  /**
   * Lists available videoInput devices
   * @returns a list of media device info.
   */
  static getAvailableVideoInputs() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return Promise.reject('enumerateDevices() not supported.');
    }

    return new Promise((resolve, reject) => {
      navigator.mediaDevices.enumerateDevices().then(devices => {
        resolve(devices.filter(device => device.kind === 'videoinput'));
      }).catch(err => {
        reject(err.message || err);
      });
    });
  }

}

class WebcamComponent {
  constructor() {
    /** Defines the max width of the webcam area in px */
    this.width = 640;
    /** Defines the max height of the webcam area in px */

    this.height = 480;
    /** Defines base constraints to apply when requesting video track from UserMedia */

    this.videoOptions = WebcamComponent.DEFAULT_VIDEO_OPTIONS;
    /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */

    this.allowCameraSwitch = true;
    /** Flag to control whether an ImageData object is stored into the WebcamImage object. */

    this.captureImageData = false;
    /** The image type to use when capturing snapshots */

    this.imageType = WebcamComponent.DEFAULT_IMAGE_TYPE;
    /** The image quality to use when capturing snapshots (number between 0 and 1) */

    this.imageQuality = WebcamComponent.DEFAULT_IMAGE_QUALITY;
    /** EventEmitter which fires when an image has been captured */

    this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */

    this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the webcam video was clicked */

    this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the active deviceId after the active video device was switched */

    this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** available video devices */

    this.availableVideoInputs = [];
    /** Indicates whether the video device is ready to be switched */

    this.videoInitialized = false;
    /** Index of active video in availableVideoInputs */

    this.activeVideoInputIndex = -1;
    /** MediaStream object in use for streaming UserMedia data */

    this.mediaStream = null;
    /** width and height of the active video stream */

    this.activeVideoSettings = null;
  }
  /**
   * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
   */


  set trigger(trigger) {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    } // Subscribe to events from this Observable to take snapshots


    this.triggerSubscription = trigger.subscribe(() => {
      this.takeSnapshot();
    });
  }
  /**
   * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
   * @param switchCamera Indicates which webcam to switch to
   *   true: cycle forwards through available webcams
   *   false: cycle backwards through available webcams
   *   string: activate the webcam with the given id
   */


  set switchCamera(switchCamera) {
    if (this.switchCameraSubscription) {
      this.switchCameraSubscription.unsubscribe();
    } // Subscribe to events from this Observable to switch video device


    this.switchCameraSubscription = switchCamera.subscribe(value => {
      if (typeof value === 'string') {
        // deviceId was specified
        this.switchToVideoInput(value);
      } else {
        // direction was specified
        this.rotateVideoInput(value !== false);
      }
    });
  }
  /**
   * Get MediaTrackConstraints to request streaming the given device
   * @param deviceId
   * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
   * @returns
   */


  static getMediaConstraintsForDevice(deviceId, baseMediaTrackConstraints) {
    const result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;

    if (deviceId) {
      result.deviceId = {
        exact: deviceId
      };
    }

    return result;
  }
  /**
   * Tries to harvest the deviceId from the given mediaStreamTrack object.
   * Browsers populate this object differently; this method tries some different approaches
   * to read the id.
   * @param mediaStreamTrack
   * @returns deviceId if found in the mediaStreamTrack
   */


  static getDeviceIdFromMediaStreamTrack(mediaStreamTrack) {
    if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
      return mediaStreamTrack.getSettings().deviceId;
    } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
      const deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
      return WebcamComponent.getValueFromConstrainDOMString(deviceIdObj);
    }
  }
  /**
   * Tries to harvest the facingMode from the given mediaStreamTrack object.
   * Browsers populate this object differently; this method tries some different approaches
   * to read the value.
   * @param mediaStreamTrack
   * @returns facingMode if found in the mediaStreamTrack
   */


  static getFacingModeFromMediaStreamTrack(mediaStreamTrack) {
    if (mediaStreamTrack) {
      if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
        return mediaStreamTrack.getSettings().facingMode;
      } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
        const facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
        return WebcamComponent.getValueFromConstrainDOMString(facingModeConstraint);
      }
    }
  }
  /**
   * Determines whether the given mediaStreamTrack claims itself as user facing
   * @param mediaStreamTrack
   */


  static isUserFacing(mediaStreamTrack) {
    const facingMode = WebcamComponent.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
    return facingMode ? 'user' === facingMode.toLowerCase() : false;
  }
  /**
   * Extracts the value from the given ConstrainDOMString
   * @param constrainDOMString
   */


  static getValueFromConstrainDOMString(constrainDOMString) {
    if (constrainDOMString) {
      if (constrainDOMString instanceof String) {
        return String(constrainDOMString);
      } else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
        return String(constrainDOMString[0]);
      } else if (typeof constrainDOMString === 'object') {
        if (constrainDOMString['exact']) {
          return String(constrainDOMString['exact']);
        } else if (constrainDOMString['ideal']) {
          return String(constrainDOMString['ideal']);
        }
      }
    }

    return null;
  }

  ngAfterViewInit() {
    this.detectAvailableDevices().then(() => {
      // start video
      this.switchToVideoInput(null);
    }).catch(err => {
      this.initError.next({
        message: err
      }); // fallback: still try to load webcam, even if device enumeration failed

      this.switchToVideoInput(null);
    });
  }

  ngOnDestroy() {
    this.stopMediaTracks();
    this.unsubscribeFromSubscriptions();
  }
  /**
   * Takes a snapshot of the current webcam's view and emits the image as an event
   */


  takeSnapshot() {
    // set canvas size to actual video size
    const _video = this.nativeVideoElement;
    const dimensions = {
      width: this.width,
      height: this.height
    };

    if (_video.videoWidth) {
      dimensions.width = _video.videoWidth;
      dimensions.height = _video.videoHeight;
    }

    const _canvas = this.canvas.nativeElement;
    _canvas.width = dimensions.width;
    _canvas.height = dimensions.height; // paint snapshot image to canvas

    const context2d = _canvas.getContext('2d');

    context2d.drawImage(_video, 0, 0); // read canvas content as image

    const mimeType = this.imageType ? this.imageType : WebcamComponent.DEFAULT_IMAGE_TYPE;
    const quality = this.imageQuality ? this.imageQuality : WebcamComponent.DEFAULT_IMAGE_QUALITY;

    const dataUrl = _canvas.toDataURL(mimeType, quality); // get the ImageData object from the canvas' context.


    let imageData = null;

    if (this.captureImageData) {
      imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
    }

    this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
  }
  /**
   * Switches to the next/previous video device
   * @param forward
   */


  rotateVideoInput(forward) {
    if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
      const increment = forward ? 1 : this.availableVideoInputs.length - 1;
      const nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
      this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
    }
  }
  /**
   * Switches the camera-view to the specified video device
   */


  switchToVideoInput(deviceId) {
    this.videoInitialized = false;
    this.stopMediaTracks();
    this.initWebcam(deviceId, this.videoOptions);
  }
  /**
   * Event-handler for video resize event.
   * Triggers Angular change detection so that new video dimensions get applied
   */


  videoResize() {// here to trigger Angular change detection
  }

  get videoWidth() {
    const videoRatio = this.getVideoAspectRatio();
    return Math.min(this.width, this.height * videoRatio);
  }

  get videoHeight() {
    const videoRatio = this.getVideoAspectRatio();
    return Math.min(this.height, this.width / videoRatio);
  }

  get videoStyleClasses() {
    let classes = '';

    if (this.isMirrorImage()) {
      classes += 'mirrored ';
    }

    return classes.trim();
  }

  get nativeVideoElement() {
    return this.video.nativeElement;
  }
  /**
   * Returns the video aspect ratio of the active video stream
   */


  getVideoAspectRatio() {
    // calculate ratio from video element dimensions if present
    const videoElement = this.nativeVideoElement;

    if (videoElement.videoWidth && videoElement.videoWidth > 0 && videoElement.videoHeight && videoElement.videoHeight > 0) {
      return videoElement.videoWidth / videoElement.videoHeight;
    } // nothing present - calculate ratio based on width/height params


    return this.width / this.height;
  }
  /**
   * Init webcam live view
   */


  initWebcam(deviceId, userVideoTrackConstraints) {
    const _video = this.nativeVideoElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // merge deviceId -> userVideoTrackConstraints
      const videoTrackConstraints = WebcamComponent.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
      navigator.mediaDevices.getUserMedia({
        video: videoTrackConstraints
      }).then(stream => {
        this.mediaStream = stream;
        _video.srcObject = stream;

        _video.play();

        this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
        const activeDeviceId = WebcamComponent.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
        this.cameraSwitched.next(activeDeviceId); // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
        // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.

        this.detectAvailableDevices().then(() => {
          this.activeVideoInputIndex = activeDeviceId ? this.availableVideoInputs.findIndex(mediaDeviceInfo => mediaDeviceInfo.deviceId === activeDeviceId) : -1;
          this.videoInitialized = true;
        }).catch(() => {
          this.activeVideoInputIndex = -1;
          this.videoInitialized = true;
        });
      }).catch(err => {
        this.initError.next({
          message: err.message,
          mediaStreamError: err
        });
      });
    } else {
      this.initError.next({
        message: 'Cannot read UserMedia from MediaDevices.'
      });
    }
  }

  getActiveVideoTrack() {
    return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
  }

  isMirrorImage() {
    if (!this.getActiveVideoTrack()) {
      return false;
    } // check for explicit mirror override parameter


    {
      let mirror = 'auto';

      if (this.mirrorImage) {
        if (typeof this.mirrorImage === 'string') {
          mirror = String(this.mirrorImage).toLowerCase();
        } else {
          // WebcamMirrorProperties
          if (this.mirrorImage.x) {
            mirror = this.mirrorImage.x.toLowerCase();
          }
        }
      }

      switch (mirror) {
        case 'always':
          return true;

        case 'never':
          return false;
      }
    } // default: enable mirroring if webcam is user facing

    return WebcamComponent.isUserFacing(this.getActiveVideoTrack());
  }
  /**
   * Stops all active media tracks.
   * This prevents the webcam from being indicated as active,
   * even if it is no longer used by this component.
   */


  stopMediaTracks() {
    if (this.mediaStream && this.mediaStream.getTracks) {
      // pause video to prevent mobile browser freezes
      this.nativeVideoElement.pause(); // getTracks() returns all media tracks (video+audio)

      this.mediaStream.getTracks().forEach(track => track.stop());
    }
  }
  /**
   * Unsubscribe from all open subscriptions
   */


  unsubscribeFromSubscriptions() {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    }

    if (this.switchCameraSubscription) {
      this.switchCameraSubscription.unsubscribe();
    }
  }
  /**
   * Reads available input devices
   */


  detectAvailableDevices() {
    return new Promise((resolve, reject) => {
      WebcamUtil.getAvailableVideoInputs().then(devices => {
        this.availableVideoInputs = devices;
        resolve(devices);
      }).catch(err => {
        this.availableVideoInputs = [];
        reject(err);
      });
    });
  }

}

WebcamComponent.DEFAULT_VIDEO_OPTIONS = {
  facingMode: 'environment'
};
WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;

WebcamComponent.ɵfac = function WebcamComponent_Factory(t) {
  return new (t || WebcamComponent)();
};

WebcamComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WebcamComponent,
  selectors: [["webcam"]],
  viewQuery: function WebcamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    }
  },
  inputs: {
    width: "width",
    height: "height",
    videoOptions: "videoOptions",
    allowCameraSwitch: "allowCameraSwitch",
    mirrorImage: "mirrorImage",
    captureImageData: "captureImageData",
    imageType: "imageType",
    imageQuality: "imageQuality",
    trigger: "trigger",
    switchCamera: "switchCamera"
  },
  outputs: {
    imageCapture: "imageCapture",
    initError: "initError",
    imageClick: "imageClick",
    cameraSwitched: "cameraSwitched"
  },
  decls: 6,
  vars: 7,
  consts: [[1, "webcam-wrapper", 3, "click"], ["autoplay", "", "muted", "", "playsinline", "", 3, "width", "height", "resize"], ["video", ""], ["class", "camera-switch", 3, "click", 4, "ngIf"], [3, "width", "height"], ["canvas", ""], [1, "camera-switch", 3, "click"]],
  template: function WebcamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_Template_div_click_0_listener() {
        return ctx.imageClick.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function WebcamComponent_Template_video_resize_1_listener() {
        return ctx.videoResize();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebcamComponent_div_3_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.videoStyleClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowCameraSwitch && ctx.availableVideoInputs.length > 1 && ctx.videoInitialized);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:#0000002e}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'webcam',
      template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
      styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scaleX(-1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper .camera-switch:hover{background-color:#0000002e}\n"]
    }]
  }], null, {
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    videoOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowCameraSwitch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mirrorImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    captureImageData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    initError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    imageClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cameraSwitched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    video: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['video', {
        static: true
      }]
    }],
    canvas: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['canvas', {
        static: true
      }]
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    switchCamera: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const COMPONENTS = [WebcamComponent];

class WebcamModule {}

WebcamModule.ɵfac = function WebcamModule_Factory(t) {
  return new (t || WebcamModule)();
};

WebcamModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: WebcamModule,
  declarations: [WebcamComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  exports: [WebcamComponent]
});
WebcamModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [COMPONENTS],
      exports: [COMPONENTS]
    }]
  }], null, null);
})();

class WebcamInitError {
  constructor() {
    this.message = null;
    this.mediaStreamError = null;
  }

}

class WebcamMirrorProperties {}
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_camera-tab_camera-tab_module_ts.js.map
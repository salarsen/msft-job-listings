(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-list/contact-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-list/contact-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>Maybe Downloading...</span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-review/contact-review.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-review/contact-review.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact-review works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-upload/contact-upload.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-upload/contact-upload.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h1 style=\"text-align:center\">CSV File Upload</h1>\r\n  <form enctype=\"multipart/form-data\">\r\n      <input type=\"file\" name=\"csvreport\" id=\"csvreport\" (change)=\"fileupload($event.target.files)\">\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Contact List</p>\r\n\r\n<table>\r\n    <thead>\r\n        <th>Email</th>\r\n        <th>Name</th>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let contact of contacts\">\r\n            <!-- <form (submit)='onSubmit($event, form) || form.reset()' #form='ngForm'> -->\r\n                <td>{{ contact.email }}</td>\r\n                <td>\r\n                    <input type=\"text\" name=\"contactName\" #myInput placeholder=\"Recruiter Name...\">\r\n                    \r\n                <button (click)='onSubmit(contact._id, myInput.value)'>Update</button>\r\n                </td>\r\n            <!-- </form> -->\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-job-table></app-job-table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/table/job-detail/job-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/table/job-detail/job-detail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"details\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"># {{ details.jobId }} - {{ details.title}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Posted Date: {{ details.postedDate | date:'MM/dd/yy'}}</p>\r\n        <p>Grade: {{ details.targetLevel }}</p>\r\n        <p>Hiring Manager: {{ details.hiringManager_id?.name }}</p>\r\n        <p>Recruiter: {{ details.primaryRecruiter_id?.name }}</p>\r\n        Location:\r\n            <ul>\r\n                <li *ngFor=\"let location of details.multi_location\">{{ location }}</li>\r\n            </ul>\r\n        <u>Description:</u><br><div [innerHTML]=\"details.description\"></div><hr>\r\n        <u>Qualifications:</u><br><div [innerHTML]=\"details.jobQualifications\"></div><hr>\r\n        <u>Responsibilties:</u><br><div [innerHTML]=\"details.jobResponsibilities\"></div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/table/job-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/table/job-table.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg justify-content-between navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <div id=\"desc\">This page is to help you connect with managers and recruiters for open positions at MS.</div>\r\n    <div class=\"form-group form-inline\" id=\"search-form\">\r\n      <div class=\"btn-group\">\r\n        <input class=\"form-control\" type=\"text\" name=\"filterTarget\" (input)=\"onChangeFilter()\" [(ngModel)]=\"filterTarget\" Placeholder=\"Filter on...\">\r\n        <span *ngIf='filterTarget'><img id=\"searchclear\" src=\"assets/img/x-circle.svg\" alt=\"\" width=\"24\" height=\"24\" (click)=\"clear()\"></span>\r\n      </div>\r\n      <select class=\"form-control\" [(ngModel)]=\"filterStatus\" (ngModelChange)=\"onChangeStatus($event)\">\r\n        <option *ngFor=\"let status of sortArray\" [value]=\"status.id\">{{status.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  {{ errorMessage }}\r\n  \r\n  <br>\r\n  <div id=\"pageInfo\">\r\n    Page: {{ currentPage }} / {{ pages }} (Total Jobs: {{ totalJobs }})\r\n    <div *ngIf=\"pages > 1\">\r\n      <button class=\"btn btn-primary btn-small\" [disabled]=\"currentPage==1\" (click)='prevPage()'>Previous Page</button>\r\n      <button class=\"btn btn-primary btn-small\" [disabled]=\"currentPage==pages\" (click)=\"nextPage()\">Next Page</button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n<table class=\"table table-striped table-bordered table-hover table-sm table-responsive\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th>Req. #</th>\r\n      <th (click)=\"sort('title')\">\r\n        Title\r\n        <span *ngIf=\"sortTarget=='-title'\"><img src=\"assets/img/chevron-down.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n        <span *ngIf=\"sortTarget=='title'\"><img src=\"assets/img/chevron-up.svg\"alt=\"\" width=\"24\" height=\"24\"></span>\r\n      </th>\r\n      <th (click)=\"sort('postedDate')\">\r\n        Posted Date\r\n        <span *ngIf=\"sortTarget=='-postedDate'\"><img src=\"assets/img/chevron-down.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n        <span *ngIf=\"sortTarget=='postedDate'\"><img src=\"assets/img/chevron-up.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n      </th>\r\n      <th (click)=\"sort('location')\">\r\n        Location\r\n        <span *ngIf=\"sortTarget=='-location'\"><img src=\"assets/img/chevron-down.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n        <span *ngIf=\"sortTarget=='location'\"><img src=\"assets/img/chevron-up.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n      </th>\r\n      <th (click)=\"sort('targetLevel')\">\r\n        Grade\r\n        <span *ngIf=\"sortTarget=='-targetLevel'\"><img src=\"assets/img/chevron-down.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n        <span *ngIf=\"sortTarget=='targetLevel'\"><img src=\"assets/img/chevron-up.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n      </th>\r\n      <!-- <th (click)=\"sort('hiringManager_id')\">\r\n        Hiring Manager\r\n        <span *ngIf=\"sortTarget=='-hiringManager_id'\"><img src=\"assets/img/chevron-down.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n        <span *ngIf=\"sortTarget=='hiringManager_id'\"><img src=\"assets/img/chevron-up.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n      </th> -->\r\n      <th (click)=\"sort('primaryRecruiter_id')\">\r\n        Recruiter\r\n        <span *ngIf=\"sortTarget=='-primaryRecruiter_id'\"><img src=\"assets/img/chevron-down.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n        <span *ngIf=\"sortTarget=='primaryRecruiter_id'\"><img src=\"assets/img/chevron-up.svg\" alt=\"\" width=\"24\" height=\"24\"></span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"\">\r\n    <tr *ngFor='let job of jobs'>\r\n      <td>\r\n        <a *ngIf=\"job.active\" [href]=\"'https://careers.microsoft.com/us/en/job/' + job.jobSeqNo + '/' | safeHtml\" target=\"_blank\">{{ job.jobSeqNo }}</a>\r\n        <span *ngIf=\"!job.active\">{{ job.jobSeqNo }}</span>\r\n        <img src=\"assets/img/info.svg\" alt=\"\" width=\"24\" height=\"24\" (click)=\"open(job._id)\">\r\n      </td>\r\n      <td>{{ job.title }}</td>\r\n      <td>{{ job.postedDate | date:'MM/dd/yy'}}</td>\r\n      <td>{{ job.location }}</td>\r\n      <td>{{ job.targetLevel }}</td>\r\n      <!-- <td>\r\n        <div *ngIf=\"job?.hiringManager_id?.email\">\r\n          {{ job?.hiringManager_id?.email == '' ? 'Unknown' : job?.hiringManager_id?.email }}\r\n          <a href=\"mailto:{{ job?.hiringManager_id?.email }}\">\r\n            <img src=\"assets/img/envelope.svg\" alt=\"\" width=\"24\" height=\"24\" title=\"{{ job?.hiringManager_id?.email }}\">\r\n          </a>\r\n        </div>\r\n      </td> -->\r\n      <td>\r\n        <div *ngIf=\"job?.primaryRecruiter_id?.email\">\r\n          <!-- {{ job?.primaryRecruiter_id?.email == '' ? 'Unknown' : job?.primaryRecruiter_id?.email }} -->\r\n          <a href=\"mailto:{{ job?.primaryRecruiter_id?.email }}\">\r\n            <img src=\"assets/img/envelope.svg\" alt=\"\" width=\"24\" height=\"24\" title=\"{{ job?.primaryRecruiter_id?.email }}\">\r\n          </a>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div id=\"pageInfo\">\r\n  Page: {{ currentPage }} / {{ pages }} (Total Jobs: {{ totalJobs }})\r\n  <div *ngIf=\"pages > 1\">\r\n    <button class=\"btn btn-primary btn-small\" [disabled]=\"currentPage==1\" (click)='prevPage()'>Previous Page</button>\r\n    <button class=\"btn btn-primary btn-small\" [disabled]=\"currentPage==pages\" (click)=\"nextPage()\">Next Page</button>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jobs_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/job.component */ "./src/app/jobs/job.component.ts");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'jobs',
                component: _jobs_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"],
            },
            {
                path: 'jobs/:page',
                component: _jobs_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"],
            },
            // {
            //   path: 'jobs/:page/:filter',
            //   component: JobComponent,
            // },
            // {
            //   path: 'contacts',
            //   component: ContactComponent,
            // },
            // {
            //   path: 'contacts-list',
            //   component: ContactListComponent,
            // },
            // {
            //   path: 'contacts-upload',
            //   component: ContactUploadComponent,
            // },
            {
                path: '**',
                redirectTo: 'jobs',
                pathMatch: 'full',
            }
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'msft-jobs';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jobs_job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs/job.component */ "./src/app/jobs/job.component.ts");
/* harmony import */ var _jobs_table_job_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jobs/table/job-table.component */ "./src/app/jobs/table/job-table.component.ts");
/* harmony import */ var _jobs_table_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jobs/table/job-detail/job-detail.component */ "./src/app/jobs/table/job-detail/job-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _contacts_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contacts/contact.component */ "./src/app/contacts/contact.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _contacts_contact_upload_contact_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacts/contact-upload/contact-upload.component */ "./src/app/contacts/contact-upload/contact-upload.component.ts");
/* harmony import */ var _safehtml_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./safehtml.pipe */ "./src/app/safehtml.pipe.ts");
/* harmony import */ var _contacts_contact_review_contact_review_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contacts/contact-review/contact-review.component */ "./src/app/contacts/contact-review/contact-review.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _jobs_job_component__WEBPACK_IMPORTED_MODULE_7__["JobComponent"],
            _jobs_table_job_table_component__WEBPACK_IMPORTED_MODULE_8__["JobTableComponent"],
            _jobs_table_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_9__["JobDetailComponent"],
            _contacts_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__["ContactListComponent"],
            _contacts_contact_upload_contact_upload_component__WEBPACK_IMPORTED_MODULE_15__["ContactUploadComponent"],
            _safehtml_pipe__WEBPACK_IMPORTED_MODULE_16__["SafeHtmlPipe"],
            _contacts_contact_review_contact_review_component__WEBPACK_IMPORTED_MODULE_17__["ContactReviewComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ],
        providers: [_services_job_service__WEBPACK_IMPORTED_MODULE_11__["JobService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [_jobs_table_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_9__["JobDetailComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact.service */ "./src/app/services/contact.service.ts");



let ContactListComponent = class ContactListComponent {
    // @Output()
    // addDetails = new EventEmitter<string>();
    constructor(contactService) {
        this.contactService = contactService;
        this.contacts = [];
        this.updatedContacts = [];
    }
    ngOnInit() {
        this.contactService.getContacts()
            .subscribe(res => {
            console.log('here2');
            const url = window.URL.createObjectURL(res.data);
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = res.filename;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove(); // remove the element
        }, error => {
            console.log(error);
        });
    }
};
ContactListComponent.ctorParameters = () => [
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-list/contact-list.component.html")).default,
        providers: [],
    })
], ContactListComponent);



/***/ }),

/***/ "./src/app/contacts/contact-review/contact-review.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contacts/contact-review/contact-review.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtcmV2aWV3L2NvbnRhY3QtcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/contacts/contact-review/contact-review.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contact-review/contact-review.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactReviewComponent", function() { return ContactReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactReviewComponent = class ContactReviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-review/contact-review.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-review.component.css */ "./src/app/contacts/contact-review/contact-review.component.css")).default]
    })
], ContactReviewComponent);



/***/ }),

/***/ "./src/app/contacts/contact-upload/contact-upload.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contact-upload/contact-upload.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUploadComponent", function() { return ContactUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact.service */ "./src/app/services/contact.service.ts");



let ContactUploadComponent = class ContactUploadComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    fileupload(files) {
        if (files && files.length > 0) {
            const file = files.item(0);
            const fileReader = new FileReader();
            fileReader.readAsText(file);
            fileReader.onload = ev => {
                const csvdata = fileReader.result.toString();
                const body = { data: csvdata };
                // console.log(body);
                // console.log(typeof(body));
                this.contactService.uploadContacts(body)
                    .subscribe((data) => console.log(JSON.stringify(data.json)));
                // return this.http.post('apiurl',body)
                //   .subscribe((data:any)=>console.log(JSON.stringify(data.json)));
            };
        }
    }
};
ContactUploadComponent.ctorParameters = () => [
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
ContactUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact-upload/contact-upload.component.html")).default,
    })
], ContactUploadComponent);



/***/ }),

/***/ "./src/app/contacts/contact.component.ts":
/*!***********************************************!*\
  !*** ./src/app/contacts/contact.component.ts ***!
  \***********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");



let ContactComponent = class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.contacts = [];
    }
    ngOnInit() {
        this.contactService.getContacts()
            .subscribe(res => {
            console.log(res);
            this.contacts = res;
            console.log(this.contacts.length);
        }, Error => {
            console.log(Error);
        });
    }
    nextPage() {
    }
    prevPage() {
    }
    onSubmit(contactId, contactName) {
        console.log(`${contactId} - ${contactName}`);
        // this.contactService.updateContacts()
    }
};
ContactComponent.ctorParameters = () => [
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contact.component.html")).default,
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/jobs/job.component.ts":
/*!***************************************!*\
  !*** ./src/app/jobs/job.component.ts ***!
  \***************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JobComponent = class JobComponent {
};
JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/job.component.html")).default,
    })
], JobComponent);



/***/ }),

/***/ "./src/app/jobs/table/job-detail/job-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/jobs/table/job-detail/job-detail.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvdGFibGUvam9iLWRldGFpbC9qb2ItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/jobs/table/job-detail/job-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/jobs/table/job-detail/job-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: JobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function() { return JobDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");




let JobDetailComponent = class JobDetailComponent {
    constructor(activeModal, jobService) {
        this.activeModal = activeModal;
        this.jobService = jobService;
    }
    ngOnInit() {
        this.jobService.getJob(this.name)
            .subscribe(res => {
            this.details = res;
        }, Error => {
            console.log(Error);
        });
    }
};
JobDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JobDetailComponent.prototype, "name", void 0);
JobDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/table/job-detail/job-detail.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job-detail.component.css */ "./src/app/jobs/table/job-detail/job-detail.component.css")).default]
    })
], JobDetailComponent);



/***/ }),

/***/ "./src/app/jobs/table/job-table.component.css":
/*!****************************************************!*\
  !*** ./src/app/jobs/table/job-table.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#search-form {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n#pageInfo{\r\n    text-align: center;\r\n}\r\n\r\nth:nth-of-type(1) {\r\n    text-align: center;\r\n    min-width: 90px;\r\n}\r\n\r\nth:nth-of-type(3) {\r\n    min-width: 140px;\r\n    text-align: center;\r\n}\r\n\r\nth:nth-of-type(5) {\r\n    min-width: 85px;\r\n    text-align: center;\r\n}\r\n\r\nth:nth-of-type(6) {\r\n    min-width: 160px;\r\n}\r\n\r\nth:nth-of-type(7) {\r\n    min-width: 180px;\r\n}\r\n\r\ntd:nth-of-type(1){\r\n    text-align: center;\r\n}\r\n\r\ntd:nth-of-type(3){\r\n    text-align: center;\r\n}\r\n\r\ntd:nth-of-type(5){\r\n    text-align: center;\r\n}\r\n\r\n/* \r\nth:nth-of-type(3){\r\n    width: 9em;\r\n    width: 135px;\r\n}\r\n\r\nth:nth-of-type(5){\r\n    width: 80px;\r\n} */\r\n\r\n#desc {\r\n    color: white;\r\n}\r\n\r\n.chevron-color {\r\n    fill: white;\r\n}\r\n\r\n#searchclear {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 20px;\r\n    margin: auto;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    color: #ccc;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy90YWJsZS9qb2ItdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7Ozs7Ozs7O0dBUUc7O0FBRUg7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9qb2JzL3RhYmxlL2pvYi10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaC1mb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuI3BhZ2VJbmZve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbnRoOm50aC1vZi10eXBlKDMpIHtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGg6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgbWluLXdpZHRoOiA4NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRoOm50aC1vZi10eXBlKDYpIHtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbn1cclxudGg6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxufVxyXG50ZDpudGgtb2YtdHlwZSgxKXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ZDpudGgtb2YtdHlwZSgzKXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ZDpudGgtb2YtdHlwZSg1KXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKiBcclxudGg6bnRoLW9mLXR5cGUoMyl7XHJcbiAgICB3aWR0aDogOWVtO1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG59XHJcblxyXG50aDpudGgtb2YtdHlwZSg1KXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59ICovXHJcblxyXG4jZGVzYyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaGV2cm9uLWNvbG9yIHtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4jc2VhcmNoY2xlYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/jobs/table/job-table.component.ts":
/*!***************************************************!*\
  !*** ./src/app/jobs/table/job-table.component.ts ***!
  \***************************************************/
/*! exports provided: JobTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTableComponent", function() { return JobTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-detail/job-detail.component */ "./src/app/jobs/table/job-detail/job-detail.component.ts");







let JobTableComponent = class JobTableComponent {
    constructor(router, route, jobService, modalService) {
        this.router = router;
        this.route = route;
        this.jobService = jobService;
        this.modalService = modalService;
        this.jobs = [];
        this.sortArray = [];
    }
    // when page initializes, fetch data. Will get page 1 or Page XX if value is enter in URL by user
    ngOnInit() {
        this.sortTarget = "-postedDate";
        this.filterStatus = 1;
        this.sortArray = [
            { id: 1, name: "Active" },
            { id: 0, name: "All" },
            { id: -1, name: "Inactive" }
        ];
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => {
            return this.jobService.getJobs(Number(params.get('page')) || 1);
        }))
            .subscribe(res => {
            this.jobs = res.jobs;
            this.currentPage = res.currentPage;
            this.pages = res.pages;
            this.totalJobs = res.totalJobs;
        }, Error => {
            console.log(Error);
        });
    }
    // post to fetch next/prev page and data
    fetchJobs() {
        this.jobService.filterJobs({
            filterTarget: this.filterTarget,
            filterStatus: this.filterStatus,
            sortTarget: this.sortTarget,
            currentPage: this.currentPage,
        })
            .subscribe(res => {
            this.jobs = res.jobs;
            this.currentPage = res.currentPage;
            this.pages = res.pages;
            this.totalJobs = res.totalJobs;
        }, Error => {
            console.log(Error);
        });
    }
    // checks if sort target is set, if not updates taget and fetches new data to match
    sort(sortTarget) {
        if (this.sortTarget) {
            if (this.sortTarget.indexOf(sortTarget) !== -1) {
                (this.sortTarget[0] == "-") ? this.sortTarget = this.sortTarget.slice(1) : this.sortTarget = "-" + this.sortTarget;
            }
            else {
                this.sortTarget = "-" + sortTarget;
            }
        }
        else {
            this.sortTarget = sortTarget;
        }
        this.fetchJobs();
    }
    onChangeFilter() {
        // limited to minimum of 3 characters to search on so we're not finding every word with the letter A for instance
        if (this.filterTarget.length >= 3) {
            this.currentPage = 1;
            this.fetchJobs();
        }
        else if (this.filterTarget.length == 0) {
            // like nginit but for when user sets search field to empty by deleting all characters
            this.currentPage = 1;
            this.fetchJobs();
        }
    }
    onChangeStatus(newValue) {
        if (newValue == 1 || newValue == 0 || newValue == -1) {
            this.filterStatus = newValue;
            this.fetchJobs();
        }
    }
    // deprecate or at X in search field
    clear() {
        this.filterTarget = '';
        this.filterStatus = 1;
        this.currentPage = 1;
        this.fetchJobs();
    }
    nextPage() {
        this.currentPage = this.currentPage + 1;
        this.filterTarget = this.filterTarget || '';
        this.fetchJobs();
    }
    prevPage() {
        this.currentPage = this.currentPage - 1;
        this.filterTarget = this.filterTarget || '';
        this.fetchJobs();
    }
    open(detailTarget) {
        const modalRef = this.modalService.open(_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_6__["JobDetailComponent"]);
        modalRef.componentInstance.name = detailTarget;
    }
};
JobTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], JobTableComponent.prototype, "filterTarget", void 0);
JobTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jobs/table/job-table.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job-table.component.css */ "./src/app/jobs/table/job-table.component.css")).default]
    })
], JobTableComponent);



/***/ }),

/***/ "./src/app/safehtml.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/safehtml.pipe.ts ***!
  \**********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, args) {
        return this.sanitizer.bypassSecurityTrustUrl(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml'
    })
], SafeHtmlPipe);



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
        this.base = '/api';
    }
    // getContacts(): Observable<any> {
    //   // return this.http.get(ContactService.base + '/contacts');
    //   return this.http
    //     .get(this.base + '/contacts', { responseType: 'blob'})
    //     .pipe(map(res => {
    //       console.log('here');
    //       return {
    //         filename: 'filename.csv',
    //         data: res,
    //       };
    //     }));
    // }
    getContacts() {
        // getContacts(): Observable<[contact]> {
        // return this.http.get<[contact]>(this.base + '/contacts');
        return this.http.get(`${this.base}/contacts`);
    }
    updateContacts(contactBlob) {
        return this.http.post(this.base + '/contacts', contactBlob);
    }
    uploadContacts(body) {
        //   console.log(body);
        return this.http.post(this.base + '/contacts/upload', body);
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ContactService);



/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let JobService = class JobService {
    constructor(http) {
        this.http = http;
        this.base = '/api';
    }
    getJobs(page) {
        return this.http.get(`${this.base}/jobs/${page}`);
    }
    getJob(jobId) {
        return this.http.get(`${this.base}/jobs/detail/${jobId}`);
    }
    filterJobs(form) {
        return this.http.post(`${this.base}/jobs`, form);
    }
};
JobService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], JobService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programming\myprojects\msft-job-bot\msft-jobs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp, storage } from 'firebase';
import { CommonModule } from '@angular/common';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ArticleService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function ArticleService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    ArticleService.prototype.getArticles = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    ArticleService.prototype.getArticleById = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newArticle
     * @return {?}
     */
    ArticleService.prototype.updateArticleById = function (townhall, id, newArticle) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id, { newArticle: newArticle });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    ArticleService.prototype.deleteArticleById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} article
     * @return {?}
     */
    ArticleService.prototype.createArticle = function (townhall, article) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles', { article: article });
    };
    return ArticleService;
}());
ArticleService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ArticleService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AssociationAnnounceService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function AssociationAnnounceService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @return {?}
     */
    AssociationAnnounceService.prototype.getAssociationAnnounce = function (townhall, association_id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces');
    };
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} id
     * @return {?}
     */
    AssociationAnnounceService.prototype.getAssociationAnnounceById = function (townhall, association_id, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} id
     * @param {?} newAnnounce
     * @return {?}
     */
    AssociationAnnounceService.prototype.updateAssociationAnnounceById = function (townhall, association_id, id, newAnnounce) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces/' + id, { newAnnounce: newAnnounce });
    };
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} announce
     * @return {?}
     */
    AssociationAnnounceService.prototype.createAssociationAnnounce = function (townhall, association_id, announce) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces', { announce: announce });
    };
    return AssociationAnnounceService;
}());
AssociationAnnounceService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AssociationAnnounceService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AssociationSubscriptionService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function AssociationSubscriptionService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @return {?}
     */
    AssociationSubscriptionService.prototype.getAssociationSubscriptions = function (townhall, association_id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions');
    };
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} id
     * @return {?}
     */
    AssociationSubscriptionService.prototype.getAssociationSubscriptionById = function (townhall, association_id, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    AssociationSubscriptionService.prototype.deleteAssociationSubscriptionById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + 0 + '/subscriptions/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} subscription
     * @return {?}
     */
    AssociationSubscriptionService.prototype.createAssociationSubscription = function (townhall, association_id, subscription) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions', { subscription: subscription });
    };
    return AssociationSubscriptionService;
}());
AssociationSubscriptionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AssociationSubscriptionService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AssociationService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function AssociationService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?=} query
     * @return {?}
     */
    AssociationService.prototype.getAssociations = function (townhall, query) {
        var /** @type {?} */ queryString = "?";
        for (var /** @type {?} */ queryName in query) {
            queryString += queryName + "=" + query[queryName];
        }
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations' + queryString);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    AssociationService.prototype.getAssociationById = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newAssociation
     * @return {?}
     */
    AssociationService.prototype.updateAssociationById = function (townhall, id, newAssociation) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id, { newAssociation: newAssociation });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    AssociationService.prototype.deleteAssociationById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} association
     * @return {?}
     */
    AssociationService.prototype.createAssociation = function (townhall, association) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations', { association: association });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    AssociationService.prototype.validateAssociationById = function (townhall, id) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id + '/validate', {});
    };
    /**
     * @param {?} townhall
     * @param {?} uuid
     * @param {?} token
     * @return {?}
     */
    AssociationService.prototype.associateAssociationToUser = function (townhall, uuid, token) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + 0 + '/associate', { token: token, uuid: uuid });
    };
    return AssociationService;
}());
AssociationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AssociationService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DirectoryCategoryService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function DirectoryCategoryService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    DirectoryCategoryService.prototype.getDirectoryCategories = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    DirectoryCategoryService.prototype.getShopsForDirectoryCategory = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/' + id + '/shops');
    };
    /**
     * @param {?} townhall
     * @return {?}
     */
    DirectoryCategoryService.prototype.getShopsForDirectory = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops');
    };
    /**
     * @param {?} townhall
     * @return {?}
     */
    DirectoryCategoryService.prototype.getAssociationsForDirectory = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    DirectoryCategoryService.prototype.getAssociationsForDirectoryCategory = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/' + id + '/associations');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newDirectoryCategory
     * @return {?}
     */
    DirectoryCategoryService.prototype.updateDirectoryCategoryById = function (townhall, id, newDirectoryCategory) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id, { newDirectoryCategory: newDirectoryCategory });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    DirectoryCategoryService.prototype.deleteDiscussionById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} directory_category
     * @param {?} under_category_id
     * @return {?}
     */
    DirectoryCategoryService.prototype.createDirectoryCategory = function (townhall, directory_category, under_category_id) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/', { directory_category: directory_category, under_category_id: under_category_id });
    };
    return DirectoryCategoryService;
}());
DirectoryCategoryService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DirectoryCategoryService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiscussionMessageService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function DiscussionMessageService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @return {?}
     */
    DiscussionMessageService.prototype.getDiscussionMessages = function (townhall, discussion_id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages');
    };
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @param {?} id
     * @param {?} newDiscussionMessage
     * @return {?}
     */
    DiscussionMessageService.prototype.updateDiscussionMessageById = function (townhall, discussion_id, id, newDiscussionMessage) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages/' + id, { newDiscussionMessage: newDiscussionMessage });
    };
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @param {?} id
     * @return {?}
     */
    DiscussionMessageService.prototype.deleteDiscussionById = function (townhall, discussion_id, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @param {?} discussion_message
     * @return {?}
     */
    DiscussionMessageService.prototype.createDiscussionMessage = function (townhall, discussion_id, discussion_message) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages', { discussionMessage: discussion_message });
    };
    return DiscussionMessageService;
}());
DiscussionMessageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiscussionMessageService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiscussionService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function DiscussionService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    DiscussionService.prototype.getDiscussions = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    DiscussionService.prototype.getUsersDiscussions = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + id + '/discussions');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    DiscussionService.prototype.getDiscussionById = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newDiscussion
     * @return {?}
     */
    DiscussionService.prototype.updateDiscussionById = function (townhall, id, newDiscussion) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id, { newDiscussion: newDiscussion });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    DiscussionService.prototype.deleteDiscussionById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} discussion
     * @return {?}
     */
    DiscussionService.prototype.createDiscussion = function (townhall, discussion) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions', { discussion: discussion });
    };
    return DiscussionService;
}());
DiscussionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiscussionService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var universal_firebase_config;
var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        universal_firebase_config = {
            apiKey: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_API_KEY,
            authDomain: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_AUTH_DOMAIN,
            databaseURL: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_DATABASE_URL,
            storageBucket: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_STORAGE_BUCKET
        };
        initializeApp(universal_firebase_config);
        this.storage = storage();
    }
    /**
     * @param {?} base64Image
     * @return {?}
     */
    FirebaseService.prototype.uploadText = function (base64Image) {
        var /** @type {?} */ testRef = this.storage.ref('test/test.txt');
        return testRef.putString(base64Image, 'base64');
    };
    /**
     * @param {?} name
     * @param {?} folder
     * @param {?} base64Image
     * @return {?}
     */
    FirebaseService.prototype.uploadImage = function (name, folder, base64Image) {
        var /** @type {?} */ testRef = this.storage.ref(folder + '/' + name);
        return testRef.putString(base64Image, 'base64');
    };
    /**
     * @param {?} ref
     * @return {?}
     */
    FirebaseService.prototype.getImage = function (ref) {
        var /** @type {?} */ imageRef = this.storage.ref(ref);
        return imageRef.getDownloadURL();
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FirebaseService.prototype.getNewFileName = function (name) {
        var /** @type {?} */ date = new Date();
        return name + '-' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '-' + date.getHours() + ':' + date.getMinutes();
    };
    return FirebaseService;
}());
FirebaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FirebaseService.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NewsService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function NewsService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    NewsService.prototype.getNews = function (townhall) {
        console.log("NENENENENNENEWS !");
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    NewsService.prototype.getNewsById = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newNews
     * @return {?}
     */
    NewsService.prototype.updateNewsById = function (townhall, id, newNews) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id, { newNews: newNews });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    NewsService.prototype.deleteNewsById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} news
     * @param {?=} notification
     * @return {?}
     */
    NewsService.prototype.createNews = function (townhall, news, notification) {
        if (!notification) {
            notification = false;
        }
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news', { news: news, notification: notification });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} uuid
     * @return {?}
     */
    NewsService.prototype.createView = function (townhall, id, uuid) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id + '/views', { uuid: uuid });
    };
    /**
     * @param {?} townhall
     * @return {?}
     */
    NewsService.prototype.getAllNewsViews = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/views');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    NewsService.prototype.getNewsViews = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id + '/views');
    };
    return NewsService;
}());
NewsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NewsService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ReportService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function ReportService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    ReportService.prototype.getReports = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    ReportService.prototype.getReportById = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newReport
     * @return {?}
     */
    ReportService.prototype.updateReportById = function (townhall, id, newReport) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id, { newReport: newReport });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    ReportService.prototype.deleteReportById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} report
     * @return {?}
     */
    ReportService.prototype.createReport = function (townhall, report) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports', { report: report });
    };
    return ReportService;
}());
ReportService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ReportService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SessionService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function SessionService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    SessionService.prototype.signin = function (email, password) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/sessions', { email: email, password: password });
    };
    return SessionService;
}());
SessionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SessionService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function ShopService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    ShopService.prototype.getShops = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    ShopService.prototype.getShopById = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newShop
     * @return {?}
     */
    ShopService.prototype.updateShopById = function (townhall, id, newShop) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id, { newShop: newShop });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    ShopService.prototype.deleteShopById = function (townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} shop
     * @return {?}
     */
    ShopService.prototype.createShop = function (townhall, shop) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops', { shop: shop });
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    ShopService.prototype.validateShopById = function (townhall, id) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id + '/validate', {});
    };
    return ShopService;
}());
ShopService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ShopService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TownhallFeatureService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function TownhallFeatureService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    TownhallFeatureService.prototype.getfeatures = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/townhall_features');
    };
    /**
     * @param {?} townhall
     * @param {?} newFeatures
     * @return {?}
     */
    TownhallFeatureService.prototype.updateFeatures = function (townhall, newFeatures) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/townhall_features/', { newFeatures: newFeatures });
    };
    return TownhallFeatureService;
}());
TownhallFeatureService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TownhallFeatureService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TownhallService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function TownhallService(_http) {
        this._http = _http;
    }
    /**
     * @return {?}
     */
    TownhallService.prototype.getTownhalls = function () {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls');
    };
    /**
     * @param {?} townhall
     * @return {?}
     */
    TownhallService.prototype.getTownhallById = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall);
    };
    /**
     * @param {?} townhall
     * @param {?} newTownhall
     * @return {?}
     */
    TownhallService.prototype.updateTownhallById = function (townhall, newTownhall) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall, { newTownhall: newTownhall });
    };
    /**
     * @param {?} color
     * @return {?}
     */
    TownhallService.prototype.convertColorToHTML = function (color) {
        var /** @type {?} */ colors = [
            { color: 'red-500', html: '#f44336' },
            { color: 'pink-500', html: '#e91e63' },
            { color: 'purple-500', html: '#9c27b0' },
            { color: 'deep-purple-500', html: '#673ab7' },
            { color: 'indigo-500', html: '#3f51b5' },
            { color: 'blue-500', html: '#2196f3' },
            { color: 'cyan-500', html: '#00bcd4' },
            { color: 'teal-500', html: '#009688' },
            { color: 'green-500', html: '#4caf50' },
            { color: 'light-green-500', html: '#8bc34a' },
            { color: 'lime-500', html: '#cddc39' },
            { color: 'yellow-500', html: '#ffeb3b' },
            { color: 'amber-500', html: '#ffc107' },
            { color: 'orange-500', html: '#ff9800' },
            { color: 'deep-orange-500', html: '#ff5722' },
            { color: 'brown-500', html: '#795548' },
            { color: 'grey-500', html: '#9e9e9e' }
        ];
        for (var /** @type {?} */ index = 0; index < colors.length; index++) {
            console.log('Couleur voulue: ' + color + '|' + colors[index].color);
            if (colors[index].color === color) {
                return colors[index].html;
            }
        }
        return '#9e9e9e';
    };
    return TownhallService;
}());
TownhallService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TownhallService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function UserService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    UserService.prototype.countUsers = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/count');
    };
    /**
     * @param {?} townhall
     * @return {?}
     */
    UserService.prototype.platformsUsers = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/platforms');
    };
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    UserService.prototype.getUserById = function (townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + id);
    };
    /**
     * @param {?} townhall
     * @param {?} uuid
     * @return {?}
     */
    UserService.prototype.getUserByUUID = function (townhall, uuid) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + uuid + '/uuid');
    };
    /**
     * @param {?} townhall
     * @param {?} user
     * @return {?}
     */
    UserService.prototype.createUser = function (townhall, user) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users', { user: user });
    };
    return UserService;
}());
UserService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WeatherService = /** @class */ (function () {
    /**
     * @param {?} _http
     */
    function WeatherService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    WeatherService.prototype.getWeather = function (townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/weather');
    };
    /**
     * @param {?} condition
     * @return {?}
     */
    WeatherService.prototype.getWeatherIcon = function (condition) {
        switch (condition) {
            case 'ensoleille':
                return 'wi-day-sunny';
            case 'nuit-claire':
                return 'wi-night-clear';
            case 'ciel-voile':
                return 'wi-day-cloudy';
            case 'nuit-legerement-voilee':
                return 'wi-night-alt-partly-cloudy';
            case 'faibles-passages-nuageux':
                return 'wi-day-cloudy';
            case 'nuit-bien-degagee':
                return 'wi-night-partly-cloudy';
            case 'brouillard':
                return 'wi-fog';
            case 'stratus':
                return 'wi-cloud';
            case 'stratus-se-dissipant':
                return 'wi-day-sunny-overcast';
            case 'nuit-claire-et-stratus':
                return 'wi-night-alt-cloudy';
            case 'eclaircies':
                return 'wi-day-cloudy';
            case 'nuit-nuageuse':
                return 'wi-night-alt-cloudy';
            case 'faiblement-nuageux':
                return 'wi-cloud';
            case 'fortement-nuageux':
                return 'wi-cloudy';
            case 'averses-de-pluie-faible':
                return 'wi-day-showers';
            case 'nuit-avec-averses':
                return 'wi-night-alt-showers';
            case 'averses-de-pluie-moderee':
                return 'wi-day-showers';
            case 'averses-de-pluie-forte':
                return 'wi-day-showers';
            case 'couvert-avec-averses':
                return 'wi-showers';
            case 'pluie-faible':
                return 'wi-rain';
            case 'pluie-forte':
                return 'wi-rain';
            case 'pluie-moderee':
                return 'wi-rain';
            case 'developpement-nuageux':
                return 'wi-day-cloudy-high';
            case 'nuit-avec-developpement-nuageux':
                return 'wi-night-alt-cloudy-high';
            case 'faiblement-orageux':
                return 'wi-day-thunderstorm';
            case 'nuit-faiblement-orageuse':
                return 'wi-night-alt-thunderstorm';
            case 'orage-modere':
                return 'wi-day-thunderstorm';
            case 'fortement-orageux':
                return 'wi-day-thunderstorm';
            case 'averses-de-neige-faible':
                return 'wi-day-rain-mix';
            case 'nuit-avec-averses-de-neige-faible':
                return 'wi-night-alt-rain-mix';
            case 'neige-faible':
                return 'wi-snow';
            case 'neige-moderee':
                return 'wi-snow';
            case 'neige-forte':
                return 'wi-snow';
            case 'pluie-et-neige-melee-faible':
                return 'wi-rain-mix';
            case 'pluie-et-neige-melee-moderee':
                return 'wi-rain-mix';
            case 'pluie-et-neige-melee-forte':
                return 'wi-rain-mix';
            default:
                return 'wi-day-sunny';
        }
    };
    return WeatherService;
}());
WeatherService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WeatherService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UniversalMairieSdkModule = /** @class */ (function () {
    function UniversalMairieSdkModule() {
    }
    /**
     * @param {?} ENV
     * @return {?}
     */
    UniversalMairieSdkModule.forRoot = function (ENV) {
        UniversalMairieSdkModule.UNIVERSAL_CONFIG = ENV;
        return { ngModule: UniversalMairieSdkModule, providers: [ArticleService, AssociationAnnounceService, AssociationSubscriptionService, AssociationService, DirectoryCategoryService, DiscussionMessageService, DiscussionService, FirebaseService, NewsService, ReportService, SessionService, ShopService, TownhallFeatureService, TownhallService, UserService, WeatherService] };
    };
    return UniversalMairieSdkModule;
}());
UniversalMairieSdkModule.UNIVERSAL_CONFIG = {
    API_URL: '',
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_DATABASE_URL: '',
    FIREBASE_STORAGE_BUCKET: ''
};
UniversalMairieSdkModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule
                ],
                declarations: [],
                providers: [ArticleService, AssociationAnnounceService, AssociationSubscriptionService, AssociationService, DirectoryCategoryService, DiscussionMessageService, DiscussionService, FirebaseService, NewsService, ReportService, SessionService, ShopService, TownhallFeatureService, TownhallService, UserService, WeatherService]
            },] },
];
/** @nocollapse */
UniversalMairieSdkModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ArticleModel = /** @class */ (function () {
    function ArticleModel() {
    }
    return ArticleModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AssociationAnnounceModel = /** @class */ (function () {
    function AssociationAnnounceModel() {
    }
    return AssociationAnnounceModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AssociationSubscriptionModel = /** @class */ (function () {
    function AssociationSubscriptionModel() {
    }
    return AssociationSubscriptionModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AssociationModel = /** @class */ (function () {
    function AssociationModel() {
    }
    return AssociationModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DirectoryCategoryModel = /** @class */ (function () {
    function DirectoryCategoryModel() {
    }
    return DirectoryCategoryModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiscussionMessageModel = /** @class */ (function () {
    function DiscussionMessageModel() {
    }
    return DiscussionMessageModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiscussionModel = /** @class */ (function () {
    function DiscussionModel() {
    }
    return DiscussionModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NewsModel = /** @class */ (function () {
    function NewsModel() {
    }
    return NewsModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ReportModel = /** @class */ (function () {
    function ReportModel() {
    }
    return ReportModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShopModel = /** @class */ (function () {
    function ShopModel() {
    }
    return ShopModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TownhallFeatureModel = /** @class */ (function () {
    function TownhallFeatureModel() {
    }
    return TownhallFeatureModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TownhallModel = /** @class */ (function () {
    function TownhallModel() {
    }
    return TownhallModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());
/** @enum {number} */
var RANKS = {
    COMM_ADMIN: 90,
    ADMIN: 80,
    ASSOCIATION_MANAGER: 60,
};
RANKS[RANKS.COMM_ADMIN] = "COMM_ADMIN";
RANKS[RANKS.ADMIN] = "ADMIN";
RANKS[RANKS.ASSOCIATION_MANAGER] = "ASSOCIATION_MANAGER";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WeatherModel = /** @class */ (function () {
    function WeatherModel() {
    }
    return WeatherModel;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { UniversalMairieSdkModule, ArticleService, AssociationAnnounceService, AssociationSubscriptionService, AssociationService, DirectoryCategoryService, DiscussionMessageService, DiscussionService, FirebaseService, NewsService, ReportService, SessionService, ShopService, TownhallFeatureService, TownhallService, UserService, WeatherService, ArticleModel, AssociationAnnounceModel, AssociationSubscriptionModel, AssociationModel, DirectoryCategoryModel, DiscussionMessageModel, DiscussionModel, NewsModel, ReportModel, ShopModel, TownhallFeatureModel, TownhallModel, UserModel, RANKS, WeatherModel };
//# sourceMappingURL=universal-mairie-sdk.js.map

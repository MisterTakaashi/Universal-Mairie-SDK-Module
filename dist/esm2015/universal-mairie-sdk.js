import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp, storage } from 'firebase';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ArticleService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getArticles(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getArticleById(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newArticle
     * @return {?}
     */
    updateArticleById(townhall, id, newArticle) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id, { newArticle: newArticle });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteArticleById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} article
     * @return {?}
     */
    createArticle(townhall, article) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/articles', { article: article });
    }
}
ArticleService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ArticleService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AssociationAnnounceService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @return {?}
     */
    getAssociationAnnounce(townhall, association_id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces');
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} id
     * @return {?}
     */
    getAssociationAnnounceById(townhall, association_id, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} id
     * @param {?} newAnnounce
     * @return {?}
     */
    updateAssociationAnnounceById(townhall, association_id, id, newAnnounce) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces/' + id, { newAnnounce: newAnnounce });
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} announce
     * @return {?}
     */
    createAssociationAnnounce(townhall, association_id, announce) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/announces', { announce: announce });
    }
}
AssociationAnnounceService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AssociationAnnounceService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AssociationSubscriptionService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @return {?}
     */
    getAssociationSubscriptions(townhall, association_id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions');
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} id
     * @return {?}
     */
    getAssociationSubscriptionById(townhall, association_id, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteAssociationSubscriptionById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + 0 + '/subscriptions/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} association_id
     * @param {?} subscription
     * @return {?}
     */
    createAssociationSubscription(townhall, association_id, subscription) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + association_id + '/subscriptions', { subscription: subscription });
    }
}
AssociationSubscriptionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AssociationSubscriptionService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AssociationService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?=} query
     * @return {?}
     */
    getAssociations(townhall, query) {
        let /** @type {?} */ queryString = "?";
        for (let /** @type {?} */ queryName in query) {
            queryString += queryName + "=" + query[queryName];
        }
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations' + queryString);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getAssociationById(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newAssociation
     * @return {?}
     */
    updateAssociationById(townhall, id, newAssociation) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id, { newAssociation: newAssociation });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteAssociationById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} association
     * @return {?}
     */
    createAssociation(townhall, association) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations', { association: association });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    validateAssociationById(townhall, id) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + id + '/validate', {});
    }
    /**
     * @param {?} townhall
     * @param {?} uuid
     * @param {?} token
     * @return {?}
     */
    associateAssociationToUser(townhall, uuid, token) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations/' + 0 + '/associate', { token: token, uuid: uuid });
    }
}
AssociationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AssociationService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DirectoryCategoryService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getDirectoryCategories(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getShopsForDirectoryCategory(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/' + id + '/shops');
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getShopsForDirectory(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops');
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getAssociationsForDirectory(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/associations');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getAssociationsForDirectoryCategory(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/' + id + '/associations');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newDirectoryCategory
     * @return {?}
     */
    updateDirectoryCategoryById(townhall, id, newDirectoryCategory) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id, { newDirectoryCategory: newDirectoryCategory });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteDiscussionById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} directory_category
     * @param {?} under_category_id
     * @return {?}
     */
    createDirectoryCategory(townhall, directory_category, under_category_id) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/directory_categories/', { directory_category: directory_category, under_category_id: under_category_id });
    }
}
DirectoryCategoryService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DirectoryCategoryService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiscussionMessageService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @return {?}
     */
    getDiscussionMessages(townhall, discussion_id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages');
    }
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @param {?} id
     * @param {?} newDiscussionMessage
     * @return {?}
     */
    updateDiscussionMessageById(townhall, discussion_id, id, newDiscussionMessage) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages/' + id, { newDiscussionMessage: newDiscussionMessage });
    }
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @param {?} id
     * @return {?}
     */
    deleteDiscussionById(townhall, discussion_id, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} discussion_id
     * @param {?} discussion_message
     * @return {?}
     */
    createDiscussionMessage(townhall, discussion_id, discussion_message) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + discussion_id + '/messages', { discussionMessage: discussion_message });
    }
}
DiscussionMessageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiscussionMessageService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiscussionService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getDiscussions(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getUsersDiscussions(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + id + '/discussions');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getDiscussionById(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newDiscussion
     * @return {?}
     */
    updateDiscussionById(townhall, id, newDiscussion) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id, { newDiscussion: newDiscussion });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteDiscussionById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} discussion
     * @return {?}
     */
    createDiscussion(townhall, discussion) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/discussions', { discussion: discussion });
    }
}
DiscussionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiscussionService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let universal_firebase_config;
class FirebaseService {
    constructor() {
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
    uploadText(base64Image) {
        var /** @type {?} */ testRef = this.storage.ref('test/test.txt');
        return testRef.putString(base64Image, 'base64');
    }
    /**
     * @param {?} name
     * @param {?} folder
     * @param {?} base64Image
     * @return {?}
     */
    uploadImage(name, folder, base64Image) {
        var /** @type {?} */ testRef = this.storage.ref(folder + '/' + name);
        return testRef.putString(base64Image, 'base64');
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    getImage(ref) {
        var /** @type {?} */ imageRef = this.storage.ref(ref);
        return imageRef.getDownloadURL();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getNewFileName(name) {
        let /** @type {?} */ date = new Date();
        return name + '-' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '-' + date.getHours() + ':' + date.getMinutes();
    }
}
FirebaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FirebaseService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NewsService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getNews(townhall) {
        console.log("NENENENENNENEWS !");
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getNewsById(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newNews
     * @return {?}
     */
    updateNewsById(townhall, id, newNews) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id, { newNews: newNews });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteNewsById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} news
     * @param {?=} notification
     * @return {?}
     */
    createNews(townhall, news, notification) {
        if (!notification) {
            notification = false;
        }
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news', { news: news, notification: notification });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} uuid
     * @return {?}
     */
    createView(townhall, id, uuid) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id + '/views', { uuid: uuid });
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getAllNewsViews(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/views');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getNewsViews(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/news/' + id + '/views');
    }
}
NewsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NewsService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ReportService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getReports(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getReportById(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newReport
     * @return {?}
     */
    updateReportById(townhall, id, newReport) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id, { newReport: newReport });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteReportById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} report
     * @return {?}
     */
    createReport(townhall, report) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/reports', { report: report });
    }
}
ReportService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ReportService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SessionService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    signin(email, password) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/sessions', { email: email, password: password });
    }
}
SessionService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SessionService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShopService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getShops(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getShopById(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @param {?} newShop
     * @return {?}
     */
    updateShopById(townhall, id, newShop) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id, { newShop: newShop });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    deleteShopById(townhall, id) {
        return this._http
            .delete(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} shop
     * @return {?}
     */
    createShop(townhall, shop) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops', { shop: shop });
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    validateShopById(townhall, id) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/shops/' + id + '/validate', {});
    }
}
ShopService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ShopService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TownhallFeatureService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getfeatures(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/townhall_features');
    }
    /**
     * @param {?} townhall
     * @param {?} newFeatures
     * @return {?}
     */
    updateFeatures(townhall, newFeatures) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/townhall_features/', { newFeatures: newFeatures });
    }
}
TownhallFeatureService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TownhallFeatureService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TownhallService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @return {?}
     */
    getTownhalls() {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls');
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getTownhallById(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall);
    }
    /**
     * @param {?} townhall
     * @param {?} newTownhall
     * @return {?}
     */
    updateTownhallById(townhall, newTownhall) {
        return this._http
            .patch(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall, { newTownhall: newTownhall });
    }
    /**
     * @param {?} color
     * @return {?}
     */
    convertColorToHTML(color) {
        let /** @type {?} */ colors = [
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
    }
}
TownhallService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TownhallService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    countUsers(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/count');
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    platformsUsers(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/platforms');
    }
    /**
     * @param {?} townhall
     * @param {?} id
     * @return {?}
     */
    getUserById(townhall, id) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + id);
    }
    /**
     * @param {?} townhall
     * @param {?} uuid
     * @return {?}
     */
    getUserByUUID(townhall, uuid) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users/' + uuid + '/uuid');
    }
    /**
     * @param {?} townhall
     * @param {?} user
     * @return {?}
     */
    createUser(townhall, user) {
        return this._http
            .post(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/users', { user: user });
    }
}
UserService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WeatherService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} townhall
     * @return {?}
     */
    getWeather(townhall) {
        return this._http
            .get(UniversalMairieSdkModule.UNIVERSAL_CONFIG.API_URL + '/v1/townhalls/' + townhall + '/weather');
    }
    /**
     * @param {?} condition
     * @return {?}
     */
    getWeatherIcon(condition) {
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
    }
}
WeatherService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WeatherService.ctorParameters = () => [
    { type: HttpClient, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UniversalMairieSdkModule {
    /**
     * @param {?} ENV
     * @return {?}
     */
    static forRoot(ENV) {
        UniversalMairieSdkModule.UNIVERSAL_CONFIG = ENV;
        return { ngModule: UniversalMairieSdkModule, providers: [ArticleService, AssociationAnnounceService, AssociationSubscriptionService, AssociationService, DirectoryCategoryService, DiscussionMessageService, DiscussionService, FirebaseService, NewsService, ReportService, SessionService, ShopService, TownhallFeatureService, TownhallService, UserService, WeatherService] };
    }
}
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
UniversalMairieSdkModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ArticleModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AssociationAnnounceModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AssociationSubscriptionModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AssociationModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DirectoryCategoryModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiscussionMessageModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiscussionModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NewsModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ReportModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShopModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TownhallFeatureModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TownhallModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserModel {
}
/** @enum {number} */
const RANKS = {
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
class WeatherModel {
}

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

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ArticleService } from '../services/article.service';
import { AssociationAnnounceService } from '../services/association-announce.service';
import { AssociationSubscriptionService } from '../services/association-subscription.service';
import { AssociationService } from '../services/association.service';
import { DirectoryCategoryService } from '../services/directory-category.service';
import { DiscussionMessageService } from '../services/discussion-message.service';
import { DiscussionService } from '../services/discussion.service';
import { FirebaseService } from '../services/firebase.service';
import { NewsService } from '../services/news.service';
import { ReportService } from '../services/report.service';
import { SessionService } from '../services/session.service';
import { ShopService } from '../services/shop.service';
import { TownhallFeatureService } from '../services/townhall-feature.service';
import { TownhallService } from '../services/townhall.service';
import { UserService } from '../services/user.service';
import { WeatherService } from '../services/weather.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ArticleService, AssociationAnnounceService, AssociationSubscriptionService, AssociationService, DirectoryCategoryService, DiscussionMessageService, DiscussionService, FirebaseService, NewsService, ReportService, SessionService, ShopService, TownhallFeatureService, TownhallService, UserService, WeatherService]
})
export class UniversalMairieSdkModule { 
  static UNIVERSAL_CONFIG = {
    API_URL: '',
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_DATABASE_URL: '',
    FIREBASE_STORAGE_BUCKET: ''
  }

  public static forRoot(ENV): ModuleWithProviders {
    UniversalMairieSdkModule.UNIVERSAL_CONFIG = ENV;

    return {ngModule: UniversalMairieSdkModule, providers: [ArticleService, AssociationAnnounceService, AssociationSubscriptionService, AssociationService, DirectoryCategoryService, DiscussionMessageService, DiscussionService, FirebaseService, NewsService, ReportService, SessionService, ShopService, TownhallFeatureService, TownhallService, UserService, WeatherService]};
  }
}

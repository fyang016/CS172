import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { ArticleService } from './article/article.service';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
        apiKey: "AIzaSyARNmTz1e6F4Rglt_EFcFubbsJkcnjdkKI"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTING } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './service/my-service.service';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateWeddingCardComponent } from './wedding-card/create-wedding-card/create-wedding-card.component';
import { EditWeddingCardComponent } from './wedding-card/edit-wedding-card/edit-wedding-card.component';
import { DeleteWeddingCardComponent } from './wedding-card/delete-wedding-card/delete-wedding-card.component';
import { PreviewWeddingCardComponent } from './wedding-card/preview-wedding-card/preview-wedding-card.component';
import { PreviewWeddingComponent } from './wedding-card/preview-wedding/preview-wedding.component';
import { EventcardNavbarComponent } from './eventcard-navbar/eventcard-navbar.component';
import { EventcardDashbordComponent } from './eventcard-dashbord/eventcard-dashbord.component';
import { EventcardAboutusComponent } from './eventcard-aboutus/eventcard-aboutus.component';
import { EventcardLoginComponent } from './eventcard-login/eventcard-login.component';
import { EventcardRegisterComponent } from './eventcard-register/eventcard-register.component';
import { EventcardPreviewCradsComponent } from './eventcard-preview-crads/eventcard-preview-crads.component';
import { EventcardPreviewHeaderComponent } from './eventcard-preview-header/eventcard-preview-header.component';
import { EventcardPreviewFooterComponent } from './eventcard-preview-footer/eventcard-preview-footer.component';
import { EventcardOtherDesginComponent } from './eventcard-other-desgin/eventcard-other-desgin.component';

 // our custom service, see below
@NgModule({
  declarations: [
    AppComponent,
    CreateWeddingCardComponent,
    EditWeddingCardComponent,
    DeleteWeddingCardComponent,
    PreviewWeddingCardComponent,
    PreviewWeddingComponent,
    EventcardNavbarComponent,
    EventcardDashbordComponent,
    EventcardAboutusComponent,
    EventcardLoginComponent,
    EventcardRegisterComponent,
    EventcardPreviewCradsComponent,
    EventcardPreviewHeaderComponent,
    EventcardPreviewFooterComponent,
    EventcardOtherDesginComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ROUTING
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

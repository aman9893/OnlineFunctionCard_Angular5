import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
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

export const AppRoutes: Routes = [
    { path: '', component: EventcardDashbordComponent },
    { path: 'dashbord', component: EventcardDashbordComponent },
    { path: 'create-wedding', component: CreateWeddingCardComponent },
    { path: 'register', component: EventcardRegisterComponent },
    { path: 'login', component: EventcardLoginComponent },
    { path: 'aboutus', component: EventcardAboutusComponent },
    { path: 'wedding-preview', component: PreviewWeddingComponent },
    { path: 'wedding-cards', component: PreviewWeddingCardComponent },
    { path: 'create-wedding', component: CreateWeddingCardComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

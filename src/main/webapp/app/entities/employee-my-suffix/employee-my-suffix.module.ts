import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PewaSharedModule } from '../../shared';
import {
    EmployeeMySuffixService,
    EmployeeMySuffixPopupService,
    EmployeeMySuffixComponent,
    EmployeeMySuffixDetailComponent,
    EmployeeMySuffixDialogComponent,
    EmployeeMySuffixPopupComponent,
    EmployeeMySuffixDeletePopupComponent,
    EmployeeMySuffixDeleteDialogComponent,
    employeeRoute,
    employeePopupRoute,
} from './';

const ENTITY_STATES = [
    ...employeeRoute,
    ...employeePopupRoute,
];

@NgModule({
    imports: [
        PewaSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        EmployeeMySuffixComponent,
        EmployeeMySuffixDetailComponent,
        EmployeeMySuffixDialogComponent,
        EmployeeMySuffixDeleteDialogComponent,
        EmployeeMySuffixPopupComponent,
        EmployeeMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        EmployeeMySuffixComponent,
        EmployeeMySuffixDialogComponent,
        EmployeeMySuffixPopupComponent,
        EmployeeMySuffixDeleteDialogComponent,
        EmployeeMySuffixDeletePopupComponent,
    ],
    providers: [
        EmployeeMySuffixService,
        EmployeeMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PewaEmployeeMySuffixModule {}

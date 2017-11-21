import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ConferenceSpeakerModule } from './speaker/speaker.module';
import { ConferenceSessionModule } from './session/session.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ConferenceSpeakerModule,
        ConferenceSessionModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConferenceEntityModule {}

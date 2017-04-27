import { TourService } from '../../tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { Component, TemplateRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  styles: ['body { max-height: 100vh; }'],
  template: `<ng-template #tourStep let-step="step" class="repiq-tour"><p class="tour-step-content">{{step?.content}}</p><div class="row"><div class="tour-step-navigation col-xs-12"><button *ngIf="tourService.hasPrev(step)" class="btn btn-secondary float-xs-left" (click)="tourService.prev()"><i class="fa fa-fw fa-long-arrow-left" aria-hidden="true"></i> Prev</button><button *ngIf="tourService.hasNext(step)" class="btn  btn-primary float-xs-right" (click)="tourService.next()">Next <i class="fa fa-fw fa-long-arrow-right" aria-hidden="true"></i></button></div><div class="col-xs-12"><span class="mt-1 mb-1 small secondary d-block text-xs-center" (click)="tourService.end()">Seen this already? <span class="color-primary cursor-pointer">Do not show this again</span></span></div></div></ng-template>`,
})
export class TourStepTemplateComponent implements AfterViewInit {
  @ViewChild('tourStep', { read: TemplateRef }) public tourStepTemplate: TemplateRef<any>;

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: TourService) {}

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.template = this.tourStepTemplate;
  }
}

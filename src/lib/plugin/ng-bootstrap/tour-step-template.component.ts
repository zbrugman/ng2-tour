import { TourService } from '../../tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { Component, TemplateRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  styles: ['body { max-height: 100vh; }'],
  template: `
    \n   <div class='repiq-tour animate bounceIn'> <ng-template #tourStep let-step=\"step\" class=\"repiq-tour\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n     <div class=\"row\">\n   <div class=\"tour-step-navigation col-xs-12\">\n <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-secondary float-xs-left\" (click)=\"tourService.prev()\"><i class='fa fa-fw fa-long-arrow-left' aria-hidden='true'></i> Prev</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn  btn-primary float-xs-right\" (click)=\"tourService.next()\">Next <i class='fa fa-fw fa-long-arrow-right' aria-hidden='true'></i></button>\n </div>\n   <div class=\"col-xs-12\">\n    <span class=\"mt-1 mb-1 small secondary d-block text-xs-center\" (click)=\"tourService.end()\">Seen this already? <span class='color-primary cursor-pointer'>Do not show this again</span></span>\n      </div>\n  </div>\n </ng-template>\n </div>\n 
  `,
})
export class TourStepTemplateComponent implements AfterViewInit {
  @ViewChild('tourStep', { read: TemplateRef }) public tourStepTemplate: TemplateRef<any>;

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: TourService) {}

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.template = this.tourStepTemplate;
  }
}

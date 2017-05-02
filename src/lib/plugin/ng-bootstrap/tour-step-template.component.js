"use strict";
var tour_service_1 = require('../../tour.service');
var tour_step_template_service_1 = require('./tour-step-template.service');
var core_1 = require('@angular/core');
var TourStepTemplateComponent = (function () {
    function TourStepTemplateComponent(tourStepTemplateService, tourService) {
        this.tourStepTemplateService = tourStepTemplateService;
        this.tourService = tourService;
    }
    TourStepTemplateComponent.prototype.ngAfterViewInit = function () {
        this.tourStepTemplateService.template = this.tourStepTemplate;
    };
    TourStepTemplateComponent.decorators = [
        { type: core_1.Component, args: [{
                    encapsulation: core_1.ViewEncapsulation.None,
                    selector: 'tour-step-template',
                    styles: ['body { max-height: 100vh; }'],
                    template: "\n <ng-template #tourStep let-step=\"step\" class=\"repiq-tour\">\n<span class=\"close-btn btn color-secondary\" (click)=\"tourService.end()\">\n<i class=\"fa fa-fw fa-times\"></i>\n</span>\n<p class=\"tour-step-content\">{{step?.content}}</p>\n<div class=\"row\"><div class=\"tour-step-navigation col-xs-12\">\n<button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-secondary float-xs-left\" (click)=\"tourService.prev()\"><i class=\"fa fa-fw fa-long-arrow-left\" aria-hidden=\"true\"></i> Prev</button>\n<button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-primary float-xs-right\" (click)=\"tourService.next()\">Next <i class=\"fa fa-fw fa-long-arrow-right\" aria-hidden=\"true\"></i></button>\n</div>\n<div class=\"col-xs-12\">\n<span class=\"mt-1 mb-1 small secondary d-block text-xs-center\" (click)=\"tourService.end()\">Seen this already? <span class=\"color-primary cursor-pointer\">Do not show this again</span></span>\n</div>\n</div>\n</ng-template>\n ",
                },] },
    ];
    /** @nocollapse */
    TourStepTemplateComponent.ctorParameters = function () { return [
        { type: tour_step_template_service_1.TourStepTemplateService, },
        { type: tour_service_1.TourService, },
    ]; };
    TourStepTemplateComponent.propDecorators = {
        'tourStepTemplate': [{ type: core_1.ViewChild, args: ['tourStep', { read: core_1.TemplateRef },] },],
    };
    return TourStepTemplateComponent;
}());
exports.TourStepTemplateComponent = TourStepTemplateComponent;
//# sourceMappingURL=tour-step-template.component.js.map
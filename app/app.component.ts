import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <kendo-chart>

      <!-- SERIE DEL GRAFICO -->
      <kendo-chart-series>
          <kendo-chart-title 
              text="By Source"
              color="#007AB2"
              font="24pt sans-serif"
              >
          </kendo-chart-title>
          <kendo-chart-series-item
            type="donut" 
            [data]="data"
            categoryField="kind" 
            field="share">

          <!-- QUI CAMBIO LA DIMENSIONE DEL FONT -->
          <kendo-chart-series-item-labels
            [content]="labelContent"
            [font]="'25px sans-serif'"
            position="outsideEnd"
            color="black" 
            background="none">
            
          </kendo-chart-series-item-labels>
        </kendo-chart-series-item>
      </kendo-chart-series>

      <!-- LEGENDA -->
      <kendo-chart-legend [visible]="false"></kendo-chart-legend>
    </kendo-chart>`
})
export class AppComponent {
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.075
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public labelContent(e: any): string {
    return e.category;
  }
}

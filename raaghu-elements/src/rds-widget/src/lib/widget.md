---
slug: "/widget"
date: "2019-05-04"
title: "Elements > Widget"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Widget

<p class="checkbox-def">Widgets are the graphical elements containing icons, charts displaying some specific information.</p>

<!-- Basic -->
<section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/widget.png" class=" img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-widget
  [isRefreshRequired]="isRefreshRequired"
  [headerTitle]="headerTitle"
  [colorVariant]="colorVariant"
>
  <div body>
    <rds-big-number-widget
      bigNumber="$32,230.00"
      subText="+$2203.00"
      [colorVariant]="colorVariant"
      [icon]="'triangle_up'"
      [iconHeight]="'12px'"
      [iconWidth]="'12px'"
      [iconFill]="true"
      [iconStroke]="true"
      [textAlign]="'text-start'"
      subTitleColorVariant="success"
    ></rds-big-number-widget>
  </div>
</rds-widget>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Bar Chart -->

  <section class="py-4">
    <h6>With Bar Chart</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBar-tab" data-bs-toggle="tab" data-bs-target="#PreviewBar" type="button" role="tab" aria-controls="PreviewBar" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBar-tab" data-bs-toggle="tab" data-bs-target="#AngularBar" type="button" role="tab" aria-controls="AngularBar" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBar" role="tabpanel" aria-labelledby="PreviewBar-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/widget-bar.png" class=" img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBar" role="tabpanel" aria-labelledby="AngularBar-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-widget
  [isRefreshRequired]="isRefreshRequired"
  [headerTitle]="headerTitle"
  [colorVariant]="colorVariant"
>
  <div body>
    <rds-big-number-widget
      [iconFill]="true"
      [iconStroke]="true"
      [bigNumber]="'$3,73,960.412'"
      [subText]="'-$5850.75'"
      [icon]="'triangle_down'"
      [iconHeight]="'12px'"
      [iconWidth]="'12px'"
      [textAlign]="'text-start'"
      subTitleColorVariant="danger"
    ></rds-big-number-widget>
    <rds-chart-bar-horizontal
      [chartLabels]="barHrChartLabels"
      [chartWidth]="barHrChartWidth"
      [chartHeight]="barHrchartHeight"
      [chartDataSets]="barHrChartDatasets"
      [chartOptions]="barHrChartOptions"
    ></rds-chart-bar-horizontal>
  </div>
</rds-widget>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- With Bool Chart -->

  <section class="py-4">
    <h6>With Bool Chart</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBool-tab" data-bs-toggle="tab" data-bs-target="#PreviewBool" type="button" role="tab" aria-controls="PreviewBool" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBool-tab" data-bs-toggle="tab" data-bs-target="#AngularBool" type="button" role="tab" aria-controls="AngularBool" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBool" role="tabpanel" aria-labelledby="PreviewBool-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/widget-bool.png" class=" img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBool" role="tabpanel" aria-labelledby="AngularBool-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-widget
  [isRefreshRequired]="isRefreshRequired"
  [colorVariant]="colorVariant"
  [headerTitle]="headerTitle"
>
  <div body>
    <div class="d-flex align-items-center mt-3">
      <div class="">
        <rds-chart-bool
          chartId="ConnectedCallschart"
          [centerIconName]="'headset'"
          [chartDataSets]="ConnectedCallschartDatasets"
          [chartLabels]="ConnectedCallschartLabels"
          [chartWidth]="100"
          [chartHeight]="100"
          [chartOptions]="ConnectedCallschartOptions"
          chartType="doughnut"
        ></rds-chart-bool>
      </div>
      <div class="ms-2">
        <h5 class="custom-title">85%</h5>
        <p class="custom-desc mb-0">Total Calls Connected</p>
      </div>
    </div>
    <div class="d-flex align-items-center mt-3">
      <div class="">
        <rds-chart-bool
          chartId="ClientCallschart"
          [centerIconName]="'users'"
          [chartDataSets]="ClientCallschartDatasets"
          [chartLabels]="ClientCallschartLabels"
          [chartWidth]="100"
          [chartHeight]="100"
          [chartOptions]="ClientCallschartOptions"
          chartType="doughnut"
        ></rds-chart-bool>
      </div>
      <div class="ms-2">
        <h5 class="custom-title">65%</h5>
        <p class="custom-desc mb-0">Total Clients Called</p>
      </div>
    </div>
  </div>
</rds-widget>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- With Doughnut Chart -->

  <section class="py-4">
    <h6>With Doughnut Chart</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDonut-tab" data-bs-toggle="tab" data-bs-target="#PreviewDonut" type="button" role="tab" aria-controls="PreviewDonut" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDonut-tab" data-bs-toggle="tab" data-bs-target="#AngularDonut" type="button" role="tab" aria-controls="AngularDonut" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDonut" role="tabpanel" aria-labelledby="PreviewDonut-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/widget-doughnut.png" class=" img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularDonut" role="tabpanel" aria-labelledby="AngularDonut-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-widget
  [isRefreshRequired]="isRefreshRequired"
  [colorVariant]="colorVariant"
  [headerTitle]="headerTitle"
>
  <div body>
    <rds-big-number-widget
      [bigNumber]="'$39,330.00'"
      [textAlign]="'text-start'"
    ></rds-big-number-widget>
    <div class="col col-sm-12">
      <rds-chart-doughnut
        [chartDataSets]="pschartDatasets"
        [titleText]="'35 K'"
        [subTitleText]="'Profit'"
        chartId="psChart"
        [chartWidth]="pschartWidth"
        [chartHeight]="pschartHeight"
        [chartLabels]="pschartLabels"
        [chartOptions]="pschartOptions"
        chartType="doughnut"
      ></rds-chart-doughnut>
    </div>
  </div>
</rds-widget>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- With Line Chart -->

  <section class="py-4">
    <h6>With Line Chart</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewLine-tab" data-bs-toggle="tab" data-bs-target="#PreviewLine" type="button" role="tab" aria-controls="PreviewLine" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularLine-tab" data-bs-toggle="tab" data-bs-target="#AngularLine" type="button" role="tab" aria-controls="AngularLine" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewLine" role="tabpanel" aria-labelledby="PreviewLine-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/widget-line.png" class=" img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularLine" role="tabpanel" aria-labelledby="AngularLine-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-widget
  [isRefreshRequired]="isRefreshRequired"
  [colorVariant]="colorVariant"
  [headerTitle]="headerTitle"
>
  <div body>
    <rds-chart-line
      [chartLabels]="monthlySummaryLabels"
      [chartWidth]="monthlySummarychartWidth"
      [chartHeight]="monthlySummarychartHeight"
      [chartDataSets]="monthlySummaryDataSets"
      [chartOptions]="monthlySummarychartOptions"
    ></rds-chart-line>
  </div>
</rds-widget>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skeleton / Specifications -->
<section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-9 col-12">
                                       <img src="/images/skel-widget.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> 
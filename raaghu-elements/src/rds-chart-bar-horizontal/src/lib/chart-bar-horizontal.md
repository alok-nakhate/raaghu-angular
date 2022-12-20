---
slug: "/Chart-Bar-Horizontal"
date: "2019-05-04"
title: "Charts > Chart-Bar-Horizontal"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Bar Chart

<p class="">Horizontal charts are series of horizontals bars extending along the x-axis measuring the size of the observation they represent. It is commonly used to compare the observations against a fixed parameter.</p>

<!-- Bar Chart with Border Radius -->

<section class="py-4">
    <h6>Bar Chart with Border Radius</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBorder-tab" data-bs-toggle="tab" data-bs-target="#PreviewBorder" type="button" role="tab" aria-controls="PreviewBorder" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBorder-tab" data-bs-toggle="tab" data-bs-target="#AngularBorder" type="button" role="tab" aria-controls="AngularBorder" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBorder" role="tabpanel" aria-labelledby="PreviewBorder-tab">
         <div class="contents p-5">
              <div class="row">
                <div class="col-md-12">
                  <img src="/images/bar-chart-with-border-radius.png" class="img-fluid w-50">
                </div> 
               </div>
           </div>
                       
  </div>
         <div class="tab-pane fade show" id="AngularBorder" role="tabpanel" aria-labelledby="AngularBorder-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
  <rds-chart-bar-horizontal
  [chartWidth]="100"
  [chartLabels]="chartLabels"
  [ChartDataSets]="ChartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-bar-horizontal>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Horizontal Bar Chart -->

<section class="py-4">
    <h6>Horizontal Bar Chart</h6>
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
                  <img src="/images/horizontal-bar-chart.png" class="img-fluid w-50">
                </div> 
               </div>
           </div>
                       
  </div>
         <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
  <rds-chart-bar-horizontal
  [chartWidth]="100"
  [chartLabels]="chartLabels"
  [ChartDataSets]="ChartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-bar-horizontal>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Stacked Bar Chart -->

<section class="py-4">
    <h6>Stacked Bar Chart </h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewStacked-tab" data-bs-toggle="tab" data-bs-target="#PreviewStacked" type="button" role="tab" aria-controls="PreviewStacked" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularStacked-tab" data-bs-toggle="tab" data-bs-target="#AngularStacked" type="button" role="tab" aria-controls="AngularStacked" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewStacked" role="tabpanel" aria-labelledby="PreviewStacked-tab">
         <div class="contents p-5">
              <div class="row">
                <div class="col-md-12">
                  <img src="/images/bar-stacked-chart.png" class="img-fluid w-50">
                </div> 
               </div>
           </div>
                       
  </div>
         <div class="tab-pane fade show" id="AngularStacked" role="tabpanel" aria-labelledby="AngularStacked-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
  <rds-chart-bar-horizontal
  [chartWidth]="100"
  [chartLabels]="chartLabels"
  [ChartDataSets]="ChartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-bar-horizontal>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Vertical Bar Chart   -->

<section class="py-4">
    <h6>Vertical Bar Chart </h6>
    <div class="py-3 mb-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewVertical-tab" data-bs-toggle="tab" data-bs-target="#PreviewVertical" type="button" role="tab" aria-controls="PreviewStacked" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularVertical-tab" data-bs-toggle="tab" data-bs-target="#AngularVertical" type="button" role="tab" aria-controls="AngularVertical" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewVertical" role="tabpanel" aria-labelledby="PreviewVertical-tab">
         <div class="contents p-5">
              <div class="row">
                <div class="col-md-12">
                  <img src="/images/bar-vertical-chart.png" class="img-fluid w-50">
                </div> 
               </div>
           </div>
                       
  </div>
         <div class="tab-pane fade show" id="AngularVertical" role="tabpanel" aria-labelledby="AngularVertical-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
  <rds-chart-bar-horizontal
  [chartWidth]="100"
  [chartLabels]="chartLabels"
  [ChartDataSets]="ChartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-bar-horizontal>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
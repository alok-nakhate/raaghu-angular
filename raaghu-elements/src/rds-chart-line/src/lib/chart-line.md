---
slug: "/chart-line"
date: "2019-05-04"
title: "Charts > Chart-line"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Line Chart

<p class="">A line chart is created by connecting a set of point through a line representing the change of a variable over a time period.</p>


<section class="py-4">
     <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDefault-tab" data-bs-toggle="tab" data-bs-target="#PreviewDefault" type="button" role="tab" aria-controls="PreviewDefault" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDefault-tab" data-bs-toggle="tab" data-bs-target="#AngularDefault" type="button" role="tab" aria-controls="Angular" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDefault" role="tabpanel" aria-labelledby="PreviewDefault-tab">
          <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/linechart-default.png" class="img-fluid   w-100">                                             
              </div> 
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularDefault" role="tabpanel" aria-labelledby="AngularDefault-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-chart-line
  chartId="lineChart0"
  [chartWidth]="600"
  [chartHeight]="400"
  [chartLabels]="chartLabels"
  [gradient]="false"
  [chartDataSets]="chartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-line>
```
</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
     <h6>Line Chart with Animation</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewAnimation-tab" data-bs-toggle="tab" data-bs-target="#PreviewAnimation" type="button" role="tab" aria-controls="PreviewAnimation" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="Angular-tab" data-bs-toggle="tab" data-bs-target="#Angular" type="button" role="tab" aria-controls="Angular" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewAnimation" role="tabpanel" aria-labelledby="PreviewAnimation-tab">
          <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/linechart-animate.png" class="img-fluid   w-100">                                             
              </div> 
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="Angular" role="tabpanel" aria-labelledby="Angular-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-chart-line
    [chartWidth]="600"
    [chartLabels]="chartLabels"
    [ChartDataSets]="ChartDataSets"
    [chartOptions]="chartOptions"
></rds-chart-line>
```
</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
     <h6>Line Styling</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewStyling-tab" data-bs-toggle="tab" data-bs-target="#PreviewStyling" type="button" role="tab" aria-controls="PreviewStyling" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularStyling-tab" data-bs-toggle="tab" data-bs-target="#AngularStyling" type="button" role="tab" aria-controls="AngularStyling" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewStyling" role="tabpanel" aria-labelledby="PreviewStyling-tab">
          <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/linechart-styling.png" class="img-fluid   w-100">                                             
              </div> 
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularStyling" role="tabpanel" aria-labelledby="AngularStyling-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-chart-line
    [chartWidth]="600"
    [chartLabels]="chartLabels"
    [ChartDataSets]="ChartDataSets"
    [chartOptions]="chartOptions"
></rds-chart-line>
```
</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
     <h6>Multi Axis</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewMulti-tab" data-bs-toggle="tab" data-bs-target="#PreviewMulti" type="button" role="tab" aria-controls="PreviewMulti" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularMulti-tab" data-bs-toggle="tab" data-bs-target="#AngularMulti" type="button" role="tab" aria-controls="AngularMulti" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewMulti" role="tabpanel" aria-labelledby="PreviewMulti-tab">
          <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/linechart-multi.png" class="img-fluid   w-100">                                             
              </div> 
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularMulti" role="tabpanel" aria-labelledby="AngularMulti-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-chart-line
    [chartWidth]="600"
    [chartLabels]="chartLabels"
    [ChartDataSets]="ChartDataSets"
    [chartOptions]="chartOptions"
></rds-chart-line>
```
</div>
          </div>
        </div>
      </div>
    </div>
  </section>

   
  <section class="py-4">
    <h6>Stepped</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewStepped-tab" data-bs-toggle="tab" data-bs-target="#PreviewStepped" type="button" role="tab" aria-controls="PreviewStepped" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularStepped-tab" data-bs-toggle="tab" data-bs-target="#AngularStepped" type="button" role="tab" aria-controls="AngularStepped" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewStepped" role="tabpanel" aria-labelledby="PreviewStepped-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/linechart-stepped.png" class="img-fluid w-100">                                             
              </div> 
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularStepped" role="tabpanel" aria-labelledby="AngularStepped-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-chart-line
  chartId="lineChart0"
  [chartWidth]="600"
  [chartHeight]="400"
  [chartLabels]="chartLabels"
  [gradient]="false"
  [chartDataSets]="chartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-line>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

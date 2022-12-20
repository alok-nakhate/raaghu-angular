---
slug: "/chart-scatter"
date: "2019-05-04"
title: "Charts > Chart-scatter"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Scatter Chart

<p class="">Scatter chart is used to represent the relationship between the two variables in a data-set.</p>

<section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i> Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
          <div class="contents p-5">                                            
            <div class="row">
              <div class="col-md-12">
                <img src="/images/scatter-chart-basic.png" class="img-fluid w-50">
              </div> 
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-chart-scatter
  [chartWidth]="500"
  [chartLabels]="chartLabels"
  [ChartDataSets]="ChartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-scatter>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Scatter Chart With Multi Axis</h6>
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
                <img src="/images/scatter-chart-multiseries.png" class="img-fluid w-50">
              </div> 
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularMulti" role="tabpanel" aria-labelledby="AngularMulti-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-chart-scatter
  [chartWidth]="500"
  [chartLabels]="chartLabels"
  [ChartDataSets]="ChartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-scatter>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
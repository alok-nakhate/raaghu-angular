---
slug: "/big-number-widget"
date: "2019-05-04"
title: "Elements > Big-number-widget"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Big Number Widget

<p class="">Big number widget lets you visualize dataset based on the different metrics at a glance view.</p>

<!-- Default -->
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
         <div class="contents  p-5">
              <div class="row">
            <div class="col-md-12">
            <img src="/images/big-number-widget.png" class="img-fluid">
            </div>
            </div>
     </div>
                       
  </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-big-number-widget
    [bigNumber]="bigNumber"
    [subText]="subText"
    [icon]="icon"
    [iconFill]="iconFill"
    [iconFill]="iconFill"
    [iconHeight]="iconHeight"
    [iconWidth]="iconWidth"
    [colorVariant]="colorVariant"
    [subTitleColorVariant]="subTitleColorVariant"
    [textAlign]="textAlign"
  ></rds-big-number-widget>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Delta -->

<section class="py-4">
    <h6>Delta</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDelta-tab" data-bs-toggle="tab" data-bs-target="#PreviewDelta" type="button" role="tab" aria-controls="PreviewDelta" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDelta-tab" data-bs-toggle="tab" data-bs-target="#AngularDelta" type="button" role="tab" aria-controls="AngularDelta" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDelta" role="tabpanel" aria-labelledby="PreviewDelta-tab">
         <div class="contents  p-5">
              <div class="row">
            <div class="col-md-12">
            <img src="/images/big-number-widget-delta.png" class="img-fluid">
            </div>
            </div>
     </div>
                       
  </div>
        <div class="tab-pane fade show" id="AngularDelta" role="tabpanel" aria-labelledby="AngularDelta-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-big-number-widget
    [bigNumber]="bigNumber"
    [subText]="subText"
    [colorVariant]="colorVariant"
    [subTitleColorVariant]="subTitleColorVariant"
    [role]="role"
  >
    <rds-icon
      class="ms-1"
      [name]="'triangle_up'"
      [stroke]="true"
      [fill]="true"
      [colorVariant]="subTitleColorVariant"
      [height]="'15px'"
      [width]="'15px'"
    ></rds-icon>
    <rds-label
      label="75%"
      class="ps-2 text-{{subTitleColorVariant}} fs-5"
    ></rds-label>
  </rds-big-number-widget>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Histogram -->

<section class="py-4">
    <h6>Histogram</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewHistogram-tab" data-bs-toggle="tab" data-bs-target="#PreviewHistogram" type="button" role="tab" aria-controls="PreviewHistogram" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularHistogram-tab" data-bs-toggle="tab" data-bs-target="#AngularHistogram" type="button" role="tab" aria-controls="AngularHistogram" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewHistogram" role="tabpanel" aria-labelledby="PreviewHistogram-tab">
         <div class="contents  p-5">
              <div class="row">
            <div class="col-md-12">
            <img src="/images/big-number-widget-histogram.png" class="img-fluid">
            </div>
            </div>
     </div>
                       
  </div>
        <div class="tab-pane fade show" id="AngularHistogram" role="tabpanel" aria-labelledby="AngularHistogram-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-big-number-widget
    [bigNumber]="bigNumber"
    [subText]="subText"
    [colorVariant]="colorVariant"
    [subTitleColorVariant]="subTitleColorVariant"
    [role]="role"
  >
    <rds-icon
      class="ms-1"
      [name]="'triangle_up'"
      [stroke]="true"
      [fill]="true"
      [colorVariant]="subTitleColorVariant"
      [height]="'15px'"
      [width]="'15px'"
    ></rds-icon>
    <rds-label
      label="75%"
      class="ps-2 text-{{subTitleColorVariant}} fs-5"
    ></rds-label>
  </rds-big-number-widget>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Icon -->

<section class="py-4">
    <h6>Icon</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewIcon-tab" data-bs-toggle="tab" data-bs-target="#PreviewIcon" type="button" role="tab" aria-controls="PreviewIcon" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularIcon-tab" data-bs-toggle="tab" data-bs-target="#AngularIcon" type="button" role="tab" aria-controls="AngularIcon" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewIcon" role="tabpanel" aria-labelledby="PreviewIcon-tab">
         <div class="contents  p-5">
              <div class="row">
            <div class="col-md-12">
            <img src="/images/big-number-widget-icon.png" class="img-fluid">
            </div>
            </div>
     </div>
                       
  </div>
        <div class="tab-pane fade show" id="AngularIcon" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-big-number-widget
    [bigNumber]="bigNumber"
    [subText]="subText"
    [colorVariant]="colorVariant"
    [subTitleColorVariant]="subTitleColorVariant"
    [role]="role"
  >
    <rds-icon
      name="users"
      [colorVariant]="subTitleColorVariant"
      [height]="'30px'"
      [width]="'30px'"
    ></rds-icon>
  </rds-big-number-widget>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Standard -->

<section class="py-4">
    <h6>Standard</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewStandard-tab" data-bs-toggle="tab" data-bs-target="#PreviewStandard" type="button" role="tab" aria-controls="PreviewStandard" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularStandard-tab" data-bs-toggle="tab" data-bs-target="#AngularStandard" type="button" role="tab" aria-controls="AngularStandard" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewStandard" role="tabpanel" aria-labelledby="PreviewStandard-tab">
         <div class="contents  p-5">
              <div class="row">
            <div class="col-md-12">
            <img src="/images/big-number-widget-standard.png" class="img-fluid">
            </div>
            </div>
     </div>
                       
  </div>
        <div class="tab-pane fade show" id="AngularStandard" role="tabpanel" aria-labelledby="AngularStandard-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-big-number-widget
    [bigNumber]="bigNumber"
    [subText]="subText"
    [colorVariant]="colorVariant"
    [subTitleColorVariant]="subTitleColorVariant"
    [role]="role"
  >
    <rds-icon
      name="users"
      [colorVariant]="subTitleColorVariant"
      [height]="'30px'"
      [width]="'30px'"
    ></rds-icon>
  </rds-big-number-widget>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


###### Skeleton / Specifications 

<div class="py-3">
 <div class="card border p-5">
  <div class="row">
      <div class="col-md-12">
        <img src="/images/big-number-widget-skeleton.png" class="img-fluid">
     </div>
   </div>
   </div>
 </div>
</div>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

   
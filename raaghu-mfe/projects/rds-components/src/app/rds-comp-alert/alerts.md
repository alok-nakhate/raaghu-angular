---
slug: "/comp-alert"
date: "2019-05-04"
title: "Components > Alert"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Alert
<p>Pops up a relevant information a user requires</p>

<section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab1" data-bs-toggle="tab" data-bs-target="#PreviewBasic1" type="button" role="tab" aria-controls="PreviewBasic1" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab1" data-bs-toggle="tab" data-bs-target="#AngularBasic1" type="button" role="tab" aria-controls="AngularBasic1" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic1" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="\images\alert-basic.png" class="img-fluid w-100">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic-tab1">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-alert [currentAlerts]="currentAlerts"></rds-comp-alert>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Danger</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab2" data-bs-toggle="tab" data-bs-target="#PreviewBasic2" type="button" role="tab" aria-controls="PreviewBasic1" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab2" data-bs-toggle="tab" data-bs-target="#AngularBasic2" type="button" role="tab" aria-controls="AngularBasic2" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic2" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
               <div class="col-md-12">
                   <img src="\images\alert-danger.png" class="img-fluid w-100">
               </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic2" role="tabpanel" aria-labelledby="AngularBasic-tab2">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-alert [currentAlerts]="currentAlerts"></rds-comp-alert>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Info</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab3" data-bs-toggle="tab" data-bs-target="#PreviewBasic3" type="button" role="tab" aria-controls="PreviewBasic3" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab3" data-bs-toggle="tab" data-bs-target="#AngularBasic3" type="button" role="tab" aria-controls="AngularBasic3" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic3" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
                 <div class="col-md-12">
                    <img src="\images\alert-info.png" class="img-fluid w-100">
                 </div>               
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic3" role="tabpanel" aria-labelledby="AngularBasic-tab3">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-alert [currentAlerts]="currentAlerts"></rds-comp-alert>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Success</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab4" data-bs-toggle="tab" data-bs-target="#PreviewBasic4" type="button" role="tab" aria-controls="PreviewBasic4" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab4" data-bs-toggle="tab" data-bs-target="#AngularBasic4" type="button" role="tab" aria-controls="AngularBasic4" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic4" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                    <img src="\images\alert-success.png" class="img-fluid w-100">
                 </div>               
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic4" role="tabpanel" aria-labelledby="AngularBasic-tab4">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-alert [currentAlerts]="currentAlerts"></rds-comp-alert>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Warning</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab5" data-bs-toggle="tab" data-bs-target="#PreviewBasic5" type="button" role="tab" aria-controls="PreviewBasic5" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab5" data-bs-toggle="tab" data-bs-target="#AngularBasic5" type="button" role="tab" aria-controls="AngularBasic5" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic5" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="\images\alert-warning.png" class="img-fluid w-100">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic5" role="tabpanel" aria-labelledby="AngularBasic-tab5">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-alert [currentAlerts]="currentAlerts"></rds-comp-alert>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
---
slug: "/collapse"
date: "2019-05-04"
title: "Elements > Collapse"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Collapse

<p class="checkbox-def">It is used to show and hide content. Buttons are used as triggers that are mapped to specific elements you toggle.</p>

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
                   <img src="/images/collapse-basic.png" class="img-fluid w-100">
               </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-collapse
  [colorVariant]="colorVariant"
  [buttonLabelOne]="buttonLabelOne"
  [collapseIdOne]="collapseIdOne"
  [contentSectionOne]="contentSectionOne"
  [borderCard]="borderCard"
  (toggle)="toggle($event)"
  (onClose)="onClose($event)"
  (onShow)="onShow($event)"
></rds-collapse>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-4">
    <h6>Collapse with Multiple Target</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewHorizontal-tab" data-bs-toggle="tab" data-bs-target="#PreviewHorizontal" type="button" role="tab" aria-controls="PreviewHorizontal" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularHorizontal-tab" data-bs-toggle="tab" data-bs-target="#AngularHorizontal" type="button" role="tab" aria-controls="AngularHorizontal" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
 <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewHorizontal" role="tabpanel" aria-labelledby="PreviewHorizontal-tab">
           <div class="contents  p-5">
              <div class="row">
               <div class="col-md-12">
                   <img src="/images/collapse-multiple-target.png" class="img-fluid w-100">
               </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularHorizontal" role="tabpanel" aria-labelledby="AngularHorizontal-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-collapse
  [colorVariant]="colorVariant"
  [buttonLabelOne]="buttonLabelOne"
  [buttonLabelTwo]="buttonLabelTwo"
  [collapseIdOne]="collapseIdOne"
  [collapseIdTwo]="collapseIdTwo"
  [multipleButtonLabel]="multipleButtonLabel"
  [contentSectionOne]="contentSectionOne"
  [contentSectionTwo]="contentSectionTwo"
  [borderCard]="borderCard"
  [multipleButton]="multipleButton"
  (toggle)="toggle($event)"
  (onClose)="onClose($event)"
  (onShow)="onShow($event)"
></rds-collapse>
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
                                    <div class="col-md-12">
                                       <img src="/images/collapse-skeleton.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

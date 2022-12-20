---
slug: "/select-list"
date: "2019-05-04"
title: "Elements > Select-list"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Select List


<p class="">Select list is a collapsable list containing different values that can be selected.</p>

 <section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="\images\select-list.png" class="img-fluid">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-select-list
  [rows]="rows"
  [size]="size"
  [disabled]="disabled"
  [multiple]="multiple"
  [labelText]="labelText"
  [LabelType]="LabelType"
  customIcon=""
>
  <option selected hidden>{{placeholderText}}</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</rds-select-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

   <section class="py-4">
    <h6>Tooltip</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic1" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic1" type="button" role="tab" aria-controls="AngularBasic" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic1" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents bg-light p-5">
              <div class="row">
               <img src="\images\select-list-tooltip.png" class="img-fluid w-100">
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-select-list
  [size]="rows"
  [disabled]="disabled  "
  [multiple]="multiple"
  customIcon=""
  [labelText]="labelText"
  [tooltipTitle]="tooltipTitle"
  [LabelType]="LabelType"
  [tooltipPlacement]="tooltipPlacement"
>
  <option selected hidden>{{placeholderText}}</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</rds-select-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Label -->
   <section class="py-4">
    <h6>Label</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewLabel-tab" data-bs-toggle="tab" data-bs-target="#PreviewLabel" type="button" role="tab" aria-controls="PreviewLabel" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularLabel-tab" data-bs-toggle="tab" data-bs-target="#AngularLabel" type="button" role="tab" aria-controls="AngularLabel" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewLabel" role="tabpanel" aria-labelledby="PreviewLabel-tab">
         <div class="contents bg-light p-5">
              <div class="row">
               <img src="\images\select-list-label.png" class="img-fluid w-100">
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularLabel" role="tabpanel" aria-labelledby="AngularLabel-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-select-list
  [size]="size"
  [itemList]="itemList"
  [labelPosition]="labelPosition"
  [placeholder]="placeholder"
  [label]="label"
></rds-select-list>
```
</div>
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
                                       <img src="/images/skel-select_list.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>

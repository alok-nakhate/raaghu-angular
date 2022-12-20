---
slug: "/comp-review-category"
date: "2019-05-04"
title: "Components > Review-Category"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Review Category
<p>Provides a card with the details of differnet user and their rating and remark regarding a product</p>
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
                     <img src="\images\review-category-basic-comp.png" class="img-fluid">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic-tab1">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-review-category
  [itemList]="itemList"
></rds-comp-review-category>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Review Type 1</h6>
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
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="\images\review-category-type-1-comp.png" class="img-fluid">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic2" role="tabpanel" aria-labelledby="AngularBasic-tab2">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-review-category
  [itemList]="itemList"
></app-rds-comp-review-category>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Review Type 2</h6>
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
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="\images\review-category-type-2-comp.png" class="img-fluid">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic3" role="tabpanel" aria-labelledby="AngularBasic-tab3">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-review-category
  [itemList]="itemList"
></app-rds-comp-review-category>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
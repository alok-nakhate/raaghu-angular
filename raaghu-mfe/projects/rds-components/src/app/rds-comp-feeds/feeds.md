---
slug: "/comp-feeds"
date: "2019-05-04"
title: "Components > Feeds"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

### Feeds

<p>Integrates activities in the project with the help of reviews</p>

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
                  <img src="/images/feed-basic.png" class=" w-100">
            </div>
          </div>
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <rds-comp-feeds displaytype="Basic"></rds-comp-feeds>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-4">
    <h6>Advanced</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewAdvance-tab" data-bs-toggle="tab" data-bs-target="#PreviewAdvance" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularAdvance-tab" data-bs-toggle="tab" data-bs-target="#AngularAdvance" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewAdvance" role="tabpanel" aria-labelledby="PreviewAdvance-tab">
         <div class="contents  p-5">
              <div class="row">
              <div class="col-md-12">
                  <img src="/images/feed-advanced.png" class=" w-100">
            </div>
            </div>
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularAdvance" role="tabpanel" aria-labelledby="AngularAdvance-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <app-rds-comp-feeds displaytype="Advanced"></app-rds-comp-feeds>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section> 

  <section class="py-4">
    <h6>Multiple Items</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic1-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic1" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic1-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic1" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic1" role="tabpanel" aria-labelledby="PreviewBasic1-tab">
         <div class="contents p-5">
              <div class="row">
              <div class="col-md-12">
                  <img src="/images/feed-multiple-items.png" class="img-fluid w-100">
            </div>
         </div> 
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic1-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-feeds displaytype="With_Multiple_Items"></app-rds-comp-feeds>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
---
slug: "/badge"
date: "2019-05-04"
title: "Elements > Badge"
---


<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Badge

<p class="checkbox-def">Use the Badge Component Symbol to draw attention to another interface element or to display a notification.</p>

<!-- Basic Example -->
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
              <div class="col-12">
        <img src="/images/badge-basic.png" class="img-fluid">
          </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code ">
<div class="row text-white m-0 p-4">

```html
<rds-badge
  size="medium"
  label="badge"
  badgeType="rectangle"
  colorVariant="danger"
></rds-badge>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="py-4">
    <h6>Badge Button</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewButton-tab" data-bs-toggle="tab" data-bs-target="#PreviewButton" type="button" role="tab" aria-controls="PreviewButton" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularButton-tab" data-bs-toggle="tab" data-bs-target="#AngularButton" type="button" role="tab" aria-controls="AngularButton" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewButton" role="tabpanel" aria-labelledby="PreviewButton-tab">
          <div class="contents p-5">
            <div class="row">
              <div class="col-12">
                <img src="/images/badge-as-button.png" class="img-fluid">                               
                  </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularButton" role="tabpanel" aria-labelledby="AngularButton-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<button type="button" class="btn btn-primary">
  <span right>
    Notification
    <rds-badge
      size="smallest"
      Types="light"
      label="9"
      [pillBadges]="false"
      BackgroundColor="#C5F8CF"
      color="#16BE36"
    ></rds-badge>
  </span>
</button>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
    <h6>Badge Icon</h6>
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
          <div class="contents p-5">
            <div class="row">
              <div class="col-12">
                      <img src="/images/badge-with-icon.png" class="img-fluid">                          
                </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularIcon" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-light">
<div class="row  text-white m-0 p-4">

```html
<button class="position-relative btn btn-ligh">
  <svg
    right
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-chat-left-dots"
    viewBox="0 0 16 16"
  ><path
      d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
    /><path
      d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    /></svg>
  <rds-badge
    right
    size="smallest"
    BackgroundColor="#C5F8CF"
    label="9"
    [pillBadges]="false"
    color="#ffffff"
    [positioned]="true"
    [iconBadge]="true"
  ></rds-badge>
</button>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
    <h6>Badge Positioned</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewPositioned-tab" data-bs-toggle="tab" data-bs-target="#PreviewPositioned" type="button" role="tab" aria-controls="PreviewPositioned" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularPositioned-tab" data-bs-toggle="tab" data-bs-target="#AngularPositioned" type="button" role="tab" aria-controls="AngularPositioned" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewPositioned" role="tabpanel" aria-labelledby="PreviewPositioned-tab">
          <div class="contents  p-5">
            <div class="row">
              <div class="col-12">
                  <img src="/images/badge-with-position.png" class="img-fluid">
                                             </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularPositioned" role="tabpanel" aria-labelledby="AngularPositioned-tab">
          <div class="contents bg-light">
<div class="row  text-white m-0 p-4">

```html
<button type="button" class="btn btn-light position-relative">
  new
  <span right>
    <rds-badge
      size="smallest"
      BackgroundColor="#C5F8CF"
      label="99+"
      [pillBadges]="true"
      color="#ffffff"
      [positioned]="true"
    ></rds-badge>
  </span>
</button>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>



<div class="py-4">
<!-- Skeleton / Specifications -->

###### Skeleton / Specifications

<div class="py-3">
 <div class="card border p-5">
  <div class="row">
      <div class="col-md-12">
        <img src="/images/badge-skeleton.png" class="img-fluid">
     </div>
   </div>
   </div>
 </div>
</div>


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

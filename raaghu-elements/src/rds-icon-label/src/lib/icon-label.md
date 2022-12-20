---
slug: "/Icon-Label"
date: "2019-05-04"
title: "Elements > Icon-Label"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Icon Label

<p class="">Icon Label is an appealing manner to show the content with an icon. </p>
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
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                    <img src="/images/icon-label.png" class="img-fluid w-25">
                 </div>              
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-icon-label
[iconposition]="iconposition"
[icon]="icon"
[label]="label"
[size]="size"
[iconSize]="iconSize">
</rds-icon-label>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Icon Label with position -->

  <section class="py-4">
    <h6>With Position</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="Previewposition-tab" data-bs-toggle="tab" data-bs-target="#Previewposition" type="button" role="tab" aria-controls="Previewposition" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularPosition-tab" data-bs-toggle="tab" data-bs-target="#AngularPosition" type="button" role="tab" aria-controls="AngularPosition" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Previewposition" role="tabpanel" aria-labelledby="Previewposition-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                    <img src="/images/icon-label-position.png" class="img-fluid w-100">
                 </div>              
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularPosition" role="tabpanel" aria-labelledby="AngularPosition-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-icon-label
  [iconposition]="iconposition"
  [icon]="icon"
  [colorVariant]="colorVariant"
  [label]="label"
  [size]="size"
  [height]="height"
  [iconposition]="iconposition"
  [width]="width"
></rds-icon-label>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <img src="/images/icon-label-skeleton.png" class="img-fluid">
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>
   
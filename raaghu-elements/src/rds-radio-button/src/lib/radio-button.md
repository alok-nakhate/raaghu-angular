---
slug: "/radio-button"
date: "2019-05-04"
title: "Elements > Radio-button"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">
<link rel="stylesheet" href="../assets/css/main.css">


#### Radio Buttons
  
<p>Radio buttons are group of mutually exclusive choices and only one selection from the group is allowed.</p>

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
                     <img src="\images\radio-button-basic.png" class="img-fluid">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html

<rds-radio-button
  [itemList]="itemList"
  display_type="Default"
></rds-radio-button>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Radio Horizontal -->

<section class="py-4">
    <h6>Horizontal</h6>
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
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="\images\radio-button-horizontal.png" class="img-fluid w-50">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularHorizontal" role="tabpanel" aria-labelledby="AngularHorizontal-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-radio-button
  [itemList]="itemList"
  display_type="Horizontal"
></rds-radio-button>
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
                                       <img src="/images/skel-Radio_button.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>  

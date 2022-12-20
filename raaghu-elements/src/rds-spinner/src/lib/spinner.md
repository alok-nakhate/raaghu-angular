---
slug: "/spinner"
date: "2019-05-04"
title: "Elements > Spinner"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Spinner

<p class="">Spinner is an animated element indicating the loading of a page.</p>
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
                    <img src="/images/spinner.png" class="img-fluid">
                 </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
   <div class="col-md-12">
 <rds-spinner [spinnerType]="false"></rds-spinner>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<section class="py-4">
    <h6>Glowing</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewGlow-tab" data-bs-toggle="tab" data-bs-target="#PreviewGlow" type="button" role="tab" aria-controls="PreviewGlow" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularGlow-tab" data-bs-toggle="tab" data-bs-target="#AngularGlow" type="button" role="tab" aria-controls="AngularGlow" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewGlow" role="tabpanel" aria-labelledby="PreviewGlow-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                    <img src="/images/spinner-glowing.png" class="img-fluid w-25">
                 </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularGlow" role="tabpanel" aria-labelledby="AngularGlow-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
   <div class="col-md-12">
<rds-spinner [spinnerType]="true"></rds-spinner>
</div>
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
                                    <div class="col-md-9 col-12">
                                       <img src="/images/skel-spinner.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>   
  

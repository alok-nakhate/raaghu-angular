---
slug: "/stat"
date: "2019-05-04"
title: "Elements > Stat"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Stat

<p class="checkbox-def">Stat Stat is used to highlight the features of website.</p>

<!-- Basic -->
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
                <img src="/images/stats-basic.png" class=" img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-stat [statItems]="statItems" display_type="Basic"></rds-stat>
```

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
            <button class="nav-link active" id="PreviewAdvance-tab" data-bs-toggle="tab" data-bs-target="#PreviewAdvance" type="button" role="tab" aria-controls="PreviewAdvance" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularAdvance-tab" data-bs-toggle="tab" data-bs-target="#AngularAdvance" type="button" role="tab" aria-controls="AngularAdvance" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewAdvance" role="tabpanel" aria-labelledby="PreviewAdvance-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/stats-advanced.png" class="img-fluid w-25">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularAdvance" role="tabpanel" aria-labelledby="AngularAdvance-tab">
          <div class="contents bg-code">
<div class="row m-0 py-3">

```html
<rds-stat [statItems]="statItems" display_type="Advanced"></rds-stat>
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
                                       <img src="/images/skel-stat.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>    
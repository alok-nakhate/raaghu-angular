---
slug: "/double-range"
date: "2019-05-04"
title: "Elements > Double-range"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Double Range

<p class="">Double Range allows an user to specify a numerical value from the given range using the slider.</p>
<section class="py-4">
    <h6>Double Range</h6>
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
                   <img src="/images/double-range.png" class="img-fluid">
               </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-double-range
  role="Default"
  [val1]="0"
  [val2]="100"
  [min]="0"
  [max]="100"
></rds-double-range>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Double Range Type 1</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewType1-tab" data-bs-toggle="tab" data-bs-target="#PreviewType1" type="button" role="tab" aria-controls="PreviewType1" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularType1-tab" data-bs-toggle="tab" data-bs-target="#AngularType1" type="button" role="tab" aria-controls="AngularType1" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewType1" role="tabpanel" aria-labelledby="PreviewType1-tab">
         <div class="contents p-5">
              <div class="row">
               <div class="col-md-12">
                   <img src="/images/double-range-type1.png" class="img-fluid">
               </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularType1" role="tabpanel" aria-labelledby="AngularType1-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-double-range
  role="Double Range Type 1"
  [val1]="0"
  [val2]="100"
  [min]="0"
  [max]="100"
></rds-double-range>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<section class="py-4">
    <h6>Double Range Type 2</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewType2-tab" data-bs-toggle="tab" data-bs-target="#PreviewType2" type="button" role="tab" aria-controls="PreviewType2" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularType2-tab" data-bs-toggle="tab" data-bs-target="#AngularType2" type="button" role="tab" aria-controls="AngularType2" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewType2" role="tabpanel" aria-labelledby="PreviewType2-tab">
         <div class="contents p-5">
              <div class="row">
               <div class="col-md-12">
                   <img src="/images/double-range-type2.png" class="img-fluid">
               </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularType2" role="tabpanel" aria-labelledby="AngularType2-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <rds-double-range
  role="Double Range Type 2"
  [val1]="0"
  [val2]="100"
  [min]="0"
  [max]="100"
></rds-double-range>
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
                                       <img src="/images/double-range-skeleton.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>

   
---
slug: "/Input-Group"
date: "2019-05-04"
title: "Elements > Input-Group"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">



#### Input Group

<p class="">Input group is an input field with a button placed at the end of it.</p>
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
                       <img src="/images/input-group.png" class="img-fluid w-100">
                 </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-input-group>
<label>{{label}}</label>
<div
  class="input-group mb-2"
    [ngClass]="{'input-group-sm': size == 'sm', 'input-group-lg': size == 'lg'}">
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="button-addon1"
      placeholder="placeholder"/>
    <button class="btn btn-outline-secondary" type="button" id="button-addon1">
      Button
    </button>
  </div>
</rds-input-group>
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
                                <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <img src="/images/input-group-skeleton.png" class="img-fluid">
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>
   
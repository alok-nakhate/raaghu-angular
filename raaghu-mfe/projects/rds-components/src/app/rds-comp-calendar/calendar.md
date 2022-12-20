---
slug: "/comp-calendar"
date: "2019-05-04"
title: "Components > calendar"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Calendar
<p>Calendar is a simple and highly customisable layout for calendar having differnet layouts which can be effeciently used for event management.</p>
<section class="py-4">
  <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewCalendar-tab1" data-bs-toggle="tab" data-bs-target="#PreviewCalendar" type="button" role="tab" aria-controls="PreviewBasic1" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularCalendar-tab1" data-bs-toggle="tab" data-bs-target="#AngularCalendar" type="button" role="tab" aria-controls="AngularCentre" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewCalendar" role="tabpanel" aria-labelledby="PreviewCalendar-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="\images\calendar.png" class="img-fluid w-75">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularCalendar" role="tabpanel" aria-labelledby="AngularCalendar-tab1">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-calendar></rds-comp-calendar>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
  
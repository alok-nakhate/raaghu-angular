---
slug: "/button-group"
date: "2019-05-04"
title: "Elements > Button-group"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Button Group

<p class="checkbox-def">Button group wraps a series of buttons together into a single line (navbar} or stack in a vertical column.</p>

<!-- Default -->

<section class="py-4">
    <h6>Default Filled</h6>
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
               <img src="/images/button-group-basic.png">
                </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row  m-0 ">

```html
<rds-button-group
  [vertical]="false"
  colorVariant="primary"
  role="button"
  size="medium"
  [buttonGroupItem]="buttonGroupItem"
></rds-button-group>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>



<!-- Outline Button Group-->

<section class="py-4" style="margin-bottom: 40px">
    <h6>Outline Button Group</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewCheckboxButton-tab" data-bs-toggle="tab" data-bs-target="#PreviewCheckboxButton" type="button" role="tab" aria-controls="PreviewCheckboxButton" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularCheckboxButton-tab" data-bs-toggle="tab" data-bs-target="#AngularCheckboxButton" type="button" role="tab" aria-controls="AngularCheckboxButton" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewCheckboxButton" role="tabpanel" aria-labelledby="PreviewCheckboxButton-tab">
          <div class="contents  p-5">
            <div class="row">
            <div class="col-md-12">
                   <img src="/images/button-group-checkbox.png">
                    </div>
               </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularCheckboxButton" role="tabpanel" aria-labelledby="AngularCheckboxButton-tab">
          <div class="contents bg-code">
<div class="row  m-0 ">

```html
<rds-button-group
  [vertical]="false"
  colorVariant="primary"
  [outline]="true"
  role="checkbox"
  size="medium"
  [buttonGroupItem]="buttonGroupItem"
></rds-button-group>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Icon Group Filled -->

<section class="py-4" style="margin-bottom: 40px">
    <h6>Icon Group Filled</h6>
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
          <div class="contents  p-5">
            <div class="row">
            <div class="col-md-12">
                   <img src="/images/button-group-with-icon.png">
                    </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularIcon" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-code">
<div class="row  m-0 ">

```html
<rds-button-group
  [vertical]="false"
  colorVariant="primary"
  size="medium"
  [buttonGroupItem]="buttonGroupItem"
></rds-button-group>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Radio Button Group -->

<section class="py-4" style="margin-bottom: 40px">
    <h6>Radio Button Group</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewRadio-tab" data-bs-toggle="tab" data-bs-target="#PreviewRadio" type="button" role="tab" aria-controls="PreviewRadio" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularRadio-tab" data-bs-toggle="tab" data-bs-target="#AngularRadio" type="button" role="tab" aria-controls="AngularRadio" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewRadio" role="tabpanel" aria-labelledby="PreviewRadio-tab">
          <div class="contents  p-5">
            <div class="row">
            <div class="col-md-12">
                   <img src="/images/button-group-radio-button.png">
                    </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularRadio" role="tabpanel" aria-labelledby="AngularRadio-tab">
          <div class="contents bg-code">
<div class="row  m-0 ">

```html
<rds-button-group
  [vertical]="false"
  colorVariant="primary"
  [outline]="true"
  role="radio"
  size="medium"
  [buttonGroupItem]="buttonGroupItem"
></rds-button-group>
```
</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Vertical Group Filled -->

<section class="py-4" style="margin-bottom: 40px">
    <h6>Vertical Group Filled</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewVertical-tab" data-bs-toggle="tab" data-bs-target="#PreviewVertical" type="button" role="tab" aria-controls="PreviewVertical" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularVertical-tab" data-bs-toggle="tab" data-bs-target="#AngularVertical" type="button" role="tab" aria-controls="AngularVertical" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewVertical" role="tabpanel" aria-labelledby="PreviewVertical-tab">
          <div class="contents  p-5">
            <div class="row">
            <div class="col-md-12">
                   <img src="/images/button-group-vertical-group.png">
                    </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularVertical" role="tabpanel" aria-labelledby="AngularVertical-tab">
          <div class="contents bg-code">
<div class="row  m-0 ">

```html
<rds-button-group
  [vertical]="true"
  colorVariant="primary"
  size="medium"
  [buttonGroupItem]="buttonGroupItem"
></rds-button-group>
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
                                       <img src="/images/skel-button-group.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

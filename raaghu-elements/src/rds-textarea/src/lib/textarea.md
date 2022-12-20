---
slug: "/textarea"
date: "2019-05-04"
title: "Elements > Textarea"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Textarea

<p class="checkbox-def">Textarea is an input field for a large text value. </p>

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
         <div class="contents  p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/text-area.png" class=" img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-textarea
  [tooltipPlacement]="tooltipPlacement"
  [placeholderText]="placeholderText"
  [label]="label"
  [value]="value"
  [isFloatingInputLabel]="isFloatingInputLabel"
  [floatinglabel]="floatinglabel"
  [rows]="rows"
></rds-textarea>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Tooltip</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewTooltip-tab" data-bs-toggle="tab" data-bs-target="#PreviewTooltip" type="button" role="tab" aria-controls="PreviewTooltip" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularTooltip-tab" data-bs-toggle="tab" data-bs-target="#AngularTooltip" type="button" role="tab" aria-controls="AngularTooltip" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewTooltip" role="tabpanel" aria-labelledby="PreviewTooltip-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/text-area-tooltip.png" class="imf fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularTooltip" role="tabpanel" aria-labelledby="AngularTooltip-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="row m-5">
  <div class="col-md-12 p-5">
    <rds-textarea
      [label]="label"
      [tooltipTitle]="tooltipTitle"
      [placeholderText]="placeholderText"
      [tooltipPlacement]="tooltipPlacement"
    ></rds-textarea>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

 <section class="py-4">
    <h6>Disabled</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDisabled-tab" data-bs-toggle="tab" data-bs-target="#PreviewDisabled" type="button" role="tab" aria-controls="PreviewDisabled" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDisabled-tab" data-bs-toggle="tab" data-bs-target="#AngularDisabled" type="button" role="tab" aria-controls="AngularDisabled" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDisabled" role="tabpanel" aria-labelledby="PreviewDisabled-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/text-area-disabled.png" class="imf fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularDisabled" role="tabpanel" aria-labelledby="AngularDisabled-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-textarea
  [disabled]="true"
  label="Text area"
  placeholderText="Add Placeholder"
></rds-textarea>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section class="py-4">
    <h6>Readonly</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewRead-tab" data-bs-toggle="tab" data-bs-target="#PreviewRead" type="button" role="tab" aria-controls="PreviewRead" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularRead-tab" data-bs-toggle="tab" data-bs-target="#AngularRead" type="button" role="tab" aria-controls="AngularRead" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewRead" role="tabpanel" aria-labelledby="PreviewRead-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/text-area-readonly.png" class="imf fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularRead" role="tabpanel" aria-labelledby="AngularRead-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-textarea
  [disabled]="true"
  label="Text area"
  placeholderText="Add Placeholder"
></rds-textarea>
```

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
                                    <div class="col-md-9 col-12">
                                       <img src="/images/skel-text_area.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>   
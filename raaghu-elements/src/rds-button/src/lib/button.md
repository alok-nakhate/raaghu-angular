---
slug: "/Button"
date: "2019-05-04"
title: "Elements > Button"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

<link rel="stylesheet" href="../assets/css/main.css">

#### Button
  
<p class="">A button triggers an event or action. They let users know what will happen next.</p> 

<!-- Default -->

<section class="py-4">
  <h6>Default</h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDefault-tab" data-bs-toggle="tab" data-bs-target="#PreviewDefault" type="button" role="tab" aria-controls="PreviewDefault" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDefault-tab" data-bs-toggle="tab" data-bs-target="#AngularDefault" type="button" role="tab" aria-controls="AngularDefault" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDefault" role="tabpanel" aria-labelledby="PreviewDefault-tab">
         <div class="contents  p-5">
         <div class="row">
         <div class="col-md-12">
           <img src="/images/button-basic.png" class=" img-fluid w-15"> 
           </div>
   </div>                          
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularDefault" role="tabpanel" aria-labelledby="AngularDefault-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  label="button"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>

<!-- Block Button -->
  
<section class="py-4">
  <h6>Block Button</h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBlock-tab" data-bs-toggle="tab" data-bs-target="#PreviewBlock" type="button" role="tab" aria-controls="PreviewBlock" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBlock-tab" data-bs-toggle="tab" data-bs-target="#AngularBlock" type="button" role="tab" aria-controls="AngularBlock" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBlock" role="tabpanel" aria-labelledby="PreviewBlock-tab">
         <div class="contents  p-5">
         <div class="row">
         <div class="col-md-12">
           <img src="/images/button-block.png" class=" img-fluid w-100"> 
           </div>
   </div>                          
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularBlock" role="tabpanel" aria-labelledby="AngularBlock-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-button
  colorVariant="primary"
  [block]="true"
  size="medium"
  label="Block"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
</section>
  
<!-- Rounded Button with Icon -->

<section class="py-4">
<h6>Rounded Button with Icon</h6>
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
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
          <img src="/images/button-icon.png" class=" img-fluid w-15">  
           </div>
   </div>                          
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularIcon" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-button
  colorVariant="primary"
  size="medium"
  [roundedButton]="true"
  iconHeight="18px"
  iconWidth="18px"
  [iconStroke]="true"
  [iconFill]="false"
  icon="plus"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>

 <!-- With Icon and Label  -->

<section class="py-4">
<h6>With Icon and Label </h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewIconwithLabel-tab" data-bs-toggle="tab" data-bs-target="#PreviewIconwithLabel" type="button" role="tab" aria-controls="PreviewIcon" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularIconwithLabel-tab" data-bs-toggle="tab" data-bs-target="#AngularIconwithLabel" type="button" role="tab" aria-controls="AngularIcon" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewIconwithLabel" role="tabpanel" aria-labelledby="PreviewIcon-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents bg-light p-5">
          <img src="/images/button-with-label.png" class=" img-fluid w-15">  
           </div>
   </div>                          
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularIconwithLabel" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html

<rds-button
  colorVariant="primary"
  size="medium"
  iconHeight="18px"
  iconWidth="18px"
  [iconStroke]="true"
  [iconFill]="false"
  icon="plus"
  label="button"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
</section>

<!-- Outline -->

<section class="py-4">
<h6>Outline </h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewOutline-tab" data-bs-toggle="tab" data-bs-target="#PreviewOutline" type="button" role="tab" aria-controls="PreviewOutline" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutline-tab" data-bs-toggle="tab" data-bs-target="#AngularOutline" type="button" role="tab" aria-controls="AngularOutline" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewOutline" role="tabpanel" aria-labelledby="PreviewOutline-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
            <img src="/images/button-outline.png" class=" img-fluid w-15">
               </div>
   </div>              
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularOutline" role="tabpanel" aria-labelledby="AngularOutline-tab">
          <div class="contents bg-code">
<div class="row">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  [outlineButton]="true"
  label="outline"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>


<!-- Disable -->

<section class="py-4">
<h6>Disable </h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDisable-tab" data-bs-toggle="tab" data-bs-target="#PreviewDisable" type="button" role="tab" aria-controls="PreviewOutline" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutline-tab" data-bs-toggle="tab" data-bs-target="#AngularDisable" type="button" role="tab" aria-controls="AngularOutline" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDisable" role="tabpanel" aria-labelledby="PreviewDisable-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
            <img src="/images/disable-button.png" class=" img-fluid w-15">
               </div>
   </div>              
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularDisable" role="tabpanel" aria-labelledby="AngularDisable-tab">
          <div class="contents bg-code">
<div class="row">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  [disabled]="true"
  label="Disable"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>

<!-- Rounded Corner Button -->

<section class="py-4">
<h6> Rounded Corner Button </h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewRounded-tab" data-bs-toggle="tab" data-bs-target="#PreviewRounded" type="button" role="tab" aria-controls="PreviewRounded" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularRounded-tab" data-bs-toggle="tab" data-bs-target="#AngularRounded" type="button" role="tab" aria-controls="AngularRounded" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewRounded" role="tabpanel" aria-labelledby="PreviewRounded-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
            <img src="/images/button-rounded.png" class=" img-fluid w-15">
               </div>
   </div>              
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularRounded" role="tabpanel" aria-labelledby="AngularRounded-tab">
          <div class="contents bg-code">
<div class="row">

```html
<rds-button
  colorVariant="primary"
  size="medium"
  [roundedCorner]="true"
  label="Rounded Corner"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>


<!-- Tooltip -->
<section class="py-4">
<h6>Tooltip </h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="Previewtooltip-tab" data-bs-toggle="tab" data-bs-target="#Previewtooltip" type="button" role="tab" aria-controls="PreviewOutline" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="Angulartooltip-tab" data-bs-toggle="tab" data-bs-target="#Angulartooltip" type="button" role="tab" aria-controls="AngularOutline" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Previewtooltip" role="tabpanel" aria-labelledby="Previewtooltip-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
            <img src="/images/button-tooltip.png" class=" img-fluid w-25">
               </div>
   </div>              
   </div>
   </div>
        <div class="tab-pane fade show" id="Angulartooltip" role="tabpanel" aria-labelledby="Angulartooltip-tab">
          <div class="contents bg-code">
<div class="row">

```html
<rds-button
      [label]="label"
      [colorVariant]="colorVariant"
      [size]="size"
      [tooltipTitle]="tooltipTitle"
      [tooltipPlacement]="tooltipPlacement"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>


###### Skeleton/Specifications
<div class="py-3">
 <div class="card border p-5">
  <div class="row">
      <div class="col-md-12">
        <img src="/images/button-skeleton.png" class=" img-fluid w-50">
     </div>
   </div>
   </div>
 </div>
</div>	



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

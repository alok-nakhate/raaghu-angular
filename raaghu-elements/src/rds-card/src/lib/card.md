---
slug: "/Card"
date: "2019-05-04"
title: "Elements > Card"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">




#### Card

<p class="">A card is a small rectangular module with images and text. It is an entry point for users to learn more details</p>

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
                <img src="/images/card-basic.png" class="img-fluid w-100"></div>
              </div>
             </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <rds-card
  [header]="header"
  [body]="body"
  [backgroundColor]="backgroundColor"
  [bodybackGroundColor]="'#DFE5F6'"
  [footer]="footer"
  [Paddig]="10"
  [Data]="Data"
  [width]="width"
  class="rounded-avatar-basic"
>
  <ng-template #header>
    <div class="text-center">
      <img
        src="https://picsum.photos/seed/picsum/1200/600"
        class="card-img-top"
        alt=""
      />
    </div>
  </ng-template>
  <ng-template #body>
    <h5 class="custom-title">{{Data.headerTitle}}</h5>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   


   <section class="py-4">
    <h6>Avatar</h6>
    <div class="py-3">
      <div class="cust-tabs">
         <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewWithAvtar-tab" data-bs-toggle="tab" data-bs-target="#PreviewWithAvtar" type="button" role="tab" aria-controls="PreviewWithAvtar" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularWithAvtar-tab" data-bs-toggle="tab" data-bs-target="#AngularWithAvtar" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewWithAvtar" role="tabpanel" aria-labelledby="PreviewWithAvtar-tab">
         <div class="contents  p-5">
             <div class="row">
             <div class="col-md-12">
                  <img src="/images/card-avatar.png"class="img-fluid w-50"> 
                  </div>                                
           </div>               
         </div>
        </div>
        <div class="tab-pane fade show" id="AngularWithAvtar" role="tabpanel" aria-labelledby="AngularWithAvtar-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <rds-card
  [header]="header"
  [body]="body"
  [Data]="Data"
  [footer]="footer"
  width="30%"
  class="rounded-avatar-left"
>
  <ng-template #header>
    <div class="banner-image1">
      <img
        class="img-responsive"
        src="https://picsum.photos/seed/picsum/1200/600"
      />
    </div>
    <img src="https://placekitten.com/300/300" alt="" class="img-avatar-left" />
  </ng-template>
  <ng-template #body>
    <h5 class="custom-title">{{Data.headerTitle}}</h5>
    <p class="custom-desc">{{Data.cardDescription}}</p>
  </ng-template>
  <ng-template #footer>
    <a href="#" class="btn btn-primary  mt-3">Go somewhere</a>
  </ng-template>
</rds-card>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
    <h6>Card with Image</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewImage-tab" data-bs-toggle="tab" data-bs-target="#PreviewImage" type="button" role="tab" aria-controls="PreviewImage" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewImage" role="tabpanel" aria-labelledby="PreviewImage-tab">
         <div class="contents  p-5">
              <div class="row">
               <div class="col-md-12">
                <img src="/images/card-with-image.png" class="img-fluid w-50"></div>
              </div>
             </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-card
  [showHeader]="showHeader"
  [showBody]="showBody"
  [showFooter]="showFooter"
  [colorVariant]="colorVariant"
  [borderColor]="borderColor"
>
  <div header>
    <img
      src="https://picsum.photos/seed/picsum/1200/600"
      class="card-img-top"
      alt=""
    />
  </div>
  <div body>
    <h5>Header Title</h5>
    <p>
      Some quick example text to build on the card title and make up the bulk of
      the card's content
    </p>
    <div footer>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</rds-card>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   


<section class="py-4">
    <h6>With Centered Avatar</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewWithAvtarCenter-tab" data-bs-toggle="tab" data-bs-target="#PreviewWithAvtar" type="button" role="tab" aria-controls="PreviewWithAvtarCenter" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularWithAvtarCenter-tab" data-bs-toggle="tab" data-bs-target="#AngularWithAvtarCenter" type="button" role="tab" aria-controls="AngularWithAvtarCenter" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewWithAvtarCenter" role="tabpanel" aria-labelledby="PreviewWithAvtarCenter-tab">
         <div class="contents p-5">
              <div class="tab-pane fade show active" id="PreviewWithAvtarCenter" role="tabpanel" aria-labelledby="preview-tab">
   <div class="contents  p-5">
    <div class="row">
    <div class="col-md-12">
         <img src="/images/card-avatar-center.png"class="img-fluid w-50">  
         </div> 
   </div> 
   </div>
  </div>
  </div>
      </div>
        <div class="tab-pane fade show" id="AngularWithAvtarCenter" role="tabpanel" aria-labelledby="AngularWithAvtarCenter-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
  <rds-card
  [header]="header"
  [body]="body"
  [Data]="Data"
  [footer]="footer"
  width="28%"
  class="rounded-avatar-center"
>
  <ng-template #header>
    <div class="banner-image1">
      <img
        class="img-responsive"
        src="https://picsum.photos/seed/picsum/1200/600"
      />
    </div>
    <img src="https://placekitten.com/300/300" alt="" class="img-avatar" />
  </ng-template>
  <ng-template #body>
    <h5 class="custom-title">{{Data.headerTitle}}</h5>
    <p class="custom-desc">{{Data.cardDescription}}</p>
  </ng-template>
  <ng-template #footer>
    <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
  </ng-template>
</rds-card>
```
</div>

  </div>
        </div>
      </div>
    </div>
  </section>



<section class="py-4">
<h6>Skeleton/Specifications</h6>
<div class="py-3">
 <div class="card border p-5">
  <div class="row">
      <div class="col-md-12">
        <img src="/images/card-skeleton.png" class="img-fluid">
     </div>
   </div>
   </div>
 </div>
</div>	

  </section>
  
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>


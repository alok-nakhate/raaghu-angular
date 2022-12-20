---
slug: "/comp-product-list"
date: "2019-05-04"
title: "Components > Product-list"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Product List

<p>Provides different features on selecting a product along with different buttons </p>

<section class="py-4">
    <h6>Infinite Product List</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewInfinite-tab" data-bs-toggle="tab" data-bs-target="#PreviewInfinite" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularInfinite-tab" data-bs-toggle="tab" data-bs-target="#AngularInfinite" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewInfinite" role="tabpanel" aria-labelledby="PreviewInfinite-tab">
         <div class="contents p-5">
              <div class="row">              
                 <div class="col-md-12">
                    <img src="/images/product-image-infinite-product-list.png" class="img-fluid w-75">
                 </div>              
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularInfinite" role="tabpanel" aria-labelledby="AngularInfinite-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="infiniteproductlist"
  [productListItems]="productListItems"
  [itemListRating]="itemListRating"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
</section>

<!-- Defualt -->
<section class="py-4">
    <h6>Product Image with Title</h6>
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
                    <img src="/images/product-image-with-title.png" class="img-fluid w-100">
                 </div>              
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="ImageWithTitle"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
</section>

<!-- Card with full details-->
<section class="py-4">
    <h6>Card With Full Details</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDetail-tab" data-bs-toggle="tab" data-bs-target="#PreviewDetail" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDetail-tab" data-bs-toggle="tab" data-bs-target="#AngularDetail" type="button" role="tab" aria-controls="AngularDetail" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDetail" role="tabpanel" aria-labelledby="PreviewDetail-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                    <img src="/images/product-image-with-details.png" class="img-fluid w-100">
                 </div>                  
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularDetail" role="tabpanel" aria-labelledby="AngularDetail-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="cardWithFullDetails"
  [productListItems]="productListItems"
  [itemListRating]="itemListRating"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   
<!-- Product with info  -->
<section class="py-4">
    <h6>Product With Info</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewInfo-tab" data-bs-toggle="tab" data-bs-target="#PreviewInfo" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularInfo-tab" data-bs-toggle="tab" data-bs-target="#AngularInfo" type="button" role="tab" aria-controls="AngularInfo" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewInfo" role="tabpanel" aria-labelledby="PreviewInfo-tab">
         <div class="contents  p-5">
              <div class="row"> 
                 <div class="col-md-12">
                     <img src="/images/product-image-with-info.png" class="img-fluid w-100">
                 </div>                          
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularInfo" role="tabpanel" aria-labelledby="AngularInfo-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="ImageWithInfo"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Simple -->
<section class="py-4">
    <h6>Simple</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewSimple-tab" data-bs-toggle="tab" data-bs-target="#PreviewSimple" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularSimple-tab" data-bs-toggle="tab" data-bs-target="#AngularSimple" type="button" role="tab" aria-controls="AngularSimple" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewSimple" role="tabpanel" aria-labelledby="PreviewSimple-tab">
         <div class="contents  p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="/images/product-image-list-simple.png" class="img-fluid w-100">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularSimple" role="tabpanel" aria-labelledby="AngularSimple-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="simple"
  [productListItems]="productListItems"
  [itemListRating]="itemListRating"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With Border Grid -->
<section class="py-4">
    <h6>With Border Grid</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBorder-tab" data-bs-toggle="tab" data-bs-target="#PreviewBorder" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBorder-tab" data-bs-toggle="tab" data-bs-target="#AngularBorder" type="button" role="tab" aria-controls="AngularBorder" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBorder" role="tabpanel" aria-labelledby="PreviewBorder-tab">
         <div class="contents p-5">
              <div class="row">  
                 <div class="col-md-12">
                     <img src="/images/product-image-with-border-grid.png" class="img-fluid w-100">
                 </div>                         
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBorder" role="tabpanel" aria-labelledby="AngularBorder-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="simple"
  [productListItems]="productListItems"
  [itemListRating]="itemListRating"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With CTA Link -->
<section class="py-4">
    <h6>With CTA Link</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="Previewlink-tab" data-bs-toggle="tab" data-bs-target="#Previewlink" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="Angularlink-tab" data-bs-toggle="tab" data-bs-target="#Angularlink" type="button" role="tab" aria-controls="Angularlink" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Previewlink" role="tabpanel" aria-labelledby="Previewlink-tab">
         <div class="contents p-5">
              <div class="row">               
                 <div class="col-md-12">
                     <img src="/images/product-image-tall-CTA-link.png" class="img-fluid w-100">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="Angularlink" role="tabpanel" aria-labelledby="Angularlink-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="withCTALink"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Color Swatches And Horizontal Scrolling -->
<section class="py-4">
    <h6>With Color Swatches And Horizontal Scrolling</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewColor-tab" data-bs-toggle="tab" data-bs-target="#PreviewColor" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularColor-tab" data-bs-toggle="tab" data-bs-target="#AngularColor" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewColor" role="tabpanel" aria-labelledby="PreviewColor-tab">
         <div class="contents p-5">
              <div class="row">             
                 <div class="col-md-12">
                     <img src="/images/product-image-with-color-switcher.png" class="img-fluid w-100">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularColor" role="tabpanel" aria-labelledby="AngularColor-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="withColorSwatchesAndHorizontalScrolling"
  [productListItems]="productListItems"
  [itemListColor]="itemListColor"
  [itemListRating]="itemListRating"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Image Overlay And Add Button -->
<section class="py-4">
    <h6>With Image Overlay And Add Button</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewImage-tab" data-bs-toggle="tab" data-bs-target="#PreviewImage" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularImage-tab" data-bs-toggle="tab" data-bs-target="#AngularImage" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewImage" role="tabpanel" aria-labelledby="PreviewImage-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="/images/product-image-overlay.png" class="img-fluid w-100">
                 </div>                          
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularImage" role="tabpanel" aria-labelledby="AngularImage-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="withImageOverlayAndAddButton"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With Inline Price -->
<section class="py-4">
    <h6>With Inline Price</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewInline-tab" data-bs-toggle="tab" data-bs-target="#PreviewInline" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularInline-tab" data-bs-toggle="tab" data-bs-target="#AngularInline" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewInline" role="tabpanel" aria-labelledby="PreviewInline-tab">
         <div class="contents p-5">
              <div class="row">           
                 <div class="col-md-12">
                     <img src="/images/product-image-with-inline-price.png" class="img-fluid w-100">
                 </div>              
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularInline" role="tabpanel" aria-labelledby="AngularInline-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="withInlinePrice"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With Supporting Text -->
<section class="py-4">
    <h6>With Supporting Text</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewSupporting-tab" data-bs-toggle="tab" data-bs-target="#PreviewSupporting" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularSupporting-tab" data-bs-toggle="tab" data-bs-target="#AngularSupporting" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewSupporting" role="tabpanel" aria-labelledby="PreviewSupporting-tab">
         <div class="contents p-5">
              <div class="row">   
                 <div class="col-md-12">
                    <img src="/images/product-image-with-supporting-text.png" class="img-fluid w-100">
                 </div>                        
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularSupporting" role="tabpanel" aria-labelledby="AngularSupporting-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="withSupportingText"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Tall Images -->
<section class="py-4">
    <h6>With Tall Images</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewTall-tab" data-bs-toggle="tab" data-bs-target="#PreviewTall" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularTall-tab" data-bs-toggle="tab" data-bs-target="#AngularTall" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewTall" role="tabpanel" aria-labelledby="PreviewTall-tab">
         <div class="contents p-5">
              <div class="row">  
                 <div class="col-md-12">
                     <img src="/images/product-image-tall-image.png" class="img-fluid w-100">
                 </div>                        
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularTall" role="tabpanel" aria-labelledby="AngularTall-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-comp-product-list
  role="withTallImages"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Tall Images And CTA Link -->
<section class="py-4">
    <h6>With Tall Images And CTA Link </h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewTallCTA-tab" data-bs-toggle="tab" data-bs-target="#PreviewTallCTA" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularTallCTA-tab" data-bs-toggle="tab" data-bs-target="#AngularTallCTA" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewTallCTA" role="tabpanel" aria-labelledby="PreviewTallCTA-tab">
         <div class="contents bg-light p-5">
              <div class="row">
                 <div class="col-md-12">
                      <img src="/images/product-image-tall-CTA-link.png" class="img-fluid w-100">
                 </div>                         
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularTallCTA" role="tabpanel" aria-labelledby="AngularTallCTA-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html

<rds-comp-product-list
  role="withTallImagesAndCTALink"
  [productListItems]="productListItems"
></rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>



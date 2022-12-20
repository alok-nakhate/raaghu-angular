---
slug: "/Accordion"
date: "2019-05-04"
title: "Elements > Accordion"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Accordion

<p class="checkbox-def">It is list of collapsible panels with clickable heading or down arrow, expanding to reveal hidden content. </p>

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
                <img src="/images/accordion-basic.png" class="img-fluid">
              </div>               
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-accordian>
  <accordion-item title="Section 1 title">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>

<rds-accordian>
  <accordion-item title="Section 2 title">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


<!-- Flush -->
  <section class="py-4">
    <h6>With Flush</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewOutlined-tab" data-bs-toggle="tab" data-bs-target="#PreviewOutlined" type="button" role="tab" aria-controls="PreviewOutlined" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutlined-tab" data-bs-toggle="tab" data-bs-target="#AngularOutlined" type="button" role="tab" aria-controls="AngularOutlined" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewOutlined" role="tabpanel" aria-labelledby="PreviewOutlined-tab">
          <div class="contents  p-5">
            <div class="row">
               <div class="col-md-12">
                  <img src="/images/accordion-basic.png" class="img-fluid">
               </div>          
              </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularOutlined" role="tabpanel" aria-labelledby="AngularOutlined-tab">
          <div class="contents bg-code">
    <div class="row m-0">

```html
<rds-accordian [flush]="flush">
  <accordion-item title="Section 1 title">
    this is content updated
  </accordion-item>
</rds-accordian>

<rds-accordian>
  <accordion-item title="Section 2 title">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>
```

</div>
          </div>
        </div>
      </div>
    </div>
</section>

<!-- Accordian Always open -->

 <section class="py-4">
    <h6>Always open </h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewOpen-tab" data-bs-toggle="tab" data-bs-target="#PreviewOpen" type="button" role="tab" aria-controls="PreviewOpen" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOpen-tab" data-bs-toggle="tab" data-bs-target="#AngularOpen" type="button" role="tab" aria-controls="AngularOpen" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewOpen" role="tabpanel" aria-labelledby="PreviewOpen-tab">
          <div class="contents  p-5">
            <div class="row">
               <div class="col-md-12">
                  <img src="/images/accordion-always-open.png" class="img-fluid">
               </div>          
              </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularOpen" role="tabpanel" aria-labelledby="AngularOpen-tab">
          <div class="contents bg-code">
    <div class="row m-0">

```html
<rds-accordian [outline]="true">
  <accordion-item
    title="Section 1 title"
    [alwaysOpen]="alwaysOpen"
    [expanded]="true"
  >
    this is content updated
  </accordion-item>
</rds-accordian>
<rds-accordian>
  <accordion-item title="Section 2 title" [alwaysOpen]="alwaysOpen">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>
```

</div>
          </div>
        </div>
      </div>
    </div>
</section>

<!-- Accoradtion with product overview -->
  <section class="py-4">
    <h6>With Product Overview</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewOutlined-tab" data-bs-toggle="tab" data-bs-target="#productoverview" type="button" role="tab" aria-controls="PreviewOutlined" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutlined-tab" data-bs-toggle="tab" data-bs-target="#productoverviewcode" type="button" role="tab" aria-controls="AngularOutlined" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="productoverview" role="tabpanel" aria-labelledby="productoverview-tab">
          <div class="contents  p-5">
            <div class="row">
               <div class="col-md-12">
                  <img src="/images/accordion-product-overview.png" class="img-fluid">
               </div>          
              </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="productoverviewcode" role="tabpanel" aria-labelledby="productoverviewcode-tab">
          <div class="contents bg-light">
    <div class="row m-0">

```html
<rds-accordian [border]="true" [outline]="false" [id]="id">
  <accordion-item title="Section 1 title" [accordionId]="id">
    <h3>Custom</h3>
  </accordion-item>
  <accordion-item title="Section 2 title" [accordionId]="id">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>
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
                                    <div class="col-md-12">
                                       <img src="/images/accoradtion-sketch.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

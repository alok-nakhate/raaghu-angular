---
slug: "/tags"
date: "2019-05-04"
title: "Elements > Tags"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">
<link rel="stylesheet" href="../assets/css/main.css">

#### Tag

<p class="checkbox-def">Tags are used to label, categorize, or organise items using different keywords that describe them.</p>

<section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="Preview-tab" data-bs-toggle="tab" data-bs-target="#Preview" type="button" role="tab" aria-controls="Preview" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="angular-tab" data-bs-toggle="tab" data-bs-target="#angular" type="button" role="tab" aria-controls="angular" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Preview" role="tabpanel" aria-labelledby="Preview-tab">
          <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/tag.png" class="img-fuild w-100"> 
              </div>
            </div>                               
            </div>
        </div>
        <div class="tab-pane fade show" id="angular" role="tabpanel" aria-labelledby="Preview-tab">
          <div class="contents bg-code">
      
<div class="row  m-0 p-4">

```html
<rds-tags
  tagType="square"
  roles="TagWithScroll"
  colorVariant="primary"
></rds-tags>
```
</div>
         </div>
        </div>
      </div>
    </div>

</section>

<section class="py-4">
    <h6>Tag with scroll</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewScroll-tab" data-bs-toggle="tab" data-bs-target="#PreviewScroll" type="button" role="tab" aria-controls="PreviewScroll" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="angularScroll-tab" data-bs-toggle="tab" data-bs-target="#angularScroll" type="button" role="tab" aria-controls="angularScroll" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewScroll" role="tabpanel" aria-labelledby="PreviewScroll-tab">
          <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/tag-scroll.png" class="img-fuild w-100"> 
              </div>
            </div>                               
            </div>
        </div>
        <div class="tab-pane fade show" id="angularScroll" role="tabpanel" aria-labelledby="angularScroll-tab">
          <div class="contents bg-code">
      
<div class="row  m-0 p-4">

```html
<rds-tags
  tagType="square"
  role="tagWithScroll"
  colorVariant="primary"
></rds-tags>
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
                                    <div class="col-md-5">
                                       <img src="/images/skel-tags1.png" class="img-fluid">
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>

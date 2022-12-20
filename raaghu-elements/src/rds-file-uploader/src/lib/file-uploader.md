---
slug: "/file-uploader"
date: "2019-05-04"
title: "Elements > File-uploader"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### File Uploader

<p class="checkbox-def">File uploaders allow users to select one or more files to upload to a specific location.</p>

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
                    <img src="/images/file-uploader-basic.png" class="img-fluid">
                 </div>                   
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-file-uploader
  size="medium"
  label="Upload Files"
  [multipleFiles]="false"
  role="default"
></rds-file-uploader>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
    <h6>Multiple File Uploader</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewMultiple-tab" data-bs-toggle="tab" data-bs-target="#PreviewMultiple" type="button" role="tab" aria-controls="PreviewMultiple" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="angularmultiple-tab" data-bs-toggle="tab" data-bs-target="#angularmultiple" type="button" role="tab" aria-controls="angularmultiple" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewMultiple" role="tabpanel" aria-labelledby="PreviewMultiple-tab">
          <div class="contents p-5">
            <div class="row">
                 <div class="col-md-12">
                    <img src="/images/file-uploader-advanced.png" class="img-fluid w-75">
                 </div>                   
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="angularmultiple" role="tabpanel" aria-labelledby="angularmultiple-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-file-uploader
  size="medium"
  label="Upload Files"
  [multipleFiles]="true"
  role="fileUpload"
  extensions="png, jpg, doc, ,pdf, ppt"
></rds-file-uploader>
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
                                    <div class="col-md-12">
                                       <img src="/images/file-uploader-skeleton.png" class="img-fluid">
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>

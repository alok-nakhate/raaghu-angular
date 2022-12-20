---
slug: "/video-player"
date: "2019-05-04"
title: "Elements > Video-player"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Video Player

<p class="checkbox-def">Video player lets user control and play multimedia files on the webpage.</p>

<section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic3-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic3" type="button" role="tab" aria-controls="PreviewBasic3" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic3-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic3" type="button" role="tab" aria-controls="AngularBasic3" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic3" role="tabpanel" aria-labelledby="PreviewBasic3-tab">
         <div class="contents p-5">
            <div class="row">
              <div class="col-md-12">
                <img src="/images/video-player.png" class="img-fuild w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic3" role="tabpanel" aria-labelledby="AngularBasic3-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-video-player
  videoLink="http://static.videogular.com/assets/videos/videogular.mp4"
></rds-video-player>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section
  

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
                                       <img src="/images/skel-video_player.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>   
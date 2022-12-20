---
slug: "/stepper"
date: "2019-05-04"
title: " Elements > Stepper"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Stepper

<p class="checkbox-def">Stepper is a process map having user defined milestones to inform user of the steps involved in the process.</p>

<!-- Basic -->
<section class="py-4">
    <h6>Bullets</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic1-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic1" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic1-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic1" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic1" role="tabpanel" aria-labelledby="PreviewBasic1-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-with-bullets.png" class="img-fluid w-75">
                </div>
                </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic1-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>




<!-- Basic -->
<section class="py-4">
    <h6>Bullets Text</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic2-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic2" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic2-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic2" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic2" role="tabpanel" aria-labelledby="PreviewBasic2-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-with-bullet-text.png" class="w-75">
                </div>
                </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic2" role="tabpanel" aria-labelledby="AngularBasic2-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

 

<!-- Basic -->
<section class="py-4">
    <h6>Panel</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic3-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic3" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic3-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic3" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic3" role="tabpanel" aria-labelledby="PreviewBasic3-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-panel.png" class="img-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic3" role="tabpanel" aria-labelledby="AngularBasic3-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>



<!-- Basic -->
<section class="py-4">
    <h6>Panel Arrow</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic4-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic4" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic4-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic4" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic4" role="tabpanel" aria-labelledby="PreviewBasic4-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-panel-arrow.png" class="img-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic4" role="tabpanel" aria-labelledby="AngularBasic4-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  

<!-- Basic -->
<section class="py-4">
    <h6>Panel Border</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic5-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic5" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic5-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic5" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic5" role="tabpanel" aria-labelledby="PreviewBasic5-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-with-border.png" class="img-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic5" role="tabpanel" aria-labelledby="AngularBasic5-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>



<!-- Basic -->
<section class="py-4">
    <h6>Panel Simple</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic6-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic6" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic6-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic6" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic6" role="tabpanel" aria-labelledby="PreviewBasic6-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-panel-simple.png" class="imf-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic6" role="tabpanel" aria-labelledby="AngularBasic6-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

 

<!-- Basic -->
<section class="py-4">
    <h6>Progress Bar</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab7" data-bs-toggle="tab" data-bs-target="#PreviewBasic7" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic7-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic7" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic7" role="tabpanel" aria-labelledby="PreviewBasic7-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-progress-bar.png" class="imf-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic7" role="tabpanel" aria-labelledby="AngularBasic7-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  

<!-- Basic -->
<section class="py-4">
    <h6>Simple</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic8-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic8" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic8-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic8" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic8" role="tabpanel" aria-labelledby="PreviewBasic8-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-simple.png" class="img-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic8" role="tabpanel" aria-labelledby="AngularBasic8-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>



<!-- Basic -->
<section class="py-4">
    <h6>Multi Circle-1</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic9-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic9" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic9-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic9" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic9" role="tabpanel" aria-labelledby="PreviewBasic9-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-multi-circle-1.png" class="img-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic9" role="tabpanel" aria-labelledby="AngularBasic9-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>



<!-- Basic -->
<section class="py-4">
    <h6>Multi Circle-2</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic10-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic10" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic10-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic10" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic10" role="tabpanel" aria-labelledby="PreviewBasic10-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-multi-circle-2.png" class="img-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic10" role="tabpanel" aria-labelledby="AngularBasic10-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


<!-- Basic -->
<section class="py-4">
    <h6>Multi Circle-3</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic11-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic11" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic11-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic11" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic11" role="tabpanel" aria-labelledby="PreviewBasic11-tab">
         <div class="contents p-5">
            <div class="row">
               <div class="col-md-12">
                 <img src="/images/stepper-multi-circle-3.png" class="img-fluid w-75">
                </div>
          </div>
        </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic11" role="tabpanel" aria-labelledby="AngularBasic11-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <rds-stepper
    [stepperList]="stepperList"
    [stepperType]="stepperType"
    [readOnly]="readOnly"
    [activePageNumber]="1"
  ></rds-stepper>
  <div naveContent class="tab-content" id="nav-tabContent">
    <div
      class="tab-pane fade show active p-2"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div class="contents">
        <p>
          This is some placeholder content the Profile tab's associated content.
          Clicking another tab will toggle the visibility of this one for the
          next.
          <br />
          The tab JavaScript swaps classes to control the content visibility and
          styling. You can use it with tabs, pills, and any other
        </p>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="contents bg-white p-2">
        This is some placeholder content the Home tab's associated content.
        Clicking another tab will toggle the visibility of this one for the
        next.
        <br />
        The tab JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibility tab
        JavaScript swaps classes to control the content visibilityand styling.
        You can use it with tabs, pills, and any other .nav-powered navigation.
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">Tab3 is showing with nav tab</div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-deabled"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      <div class="contents bg-white p-2">test</div>
    </div>
  </div>
</div>
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
                                       <img src="/images/skel-stepper.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>    
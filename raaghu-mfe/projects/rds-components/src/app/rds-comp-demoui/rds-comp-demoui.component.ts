import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'rds-comp-demoui',
  templateUrl: './rds-comp-demoui.component.html',
  styleUrls: ['./rds-comp-demoui.component.scss']
})
export class RdsCompDemouiComponent implements OnInit {
  video = "http://static.videogular.com/assets/videos/videogular.mp4";
  showAlert: boolean = false;


  progressBarList = [{
    "width": "50",
    "widthMax": "25"
  }];

  hundred: number = 100;
  fourty: number = 40;
  tableHeaderItems = [
    {
      "displayName": "Name",
      key: 'name',
      dataType: 'text'
    },
    {
      "displayName": "Age",
      key: 'age',
      dataType: 'text'
    },
    {
      "displayName": "State",
      key: 'state',
      dataType: 'text'
    }
  ];

  tableBodyItems = [
    {
      "name": "xyz",
      "age": 25,
      "state": "Maharashtra"
    },
    {
      "name": "yz",
      "age": 21,
      "state": "Hariyana"
    },
    {
      "name": "op",
      "age": 41,
      "state": "Surat"
    }
  ];

  buttonGroupItem = [
    {
      label: 'Left',
      id: '',
      name: '',
      colorVariant: 'primary'
    },
    {
      label: 'Middle',
      id: '',
      name: '',
      colorVariant: 'primary'

    },
    {
      label: 'Right',
      id: '',
      name: '',
      colorVariant: 'primary'

    },
  ]
  options = [
    { value: 'option 1', displayText: 'option 1' },
    { value: 'option 2', displayText: 'option 2' },
    { value: 'option 3', displayText: 'option 3' },
  ];
  buttonGroupItemWithIcon = [
    {
      "label": '',
      "icon": 'plus',
      "id": '',
      "name": '',
      colorVariant: 'info',
      iconWidth: '18px',
      iconHeight: '18px',
      stroke: true,
      fill: false
    },
    {
      "label": '',
      "icon": 'pencil',
      "id": '',
      "name": '',
      colorVariant: 'info',
      iconWidth: '18px',
      iconHeight: '18px',
      stroke: true,
      fill: false
    },
    {
      "label": '',
      "icon": 'delete',
      "id": '',
      "name": '',
      colorVariant: 'info',
      iconWidth: '18px',
      iconHeight: '18px',
      stroke: true,
      fill: false
    }
  ];
  cardData = {
    "headerTitle": "Header Title",
    "loginTitle": "Login Title",
    "cardDescription": "Some quick example text to build on the card title and make up the bulk of the card's content"
  }

  itemList = [
    {
      id: 1,
      label: "Child Checkbox 1"
    },
    {
      id: 2,
      label: "Child Checkbox 2"
    },
  ]
  
  itemListWithInputGroup = [
    {
      id: 1,
      label: "Child Checkbox 1"
    },
    {
      id: 2,
      label: "Child Checkbox 2"
    },
    // {
    //   id: 3,
    //   label: "Child Checkbox 3"
    // },
    // {
    //   id: 4,
    //   label: "Child Checkbox 4"
    // }
  ];

  itemListWithoutInputGroup =[
    {
      id: 1,
      label: "Child Checkbox 1"
    },
    {
      id: 2,
      label: "Child Checkbox 2"
    },
  ]

  checkboxParentChilditemList=[
    {
      "id": 1,
      "label": "Parent Checkbox 1",
      "isSelected": false,
      "isIntermediate": false,
      "isClosed": false,
      "disabled": false,
      "childList": [
        {
          "id": 1,
          "parent_id": 1,
          "label": "Child Checkbox 1",
          "isSelected": false,
          "disabled": false
        }
      ]
    },
    {
      "id": 2,
      "label": "Parent Checkbox 2",
      "isSelected": false,
      "isIntermediate": false,
      "isClosed": false,
      "disabled": false,
      "childList": [
        {
          "id": 1,
          "parent_id": 1,
          "label": "Child Checkbox 1",
          "isSelected": false,
          "disabled": false
        },
        {
          "id": 2,
          "parent_id": 1,
          "label": "Child Checkbox 2",
          "isSelected": false,
          "disabled": false
        }
      ]
    }
  ]

  listItems = [
    {
      "value": "India",
      "some": "India",
      "id": 0,
      "href": "",
      "color": "primary"
    },
    {
      "value": "South Africa",
      "some": "South Africa",
      "id": 1,
      "href": "",
      "color": "primary"
    }
  ];

  listItemsCountryCode = [
    {
      "value": "UK",
      "some": "UK",
      "id": 0,
      "href": "",
      "icon": "flag",
      "iconWidth": "20px",
      "iconHeight": "20px",
      "color": "primary"
    },
    {
      "value": "English(UK)",
      "some": "English(UK)",
      "id": 1,
      "href": "",
      "icon": "flag",
      "iconWidth": "20px",
      "iconHeight": "20px",
      "color": "primary"
    },
  ];

  listitem = [
    {
      "label": " label 1",
      "disabled": true,
      "badgeLabel": "10",
      "listHeading": "",
      "listContent": "",
      "listTime": "",
      "type": ""
    },
    {
      "label": " label 2",
      "disabled": false,
      "badgeLabel": "2",
      "listHeading": "",
      "listContent": "",
      "listTime": "",
      "type": ""
    },
    {
      "label": " label 3",
      "disabled": false,
      "badgeLabel": "5",
      "listHeading": "",
      "listContent": "",
      "listTime": "",
      "type": ""
    }
  ];

  listitemCheck = [
    {
      "label": " label 1",
      "disabled": true,
      "badgeLabel": "10",
      "listHeading": "",
      "listContent": "",
      "listTime": "",
      "type": ""
    },
    {
      "label": " label 2",
      "disabled": false,
      "badgeLabel": "2",
      "listHeading": "",
      "listContent": "",
      "listTime": "",
      "type": ""
    },
    {
      "label": " label 3",
      "disabled": false,
      "badgeLabel": "5",
      "listHeading": "",
      "listContent": "",
      "listTime": "",
      "type": ""
    }
  ];

  // modalData = [{
  //   "modalHeader": "Header",
  //   "modalContent": "Content",
  //   "modalFooter": "Footer"
  // }];


  navtabsItems = [
    {
      "label": "Active",
      "tablink": "#nav-home",
      "ariacontrols": "nav-home"
    },
    {
      "label": "Link",
      "tablink": "#nav-profile",
      "ariacontrols": "nav-profile"
    },
    {
      "label": "Disabled",
      "tablink": "#nav-deabled",
      "disabled": "true"
    }
  ];

  navtabsItemsTabs = [
    {
      "label": "Active",
      "tablink": "#nav-home-tabs",
      "ariacontrols": "nav-home"
    },
    {
      "label": "Link",
      "tablink": "#nav-profile-tabs",
      "ariacontrols": "nav-profile"
    },
    {
      "label": "Disabled",
      "tablink": "#nav-deabled-tabs",
      "disabled": "true"
    }
  ];
  navtabsItemsPills = [
    {
      "label": "Active",
      "tablink": "#nav-home-pills",
      "ariacontrols": "nav-home"
    },
    {
      "label": "Link",
      "tablink": "#nav-profile-pills",
      "ariacontrols": "nav-profile"
    },
    {
      "label": "Disabled",
      "tablink": "#nav-deabled-pills",
      "disabled": "true"
    }
  ];

  itemList1 = [
    {
      "id": 11,
      "label": "Radio Button ",
      "checked": false,
      "disabled": true,
      "name": "Radio-Button"
    },
    {
      "id": 12,
      "label": "Radio Button 2",
      "checked": false,
      "name": "Radio-Button"
    },
    {
      "id": 13,
      "label": "Radio Button 3",
      "checked": true,
      "name": "Radio-Button"
    }
  ];

  ChartDatasSets = [
    {
      "label": "Dataset 1",
      "data": [
        0.5,
        0.8,
        0.4,
        0.6,
        0.7,
        0.3,
        0.9
      ],
      "borderColor": "rgba(75, 192, 192, 0.8)",
      "fill": true,
      "tension": 0.1
    }
  ];

  chartLables = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July"
  ];

  chartOptions = {
    "pointStyle": "star",
    "radius": 7,
    "responsive": true,
    maintainAspectRatio: false,
    "backgroundColor": [
      "#EDB371"
    ],
    "plugins": {
      "legend": {
        "position": "top",
        "align": "center",
        "pointStyle": "bottom",
        "labels": {
          "usePointStyle": true
        }
      },
      "tooltip": {
        "usePointStyle": true
      },
      "filler": {
        "propagate": false
      },
      "title": {
        "display": true,
        // "text": "Area Chart with boundries"
      }
    },
    "interaction": {
      "intersect": false
    },
    "scales": {
      "x": {
        "axis": "x",
        "type": "category",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "x",
        "position": "bottom"
      },
      "y": {
        "axis": "y",
        "type": "linear",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "y",
        "position": "left"
      }
    }
  };


  // area chart start


  chartDataSetsArea = [
    {
      "label": "Dataset 1",
      "data": [
        0.5,
        0.8,
        0.4,
        0.6,
        0.7,
        0.3,
        0.9
      ],
      "borderColor": "rgba(75, 192, 192, 0.8)",
      "fill": true,
      "fillColor": "rgba(75, 192, 192, 0.8)",
      "tension": 0.1,
    }
  ];

  chartLabelsArea = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July"
  ];

  chartOptionsArea = {
    "pointStyle": "star",
    maintainAspectRatio: false,
    "radius": 7,
    chartWidth: 650,
    chartHeight: 350,
    responsive: true,
    "backgroundColor": [
      "#01AE9D",
      // "#E1E1E1"
    ],
    "plugins": {
      "legend": {
        "position": "top",
        "align": "center",
        "pointStyle": "bottom",
        "labels": {
          "usePointStyle": true
        }
      },
      "tooltip": {
        "usePointStyle": true
      },
      "filler": {
        "propagate": false
      },
      "title": {
        "display": true,
        // "text": "Area Chart with boundries"
      }
    },
    "interaction": {
      "intersect": false
    },
    "scales": {
      "x": {
        "axis": "x",
        "type": "category",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "x",
        "position": "bottom"
      },
      "y": {
        "axis": "y",
        "type": "linear",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "y",
        "position": "left"
      }
    }
  };

  // area chart end 

  ChartDateSetsLine = [
    {
      "label": "My First Dataset",
      "data": [
        65,
        59,
        80,
        81,
        56,
        55,
        18
      ],
      "fill": false,
      "borderColor": "rgb(75, 192, 192)",
      "tension": 0.1
    }
  ];

  ChartDatasSetsBool = [
    {
      "label": "Dataset 1",
      "data": [
        20,
        10
      ],
      "fillStyle": "blue",
      "fillRect": [
        200,
        100,
        40,
        10
      ],
      "backgroundColor": [
        "--chartColor3",
        "--chartColor2"
      ],
      "borderColor": [
        "#fff"
      ],
      "borderWidth": 1,
      "cutout": "80%",
      "title": {
        "text": "Doughnut Chart",
        "verticalAlign": "center",
        "dockInsidePlotArea": true
      }
    }
  ];

  chartLablesBool = [
    "green",
    "grey"
  ];

  chartOptionsBool = {
    maintainAspectRatio: false,
    "elements": {
      "center": {
        "text": "50%"
      }
    },
    "cutoutPercentage": 80,
    "legend": {
      "display": false
    },
    "responsive": true,
    "plugins": {
      "series": {
        "label": {
          "position": "inside",
          "text": "total",
          "display": false
        }
      },
      "doughnutlabel": {
        "labels": [
          {
            "text": "550",
            "font": {
              "size": 20,
              "weight": "bold"
            }
          },
          {
            "text": "total"
          }
        ]
      },
      "legend": {
        "display": false,
        "align": "center",
        "position": "top"
      }
    },
    "scales": {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  chartDataSetsBubble = [
    {
      "label": "Dataset 1",
      "data": [
        90,
        97,
        20,
        30,
        40,
        50,
        60,
        70
      ],
      "borderColor": [
        "red"
      ],
      "backgroundColor": [
        "rgba(255, 99, 132)"
      ],
      chartWidth: 450,
    },
    {
      "label": "Dataset 2",
      "data": [
        90,
        80,
        70,
        60,
        50,
        40,
        30,
        90,
        98
      ],
      "borderColor": [
        "orange"
      ],
      "backgroundColor": [
        "rgba(255, 206, 86)"
      ],
      chartWidth: 450,
    }
  ];

  chartLabelsBubble = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100
  ];

  chartOptionsBubble = {
    "responsive": true,
    "radius": 10,
    "pointStyle": "triangle",
    "plugins": {
      "legend": {
        "position": "top",
        align: 'center',
        "pointStyle": "line",
        "labels": {
          "usePointStyle": true
        }
      },
      "tooltip": {
        "usePointStyle": true
      },
      "title": {
        "display": true,
        // "text": "Bubble Chart"
      }
    },
    "scales": {
      "x": {
        "axis": "x",
        "type": "linear",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "x",
        "position": "bottom"
      },
      "y": {
        "axis": "y",
        "type": "linear",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "y",
        "position": "left"
      }
    }
  }

  // chartDataSetsDoughnut = [
  //   {
  //     "label": "Dataset 1",
  //     "data": [
  //       20,
  //       10,
  //       30,
  //       40,
  //       45
  //     ],
  //     "backgroundColor": [
  //       "#ff6384",
  //       "#ff9f40",
  //       "#ffcd56",
  //       "#4bc0c0"
  //     ],
  //     "borderColor": [
  //       "#fff"
  //     ],
  //     borderWidth: 1,
  //     cutout: '80%',

  //   }
  // ];

  // chartLabelsDoughnut = [
  //   "Persian Green",
  //   "Portage",
  //   "Carrot Orange",
  //   "Shamrock",
  //   "Blue"
  // ];
  chartDataSetsDoughnut = [
    {
      label: 'Dataset 1',
      data: [20, 10, 30, 15, 25],
      backgroundColor: [
        '#ff6384',
        '#ff9f40',
        '#ffcd56',
        '#4bc0c0'
      ],
      borderColor: [
        '#fff',
      ],
    }
  ];

  chartLabelsDoughnut = [
    "Persian Green",
    "Portage",
    "Carrot Orange",
    "Shamrock",
    "Blue"
  ];
  chartOptionsDoughnut = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'center'
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    }
  };
  // chartOptionsDoughnut = {
  //   "type": "doughnut",
  //   maintainAspectRatio: true,
  //   responsive: true,
  //   chartWidth: 120,
  //   "options": {
  //     "responsive": true,
  //     "plugins": {
  //       "legend": {
  //         "position": "top"
  //       },
  //       "title": {
  //         "display": true,
  //         // "text": "Chart.js Doughnut Chart"
  //       }
  //     }
  //   },
  //   plugins: {

  //     series: {
  //       label: {
  //         position: "inside",
  //         text: 'total', // or "inside" | "outside"
  //         display: false
  //       }
  //     },
  //     doughnutlabel: {
  //       labels: [{
  //         text: '550',
  //         font: {
  //           size: 20,
  //           weight: 'bold'
  //         }
  //       }, {
  //         text: 'total'
  //       }
  //       ]
  //     },
  //     legend: {
  //       display: true,
  //       align: "middle",
  //       position: 'right',
  //       labels: {
  //         boxWidth: 15,
  //         padding: 20
  //       },
  //     },
  //   },
  //   "scales": {}
  // };

  chartDataSetsLine = [
    {
      "label": "My First Dataset",
      "data": [
        65,
        59,
        80,
        81,
        56,
        55
      ],
      "fill": false,
      "borderColor": "rgb(75, 192, 192)",
      "tension": 0.1
    }
  ];

  chartLabelsLine = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun"
  ];

  chartOptionsLine = {
    "plugins": {
      "legend": {
        "position": "top",
        "align": "center",
        "pointStyle": "line",
        "labels": {
          "usePointStyle": true
        }
      },
      "tooltip": {
        "usePointStyle": true
      },
      "title": {
        "display": true,
        "text": "Line Chart",
        "Position": "left",
        "align": "center",
        "color": "#666"
      }
    },
    "scales": {
      "x": {
        "axis": "x",
        "ticks": {
          "color": "#666",
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2
        },
        "type": "category",
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "x",
        "position": "bottom"
      },
      "y": {
        "axis": "y",
        "ticks": {
          "color": "#666",
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2
        },
        "type": "linear",
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "y",
        "position": "left"
      }
    }
  };

  // line chart start

  chartDataSetsLinechart = [
    {
      label: 'Sales',
      data: [101, 122, 133, 231, 112, 125, 135, 135.7, 136, 124, 122, 125],
      borderColor: '#4DCFFF',
      pointBackgroundColor: '#4DCFFF',
      backgroundColor: '--chart-line-color1',
      fill: true,
      pointRadius: 3,
      fillColor: "rgba(195, 40, 96, 0.1)",
      tension: 0.4,
    },
    {
      label: 'Revenue',
      data: [290, 262, 205, 162, 150, 280, 206, 220, 260, 300, 275, 211],
      borderColor: '#863BFF',
      pointBackgroundColor: '#863BFF',
      backgroundColor: '--chart-line-color2',
      fill: true,
      pointRadius: 3,
      tension: 0.4,
    }
  ]

  chartLabelsLineChart = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]

  chartOptionsLineChart = {
    radius: 0,
    pointStyle: 'circle',
    responsive: true,
    borderWidth: 1.5,
    chartWidth: 650,
    chartHeight: 350,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'top',
        align: "center",
        pointStyle: "circle",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
      tooltip: { enabled: true },
    },
    scales:
    {
      y: {
        beginAtZero: true,
      },
    },
    tooltip: {
      display: true,
      usePointStyle: true,
    },
  }

  // line chart end


  // barchart thickline start

  chartDataSetsBarChartThick = [
    {
      label: 'Sales Growth',
      data: [15, 67, 34, 78, 45, 87, 76, 32, 50, 14, 35, 22],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 245, 1)',
      borderWidth: 1,
      borderRadius: 10,
      barThickness: 7,
      borderSkipped: false,
    }
  ]

  chartLabelsBarChartThick = [
    '10k', '20k', '25k', '30k', '40k', '50k', '60k', '70k', '75k', '80k', '90k', '95k'
  ]

  chartOptionsBarChartThick = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
        width: 1
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'center',
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },
      scales:
      {
        y: {
          beginAtZero: true,
        }
      },
      tooltip: {
        usePointStyle: true,
      },
      title: {
        display: false,
        text: 'Daily Sales Growth'
      }
    },
  };

  // barchart thickline end

  chartDataSetsChartMixed = [
    {
      "type": "bar",
      "label": "Bar Dataset",
      "data": [
        10,
        20,
        30,
        32
      ],
      "backgroundColor": [
        "orange"
      ],
      "order": 2
    },
    {
      "type": "line",
      "label": "Line Dataset",
      "data": [
        10,
        20,
        30,
        32
      ],
      "borderColor": "rgba(75, 192, 192, 0.8)",
      "order": 1
    }
  ];

  chartLabelsChartMixed = [
    "January",
    "February",
    "March",
    "April"
  ];

  chartOptionsChartMixed = {
    "radius": 10,
    "pointStyle": "triangle",
    "plugins": {
      "legend": {
        "position": "top",
        "align": "center",
        "pointStyle": "bottom",
        "labels": {
          "usePointStyle": true
        }
      },
      "tooltip": {
        "usePointStyle": true
      }
    },
    "responsive": true,
    "scales": {
      "y": {
        "axis": "y",
        "beginAtZero": true,
        "type": "linear",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "y",
        "position": "left"
      },
      "x": {
        "axis": "x",
        "type": "category",
        "offset": true,
        "grid": {
          "offset": true,
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "x",
        "position": "bottom"
      }
    }
  };

  chartLabelsPieChat = [
    "Persian Green",
    "Portage",
    "Carrot Orange",
    "Shamrock",
    "Blue"
  ];

  chartDataSetsPieChat = [
    {
      "label": "Dataset1",
      "data": [
        20,
        10,
        20,
        40,
        10
      ],
      "backgroundColor": [
        "#ff6384",
        "#ff9f40",
        "#ffcd56",
        "#4bc0c0",
        "#059bff"
      ],
      "borderColor": [
        "#fff"
      ],
      "borderWidth": 1
    }
  ];

  chartOptionsPieChat = {
    maintainAspectRatio: false,
    "circumference": 360,
    "radius": 100,
    "animation": {
      "animateRotate": false,
      "animateScale": true
    },
    "responsive": true,
    "plugins": {
      "legend": {
        "position": "top",
        align: 'center',
        "pointStyle": "line",
        "labels": {
          "usePointStyle": true
        }
      },
      "title": {
        "display": true,
        // "text": "Pie Chart"
      }
    },
    "scales": {}
  };
  pieChartMultiDataSets = [
    {
      backgroundColor: ['#AAA', '#777'],
      data: [21, 79]
    },
    {
      backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
      data: [33, 67]
    },
    {
      backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
      data: [20, 80]
    },
    {
      backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
      data: [10, 90]
    }
  ];
  pieChartMultiLabel = ['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay'];

  pieChartMultiOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          generateLabels: function (chart: any) {
            // Get the default label list
            const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);

            // Build an array of colors used in the datasets of the chart
            var datasetColors = chart.data.datasets.map(function (e: any) {
              return e.backgroundColor;
            });
            datasetColors = datasetColors.flat();

            // Modify the color and hide state of each label
            labelsOriginal.forEach((label: any) => {
              // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
              label.datasetIndex = (label.index - label.index % 2) / 2;

              // The hidden state must match the dataset's hidden state
              label.hidden = !chart.isDatasetVisible(label.datasetIndex);

              // Change the color to match the dataset
              label.fillStyle = datasetColors[label.index];
            });

            return labelsOriginal;
          }
        },
        onClick: function (mouseEvent: any, legendItem: any, legend: any) {
          // toggle the visibility of the dataset from what it currently is
          legend.chart.getDatasetMeta(
            legendItem.datasetIndex
          ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
          legend.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
            return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
          }
        }
      }
    }
  };

  // pieChartMultiLabel = [
  //   "Overall Yay",
  //   "Overall Nay",
  //   "Group A Yay",
  //   "Group A Nay",
  //   "Group B Yay",
  //   "Group B Nay",
  //   "Group C Yay",
  //   "Group C Nay"
  // ];

  // pieChartMultiDataSets = [
  //   {
  //     "backgroundColor": [
  //       "#AAAAAA",
  //       "#777777"
  //     ],
  //     "data": [
  //       21,
  //       79
  //     ]
  //   },
  //   {
  //     "backgroundColor": [
  //       "#ff3333",
  //       "#b30000"
  //     ],
  //     "data": [
  //       33,
  //       67
  //     ]
  //   },
  //   {
  //     "backgroundColor": [
  //       "#77ff33",
  //       "#3bb300"
  //     ],
  //     "data": [
  //       20,
  //       80
  //     ]
  //   },
  //   {
  //     "backgroundColor": [
  //       "#33ffff",
  //       "#00b2b3"
  //     ],
  //     "data": [
  //       10,
  //       90
  //     ]
  //   }
  // ];

  // pieChartMultiOptions = {
  //   "responsive": true,
  //   "plugins": {
  //     "legend": {
  //       position: 'top',
  //       align: 'center',
  //       "labels": {}
  //     },
  //     "tooltip": {
  //       "callbacks": {}
  //     }
  //   },
  //   "scales": {}
  // };

  chartLabelsPolar = [
    "Persian Green",
    "Portage",
    "Carrot Orange",
    "Shamrock",
    "Blue"
  ];

  chartDataSetsPolar = [
    {
      "label": "Dataset 1",
      "data": [
        100,
        70,
        80,
        96,
        87
      ],
      "backgroundColor": [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(167, 145, 78, 0.2)"
      ],
      "borderColor": [
        "#fff"
      ]
    }
  ];

  chartOptionsPolar = {
    "animation": {
      "animateRotate": true,
      "animateScale": false
    },
    "responsive": true,
    maintainAspectRatio: false,
    "plugins": {
      "legend": {
        "position": "top",
        "pointStyle": "line",
        "align": "center",
        "labels": {
          "usePointStyle": true,
          boxWidth: 15,
          padding: 20
        }
      },
      "tooltip": {
        "usePointStyle": true
      },
      "title": {
        "display": true,
        // "text": "Polar Area Chart"
      }
    },
    "scales": {
      "r": {
        "axis": "r",
        "type": "radialLinear",
        "angleLines": {
          "display": false,
          "lineWidth": 1,
          "borderDash": [],
          "borderDashOffset": 0,
          "color": "rgba(0,0,0,0.1)"
        },
        "beginAtZero": true,
        "grid": {
          "circular": true,
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "pointLabels": {
          "display": false,
          "backdropPadding": 2,
          "font": {
            "size": 10
          },
          "padding": 5,
          "centerPointLabels": false,
          "color": "#666"
        },
        "startAngle": 0,
        "display": true,
        "animate": true,
        "position": "chartArea",
        "ticks": {
          "showLabelBackdrop": true,
          "color": "#666",
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2
        },
        "offset": false,
        "reverse": false,
        "bounds": "ticks",
        "grace": 0,
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "r"
      }
    }
  };


  chartLabelsRadar = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July"
  ];

  chartDataSetsRadar = [
    {
      "label": "Dataset 1",
      "data": [
        0.5,
        0.8,
        0.4,
        0.6,
        0.7,
        0.2,
        0.9
      ],
      "borderColor": [
        "#ff9f40"
      ],
      "backgroundColor": [
        "rgba(255, 99, 132, 0.2)"
      ],
      "fill": false,
      "pointStyle": "circle",
      "pointRadius": 2,

    },
    {
      "label": "Dataset 2",
      "data": [
        0.9,
        0.3,
        0.8,
        0.9,
        0.1,
        0.7,
        0.2
      ],
      "borderColor": [
        "#ff6384"
      ],
      "backgroundColor": [
        "rgba(255, 206, 86, 0.2)"
      ],
      "fill": true,
      "pointStyle": "circle",
      "pointRadius": 2
    },
    {
      "label": "Dataset 3",
      "data": [
        0.7,
        0.2,
        0.1,
        0.9,
        0.8,
        0.4,
        0.7
      ],
      "borderColor": [
        "#83BE5A"
      ],
      "backgroundColor": [
        "rgba(255, 240, 204, 0.2)"
      ],
      "fill": false,
      "pointStyle": "circle",
      "pointRadius": 2
    }
  ];

  chartOptionsRadar = {
    "responsive": true,
    maintainAspectRatio: false,
    chartWidth: 350,
    "chartArea": {
      "backgroundColor": "rgba(251, 85, 85, 0.4)"
    },
    "plugins": {
      "title": {
        "display": true,
        // "text": "Radar Chart"
      },
      "legend": {
        "position": "top",
        "align": "center",
        "pointStyle": "rectRot",
        "pointRadius": 5,
        "labels": {
          "usePointStyle": true
        }
      },
      "tooltip": {
        "usePointStyle": true
      },
      "scale": {
        "type": "line",
        "angleLines": {
          "display": true
        }
      }
    },
    "scales": {
      "r": {
        "axis": "r",
        "type": "radialLinear",
        "display": true,
        "animate": true,
        "position": "chartArea",
        "angleLines": {
          "display": true,
          "lineWidth": 1,
          "borderDash": [],
          "borderDashOffset": 0,
          "color": "rgba(0,0,0,0.1)"
        },
        "grid": {
          "circular": false,
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "startAngle": 0,
        "ticks": {
          "showLabelBackdrop": true,
          "color": "#666",
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2
        },
        "pointLabels": {
          "backdropPadding": 2,
          "display": true,
          "font": {
            "size": 10
          },
          "padding": 5,
          "centerPointLabels": false,
          "color": "#666"
        },
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "r"
      }
    }
  };

  chartLabelsScatter = [
    "January",
    "February",
    "March",
    "April"
  ];

  chartDataSetsScatter = [
    {
      "type": "scatter",
      "label": "Scatter Dataset",
      "data": [
        {
          "x": -10,
          "y": 0
        },
        {
          "x": 0,
          "y": 10
        },
        {
          "x": 10,
          "y": 5
        },
        {
          "x": 0.5,
          "y": 5.5
        }
      ],
      "backgroundColor": "#928AE0"
    }
  ];

  chartOptionsScatter = {
    "pointStyle": "triangle",
    "radius": 10,
    "plugins": {
      "legend": {
        "position": "top",
        "align": "center",
        "pointStyle": "line",
        "labels": {
          "usePointStyle": true
        }
      },
      "tooltip": {
        "usePointStyle": true
      }
    },
    "scales": {
      "x": {
        "axis": "x",
        "type": "linear",
        "position": "bottom",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "x"
      },
      "y": {
        "axis": "y",
        "type": "linear",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "title": {
          "display": false,
          "text": "",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "id": "y",
        "position": "left"
      }
    }
  };


  chartLabelsScatterMulti = ['January', 'February', 'March', 'April'];

  chartDataSetsScatterMulti = [
    {
      label: 'Scatter Dataset 1',
      data: [
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: 10,
          y: 5
        },
        {
          x: 0.5,
          y: 5.5
        }
      ],
      backgroundColor: '#928AE0',
      yAxisID: 'y',
    },
    {
      label: 'Scatter Dataset 2',
      data: [
        {
          x: -20,
          y: 10
        },
        {
          x: 10,
          y: -10
        },
        {
          x: 20,
          y: 15
        },
        {
          x: 1.5,
          y: 15.5
        }
      ],
      backgroundColor: '#EDB371',
      yAxisID: 'y',
    }
  ];


  chartLabelsStacked = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  chartDataSetsStacked = [
    {
      "label": "My Second dataset",
      "data": [
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142
      ],
      "borderColor": "white",
      "backgroundColor": "#62D5D9",
      "fill": true
    },
    {
      "label": "My Third dataset",
      "data": [
        151,
        152,
        159,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161,
        162
      ],
      "borderColor": "white",
      "backgroundColor": "#928AE0",
      "fill": true
    },
    {
      "label": "My Fourth dataset",
      "data": [
        150,
        201,
        160,
        203,
        151,
        205,
        206,
        207,
        208,
        209,
        210,
        211
      ],
      "borderColor": "white",
      "backgroundColor": "#EDB371",
      "fill": true
    }
  ];

  chartOptionsStacked = {
    "radius": 3,
    responsive: true,
    maintainAspectRatio: false,
    "pointStyle": "triangle",
    "plugins": {
      "title": {
        "display": true,
        // "text": "Chart.js Line Chart - stacked"
      },
      "tooltip": {
        "mode": "index"
      },
      "legend": {
        position: 'top',
        align: 'center',
        "pointStyle": "circle",
        "labels": {
          "usePointStyle": true
        },
        "tooltip": {
          "usePointStyle": true
        }
      }
    },
    "interaction": {
      "mode": "nearest",
      "axis": "x",
      "intersect": false
    },
    "scales": {
      "x": {
        "axis": "x",
        "title": {
          "display": true,
          "text": "Month",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "type": "category",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "id": "x",
        "position": "bottom"
      },
      "y": {
        "axis": "y",
        "stacked": true,
        "title": {
          "display": true,
          "text": "Value",
          "padding": {
            "top": 4,
            "bottom": 4
          },
          "color": "#666"
        },
        "type": "linear",
        "ticks": {
          "minRotation": 0,
          "maxRotation": 50,
          "mirror": false,
          "textStrokeWidth": 0,
          "textStrokeColor": "",
          "padding": 3,
          "display": true,
          "autoSkip": true,
          "autoSkipPadding": 3,
          "labelOffset": 0,
          "minor": {},
          "major": {},
          "align": "center",
          "crossAlign": "near",
          "showLabelBackdrop": false,
          "backdropColor": "rgba(255, 255, 255, 0.75)",
          "backdropPadding": 2,
          "color": "#666"
        },
        "display": true,
        "offset": false,
        "reverse": false,
        "beginAtZero": false,
        "bounds": "ticks",
        "grace": 0,
        "grid": {
          "display": true,
          "lineWidth": 1,
          "drawBorder": true,
          "drawOnChartArea": true,
          "drawTicks": true,
          "tickLength": 8,
          "offset": false,
          "borderDash": [],
          "borderDashOffset": 0,
          "borderWidth": 1,
          "color": "rgba(0,0,0,0.1)",
          "borderColor": "rgba(0,0,0,0.1)"
        },
        "id": "y",
        "position": "left"
      }
    }
  };




  customBreadcrumbsItems = [
    {
      "name": "Home",
      "route": "/home",
      iconClass: "bi bi-house-door",
      iconWidth: '15px',
      iconHeight: '15px',
      'disabled': false
    },
    {
      "name": "About",
      "route": "/About",
      iconClass: "bi bi-house-door",
      iconWidth: '15px',
      iconHeight: '15px',
      'disabled': true
    },
    {
      "name": "Contact US",
      "route": "/Contact",
      iconClass: "bi bi-house-door",
      iconWidth: '15px',
      iconHeight: '15px',
      'disabled': true
    },
  ];

  imageItem = [
    {
      "img": "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
      "caption": "this is the caption section were u can add the caption for the image"
    },
    {
      "img": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "caption": "this is the caption section were u can add the caption for the image"
    }
  ];
  label = "Launch demo modal"
  height = 100
  modalId = "storybookModal"
  modalData = {
    modalHeader: "Header",
    modalContent: "Content",
    modalFooter: "Footer"
  }

  modalData1 = {
    modalContent: "This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modalThis is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modalThis is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modalThis is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modalThis is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.",
  }
  modalData2 = {
    modalContent: "I will not close if you click outside me. Don't even try to press escape key.",
  }

  @Input()
  modalheader!: TemplateRef<any>;
  @Input()
  Modalbody!: TemplateRef<any>
  @Input()
  Modalfooter!: TemplateRef<any>
  ModalClasses = "modal-dialog"
  backdropstatic = true
  Animation = "modal fade"

  constructor(private _renderer2: Renderer2,
    public translate: TranslateService,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

  }



  ngAfterViewInit(): void {
    // tslint:disable-next-line:prefer-const
    let script = this._renderer2.createElement('script');
    script.text = `
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
       return new bootstrap.Popover(popoverTriggerEl)
      })`;
    this._renderer2.appendChild(this._document.body, script);
  }
  TextHeading: string = "This page shows a few usefull UI Components Those can be used your application.components in this page are implimented as full stack"
  listskin: any[] = [
    { value: 'Dark', some: 'Dark', status: 'Dark', isSelected: false },
    { value: 'Light', some: 'Light', status: 'Light', isSelected: false },
  ]
  sidenavItems = [
    { label: 'Dashboard', id: '', icon: 'dashboard', path: 'dashboard' },
    { label: 'Tenant', id: '', icon: 'settings', path: 'tenant' },
    { label: 'Administration', id: 'administration', icon: 'administration', path: '', children: [{ label: 'Role', icon: 'roles', path: 'role' }, { label: 'Users', icon: 'users', path: 'users' }] },
    { label: 'UI Components', id: '', icon: 'demo_ui_components', path: 'components' },
  ]
  progressvalues = [{ progressWidth: 50, colorVariant: 'success', stripe: 'progress-bar-striped', animation: 'progress-bar-animated' }, { progressWidth: 20, colorVariant: 'danger', stripe: '', animation: '' }, { progressWidth: 30, colorVariant: 'info', stripe: '', animation: '' }];
  buttonList= [{ colorVariant: 'primary', label: 'Toggle First Element', id: 'collapseExample', }, { colorVariant: 'primary', label: 'Toggle Second Element', id: 'collapseExample1' }, { colorVariant: 'primary', label: 'Toggle Both Element', id: 'collapseExample,collapseExample1', }];


  onClickShowAlert() {
    this.showAlert = !this.showAlert;
  }

}

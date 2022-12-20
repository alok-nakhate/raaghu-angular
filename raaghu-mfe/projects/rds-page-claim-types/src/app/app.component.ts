import { trigger, transition, query, style, animate } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlertService, ComponentLoaderOptions, IdentityClaimValueType } from '@libs/shared';
import { Store } from '@ngrx/store';
import { deleteClaims, getAllClaimTypes, saveClaimTypes } from 'projects/libs/state-management/src/lib/state/claim-types/claim-types.actions';
import { selectAllClaimTypes } from 'projects/libs/state-management/src/lib/state/claim-types/claim-types.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  currentAlerts: any = [];
  rdsclaimtypeTableMfeConfig: ComponentLoaderOptions;
  rdsNewclaimtypeMfeConfig: ComponentLoaderOptions;
  valueTypeItems: any = [
    { value: 0, some: 'String', id: 1, href: '', icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
    { value: 1, some: 'Int', id: 2, href: '', icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
    { value: 2, some: 'Boolean', id: 3, href: '', icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
    { value: 3, some: 'DateTime', id: 4, href: '', icon: '', iconWidth: '', iconHeight: '', iconStroke: true, iconFill: false },
  ];

  ClaimtypeTableHeader: TableHeader[] = [
    { displayName: 'Name', key: 'name', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Value Type', key: 'valueType', dataType: 'number', dataLength: 30, required: true, sortable: true },
    { displayName: 'Description', key: 'description', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Regex', key: 'regex', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Required', key: 'required', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ];

  ClaimtypeTableData: any = [] = [];
  isAnimation: boolean = true;

  constructor(private store: Store, private alertService: AlertService) { }

  ngOnInit(): void {
    this.isAnimation = true;
    
    // Data table
    this.rdsclaimtypeTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.ClaimtypeTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.ClaimtypeTableData,
        recordsPerPage: 10,
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }],
        noDataTitle: 'Currently you do not have claim type'
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            this.store.dispatch(deleteClaims(event.selectedData.id));
          }
        }
      }
    };

    // Add claim
    this.rdsNewclaimtypeMfeConfig = {
      name: 'RdsCompNewClaimType',
      input: {
        valueTypeItems: this.valueTypeItems
      },
      output: {
        onClaimTypeSave: (claimType: any) => {
          const body: any = {
            name: claimType.ClaimTypeData.name,
            description: claimType.ClaimTypeData.description,
            valueType: claimType.ClaimTypeData.valueType,
            regex: claimType.ClaimTypeData.regex,
            required: claimType.ClaimTypeData.required,
            regexDescription: claimType.ClaimTypeData.regexDescription
          };
          this.store.dispatch(saveClaimTypes(body));
        },
      }
    };

    // Get All
    this.store.dispatch(getAllClaimTypes());
    this.store.select(selectAllClaimTypes).subscribe(res => {
      this.ClaimtypeTableData = [];
      if (res && res.items) {
        this.isAnimation = true;
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.id,
            name: element.name,
            regex: element.regex,
            regexDescription: element.regexDescription,
            required: element.required,
            valueType: element.valueTypeAsString,
            description: element.description,
          };
          this.ClaimtypeTableData.push(item);
        });
        const mfeConfig = this.rdsclaimtypeTableMfeConfig
        mfeConfig.input.tableData = [... this.ClaimtypeTableData];
        this.rdsclaimtypeTableMfeConfig = mfeConfig;
      };
    });
  }

}

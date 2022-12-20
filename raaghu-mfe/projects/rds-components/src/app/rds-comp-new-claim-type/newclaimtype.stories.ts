import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBenefitModule, RdsCheckboxModule, RdsIconModule, RdsInputComponent, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompNewClaimTypeComponent } from './rds-comp-new-claim-type.component';
import { CommonModule } from '@angular/common';
 
export default {
    title: 'Components/New Claim Type',
    component: RdsCompNewClaimTypeComponent,
    decorators: [
        moduleMetadata({
            declarations:[
              RdsInputComponent
            ],
            imports: [
                RdsBenefitModule,
                RdsIconModule,
                CommonModule,
                FormsModule,
                RdsLabelModule,
                RdsCheckboxModule
            ],
            
        })
    ]
} as Meta;

const Template: Story<RdsCompNewClaimTypeComponent> = (args: RdsCompNewClaimTypeComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    itemList: [{
      display_type: "Basic",
      colSize: 4,
      items: [
        {
          id: 1,
          icon: 'roles',
          iconHeight: "25px",
          iconWidth: "25px",
          title: "International delivery",
          description: "Get your order in 2 years",
          display_type: "Basic",

        },
        {
          id: 1,
          icon: 'roles',
          iconHeight: "25px",
          iconWidth: "25px",
          title: "Royalty Rewards",
          description: "Dont look at other tees",
          display_type: "Basic",
        }
      ]
    }
  ]
};
// export const benefit_type1 = Template.bind({});
// benefit_type1.args = {
//     itemList: [{
//       display_type: "benefit_type1",
//       colSize: 4,
//       items: [
//         { id: 3, 
//           display_type: "benefit_type1",
//           icon: 'users',  
//           iconHeight :"25px",
//           iconWidth: "25px",
//           position:"start",
//           title: "Free delivery all year long", 
//           description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free." 
//         },
//         { id: 3, 
//           display_type: "benefit_type1",
//           icon: 'users',  
//           iconHeight :"25px",
//           iconWidth: "25px",
//           position:"start",
//           title: "24/7 Customer Support", 
//           description: "Or so we want you to believe. In reality our chat widget is powered by a naïve series of if/she statements that churn out canned responses. Guaranteed to irritate." 
//         },
//         { id: 3, 
//           display_type: "benefit_type1",
//           icon: 'users',  
//           iconHeight :"25px",
//           iconWidth: "25px",
//           position:"start",
//           title: "Fast Shopping Cart", 
//           description: "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know." 
//         }
//       ]
//     }
//   ]
// };
// export const benefit_type2 = Template.bind({});
// benefit_type2.args = {
//     itemList: [{
//       display_type: "benefit_type2",
//       colSize: 4,
//       items: [
//         { id: 6, 
//           display_type: "benefit_type2", 
//           iconHeight :"40px",
//           iconWidth: "40px",
//           icon: 'users',
//           title: "Free shipping", 
//           description: "Free delivery is our main part of company we just price it into the products. Someone's paying for it, and it's not us."
//         },
//         { id: 6,  
//           iconHeight :"40px",
//           display_type: "benefit_type2",
//           iconWidth: "40px",
//           icon: 'users',
//           title: "Exchanges", 
//           description: "We are take our customer and their needs also, if you don't like it, trade it to one of your friends for something of theirs."
//         },
//         { id: 6,
//           display_type: "benefit_type2",  
//           iconHeight :"40px",
//           iconWidth: "40px",
//           icon: 'users',
//           title: "10-year warranty", 
//           description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though. This is the best part of our service."
//         }
//       ]
//     }
//   ]
// };
// export const benefit_type3 = Template.bind({});
// benefit_type3.args = {
//     itemList: [{
//       display_type: "benefit_type3",
//       colSize: 6,
//       items: [
//         { id: 7, 
//           display_type: "benefit_type3", 
//           icon: 'users',
//           status:'Active',
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  'Free delivery all year long',
//           description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free."
//         },
//         { id: 7,  
//           icon: 'users',
//           display_type: "benefit_type3",
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  '24/7 Customer Support',
//           description: "Or so we want you to believe. In reality our chat widget is powered by a naïve series of if/she statements that churn out canned responses."
//         },
//         { id: 7,  
//           display_type: "benefit_type3",
//           icon: 'users',
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  'Fast Shopping Cart',
//           description: "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know."
//         },
//         { id: 7, 
//           display_type: "benefit_type3", 
//           icon: 'users',
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  'Gift Cards',
//           description: "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great."
//         }
//       ]
//     }
//   ]
// };


// export const benefit_type4 = Template.bind({});
// benefit_type4.args = {
//     itemList: [{
//       display_type: "benefit_type4",
//       colSize: 4,
//       items: [
//         { id: 7, 
//           display_type: "benefit_type4", 
//           icon: 'users',
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  'Free shipping world wide',
//           description: "Free delivery is our main part of company"
//         },
       
//       ]
//     }
//   ]
// };

// export const benefit_type5 = Template.bind({});
// benefit_type5.args = {
//     itemList: [{
//       display_type: "benefit_type5",
//       colSize: 4,
//       items: [
//         { id: 7, 
//           display_type: "benefit_type5", 
//           icon: 'users',
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  'Free shipping world wide',
//         },
//         { id: 7,  
//           icon: 'users',
//           display_type: "benefit_type5",
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  'Exchanges or returns any time',
//          },
//         { id: 7,  
//           display_type: "benefit_type5",
//           icon: 'users',
//           iconHeight :"40px",
//           iconWidth: "40px",
//           title:  'Warranty 10-year on all product',
//            }
//       ]
//     }
//   ]
// };

import Users from "../assets/images/user1.svg"
import Guarantors from "../assets/images/guarantors.svg"
import Loans from "../assets/images/loans.svg"
import Dm from "../assets/images/decisionModels.svg"
import Savings from "../assets/images/savings.svg"
import whitelist from "../assets/images/karma.svg"
import Org from "../assets/images/switch.svg" 
import sp from "../assets/images/savingProd.svg"
import Fech from "../assets/images/fees.svg"
import Trans from "../assets/images/transactions.svg"
import  services from "../assets/images/services.svg"
import servAcc from "../assets/images/servAcc.svg"
import settlement from "../assets/images/settlement.svg"
import reports from "../assets/images/reports.svg"
import Preferences from "../assets/images/preferences.svg"
import fep from "../assets/images/feesndpricing.svg"
import Al from "../assets/images/audit.svg"
 
interface ChildItem {
    name: string;
    picture: string;
    link: string;
}

interface ParentItem{
    Parent: string;
    child: ChildItem[];
}
 const data: ParentItem[] = [
    {
        Parent: "CUSTOMERS",
        child: [
            {
                name: "Users",
                picture: Users,
                link:'/home'
            },
              {
                name: "Guarantors",
                picture: Guarantors,
                link:'/guarantors'
            }, 
            {
                name: "Loans",
                picture: Loans,
                link:'/loans'
            },
              {
                name: "Decision Models",
                picture: Dm,
                link:'/decision-models'
            },
              {
                name: "Savings",
                picture: Savings,
                link:'/savings'
            },
             
              {
                name: "Loan Requests",
                picture: Loans,
                link:'/loan-requests'
            },
              {
                name: "Whitelist",
                picture: whitelist,
                link:'/whitelist'
            },
              {
                name: "Karma",
                picture: whitelist,
                link:'/karma'
            },
             
        ]
    },
    {
        Parent: "BUSINESSES",
        child: [
            {
                name: "Organisation",
                picture: Org,
                link:'/org'
            },
             {
                name: "Loan Products",
                picture: Loans,
                link:'/loan-products'
            },
             {
                name: "Savings Products",
                picture: sp,
                link:'/savings-products'
            },
             {
                name: "Fees and Charges",
                picture: Fech,
                link:'/Fees-and-charges'
            },
             {
                name: "Tansaction",
                picture: Trans,
                link:'/Transaction'
            },
             {
                name: "Services",
                picture: services,
                link:'/services'
            },
             {
                name: "Service Account",
                picture: servAcc,
                link:'/service-account'
            },
             {
                name: "Settlements",
                picture: settlement,
                link:'/settlements'
            },
             {
                name: "Reports",
                picture: reports,
                link:'/reports'
            },
             
        ]
    },{
        Parent: "SETTINGS",
        child:[
            {
            name: "Preferences",
            picture: Preferences,
            link:'/preferences'
            },
             {
            name: "Fees and Pricing",
            picture: fep,
            link:'/fees-and-pricing'
            },
             {
            name: "Audit Logs",
            picture: Al,
            link:'/audit-logs'
            },
           
        ]
    }
]
export default data;
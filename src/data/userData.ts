interface personalInfo{
    FullName:string;
    PhoneNumber: string;
    EmailAddress:string;
    Bvn: string;
    Gender:string;
    MaritalStatus: string;
    Children: boolean;
    TypeOfResidence: string;
    AccountNumber: string;
    BankName:string;
}

interface EducationAndEmployment{
    LOE: string;
    ES:string;
    SE:string;
    DE:string;
    OE:string;
    MI:string;
    LR: string;
}
interface Socials{
    twitter:string;
    facebook:string;
    instagram:string;
}

interface Guarantor{
    FullName: string;
    PhoneNumber: string;
    EmailAddress: string;
    Relationship: string;
}

interface User{
    personalInformation: personalInfo;
    EnE: EducationAndEmployment;
    socials:Socials;
    guarantor:Guarantor;
    dateJoined: string;
    status: string;
    profile: string;
    id:string;
}


const users : User[] = [
    {
id:"LSQFf587g90",
status: "Active",
profile:"lendsqr",
dateJoined:"May 15, 2020 10:00 AM",
    personalInformation:{
FullName:"Grace Effion",
EmailAddress:"grace@gmail.com",
PhoneNumber:"07060780922",
Bvn:"07060780922",
Gender:"Female",
MaritalStatus:"Single",
Children: false,
TypeOfResidence:"Parents's apartment",
AccountNumber: "07060780922",
BankName:"Providus Bank"  },
    EnE:{
        LOE: "B.sc",
        ES:"Employed",
        SE:"Fintech",
        DE:"2 years",
        OE: "grace@lendsqr.com",
        MI:"₦200,000-₦400,000",
        LR:"₦40,000"
    },
    socials:{
        twitter: "@grace_effion",
        facebook:"Grace Effion",
        instagram:"@grace_effion"
    },
    guarantor:{
        FullName: "Debby Ogana",
        PhoneNumber:"07060780922",
        EmailAddress:"debby@gmail.com",
        Relationship:"sister"
    }
},
{
id:"LSQFf587g90",
status: "Active",
profile:"lendsqr",
dateJoined:"May 15, 2020 10:00 AM",
    personalInformation:{
FullName:"Grace Effion",
EmailAddress:"grace@gmail.com",
PhoneNumber:"07060780922",
Bvn:"07060780922",
Gender:"Female",
MaritalStatus:"Single",
Children: false,
TypeOfResidence:"Parents's apartment",
AccountNumber: "07060780922",
BankName:"Providus Bank"  },
    EnE:{
        LOE: "B.sc",
        ES:"Employed",
        SE:"Fintech",
        DE:"2 years",
        OE: "grace@lendsqr.com",
        MI:"₦200,000-₦400,000",
        LR:"₦40,000"
    },
    socials:{
        twitter: "@grace_effion",
        facebook:"Grace Effion",
        instagram:"@grace_effion"
    },
    guarantor:{
        FullName: "Debby Ogana",
        PhoneNumber:"07060780922",
        EmailAddress:"debby@gmail.com",
        Relationship:"sister"
    }
},
{
id:"LSQFf587g90",
status: "Blacklisted",
profile:"lendsqr",
dateJoined:"May 15, 2020 10:00 AM",
    personalInformation:{
FullName:"Grace Effion",
EmailAddress:"grace@gmail.com",
PhoneNumber:"07060780922",
Bvn:"07060780922",
Gender:"Female",
MaritalStatus:"Single",
Children: false,
TypeOfResidence:"Parents's apartment",
AccountNumber: "07060780922",
BankName:"Providus Bank"  },
    EnE:{
        LOE: "B.sc",
        ES:"Employed",
        SE:"Fintech",
        DE:"2 years",
        OE: "grace@lendsqr.com",
        MI:"₦200,000-₦400,000",
        LR:"₦40,000"
    },
    socials:{
        twitter: "@grace_effion",
        facebook:"Grace Effion",
        instagram:"@grace_effion"
    },
    guarantor:{
        FullName: "Debby Ogana",
        PhoneNumber:"07060780922",
        EmailAddress:"debby@gmail.com",
        Relationship:"sister"
    }
},
{
id:"LSQFf587g90",
status: "Inactive",
profile:"lendsqr",
dateJoined:"May 15, 2020 10:00 AM",
    personalInformation:{
FullName:"Grace Effion",
EmailAddress:"grace@gmail.com",
PhoneNumber:"07060780922",
Bvn:"07060780922",
Gender:"Female",
MaritalStatus:"Single",
Children: false,
TypeOfResidence:"Parents's apartment",
AccountNumber: "07060780922",
BankName:"Providus Bank" },
    EnE:{
        LOE: "B.sc",
        ES:"Employed",
        SE:"Fintech",
        DE:"2 years",
        OE: "grace@lendsqr.com",
        MI:"₦200,000-₦400,000",
        LR:"₦40,000"
    },
    socials:{
        twitter: "@grace_effion",
        facebook:"Grace Effion",
        instagram:"@grace_effion"
    },
    guarantor:{
        FullName: "Debby Ogana",
        PhoneNumber:"07060780922",
        EmailAddress:"debby@gmail.com",
        Relationship:"sister"
    }
},
{
id:"LSQFf587g90",
status: "Pending",
profile:"lendsqr",
dateJoined:"May 15, 2020 10:00 AM",
    personalInformation:{
FullName:"Grace Effion",
EmailAddress:"grace@gmail.com",
PhoneNumber:"07060780922",
Bvn:"07060780922",
Gender:"Female",
MaritalStatus:"Single",
Children: false,
TypeOfResidence:"Parents's apartment",
AccountNumber: "07060780922",
BankName:"Providus Bank"  },
    EnE:{
        LOE: "B.sc",
        ES:"Employed",
        SE:"Fintech",
        DE:"2 years",
        OE: "grace@lendsqr.com",
        MI:"₦200,000-₦400,000",
        LR:"₦40,000"
    },
    socials:{
        twitter: "@grace_effion",
        facebook:"Grace Effion",
        instagram:"@grace_effion"
    },
    guarantor:{
        FullName: "Debby Ogana",
        PhoneNumber:"07060780922",
        EmailAddress:"debby@gmail.com",
        Relationship:"sister"
    }
},
]

const repeatedUsers = Array.from({ length: 500 }, (_, i) => {
  const userIndex = i % users.length; 
  return {
    ...users[userIndex],
    uid: (i + 1).toString(), 
  };
});


console.log(repeatedUsers[0]); 
console.log(repeatedUsers[99]);
export default repeatedUsers 
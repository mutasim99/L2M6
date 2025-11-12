interface Developer<T, S= null> {
    developerId:number;
    name: string;
    email: string;
    contactNo:string;
    device: {
        brand: string;
        model: string;
    };
    smartWatch: T;
    bike?:S;  
    
    // ? here bike?:S indicates the optional type and its default value is null; 
};

interface watchWithoutBrand {
    heartRate: string;
    callingFeature: boolean
}

const poorDeveloper: Developer<watchWithoutBrand> = {
    developerId:4511,
    name:'Mr. Poor',
    email:'amipoor@gmail.com',
    contactNo:'01795400015',
    device:{
        brand:'HP',
        model:'eliteBook',
    },
    smartWatch:{
        heartRate:'120',
        callingFeature:false
    }
    
};
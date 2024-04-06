import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from './apiservices.service';

interface Person {
  naturalId: string;
  name: string;
  year: number;
  uri: string;
  rank: number;
  listUri: string;
  visible: boolean;
  position: number;
  imageExists: boolean;
  bio: string;
  finalWorth: number;
  person: {
    name: string;
    uri: string;
    imageExists: boolean;
    squareImage: string;
  };
  personName: string;
  city?: string; // Optional property
  source: string;
  industries: string[];
  countryOfCitizenship: string;
  timestamp: number;
  version: number;
  gender: string;
  birthDate: number;
  lastName: string;
  financialAssets: {
    exchange: string;
    ticker: string;
    companyName: string;
    numberOfShares: number;
    sharePrice: number;
    currencyCode: string;
    exchangeRate: number;
    interactive?: boolean; // Optional property
  }[];
  date: number;
  wealthList: boolean;
  estWorthPrev: number;
  privateAssetsWorth: number;
  familyList: boolean;
  interactive: boolean;
  archivedWorth: number;
  squareImage: string;
  bioSuppress: boolean;
  csfDisplayFields: string[];
  bios: string[];
  abouts?: string[]; // Optional property
}
//
interface PersonList {
  personsLists: Person[];
}
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // personList: PersonList = { personsLists: [] }; // Initialize empty person list
  data: any = []; // Property to store fetched data
  error: string | null = null; // Optional: Property to store error message
  //   // personList = this.data; // Replace with your actual data
  //   public showDetails = {}; // Keeps track of open/closed details for each person
  //   public showFinancialAssets = {};

  constructor(private dataService: ApiservicesService) {
    // Replace this with your actual data fetching logic (e.g., API call)
    this.personList.personsLists = this.data; // Assign your data
  }
  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.error = error.message || 'Error fetching data'; // Handle error message
      }
    );
  }
  // }
  personList: PersonList = { personsLists: [] }; // Initialize empty person list

  toggleDetails(person: Person) {
    this.showDetails[person.naturalId] = !this.showDetails[person.naturalId];
  }

  showDetails: { [naturalId: string]: boolean } = {}; // Keeps track of open/closed details

  toggleFinancialAssets(person: Person) {
    this.showFinancialAssets[person.naturalId] =
      !this.showFinancialAssets[person.naturalId];
  }

  showFinancialAssets: { [naturalId: string]: boolean } = {}; // Keeps track of open/closed financial assets

  getFinancialAssetsTotal(assets: Person['financialAssets']) {
    let total = 0;
    for (const asset of assets) {
      total += asset.numberOfShares * asset.sharePrice * asset.exchangeRate;
    }
    return total.toFixed(2);
  }
}

// // import { Component, OnInit } from '@angular/core';
// // import { DataService } from './data.service';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrl: './app.component.css',
// // })
// // export class AppComponent implements OnInit {
// //   title = 'flipkartdemo';
// //   data: any;
// //   filter: any[] = [];

// //   constructor(private dataService: DataService) {}

// //   ngOnInit() {
// //     this.dataService.getData().subscribe((response) => {
// //       this.data = response;
// //     });
// //   }
// //   onFilteredData(data: any) {
// //     // console.log(data);
// //     this.filter = data;
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { ApiservicesService } from './apiservices.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   data: any = []; // Property to store fetched data
//   error: string | null = null; // Optional: Property to store error message
//   personList = this.data; // Replace with your actual data
//   public showDetails = {}; // Keeps track of open/closed details for each person
//   public showFinancialAssets = {};

//   constructor(private apiService: ApiservicesService) {}
//   ngOnInit() {
//     this.apiService.getData().subscribe(
//       (response) => {
//         this.data = response;
//       },
//       (error) => {
//         this.error = error.message || 'Error fetching data'; // Handle error message
//       }
//     );
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements OnInit {
//   title = 'flipkartdemo';
//   data: any;
//   filter: any[] = [];

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.dataService.getData().subscribe((response) => {
//       this.data = response;
//     });
//   }
//   onFilteredData(data: any) {
//     // console.log(data);
//     this.filter = data;
//   }
// }

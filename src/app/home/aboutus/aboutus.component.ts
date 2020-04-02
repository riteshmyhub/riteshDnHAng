import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
   
  History:any[]=[
    { 
      'slideAttr':'0',
     'year':'1967',
     'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2'    
    },
    { 
      'slideAttr':'1',
      'year':'1968',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'2',
      'year':'1969',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'3',
      'year':'1970',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'4',
      'year':'1971',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'5',
      'year':'1972',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'6',
      'year':'1973',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'7',
      'year':'1974',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'8',
      'year':'1975',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'9',
      'year':'1976',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'10',
      'year':'1977',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'11',
      'year':'1978',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
    { 
      'slideAttr':'12',
      'year':'1979',
      'name':'D&H 1200 T: Nickel base alloy electrode conforming to the AWS classification ENICRFe2' 
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

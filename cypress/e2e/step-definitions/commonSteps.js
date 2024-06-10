import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { CommonPage} from "../pages/commonPage"

let commonPage= new CommonPage();


 
    Given("I visit my url", (baseUrl) => {
      commonPage.visitBaseUrl(baseUrl);
       });

   
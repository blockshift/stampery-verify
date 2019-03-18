import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions,ResponseContentType} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http:Http) { }

  verifystamp(stampid){

  console.log("Stamp Id",stampid);
  var url = "https://api-prod.stampery.com/stamps/"+stampid+".pdf";
  let headers = new Headers();
   headers.append('Authorization', 'Basic YWM1YmY2ODAyOTcyZjM0OjhjODNjMzFlLThhZjQtNDA3Ny05Yzk2LWMxNjAwNjA1YTY0MA==');
 // let headers = new Headers({'Authorization': 'Basic YWM1YmY2ODAyOTcyZjM0OjhjODNjMzFlLThhZjQtNDA3Ny05Yzk2LWMxNjAwNjA1YTY0MA=='});
 // let options = new RequestOptions({ headers: headers,,responseType: ResponseContentType.Blob });
  
  return this.http.get(url,{  headers: headers,responseType: ResponseContentType.Blob } )
    .map(
        (res) => {
            return new Blob([res.blob()], { type: 'application/pdf' })
        })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));  



  }


  verifystampwithinfo(stampid){


  let headers = new Headers({'Content-Type': 'application/json'});
  let options = new RequestOptions({ headers: headers });
  let body = {
                stamperyid: stampid
                };

return this.http.post('https://blockchainfreelance-blockchainacademy.1d35.starter-us-east-1.openshiftapps.com/getrecordbystamperyid', body, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in')); 



  }



verifyrecord(passportno){


  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
 const options = new RequestOptions({ headers: headers }); 
  let body = new URLSearchParams();
  body.set("passport",passportno);

return this.http.post('https://gravypts.com/fetchrecordbypassport', body.toString(),options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in')); 


  }
  

}

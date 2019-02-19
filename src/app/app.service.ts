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

return this.http.post('http://ec2-35-168-114-210.compute-1.amazonaws.com:8080/getrecordbystamperyid', body, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in')); 


  }

  

}

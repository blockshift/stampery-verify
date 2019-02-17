import { Component } from '@angular/core';
import { AppService } from './app.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
constructor(private exampleService: AppService){}



  onSubmit(value: any) {
 // 	var saveAs:any ;
    console.log(value);
    this.exampleService.verifystamp(value.stamp).subscribe(
        (res) => {  

           
            saveAs(res,'certificate.pdf')
        
 
        },

        (err)=>{
        	var servererror = "Server Error";
        	console.log(servererror);
        }

    );
}
    }


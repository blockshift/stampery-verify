import { Component,  Input , ViewChild,ElementRef} from '@angular/core';
import { AppService } from './app.service';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { ErrordialogComponent } from './errordialog/errordialog.component';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 @ViewChild('dataContainer') dataContainer: ElementRef;
@ViewChild('dataContainer2') dataContainer2: ElementRef;
@ViewChild('dataContainer3') dataContainer3: ElementRef;
@ViewChild('dataContainer4') dataContainer4: ElementRef;
@ViewChild('dataContainer5') dataContainer5: ElementRef;
@ViewChild('dataContainer6') dataContainer6: ElementRef;
@ViewChild('dataContainer7') dataContainer7: ElementRef;
@ViewChild('dataContainer8') dataContainer8: ElementRef;

constructor(private exampleService: AppService,public dialog: MatDialog){}



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


onverify(value:any){

this.exampleService.verifystampwithinfo(value.stamp).subscribe(data => {

try{
 


	console.log("Data received",data);
    var response = data["_body"];
   if (response == "false") {
   	const dialogConfig = new MatDialogConfig();
   	dialogConfig.position = {
    'top': '50',
    left: '100'
};
   	let dialogRef = this.dialog.open(ErrordialogComponent, {
      height: '150px',
      width: '500px'
    });
   }
    var parseresponse = JSON.parse(response);
    var studentname = parseresponse.studentname;
    var coursename = parseresponse.coursename;
    var startdate = parseresponse.startdate;
    var enddate = parseresponse.enddate;
    var nric = parseresponse.nric;
    var stamperyid = parseresponse.stamperyid;
    var timestamp = parseresponse.timestamp;
    var stampvalidity = parseresponse.validity;
    
    this.dataContainer.nativeElement.innerHTML = studentname;
    this.dataContainer2.nativeElement.innerHTML = coursename;
    this.dataContainer3.nativeElement.innerHTML = nric;
    this.dataContainer4.nativeElement.innerHTML = stamperyid;
    this.dataContainer5.nativeElement.innerHTML = timestamp;
    this.dataContainer6.nativeElement.innerHTML = stampvalidity;
    this.dataContainer7.nativeElement.innerHTML = startdate;
    this.dataContainer8.nativeElement.innerHTML = enddate;

  







}
catch(e){
	 
	  
}    




});


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


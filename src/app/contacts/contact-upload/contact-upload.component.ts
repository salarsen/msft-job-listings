import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-contact-upload',
  templateUrl: './contact-upload.component.html',
})
export class ContactUploadComponent {

  constructor(
    private contactService: ContactService,
  ){}


  fileupload(files: FileList) {
    if (files && files.length > 0) {
      const file: File = files.item(0);
      const fileReader: FileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = ev => {
        const csvdata = fileReader.result.toString();
        const body = {data: csvdata};
        // console.log(body);
        // console.log(typeof(body));
        this.contactService.uploadContacts(body)
          .subscribe((data: any) => console.log(JSON.stringify(data.json)))
        // return this.http.post('apiurl',body)
        //   .subscribe((data:any)=>console.log(JSON.stringify(data.json)));
      };
    }
  }

    // formData.append("file", file, file.name);
    // this.http.post('http://localhost:5000/chartreportx/us-central1/chartreportapi/reportfile', formData)
    // .subscribe(data=>{console.log(JSON.stringify(data))}, err=>{console.log(err)});
    // console.log(JSON.stringify(file.name));
}

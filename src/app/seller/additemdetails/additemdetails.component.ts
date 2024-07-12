import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomUseridGenerationService } from 'src/app/services/random-userid-generation.service';
import { HttpClient } from '@angular/common/http';
import { ConnectAPIService } from 'src/app/services/connect-api.service';

interface Item {
  productid: string;
  name: string;
  type: string;
  source: string;
  quantity: string;
  description: string;
  price: string;
  custom: [];
}

interface Card {
  title: string;
  source: string;
  description: string;
  item: Item[];
}

@Component({
  selector: 'app-additemdetails',
  templateUrl: './additemdetails.component.html',
  styleUrls: ['./additemdetails.component.scss']
})
export class AdditemdetailsComponent {

  form: any;
  constructor(private router: Router, private RandomUserId: RandomUseridGenerationService, 
    private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient, private api: ConnectAPIService ) {
      this.form = this.formBuilder.group({
        product_name: new FormControl('', Validators.required),
        product_category: new FormControl('', Validators.required),
        product_details: new FormControl('', Validators.required),
        product_image: new FormControl('', [Validators.required]),
        product_price: new FormControl('', Validators.required),
        product_quantity: new FormControl('', Validators.required),
        customFields: this.formBuilder.array([this.createCustomField()])
      }); 
     };
     collection_name : any;
     newuser: any[]=[];
     addinnewuser: any[]=[]
     obj: any;
     sellerid: any;
     cid: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.Id = params['Id'];
      console.log('ID from query params:', this.Id);
      this.toEdit = params['edit'];
      this.cid = params['cid'];
      this.sellerid = params['sellerid'];
      this.collection_name = params['collection_name'];
    });
    if (localStorage.getItem('collections') === null)  localStorage.setItem('collections', JSON.stringify(this.newuser));
    const getlist = localStorage.getItem('collections');
    this.newuser = getlist !== null ? JSON.parse(getlist) : null;
    console.log(this.toEdit)
    if (this.toEdit == 1){
      
      // var present = this.newuser.some((i: { userid: string | null | undefined; }) => i.userid === this.id);
      
        
        this.newuser.forEach((element: { productid: any; name: any; description: any; price: any; source: any; type: any; quantity: any;}) => {
          if (element.productid === this.Id){
            this.obj = {
              productid: element.productid,
              product_name: element.name,
              product_details: element.description,
              product_price: element.price,
              product_image: element.source,
              product_quantity: element.quantity,
              product_category: element.type
            }
          }
          
        });
        console.log(this.obj);
  
        this.form.patchValue(this.obj);
    }
  }
  Id: any;
  toEdit: any;
  selectedFile: any;


  get customFields(): FormArray {
    return this.form.get('customFields') as FormArray;
  }

  createCustomField(): FormGroup {
    return this.formBuilder.group({
      label: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  addCustomField(): void {
    this.customFields.push(this.createCustomField());
  }

  onFileSelected(event: Event) {

  }

  edit() {

    this.newuser.forEach((element: { productid: any; name: any; description: any; price: any; source: any; type: any;quantity: any;}) => {
      if (element.productid === this.Id){
        element.productid = this.Id,
        element.name = this.form.value.product_name,
        element.description = this.form.value.product_details,
        element.price = this.form.value.product_price,
        element.source = this.form.value.product_image,
        element.quantity = this.form.value.product_quantity,
        element.type = this.form.value.product_category
      }
      
      
    });
    localStorage.setItem('collections', JSON.stringify(this.newuser));
      alert('Item edited.');

      this.router.navigate(['/additem'], {queryParams: {category: this.collection_name, id: this.sellerid}});
  }

  addItem() {
    let obj={
      product_name: this.form.value.product_name,
      product_details: this.form.value.product_details,
      product_price: this.form.value.product_price,
      product_image: this.form.value.product_image,
      product_quantity: this.form.value.product_quantity,
      product_category: this.form.value.product_category,
      collectionid: this.cid,
      sellerid: this.sellerid
    }
    this.api.AddProducts(obj).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/additem'], {queryParams: {category: this.collection_name, id: this.sellerid, cid: this.cid}});
    })
  }

  addfield = false;
 
  addField() {
    this.addfield = true;
  }



}

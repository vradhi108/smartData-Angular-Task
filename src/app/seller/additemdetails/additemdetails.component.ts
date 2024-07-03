import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomUseridGenerationService } from 'src/app/services/random-userid-generation.service';

@Component({
  selector: 'app-additemdetails',
  templateUrl: './additemdetails.component.html',
  styleUrls: ['./additemdetails.component.scss']
})
export class AdditemdetailsComponent {

  form: any;
  constructor(private router: Router, private RandomUserId: RandomUseridGenerationService, 
    private route: ActivatedRoute, private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        product_name: new FormControl('', Validators.required),
        product_category: new FormControl('', Validators.required),
        product_details: new FormControl('', Validators.required),
        product_image: new FormControl('', [Validators.required]),
        customFields: this.formBuilder.array([this.createCustomField()])
      }); 
     };

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.Id = params['Id'];
      console.log('ID from query params:', this.Id);
      this.toEdit = params['edit'];
    });
  }
  Id: any;
  toEdit: any;
  items: any;
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

  }

  addItem() {
    this.items.push({
      productid: this.Id,
      name: this.form.value.product_name,
      type: this.form.value.product_category,
      source: this.form.value.product_image,
      description: this.form.value.product_details,
      custom: this.form.value.customFields
    });
    localStorage.setItem(this.form.value.product_name + '_collection', JSON.stringify(this.items));
    let getitems = localStorage.getItem(this.form.value.product_name + '_collection');
    this.items = getitems ? JSON.parse(getitems) : null;
  }

  inputField: any = [];
  addfield = false;
  customFieldValues: any = [];
  addField() {
    this.inputField.push([1]);
    this.addfield = true;
    this.customFieldValues.push
  }

}

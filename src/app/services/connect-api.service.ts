import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectAPIService {

  constructor(private http: HttpClient) { }

  adduser(user: any){
    return this.http.post('https://localhost:7190/api/UserRegistration', user);
  }

  checkuser(email: any, password: any){
    return this.http.get('https://localhost:7190/api/UserRegistration/'+email+'/'+password);
  }

  checkadmin(username: any, password: any){
    return this.http.get('https://localhost:7190/api/Admin/'+username+'/'+password);
  }

  addseller(seller: any){
    return this.http.post('https://localhost:7190/api/SellerRegistration', seller);
  }

  getsellers(){
    return this.http.get('https://localhost:7190/api/SellerRegistration');
  }

  getseller(userid: any){
    return this.http.get('https://localhost:7190/api/SellerRegistration/'+userid);
  }

  changesellerstatus(userid: string){
    console.log('from get method',userid)
    return this.http.get('https://localhost:7190/api/SellerRegistration/changesellerstatus/'+ userid);
  }

  updateseller(model: any){
    return this.http.patch('https://localhost:7190/api/SellerRegistration/UpdateSeller',model);
  }

  deleteseller(userid: string){
    return this.http.delete('https://localhost:7190/api/SellerRegistration/Remove/'+userid);
  }

  AddCollection(collection: any){
    return this.http.post('https://localhost:7190/api/AddCollections', collection);
  }

  GetCollections(){
    return this.http.get('https://localhost:7190/api/AddCollections');
  }

  GetCollection(sellerid: any){
    return this.http.get('https://localhost:7190/api/AddCollections/GetCollections/'+sellerid);
  }

  GetCollectionByCId(collectionid: any){
    return this.http.get('https://localhost:7190/api/AddCollections/GetCollectionsById/'+collectionid);
  }
  DeleteCollectionAPI(id: any){
    return this.http.delete('https://localhost:7190/api/AddCollections/Remove/'+id);
  }

  AddProducts(product: any){
    return this.http.post('https://localhost:7190/api/AddProducts', product);
  }

  GetProduct(){
    return this.http.get('https://localhost:7190/api/AddProducts');
  }

  GetProducts(collectionid: any){
    return this.http.get('https://localhost:7190/api/AddProducts/GetProducts/'+collectionid);
  }

  GetProductsFromSeller(sellerid: any){
    return this.http.get('https://localhost:7190/api/AddProducts/GetProductsFromSeller/'+sellerid)
  }

  GetProductById(pid: any){
    return this.http.get('https://localhost:7190/api/AddProducts/GetProductsById/'+pid);
  }

  SendProductsFromCart(product: any){
    return this.http.post('https://localhost:7190/api/Cart', product);
  }

  GetProductsFromCart(){
    return this.http.get('https://localhost:7190/api/Cart');
  }
 
}

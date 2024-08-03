import axios from 'axios';
export function getProductData(id){
  return axios.get('https://fakestoreapi.in/api/products/'+id).then(function(response){
    return response.data.product;
  });;
}
export function getProductList(){
  return axios.get('https://fakestoreapi.in/api/products').then(function(response){
    return response.data.products;
  });
}
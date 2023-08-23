import axios from 'axios';

async function fetchImagePaths(){
    try{
    const responce= await axios('http://localhost:3000/');
    return responce.data;
    }
    catch(e){
        console.log('error while fetching imagesData from server: ',e);
        return [];
    }
}

const fetchAndExport=async()=>{
    const imagesData=await fetchImagePaths();
 return [
  {
    id: 1,
    productName: "iphone",
    price: 90000,
    productImage: imagesData[0].imageData,
  },
  {
    id: 2,
    productName: "macbook",
    price: 100000,
    productImage: imagesData[1].imageData,
  },
  {
    id: 3,
    productName: "canon",
    price: 30000,
    productImage: imagesData[2].imageData,
  },
  {
    id: 4,
    productName: "j&j jacket",
    price: 5000,
    productImage: imagesData[3].imageData,
  },
  {
    id: 5,
    productName: "Strip Lights",
    price: 1000,
    productImage: imagesData[4].imageData,
  },
  {
    id: 6,
    productName: "Tshirt",
    price: 1000,
    productImage: imagesData[5].imageData,
  },
  {
    id: 7,
    productName: "shirt",
    price: 2000,
    productImage:imagesData[6].imageData,
  },
  {
    id: 8,
    productName: "cap",
    price: 1000,
    productImage: imagesData[7].imageData,
  },
];
}

export const getProducts = async () => {
    const productsArray = await fetchAndExport();
    return productsArray;
  };
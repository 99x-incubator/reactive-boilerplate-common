import {getConfig} from '../helpers/configHelper'

export default class ApiHelper{
static configbaseUrl;
static instance;



    static get = async(url) => {
        try {
          let response = await fetch(url);
          let responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
    
    
    static post = async(url,body) => {
      try{
          var response =  await fetch(this.getUrl(url), {

          method: 'POST',
          headers: this.getHeaders() ,
          body: JSON.stringify(body),
        })
        console.log(response);
        debugger
        var json = await response.json();
        console.log(JSON.stringify(json)+ "THIS IS THE RESPONSE ")
       
        if(!response.ok){
          console.log(response);
          return {error:true,error_code: json.Code, errorMessage: json.Message}
        }
        return json;
      }
      catch(err){
        debugger;
        console.log(err);
        return {error:true, error_code:'SERVER_ERROR', errorMessage: 'SERVER_ERROR'};
      }
        
    };
    
    static put = async(url, body) => {
        try{
          const response =  await fetch(url, {
            method: 'PUT', 
            headers: this.getHeaders(),
            body: JSON.stringify(body) 
          });
          return await response.json(); 
        }        
        catch(err){
          console.log(err)
        }
    }

    static delete = async(url) => {
      try{
        const response =  await fetch(url, {
          method: 'DELETE', 
          headers: this.getHeaders(),
        });
        return await response.json(); 
      }        
      catch(err){
        console.log(err)
      }
  }

    static getHeaders = ()=>{
      return{
        'X-Api-Key': 'RkRWVUhlbHBkZXNr',
        'X-Api-Version': '1.0',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
        }
    } 

    static getUrl = (url) => {
  
        return "http://localhost:51541/api/login/login";
      // getConfig().baseUrl+url; 
    
    }

    static printurl(){
      console.log(this.configbaseUrl)
    }
    
}


  






// import {getConfig} from '../helpers/configHelper'

// export default class ApiHelper{
// static configbaseUrl;
// static instance;



//     static get = async(url) => {
//         try {
//           let response = await fetch(url);
//           let responseJson = await response.json();
//           return responseJson;
//         } catch (error) {
//           console.error(error);
//         }
//       }
    
    
//     static post = async(url,body) => {
//       try{
//           //this.getUrl(url) in fetch
//           var response =  await fetch(this.getUrl(url), {

//           method: 'POST',
//           headers: this.getHeaders() ,
//           body: JSON.stringify(body),
//         });

//         debugger
//         var json = await response.json();
//         console.log(JSON.stringify(json)+ "THIS IS THE RESPONSE ")
       
//         if(!response.ok){
//           console.log(response);
//           return {error:true,error_code: json.Code, errorMessage: json.Message}
//         }
//         return json;
//       }
//       catch(err){
//         debugger
//         console.log(err);
//         return {error:true, error_code:'SERVER_ERROR', errorMessage: 'SERVER_ERROR'};
//       }
        
//     };
    
//     static put = async(url, body) => {
//         try{
//           const response = await fetch(url, {
//             method: 'PUT', 
//             headers: this.getHeaders(),
//             body: JSON.stringify(body) 
//           });
//           return await response.json(); 
//         }        
//         catch(err){
//           console.log(err)
//         }
//     }

//     static delete = async(url) => {
//       try{
//         const response =  await fetch(url, {
//           method: 'DELETE', 
//           headers: this.getHeaders(),
//         });
//         return await response.json(); 
//       }        
//       catch(err){
//         console.log(err)
//       }
//   }

//     static getHeaders = ()=>{
//       return{
//         'X-Api-Key': 'RkRWVUhlbHBkZXNr',
//         'X-Api-Version': '1.0',
//         'Content-Type':'application/json',
//         'Access-Control-Allow-Origin':'*'
//         }
//     } 

//     static getUrl = (url) => {
//       console.log('http://localhost:51541/api/login/login' + url)
    
//       return "http://localhost:51541/api/login/login";
//       // getConfig().baseUrl+url; 
    
//     }

//     static printurl(){
//       console.log(this.configbaseUrl)
//     }
    
// }


  
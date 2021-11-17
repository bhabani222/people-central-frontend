import axios from 'axios'
export let userlogin = (email,password)=> async(dispatch)=>{


    try {
       dispatch({type:'USER_LOGIN_REQUEST'}) 
       let config = {
         headers: {
             'Content-Type':'application/json',           
         }  
       
        }
        
       let {data} = await axios.post('api/user/login',{email, password}, config)
       dispatch({type:'USER_LOGIN_SUCCESS', payload:data})
       localStorage.setItem('userinfo', JSON.stringify(data))
    
    
     
    
    } catch (err) {      
    
        dispatch({type:'USER_LOGIN_FAIL', payload:err.responce && err.responce.data.message ? 
        err.responce.data.message : err.message
      
       })
    }  




}

export let clientonboard = (client)=> async(dispatch, getState)=>{
 
    try {
       dispatch({type:'CLIENT_CREATE_REQUEST'})    
    //    let { userlogin: {userinfo}, } = getState()
       
    let config = {
         headers: {
             'Content-Type':'application/json',

            //  Authorization: `Bearer ${userinfo.token}`
         }  
       
        }
  

       let {data} = await axios.post('https://hutechpayrollapp.azurewebsites.net/application/addClient', client, config)
       dispatch({type:'CLIENT_CREATE_SUCCESS', payload:data})
    } catch (err) {      
        dispatch({type:'CLIENT_CREATE_FAIL', payload:err.responce && err.responce.data.message ? 
        err.responce.data.message : err.message
    })
    }
}  
export let userlogout = ()=>async(dispatch)=>{
  
    localStorage.removeItem('userinfo')  
    dispatch({type:'USER_LOGOUT'})    
 

}
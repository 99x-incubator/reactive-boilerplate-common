import { LOGIN_REQUEST,LOGIN_RESPONSE,LOGIN_RESPONSE_FAIL } from '../actions/auth'
import { call, put, takeLatest } from 'redux-saga/effects'
import authHelper from '../helpers/authHelper'
import StorageHelper from '../helpers/storageHelper'
import authMapper from '../mappers/authMapper'


function* login(action){ 
    try{
    const responseRecieved = yield call(authHelper.loginRequest,action.action)
    const response = authHelper.responseSent 
    if(response && !response.error && response.token && response.username){
        
        var storageHelper = StorageHelper.getInstance()
        const passwordResult = authMapper.password;
        const token= authHelper.responseSent.token;
        console.log("in auth saga")
        console.log(token);
        console.log(passwordResult)
        yield call(storageHelper.store, response.username, passwordResult)
        yield calls(storageHelper.get)
        yield put({type:LOGIN_RESPONSE,action:{login:response}});
    }else{
        
        console.log('fails login')
        yield put({type:LOGIN_RESPONSE_FAIL, action:{error: response.error, errorMessage:response.errorMessage }});
    }
   
    }
    catch(err){
        console.log(err)
        yield put({type:LOGIN_RESPONSE_FAIL, action:{error:err.error, errorMessage:action.errorMessage }});
    }
}

export function* loginSaga(){
    yield takeLatest(LOGIN_REQUEST,login)
} 






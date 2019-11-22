import apiHelper from './apiHelper'
import authMapper from '../mappers/authMapper'

export default class AuthHelper{
static username = authMapper.username;
static password = authMapper.password;
static responseSent ;

static url = 'Login?username='+this.username+'&password='+this.password

    static loginRequest = async(loginModal) => {
        debugger
        var response = await apiHelper.post('Login?username=test&password=test', authMapper.mapAppRequestLoginToApiRequestLogin(loginModal));
    
        this.responseSent = response;
    
        if(response && !response.error){
            return authMapper.mapApiResponseLoginToAppResponseLogin(response)
        }else{
            return response;
        }
    }


}
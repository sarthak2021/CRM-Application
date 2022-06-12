import {Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Global {

    private apiendpoint: string = 'http://localhost:1339/api/';

    private apiendpoint_sit: string = '';

    private apiendpoint_uat: string = '';
    
    private apiendpoint_live: string = '';
    
    getapiendpoint (){return this.apiendpoint; }

    getUIObj(path:any){
        var menudata = JSON.parse(localStorage.getItem("menuItems")!);
        
        for(var item = 0; item < menudata.length; item++){
            if(menudata[item].Path === path){
                return menudata[item];
            }
        }
        return null;
    }

    // IsCentralAccess()
    // {
    //     var userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    //     var role = userLoggedIn.UserRoles.find(o => o.RoleId == userLoggedIn.DefaultRoleId);
    //     if(role.Role.IsCentralAccess){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // IsLOBWiseAccess()
    // {
    //     var userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    //     var role = userLoggedIn.UserRoles.find(o => o.RoleId == userLoggedIn.DefaultRoleId);
    //     if(role.Role.IsLOBWiseAccess){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    
}


var p = {
"LoginAction": "LOGIN",
 "ActiveDirLoginAction": "AD_LOGIN",
 "ActiveDirLoginCompleteAction": "AD_LOGIN_COMPLETE",
 "LoginCompleteAction": "LOGIN_COMPLETE",
 "LoginFailedAction": "LOGIN_FAILED",
 "LogoutAction": "LOGOUT",
 "LogoutCompleteAction": "LOGOUT_COMPLETE",
 "RetrieveUserAction": "RETRIEVE_USER",
 "RetrieveUserCompleteAction": "RETRIEVE_USER_COMPLETE",
 "RetrieveUserFailedAction": "RETRIEVE_USER_FAILED",
 "AddGroupsAction": "ADD_GROUPS",
 "AddGroupsCompleteAction": "ADD_GROUPS_COMPLETE",
 "AddGroupsFailedAction": "ADD_GROUPS_FAILED",
 "AccessUserEmailAction": "ACCESS_USER_EMAIL",
 "AccessUserEmailCompleteAction": "ACCESS_USER_EMAIL_COMPLETE",
 "AccessUserEmailFailedAction": "ACCESS_USER_EMAIL_FAILED",
 "ShowMessageAction": "SHOW_MESSAGE",
 "ClearMessageAction": "CLEAR_MESSAGE",
 "SaveSettingsAction": "SAVE_SETTINGS"
};

for (var key in p) {
    if (p.hasOwnProperty(key)) {
		let actiontag =key;
		let action =p[key];
let text=`import {${actiontag}, ${action} } from \'./user.actions\'; `;


		console.log (text);
    }
}



for (var key in p) {
    if (p.hasOwnProperty(key)) {
		let actiontag =key;
		let action =p[key];
let text=`

describe(\'${actiontag}\', () => { 
	it(\'should create an action\', () => { 
		const payload = [{id:1}]; 
		const action = new ${actiontag}(payload); 
		expect({ ...action }).toEqual({ type: ${action},  payload }); 
	}); 
});`;

		console.log (text);
    }
}



import { UsersService } from "./users.service.js";
import { LoginNotAccepted } from "../error/specialization/LoginNotAccepted.error.js";

export class LoginService {
	
	usersService = new UsersService();

	login(userToLogin) {
		return new Promise((resolve, reject) => {
			this.usersService.findAll().then(usersList => {
				usersList.forEach(user => {
					if(user.email === userToLogin.email && user.password === userToLogin.password)
						resolve("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWRtaW4ifQ.MBOiVFSMgSjxufbOKuEb1wCrHfJ9HuUetIWOrMvOQ6U");
					else
						reject(new LoginNotAccepted("The credentials entered are invalid!"));
				});
			})
		});
	}

}

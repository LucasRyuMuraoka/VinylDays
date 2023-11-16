import { AppErrors } from "../error/AppErrors.error.js";
import { LoginService } from "../service/login.service.js";

export class AuthController {
	
	loginService = new LoginService();

	login(request, response) {
		const reqBody = request.body;

		this.loginService.login(reqBody).then(JWT => {
			response.status(200).json(JWT);
		}).catch(error => {
			if (error instanceof AppErrors)
				response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
			else
				console.log(error);
		});
	}

}

import { createServer } from "miragejs";
import { vinylBackEnd } from "./axios.api";
import { server } from "./server.api";

export class LoginService {

  login(user) {
		return new Promise((resolve, reject) => {
			const currentState = server.shutdown();
			vinylBackEnd.post("/login", user).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));
			
			createServer(currentState);
		});
  }

}

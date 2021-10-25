// import { Response, Request } from "express";
// import { container } from "tsyringe";

// import { UserUseCase } from "./UserUseCase";

// class UserController {
//   async handle(request: Request, response: Response): Promise<Response> {
//     const { first_name, last_name, email, games } = request.body;

//     const createUserUseCase = container.resolve(UserUseCase);

//     await createUserUseCase.execute({
//       first_name,
//       last_name,
//       email,
//       games,
//     });

//     return response.status(201).send();
//   }
// }

// export { UserController };

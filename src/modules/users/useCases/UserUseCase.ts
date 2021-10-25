// import { inject, injectable } from 'tsyringe';

// import { AppError } from '../../../errors/AppError';
// import { ICreateUserDTO } from '../dtos';
// import { IUsersRepository } from '../repositories/IUsersRepository';

// @injectable()
// class UserUseCase {
//   constructor(
//     @inject('UsersRepository')
//     private userRepository: IUsersRepository,
//   ) {}

//   async execute({
//     first_name,
//     last_name,
//     email,
//     games,
//   }: ICreateUserDTO): Promise<void> {
//     const alreadyExist = await this.userRepository.findUserByEmail(email);

//     if (alreadyExist) {
//       throw new AppError('user already exist', 400);
//     }

//     await this.userRepository.create({ first_name, last_name, email, games });
//   }
// }

// export { UserUseCase };

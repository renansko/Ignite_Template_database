import { IFindUserByFullNameDTO, IFindUserWithGamesDTO } from '../dtos';
import { User } from '../entities/User';

interface IUsersRepository {
  // create(data: ICreateUserDTO): Promise<void>;
  findUserWithGamesById({ user_id }: IFindUserWithGamesDTO): Promise<User>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
}

export { IUsersRepository };

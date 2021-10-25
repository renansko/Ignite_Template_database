import { getRepository, Repository } from 'typeorm';

import { Game } from '../../../games/entities/Game';
import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  // async create({
  //   first_name,
  //   last_name,
  //   email,
  //   games
  // }: ICreateUserDTO): Promise<void> {
  //   const user = this.repository.create({
  //     first_name,
  //     last_name,
  //     email,
  //     games
  //   });

  //   await this.repository.save(user);
  // }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.repository.findOneOrFail(user_id, {
      relations: ['games'],
    });
    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    // Complete usando raw query
    return this.repository.query('SELECT * from users Order BY first_name');
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(
      `SELECT * FROM users WHERE first_name ILIKE '%${first_name}%' AND last_name ILIKE '%${last_name}%'`,
    );
  }
}

export { UsersRepository };

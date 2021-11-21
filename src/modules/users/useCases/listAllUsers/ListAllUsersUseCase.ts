import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userFound = this.usersRepository.findById(user_id);

    if (!userFound) {
      throw new Error("Usuário não encontrado");
    }

    if (userFound.admin === true) {
      const users = this.usersRepository.list();
      console.log(users);
      return users;
    }
    throw new Error("Usuário não é administrador");
  }
}

export { ListAllUsersUseCase };

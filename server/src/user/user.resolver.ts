import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { RegisterUserInput, User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  register(@Args('input') input: RegisterUserInput) {
    return this.userService.register(input);
  }
}

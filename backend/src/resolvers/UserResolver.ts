import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from 'crypto';

// query: buscar dados
// mutation: criar, alterar ou deletar

@Resolver()
export class UserResolver {
  private data: User[] = [];

  //[] por volta da classe quando quer retornar lista
  @Query(() => [User])
  async users() {
    return this.data;
  }

  @Mutation(() => User)
  async createUser(
    //passando name como argumento
    @Arg('name') name: string
  ) {
    const user = { id: crypto.randomUUID(), name }
    
    this.data.push(user);

    return user;
  }
}
import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react"
import { GET_USER } from "../App";
import { client } from "../lib/apollo";

// ponto de ! é pra informar parâmetro obrigatório
const CREATE_USER = gql`
  mutation ($name: String!){
    createUser(name: $name){
      id
      name
    }
  }
`;

export function NewUserForm() {
  const [name, setName] = useState('');
  const [createUser, { data, loading, error}] = useMutation(CREATE_USER);

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      return;
    }

    await createUser({
      variables: {
        name,
      },
      //update - acesso ao cache do apollo do front
      //dessa forma não precisa fazer nova chamada http
      //para buscar os usuarios, basta manipular o cache
      update: (cache, { data: { createUser } }) => {
        const { users } = client.readQuery({ query: GET_USER })
        
        cache.writeQuery({ 
          query: GET_USER,
          data: { 
            users: {
              ...users,
              createUser,
            }
          }
        })
      }
      //buscar novamente assim que inserir novo dado
      //refetchQueries: [GET_USER]
    })
  }

  return (
    <form onSubmit={handleCreateUser}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}
import { GetServerSideProps } from "next";
import Cabecalho from './comp/Cabecalho'

type Repo = {
  name: String;
  description: String;
};

type RepositoriesProps = {
  repos: Repo[];
};

export default function Repositories({ repos }: RepositoriesProps) {
  return (
    <>
      <Cabecalho />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Repositórios Rocketseat</h1>
          <p className="lead">Tela renderizada no server-side e enviada para seu navegador de forma stática!</p>
        </div>
      </div>

      <div className="container my-5">
        <ul className="list-group list-group-flush">
          {repos.map((repo) => (
            <li className="list-group-item py-2" key={repo.name}>{repo.name}</li>
          ))}
        </ul>
      </div>
      <footer className="text-center">
        <p>Recode Pro | 2020/2021 | SP2 | Lailson Andesson</p>
      </footer>
    </>
  );
}

// Rodar no NodeJS
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.github.com/orgs/rocketseat/repos");
  const data = await response.json();

  return {
    props: {
      repos: data,
    },
  };
};
const repositoryName = 'unform2'

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositorio</a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositorio</a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositorio</a>
        </li>
      </ul>
    </section>
  )
}

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href="https://github.com/unform/unform" target="_blank">
        {props.repository.link}
      </a>
    </li>
  )
}

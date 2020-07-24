import React from 'react'

const SuggestionBar = (props) => {
  const options = props.nameList.map(r => (
    <li key={r.uuid} onClick={props.name}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default SuggestionBar;
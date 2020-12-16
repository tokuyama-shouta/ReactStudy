const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'GO'
];

export const List = (props) => {
  const title = props.title;
  return(
    <div>
      <h4>{title}</h4>
      {
        LANGUAGES.map((lang,index) => {
          return <div key={index}>{lang}</div>
        })
      }
    </div>
  )
}


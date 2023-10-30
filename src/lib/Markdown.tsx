import ReactMarkdown from 'react-markdown'

const content = '#안녕하세요, *pluto*!'

function Markdown(){
  return(
    <ReactMarkdown>{content}</ReactMarkdown>
  )
}

export default Markdown
import { useState } from 'react';
import { useTemplate, setTemplate } from '../../state/template'
import './Template.css';

function Template() {
  // global reused state in signal
  const template = useTemplate();
  // local throw away state via react
  const [text, setText] = useState('')

  return (
    <div>
      <h2>Update your template items:</h2>
      <ul>
        {template.map((templateItem) => (
          <li>
            <p>{templateItem}</p>
            <button onClick={() => setTemplate(template.filter((item) => item !== templateItem))}>Remove</button>
          </li>
        ))}
      </ul>

      <i>Enter a new template item:</i><br/>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTemplate(template.concat([text]))
          setText('')
        }}
      >
        <input placeholder="new item" value={text} onChange={(e) => setText(e.target.value)} />
      </form>
    </div>
  );
}

export default Template;

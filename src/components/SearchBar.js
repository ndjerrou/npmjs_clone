import React from 'react';
import { Form } from 'react-router-dom';

function SearchBar() {
  //   const [term, setTerm] = useState('');
  //   const navigate = useNavigate();
  //   const handleChange = e => {
  //     setTerm(e.target.value);
  //     if (e.target.value.length >= 4) {
  //       navigate('/search');
  //     }
  //   };
  //   return (
  //     <div>
  //       <input value={term} onChange={handleChange} />
  //     </div>
  //   );

  return (
    <Form action='/search'>
      <input name='package' />
    </Form>
  );
}

export default SearchBar;

import React from 'react';
import './App.css';

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      this.setState({
        invalid: true,
        displayErrors: true,
      });
      return;
    }
    
    // form is valid! We can parse and submit data
    const form = event.target;
    const data = new FormData(form); 

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;
      console.log('parser name is', parserName);
      
      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
     // const parsedValue = inputParsers[parserName](data.get(name))
        data.set(name, parsedValue);
      }
    } 
     
    console.log(data)
    this.setState({ displayErrors: false,
      res: stringifyFormData(data), 
      invalid: false, });

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  handleSubmit1(event) {
    event.preventDefault(); 
    const data = new FormData(event.target); 
    // NOTE: you access FormData fields with `data.get(fieldName)`    
    const [month, day, year] = data.get('birthdate').split('/');
    const serverDate = `${year}-${month}-${day}`;
    data.set('birthdate', serverDate);
    data.set('username', data.get('username').toUpperCase());
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate className={this.state.displayErrors ? 'displayErrors' : ''}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" data-parse="uppercase" required />
          <label htmlFor="age">Enter Age</label>
          <input id="age" name="age" type="text" pattern="\d+" required />

          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" placeholder="MM/DD/YYYY"
          pattern="\d{2}\/\d{2}/\d{4}" data-parse="date" required/>

          <button>Send data!</button>
        </form> 
        <article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"> 
</article>
        <div className="res-block">
          {this.state.invalid && (
            "Form is not valid"
          )}
          {!this.state.invalid && this.state.res && (
          	<div>
              <h3>Transformed data to be sent:</h3>
              <pre>FormData {this.state.res}</pre>
          	</div>
          )}
        </div> 
      </div>
    );
  }
}
export default App;
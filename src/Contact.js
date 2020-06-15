import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        value: '',
        valid: true,
      },
      email: {
        value: '',
        valid: true,
      },
      message: {
        value:'',
        valid: true,
      },
    };

    this.validators = {
      name: /\w+ .+/,
      email: /.+@.+\..{2,}$/,
      message: /.+/,
    };

    ['onBlur', 'onChange', 'onSubmit'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let formValid = true;
    Object.keys(this.state).forEach((input) => {
      const { value } = this.state[input];
      const valid = this.validators[input].test(value);
      if (!valid) { formValid = false; }
      this.setState({
        [input]: {
          value,
          valid,
        }
      });
    });

    console.log(`Form valid? ${formValid}`);
    console.log(this.state);
  }

  onChange(e) {
    const { name, value } = e.target;
    const { valid } = this.state[name];

    this.setState({
      [name]: {
        value,
        valid,
      }
    });
  }

  onBlur(e) {
    const { name, value: inputValue } = e.target;
    const { value } = this.state[name];
    const valid = this.validators[name].test(inputValue);

    this.setState({
      [name]: {
        value,
        valid,
      }
    });
  }

  errorState(input) {
    return this.state[input].valid ? '' : 'error';
  }

  render() {
    const { title, copy, address, phone, email } = this.props;

    return (
      <section id="three">
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className="row">
          <div className="col-8 col-12-small">
            <form method="post" action="#" onSubmit={this.onSubmit}>
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input
                    type="text"
                    name="name"
                    className={this.errorState('name')}
                    id="name"
                    placeholder="Name"
                    value={this.state.name.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={this.errorState('email')}
                    placeholder="Email"
                    value={this.state.email.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    className={this.errorState('message')}
                    placeholder="Message"
                    rows="4"
                    value={this.state.message.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  ></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" /></li>
              </ul>
            </form>
          </div>
          <div className="col-4 col-12-small">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                {address.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              </li>
              <li>
                <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                {phone}
              </li>
              <li>
                <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                <a href="#">{email}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

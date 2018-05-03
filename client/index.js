import React, {Component} from 'react'
import ReactDOM from 'react-dom'



const contacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" }
];


class Main extends Component {

  constructor(){
    super()
    this.state = {
      contacts, 
    }
  }
  render () {

    const contactName = this.state.contacts.map(contact => <td>{contact.name}</td>);

    return <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>

              {/* Contact 1 */}
              <tr>
                <td>Person One</td>
                <td>000-000-0000</td>
                <td>one@email.com</td>
              </tr>

              {/* Contact 2 */}
              <tr>
                <td>Person Two</td>
                <td>111-111-1111</td>
                <td>two@email.com</td>
              </tr>
            </tbody>
          </table>
          <ul>{contactName}</ul>
        </div>
      </div>;
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)

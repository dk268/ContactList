import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const contacts = [
  {"id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com"},
  {"id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com"},
  {"id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com"}
];

class Main extends Component {
  render () {
    return (
      <div id='main'>
        <div id='navbar'>
          <div>Contact List</div>
        </div>
        <div id='container'>
          <ul>{/* your components here */}</ul>
        </div>
      </div>
    )
  }
}

<table>
  <tbody>
    <tr>
      <th>{this.state.contacts.map (=> )}</th>
    </tr>

    {/* Contact 1 */}
    {this.state.contacts.map(e => {(
      <tr>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
      </tr>
    )}

    {/* Contact 2 */}
    <tr>
      <td>Person Two</td>
      <td>111-111-1111</td>
      <td>two@email.com</td>
    </tr>

  </tbody>
</table>

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)

 thingy = contacts.map (e => <li>{contact.name}</li>)

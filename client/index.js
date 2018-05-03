import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";
import axios from 'axios';


class Main extends Component {

  constructor(){
    super()
    this.state = {
      contacts: [],
      selectedContact: {},
      singleMode: false,
    }
  }

  selectContact = async (contactID) => {
    let res = await axios.get(`/api/contacts/${contactID}`)
    this.setState({
      selectedContact: res.data,
      singleMode: true
    })
  }

  unselectContact = async () => {
    this.setState({
      singleMode: false
    })
  }

  render () {
    return (
    <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {
            !this.state.singleMode ?
            <ContactList contacts = {this.state.contacts} selectContact={this.selectContact} /> :
            <SingleContact selectedContact={this.state.selectedContact} unselectContact={this.unselectContact}/>
          }
        </div>
    </div>);
  }

  componentDidMount = async () => {
    let initialState = await axios.get('/api/contacts')
    this.setState({contacts: initialState.data});
  }
}

class SingleContact extends Component {
  constructor(props) {
    super(props)
    this.props = props;
  }
  render() { return (
    <div id='single-contact'>
      <img src={this.props.selectedContact.imageUrl} />
      <div id='contact-info'>
        <p>Name: {this.props.selectedContact.name}</p>
        <p>Email: {this.props.selectedContact.email}</p>
        <p>Phone: {this.props.selectedContact.phone}</p>
        <button onClick={() => this.props.unselectContact()}>&lt;&lt;</button>
      </div>
    </div>
  )}
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)

export default ContactList;

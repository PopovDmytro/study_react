import FaShield from 'react-icons/lib/fa/shield'
import { Component } from 'react'

class Member extends Component {
  componentWillMount() {
    this.style = {
      backgroundColor: 'gray'
    }
  }

  componentWillUpdate(nextProps) {
    this.style = {
      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.admin !== nextProps.admin;
  }

  render() {

      const { admin, name, thumbnail, email,
              makeAdmin, removeAdmin} = this.props;

      return (
          <div className="member" style={this.style}>
              <h1>
                  {name}
                  {(admin? <FaShield />: null)}
              </h1>
            <div className="mb-1">
                  <img src={thumbnail} alt=""/>
              </div>
              <div className="mb-1">
                  <a href={'mailto:' + email}>{email}</a>
              </div>
              <div className="">
                {(admin)?
                  <button onClick={() => removeAdmin(email)}>Remove ADMIN</button> :
                  <button onClick={() => makeAdmin(email)}>Make ADMIN</button>
                }
              </div>
          </div>
      )
  }
}

export default Member

/*export const Member = ({admin, name, thumbnail, email, makeAdmin}) => {



	let adminButton;
	if(admin) {
		adminButton =  <button onClick={makeAdmin}>Make ADMIN</button>;
	}

	return (
    <div className="member block-center">

        <h1>
					{name}
          {(admin? <FaShield />: null)}
        </h1>
        <div className="mb-1">
            <img src={thumbnail} alt=""/>
        </div>
        <div className="mb-1">
            <a href={'mailto:' + email}>{email}</a>
        </div>
        <div className="">
					{adminButton}
        </div>
    </div>
	)
};*/


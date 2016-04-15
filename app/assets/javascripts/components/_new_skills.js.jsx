var NewSkill = React.createClass({
  handleClick() {
    var name  = this.refs.name.value;
    var details = this.refs.details.value;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details } } ,
      success: (skill) => {
        ReactDOM.findDOMNode(this.refs.name).value = "";
        ReactDOM.findDOMNode(this.refs.details).value = "";
        this.props.handleSubmit(skill);
      }
    });
  },
  render() {
    return(
      <div>
        <input ref='name' placeholder='Enter name of skill' />
        <input ref='details' placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});

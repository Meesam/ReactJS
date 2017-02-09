import React from 'react';

var ItemList=React.createClass({
  getInitialState: function () {
    return {
      initialItems: ['Harihar', 'Divyanshu', 'Shashank', 'Meesam', 'Manish', 'JJ'],
      items: []
    };
  },
  searchList: function (event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      items: updatedList
    });
  },
  componentWillMount: function () {
    this.setState({items: this.state.initialItems})
  },
  render: function () {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={this.searchList}/>
        <List items={this.state.items}/>
      </div>
    );
  }

});

var List=React.createClass({
  render:function () {
    return (
      <ul>
        {
          this.props.items.map((item)=>{
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    );
  }

});

export default ItemList;
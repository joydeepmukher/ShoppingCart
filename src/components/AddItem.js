import React from 'react';


class AddItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = { dropdownData: props.products,
    cartItemsList:{
      product: {
        id: 40,
        name: 'Mediocre Iron Watch',
        priceInCents: 399
      },
      quantity: 1
    } }

  }

  /*populateSelect() {
      var ele = document.getElementById('sel');
      for (var i = 0; i < this.state.dropdownData.length; i++) {
          // POPULATE SELECT ELEMENT WITH JSON.
          ele.innerHTML = ele.innerHTML +
              '<option value="' + this.state.dropdownData[i]['id'] + '">' + this.state.dropdownData[i]['name']+'/'+
              '$'+this.state.dropdownData[i]['priceInCents'] + '</option>';
      }
}*/

onsubmit = (e) => {
  e.preventDefault();
  console.log("show me data ", this.state);
  this.setState(oldState => {
    let jasper = Object.assign({}, oldState.cartItemsList);  
    jasper.product = this.state.dropdownData.filter(a=>a.id==this.state.Products)[0]; 
    jasper.quantity = parseInt(this.state.Quantity);   
    console.log("show me jasper ", jasper);                                 
    this.setState(this.state.cartItemsList=jasper);  
    console.log("show me cartItemsList ", this.state.cartItemsList); 
    this.props.addItemFunc(this.state.cartItemsList);
  })

  console.log("show me mine ", this.state.cartItemsList);

}

onchange =(e)=>{this.setState({[e.target.name]:e.target.value})};

  render() {
    return (
      <form onSubmit={this.onsubmit}>
        <div className="container">
          Quantity
          <p>
            <input onChange = {this.onchange} name="Quantity" type="number"
              />
          </p>
          <p>
            {/* <select id="sel" onChange = {this.onchange}  name="selector">
                <option value="">-- Select --</option>
            </select> */}

            <div class="dropdown">
                  <select id="Products" name="Products" onChange = {this.onchange}>
                      <option value = "Select an option">Select an option...</option>
                      {this.state.dropdownData.map((e) => {
                          return <option value={e.id}>{e.id}/{e.name}/{e.priceInCents}</option>;
                      })}
                  </select>
            </div>

          </p>
          <p>
            <input type="submit" value="Add Item"/>
          </p>
        </div>
      </form>
    )
  }
  /*componentDidMount(){
    window.onload = this.populateSelect();
  }*/
  
}





export default AddItem;
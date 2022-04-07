/* class Editmovie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        rate: "",
        image: "",
        desc: "",
        year: "",
        id: "",


      };
    }
    componentDidMount() {
      this.setState({ member: this.props.Editmovie.Title });
      this.setState({ member: this.props.Editmovie.rate });
      this.setState({ member: this.props.Editmovie.image });
      this.setState({ member: this.props.Editmovie.desc });
      this.setState({ member: this.props.Editmovie.year });
      this.setState({ member: this.props.Editmovie.id });
    }
    handleChange = e => {
      this.setState({ title: e.target.value });
      this.setState({ rate: e.target.value });
      this.setState({ image: e.target.value });
      this.setState({ desc: e.target.value });
      this.setState({ year: e.target.value });
      this.setState({ id: e.target.value });
    };
  
    };
    render() {
      return (
        <div className="modifyMovie">
                  <input
                    value={this.props.Editmovie.Title}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="Title"
                    onChange={this.handleChange}
                    />
                    <input
                    value={this.props.Editmovie.rate}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="rate"
                    onChange={this.handleChange}
                     />

                    <input
                    value={this.props.Editmovie.image}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="image"
                    onChange={this.handleChange}
                    />
                    <input
                    value={this.props.Editmovie.desc}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="desc"
                    onChange={this.handleChange}
                    />
                  
                   <input
                    value={this.props.Editmovie.year}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="year"
                    onChange={this.handleChange}
                    />
                    
                    <input
                    value={this.props.Editmovie.id}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="id"
                    onChange={this.handleChange}
                  />
                </div>
        
      );
    }
} */
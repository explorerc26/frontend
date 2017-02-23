
        var Navigation = React.createClass({
            render: function(){
                return(
                    
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
                
                )
            }
        });

        var Jumbotron = React.createClass({
            render:function(){
                return (
                    
                <div className="jumbotron">
                    <div className="container">
                        <h2>{this.props.title}</h2>
                        <p>details</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                    </div>
                </div>
                
                );
            }
        });

   const divStyleShow = {
        visibility:'visible',
   };  
   const divStyleHide = {
        visibility:'hidden',
   };  
        class Heading extends React.Component {
            
        constructor(props) {
            super(props);
            this.state = {isToggleOn: false};

            // This binding is necessary to make `this` work in the callback
            this.handleClick = this.handleClick.bind(this);
          }

       
            
        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

          render() {
            return (
                    <div className="col-md-4">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.details}</p>
                        <p><a className="btn btn-default" href="#" role="button" onClick={this.handleClick}> {this.state.isToggleOn ? 'SHOW' : 'HIDE'} &raquo;</a>
                            <div style={this.state.isToggleOn ? divStyleShow : divStyleHide}>
                                sample details
                            </div>
                    
                        </p>
                    </div>
            );
          }
        }

        Heading.defaultProps = {
            title: 'Heading',
            details:'default details'
        };

        var Headings = React.createClass({
            
            render: function(){
                return(
                
                    <div className="container">
                        <div className="row">
                            <Heading title="Heading1"/>
                            <Heading title="Heading2"/>
                            <Heading title="Heading3"/>
                        </div>
                        <hr/>
                    </div>
                
                )
            }
            
        });
        
        


        class Footer extends React.Component {
          render() {
            return (
                <div className="container">
                    <footer>
                        <p>&copy;{this.props.company}.</p>
                    </footer>
                </div>
            );
          }
        }

        Footer.defaultProps = {
          company: 'Stranger no company'
        };
    
        var Root = React.createClass({
            render:function(){
                return (
                    <div>
                        <Navigation/>
                        <Jumbotron title="Hello, Universe!!!"/>
                        <Headings/>
                        <Footer/>
                    </div>
                )
            }
        });


      ReactDOM.render(
        <Root/>,
        document.getElementById('root')
      );
import React, { Component } from "react";
import "./App.css";
import img from "./profil.jpg";

class App extends Component {
  state = {
    Person: {
      fullName: "Sourour JENHANI",
      bio: "Passionné par la domaine de l informatique et l'analyse des données je suis toujours prête à relever de nouveaux défis et challenges Je suis toujours ouverte à des nouvelles opportunités n'hésitez pas à me contacter à l'adresse suivante: souroujenhani@yahoo.fr",
      imgSrc: img,
      profession: "Fullstack Developer",
    },
    show: "true",
    counter: 0,
  };

  handelShowPerson = () => {
    return this.setState({ ...this.state.Person, show: !this.state.show });
  };
 
   componentDidMount(){
     setInterval(()=>{
       this.setState({counter: this.state.counter+1})
      }, 1000);
   }


    timer = () => {
      const Hours = `0${Math.floor(this.state.counter / (60 * 60))}`.slice(-2);
      const Minutes = `0${Math.floor((this.state.counter / 60) % 60)}`.slice(-2);
      const Seconds = `0${this.state.counter % 60}`.slice(-2);

      return `${Hours}:${Minutes}:${Seconds}`;
  };


  render() {
    return (
      <div>
        <p style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: "5px",
                    borderStyle: "solid",
                  }}
        >you watch all this time {this.timer()} </p>

        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1 style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                       
                      }}
              >{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="img"></img>
            <h1 style={{
                          fontWeight:"bolder"
                      }}
            >{this.state.Person.profession}</h1>
          </div>
        )}
        <button onClick={this.handelShowPerson}>click</button>
      </div>
    );
  }
}

export default App;

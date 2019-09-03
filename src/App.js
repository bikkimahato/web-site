import React from 'react';
import './App.css';
import Banner from './components/Banner/index'
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import Technologies from './components/Technologies'
import OurTeam from './components/OurTeam/index'
// import Technology from './components/Technologies/components/Technology';

class App extends React.Component {

  state = {
    technologyName: [
      { id: 1, name: 'AI, Big Data and ML', desc: 'GoodWorkLabs provides cutting-edge Artificial Intelligence, Big Data, and Machine Learning solutions to help businesses make smart and data-driven decisions. Data is the crux of everything we build here. Set your business up for success with our advanced AI and data analytics solutions.' },
      { id: 2, name: 'Software Development', desc: 'GoodWorkLabs is a new-age outsourced product development company working on the latest technologies such as React JS, Angular JS, Java, PHP, DevOps and Microservices, and much more. We are a full-stack technology services company and build enterprise applications for global businesses.' },
      { id: 3, name: 'UI/UX Design Studio', desc: 'GoodWorkLabs specializes in building the coolest UX and UI for mobile and software products. The best companies in the world have hired GoodWorkLabs to design the UX and visual design of their products, apps, and games. In our world-leading UX/UI Design Agency, we take a lean approach to experience design.' }
    ],
    teamMembers: [
      { name: 'Bikki', desgination: 'Engineer', img: './img_avatar.png' },
      { name: 'Anushuman', desgination: 'Engineer', img: './img_avatar.png' },
      { name: 'Sushant', desgination: 'Engineer', img: './img_avatar.png' },
      { name: 'Shalu', desgination: 'Engineer', img: './img_avatar1.png' },
      { name: 'Neha', desgination: 'Engineer', img: './img_avatar1.png' }
    ]
  }

  render() {
    const { technologyName } = this.state
    const { teamMembers } = this.state

    return (
      <div className="App">
        <Banner></Banner>
        <Header></Header>
        <Technologies names={technologyName} />
        <OurTeam name={teamMembers}></OurTeam>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

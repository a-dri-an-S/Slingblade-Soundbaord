import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router';
import { Sampler } from 'tone'
import { tracks } from './data';
import title from './assets/image/title.svg'
import './App.css';

import NavigatorBar from './components/NavigatorBar';
import Grid from './components/Grid';

function App() {

  let sampler = useRef(null);

  useEffect(() => {
    sampler.current = new Sampler({
      'A0': tracks.karl.karl1,
      'B0': tracks.karl.karl2,
      'C0': tracks.karl.karl3,
      'D0': tracks.karl.karl4,
      'E0': tracks.karl.karl5,
      'F0': tracks.karl.karl6,
      'G0': tracks.karl.karl7,
      'A1': tracks.karl.karl8,
      'B1': tracks.karl.karl9,
      'C1': tracks.karl.karl10,
      'D1': tracks.karl.karl11,
      'E1': tracks.karl.karl12,
      'F1': tracks.karl.karl13,
      'G1': tracks.karl.karl14,
      'A2': tracks.karl.karl15,
      'B2': tracks.karl.karl16,
      'C2': tracks.doyle.doyle1,
      'D2': tracks.doyle.doyle2,
      'E2': tracks.doyle.doyle3,
      'F2': tracks.doyle.doyle4,
      'G2': tracks.doyle.doyle5,
      'A3': tracks.doyle.doyle6,
      'B3': tracks.doyle.doyle7,
      'C3': tracks.doyle.doyle8,
      'D3': tracks.doyle.doyle9,
      'E3': tracks.doyle.doyle10,
      'F3': tracks.doyle.doyle11,
      'G3': tracks.doyle.doyle12,
      'A4': tracks.doyle.doyle13,
      'B4': tracks.doyle.doyle14,
      'C4': tracks.doyle.doyle15,
      'D4': tracks.doyle.doyle16
    }).toDestination()
  }, []);

  const karlTracks = [
    {name: "ain't got no gas", handleClick: () => sampler.current.triggerAttack('A0')},
    {name: "alright then", handleClick: () => sampler.current.triggerAttack('B0')},
    {name: "bannaner", handleClick: () => sampler.current.triggerAttack('C0')},
    {name: "biguns", handleClick: () => sampler.current.triggerAttack('D0')},
    {name: "i feel alright", handleClick: () => sampler.current.triggerAttack('E0')},
    {name: "funny queer", handleClick: () => sampler.current.triggerAttack('F0')},
    {name: "i dont reckon", handleClick: () => sampler.current.triggerAttack('G0')},
    {name: "you just a boy", handleClick: () => sampler.current.triggerAttack('A1')},
    {name: "kaiser blade", handleClick: () => sampler.current.triggerAttack('B1')},
    {name: "mmhmm", handleClick: () => sampler.current.triggerAttack('C1')},
    {name: "nervous hospital", handleClick: () => sampler.current.triggerAttack('D1')},
    {name: "potaters", handleClick: () => sampler.current.triggerAttack('E1')},
    {name: "satisfy me", handleClick: () => sampler.current.triggerAttack('F1')},
    {name: "this n' that", handleClick: () => sampler.current.triggerAttack('G1')},
    {name: "warsh", handleClick: () => sampler.current.triggerAttack('A2')},
    {name: "what-not", handleClick: () => sampler.current.triggerAttack('B2')},
  ]

  const doyleTracks = [
    {name: "i ain't scared", handleClick: () => sampler.current.triggerAttack('C2')},
    {name: "cocksuckers", handleClick: () => sampler.current.triggerAttack('D2')},
    {name: "crazy retard", handleClick: () => sampler.current.triggerAttack('E2')},
    {name: "beat the dogshit", handleClick: () => sampler.current.triggerAttack('F2')},
    {name: "doornail", handleClick: () => sampler.current.triggerAttack('G2')},
    {name: "god damn band", handleClick: () => sampler.current.triggerAttack('A3')},
    {name: "gtfo 1", handleClick: () => sampler.current.triggerAttack('B3')},
    {name: "gtfo 2", handleClick: () => sampler.current.triggerAttack('C3')},
    {name: "gtfo 3", handleClick: () => sampler.current.triggerAttack('D3')},
    {name: "homo", handleClick: () => sampler.current.triggerAttack('E3')},
    {name: "how retarded", handleClick: () => sampler.current.triggerAttack('F3')},
    {name: "ill kill you", handleClick: () => sampler.current.triggerAttack('G3')},
    {name: "motherfuckers", handleClick: () => sampler.current.triggerAttack('A4')},
    {name: "pissout", handleClick: () => sampler.current.triggerAttack('B4')},
    {name: "pussy", handleClick: () => sampler.current.triggerAttack('C4')},
    {name: "wimpy retard", handleClick: () => sampler.current.triggerAttack('D4')},
  ];

  return (
    <section className="App">
      <img className="title" src={title} alt="sling-blade"/>
      <NavigatorBar />
      <Routes>
        <Route path="/" element={<Grid name={"Karl"} tracks={karlTracks}/>}/>
        <Route path="doyle" element={<Grid name={"Doyle"} tracks={doyleTracks}/>}/>
      </Routes>
    </section>
  );
}

export default App;

import React from 'react';
//import { SafeAreaView } from 'react-native';
//  import { StyleSheet, Text, View } from 'react-native';

//  import SearchBar from './app/components/SearchBar';
//  import Screen from './app/components/Screen';
//  import BlockCard from './app/components/BlockCard';
//  import Projects from './app/components/Projects';
//  import SmallCard from './app/components/SmallCard';
//  import OurProjects from './app/components/OurProjects';
//  import UpcomingProjects from './app/components/UpcomingProjects';
//  import Partnerships from './app/components/Partnerships';
//  import Locals from './app/components/Locals';
//  import ViewMore from './app/components/ViewMore';

//  import FlatCard from './app/components/FlatCard';
//  import ActivityIndicator from './app/components/ActivityIndicator';

 import MainContainer from './app/navigation/MainContainer';
//  import data from './zenData';


export default function App() {

  // const ourProjects = data.filter(item => item.category === 'our-projects');
  // const upcomingProjects = data.filter(item => item.category === 'upcoming-projects');
  // const partnerships = data.filter(item => item.category === 'partnerships');
  // const locals = data.filter(item => item.category === 'locals');

  return (
    <>
    <MainContainer/>
   
    {/* <ActivityIndicator/>
    <Screen> 
     <SearchBar />
     <Projects item={{
    id: '0',
    title: 'ZenTech\'s Journey.',
    desc: 
           'Once a modest startup fueled by a passionate vision, our company embarked on a journey of innovation. Through sleepless nights and boundless determination, we sculpted cutting-edge solutions that addressed pressing global challenges. Tirelessly collaborating, we navigated obstacles, transforming setbacks into stepping stones. With each milestone, our product gained traction, resonating with a growing audience. Investors recognized our potential, fueling exponential growth. Media buzz ignited curiosity, amplifying our reach. A decade of unwavering commitment saw us evolve into an industry leader, revolutionizing the landscape we entered. Today, our name symbolizes innovation, resilience, and the power of dreams actualized – a testament to the extraordinary journey from startup to global success.', 
    thumbnail: 'https://biowin.org/wp-content/uploads/2021/04/BioWin-Zentech-logo.png',
    category: 'tech',
  }}
   /> 
     <OurProjects data={ourProjects} />
     <Partnerships data={partnerships} />
     <UpcomingProjects data={upcomingProjects} />
     <Locals data={locals}/>
    </Screen> */}
    </>
     
  );

}
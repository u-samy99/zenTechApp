import React from "react";
import { View, StyleSheet } from 'react-native';
import HorizontalList from "./HorizontalList";

const UpcomingProjects = ({ data }) => {
    return <HorizontalList title='Upcoming Projects' data={data} />
};

const styles =  StyleSheet.create({
    container: {},
});

export default UpcomingProjects;
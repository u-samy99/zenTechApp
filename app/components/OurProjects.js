import React from "react";
import { View, StyleSheet } from 'react-native';
import HorizontalList from "./HorizontalList";

const OurProjects = ({ data }) => {
    return <HorizontalList title='Our Projects' data={data} />
};

const styles =  StyleSheet.create({
    container: {},
});

export default OurProjects;
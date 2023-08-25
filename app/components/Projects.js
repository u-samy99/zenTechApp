import React from "react";
import { View, StyleSheet } from 'react-native';
import BlockCard from "./BlockCard";

const Projects = ({item}) => {
    return (
        <BlockCard item={item} style={{ marginVertical: 15 }} />
    )
};

const styles =  StyleSheet.create({
    container:{},
});

export default Projects;
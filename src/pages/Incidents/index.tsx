import React from 'react';
import { View, Image, Text } from 'react-native';

import { assets } from 'config/assets';
import styles from './styles';

export default function Incidents(){
    return(
        <View style={styles.container}>   
            <View style={styles.header}>
                <Image source= {assets.logo} /> 
                <Text style={styles.headerText}>
                        Total de  <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.decription}></Text>
        </View>
    );
}
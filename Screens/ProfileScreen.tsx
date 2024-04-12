import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { nartutoFetch } from '../DataServices/Dataservices';
import { Props } from '../type';

const ProfileScreen = ({ navigation }: Props) => {
  const [characterName, setCharacterName] = useState<string>('');
  const [characterImg, setCharacterImg] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      const data = await nartutoFetch();
      setCharacterName(data.name);
      setCharacterImg(data.images[0]);
    };

    getData();
  }, []);

  return (

    <View>
      <Text style={{padding: 20}}>Your Naruto Character is...</Text>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 35, paddingBottom: 20}}>{characterName}</Text>
      <Image source={{uri: characterImg}} style={{width: '100%', height: 500}} />
      <Button title='Next Page' onPress={() => navigation.navigate("DataScreen", {
        name: characterName,
        img: characterImg
      })}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
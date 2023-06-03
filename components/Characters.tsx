// modules
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";

// utils
import { width } from "../utils/display";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res: [] = await axios.get(
          "https://rickandmortyapi.com/api/character/1,2,3,4,5"
        );
        setCharacter(res);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacter();
  }, []);

  return (
    <View className="flex flex-col justify-center items-center pt-10">
      {character && character.map((data: Character) => (
        <View
          style={{
            width: width * 0.8,
          }}
          className="flex flex-col justify-center items-center bg-gray-200 border-2 border-gray-400 rounded-2xl"
        >
          <Image
            source={{ uri: data.image }}
            className="w-full h-1/2 mb-2"
          />
          <View className="flex flex-wrap justify-center items-center p-6">
            <View className="flex flex-col justify-center items-start m-4">
              <Text className="text-base font-bold text-blue-500 mb-2">ID:</Text>
              <Text className="text-sm text-gray-900">{data.id}</Text>
            </View>
            <View className="flex flex-col justify-center items-start m-4">
              <Text className="text-base font-bold text-blue-500 mb-2">Name:</Text>
              <Text className="text-sm text-gray-900">{data.name}</Text>
            </View>
            <View className="flex flex-col justify-center items-start m-4">
              <Text className="text-base font-bold text-blue-500 mb-2">Status:</Text>
              <Text className="text-sm text-gray-900">{data.status}</Text>
            </View>
            <View className="flex flex-col justify-center items-start m-4">
              <Text className="text-base font-bold text-blue-500 mb-2">Species:</Text>
              <Text className="text-sm text-gray-900">{data.species}</Text>
            </View>
            <View className="flex flex-col justify-center items-start m-4">
              <Text className="text-base font-bold text-blue-500 mb-2">Type:</Text>
              <Text className="text-sm text-gray-900">{data.type}</Text>
            </View>
            <View className="flex flex-col justify-center items-start m-4">
              <Text className="text-base font-bold text-blue-500 mb-2">Gender:</Text>
              <Text className="text-sm text-gray-900">{data.gender}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Character;

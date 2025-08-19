import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { getSavedMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import React,{ useCallback } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const saved = () => {
  const { data: savedMovies, loading, error,refetch } =  useFetch(getSavedMovies);
  useFocusEffect(
    useCallback(() => {
      refetch?.();
    }, [])
  );
  return (
    
    <View className="flex-1 bg-primary pb-40">
      <Image source={images.bg} className="flex-1 absolute w-full z-0"></Image>
      <Image
        source={icons.logo}
        className=" w-12 h-10 mt-20 mb-5 mx-auto"
      ></Image>
      <View className="flex flex-row justify-center mx-auto ">
        <Text className="text-white text-3xl">Saved Movies</Text>
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={"#0000ff"}
          className="mt-10 self-center"
        />
      ) : error ? (
        <Text className="text-white">Error: {error?.message}</Text>
      ) : savedMovies ? (
        <View className="px-5">
          <FlatList
            data={savedMovies}
            renderItem={({ item }) => <MovieCard id={item?.movie_id} {...item}></MovieCard>}
            ItemSeparatorComponent={() => <View className="w-4"></View>}
            keyExtractor={(item) => item.movie_id.toString()}
            className="mb-4 mt-3"
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
          ></FlatList>
        </View>
      ) : (
        <View className="flex-row justify-center py-52 ">
          <Text className="text-white text-2xl">
            You have no movies saved yet!
          </Text>
        </View>
      )}
    </View>
  );
};

export default saved;

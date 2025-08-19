import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";
export const posters = {
  poster1: require("../assets/images/movie_poster.jpg"),
};

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: any) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
              uri:poster_path? `https://image.tmdb.org/t/p/w500${poster_path}`: 'https://placehold.co/600x400/1a1a1a/ffffff.png'
              
          }}
          // source={posters.poster1} // systems
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>
        {vote_average && (
          <View className="flex-row items-center justify-start gap-x-1">
            <Image source={icons.star} className="size-4"></Image>
            <Text className="text-white text-xs font-bold uppercase">
              {Math.round(vote_average / 2)}
            </Text>
          </View>
        )}
        { release_date && (

        <View className="flex-row items-center justify-between mr-1">
          <Text className="text-xs text-light-100 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className='text-xs text-light-300 font-medium uppercase '>Movie</Text> */}
        </View>
        )

        }
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

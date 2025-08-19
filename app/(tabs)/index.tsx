import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

// dummy data for systems
const dummyMovies = [
  {
    id: 1,
    title: "Interstellar Adventure",
    overview:
      "A group of explorers travel beyond our galaxy to find a new home for humanity.",
    release_date: "2025-07-15",
    poster_path: "https://picsum.photos/200/300?random=1",
    vote_average: 8.5,
  },
  {
    id: 2,
    title: "Life in Pixels",
    overview:
      "A heartfelt comedy about a programmer who finds meaning in an AI’s quirky mistakes.",
    release_date: "2025-01-22",
    poster_path: "https://picsum.photos/200/300?random=2",
    vote_average: 7.8,
  },
  {
    id: 3,
    title: "The Magical Forest",
    overview:
      "An animated tale of friendship between a lost child and a talking fox in a magical forest.",
    release_date: "2024-12-10",
    poster_path: "https://picsum.photos/200/300?random=3",
    vote_average: 5.5,
  },
  {
    id: 4,
    title: "Edge of Tomorrowland",
    overview:
      "A soldier relives the same battle over and over while humanity fights alien invaders.",
    release_date: "2023-05-12",
    poster_path: "https://picsum.photos/200/300?random=4",
    vote_average: 8.1,
  },
  {
    id: 5,
    title: "Neon Dreams",
    overview:
      "A cyberpunk thriller where hackers fight corporate overlords in a glowing futuristic city.",
    release_date: "2025-03-02",
    poster_path: "https://picsum.photos/200/300?random=5",
    vote_average: 7.9,
  },
  {
    id: 6,
    title: "Shadows of Eternity",
    overview:
      "An immortal warrior is forced to confront his past when ancient enemies resurface.",
    release_date: "2024-11-19",
    poster_path: "https://picsum.photos/200/300?random=6",
    vote_average: 9.0,
  },
  {
    id: 7,
    title: "Whispers in the Dark",
    overview:
      "A chilling horror story about a family haunted by unseen forces in their new home.",
    release_date: "2023-10-31",
    poster_path: "https://picsum.photos/200/300?random=7",
    vote_average: 6.9,
  },
  {
    id: 8,
    title: "Solar Rebellion",
    overview:
      "Colonists on Mars rise against Earth’s oppressive rule in an interplanetary war.",
    release_date: "2025-06-11",
    poster_path: "https://picsum.photos/200/300?random=8",
    vote_average: 8.3,
  },
  {
    id: 9,
    title: "Frozen Echoes",
    overview:
      "A survival drama about researchers trapped in Antarctica facing more than just the cold.",
    release_date: "2024-01-07",
    poster_path: "https://picsum.photos/200/300?random=9",
    vote_average: 7.4,
  },
  {
    id: 10,
    title: "The Forgotten Kingdom",
    overview:
      "A fantasy epic about a prince who must reclaim his throne from a dark sorcerer.",
    release_date: "2023-08-25",
    poster_path: "https://picsum.photos/200/300?random=10",
    vote_average: 8.7,
  },
  {
    id: 11,
    title: "Silent Code",
    overview:
      "A suspense thriller where a hacker uncovers secrets that put her life in danger.",
    release_date: "2024-04-12",
    poster_path: "https://picsum.photos/200/300?random=11",
    vote_average: 7.5,
  },
  {
    id: 12,
    title: "Ocean’s Whisper",
    overview:
      "A heartfelt drama about a diver reconnecting with his family after a near-death experience.",
    release_date: "2025-09-30",
    poster_path: "https://picsum.photos/200/300?random=12",
    vote_average: 7.2,
  },
  {
    id: 13,
    title: "Skybound",
    overview:
      "A sci-fi adventure where humanity builds flying cities to survive a flooded Earth.",
    release_date: "2024-07-17",
    poster_path: "https://picsum.photos/200/300?random=13",
    vote_average: 8.4,
  },
  {
    id: 14,
    title: "Code of Honor",
    overview:
      "A retired samurai returns to protect his village from bandits in this period drama.",
    release_date: "2023-09-13",
    poster_path: "https://picsum.photos/200/300?random=14",
    vote_average: 8.1,
  },
  {
    id: 15,
    title: "Beyond the Horizon",
    overview:
      "Explorers set out to find habitable planets after Earth faces environmental collapse.",
    release_date: "2024-02-05",
    poster_path: "https://picsum.photos/200/300?random=15",
    vote_average: 4,
  },
  {
    id: 16,
    title: "City of Lies",
    overview:
      "A detective uncovers a conspiracy while investigating a series of mysterious crimes.",
    release_date: "2025-05-28",
    poster_path: "https://picsum.photos/200/300?random=16",
    vote_average: 7.6,
  },
  {
    id: 17,
    title: "Aurora Rising",
    overview:
      "A magical coming-of-age story about a girl who can harness the northern lights.",
    release_date: "2023-12-21",
    poster_path: "https://picsum.photos/200/300?random=17",
    vote_average: 8.0,
  },
  {
    id: 18,
    title: "Phantom Circuit",
    overview:
      "A high-tech thriller about an AI that manipulates stock markets and governments.",
    release_date: "2024-08-19",
    poster_path: "https://picsum.photos/200/300?random=18",
    vote_average: 8.2,
  },
  {
    id: 19,
    title: "Golden Hour",
    overview:
      "A romantic drama about two photographers who meet while chasing sunsets around the world.",
    release_date: "2025-02-14",
    poster_path: "https://picsum.photos/200/300?random=19",
    vote_average: 7.3,
  },
  {
    id: 20,
    title: "The Last Outpost",
    overview:
      "A gritty war drama set in a remote military base during the final days of conflict.",
    release_date: "2023-11-03",
    poster_path: "https://picsum.photos/200/300?random=20",
    vote_average: 8.6,
  },
];

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  // const {
  //   // data: movies,
  //   loading: moviesLoading,
  //   error: moviesError,
  // } = useFetch(() =>
  //   fetchMovies({
  //     query: "",
  //   })
  // );
  const movies = dummyMovies;  // systems
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 " />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10
           mt-20 mb-5 mx-auto"
        />
        {
          // moviesLoading || trendingLoading ? (                    ////////////////
          //   <ActivityIndicator
          //     size="large"
          //     color="#0000ff"
          //     className="mt-10 self-center"
          //   />
          // ):
          //  moviesError || trendingError ? (
          //   <Text className="text-white">Error: {moviesError?.message || trendingError?.message}</Text>
          // ) :                                                 ///////////////
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            ></SearchBar>
            {
              trendingMovies && (
                <View className="mt-10 ">
                  <Text className="text-lg text-white font-bold mt-5 mb-3">Trending Movies</Text>
                </View>
              )
            }

            <>
             
              <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={()=> 
                <View className="w-4">

                </View>
              }
                data= {trendingMovies}
                renderItem={({item,index})=>(
                  <TrendingCard
                  movie={item}
                  index={index}
                  />
                )}
                keyExtractor={(item)=>item.movie_id.toString()}
                className="mb-4 mt-3"

              
              >
              </FlatList>
       
                 <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item}></MovieCard>}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        }
      </ScrollView>
    </View>
  );
}

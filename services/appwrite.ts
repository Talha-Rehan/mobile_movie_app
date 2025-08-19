import {Client, Databases, ID, Query} from 'react-native-appwrite'
const database_id= process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const collection_id = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!
const saved_collection_id= process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_TWO_ID!

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client);

export const saveMovie = async (movie:any)=>{
    try{
        const result = await database.listDocuments(database_id,saved_collection_id,[
            Query.equal('movie_id',movie?.id)
        ])

        if(result.documents.length>0){
            console.log("already saved")
        }
        else{
            await database.createDocument(database_id,saved_collection_id,ID.unique(),{
                movie_id:movie.id,
                title: movie.title,
                poster_url: movie.poster_path
            })
        }

    }catch(err)
    {
        console.log(err)
        throw err
    }
}

export const updateSearchCount = async( query:string, movie:any)=>{

    try{
        const result = await database.listDocuments(database_id,collection_id, [
            Query.equal('movie_id',movie.id)
        ])
        if(result.documents.length>0){
            const existingMovie = result.documents[0];
            await database.updateDocument(
                database_id,collection_id,
                existingMovie.$id,
                {
                    count:existingMovie.count + 1
                }
            )
        } else{
            await database.createDocument(database_id,collection_id,ID.unique(),{
                searchTerm: query,
                movie_id: movie.id,
                count:1,
                poster_url:`https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                title:movie.title
            })
        }
    }catch(error){
        console.log(error);
        throw error;
    }

    
}

export const getSavedMovies = async(): Promise<any> =>{
    try{
        const result = await database.listDocuments(database_id,saved_collection_id,[
            Query.orderDesc('$updatedAt')
        ]
        )

        if(result.documents.length>0){
            return result.documents as unknown as []
        }

    }catch(err){
        console.log(err)
        throw err
    }
}

export const getTrendingMovies = async(): Promise<TrendingMovie[] | undefined> =>{
    try{
         const result = await database.listDocuments(database_id,collection_id, [
            Query.limit(5),
            Query.orderDesc('count'),
        ])

        return result.documents as unknown as TrendingMovie[]

    }
    catch(err){
        console.log(err)
        return undefined
    }
}
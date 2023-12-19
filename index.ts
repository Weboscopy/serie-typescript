interface User {
    name: string
    createPost(): void
}

interface Admin extends User {
    name: string
    deletePost(): void
}

 
type Example1 = Admin extends User ? string : number 

type Example2 = Admin extends Date ? string : number 

// Fonction Curry 
const signUp = <T extends {name: string}> (user : T) => {
    console.log(user.name)
    return  (input : T extends Admin ? string : number ) => {
            console.log(input)
    }

} 

const user : User = {
    name: "Paul",
    createPost(){
    }
}

const admin : Admin = {
    name: "Admin",
    createPost(){},
    deletePost(){}
}

const createUserPassword = signUp(user)
createUserPassword(1033030)

const createAdminPassword = signUp(admin)
createAdminPassword("jzizrofifizfize")


// Type utilitaire personnalisé  

type Music = {
    fileName: string,
    time: number,
    type: "mp3"
    rewind() : void 
    play(): void 
}

type Video = {
    fileName: string 
    time: number
    type: "mp4"
    rewind() : void 
    play(): void 
}

type Pdf = {
    fileName: string 
    type: "pdf"
    download(): void 
}

type Media = Music | Video | Pdf 
type Playable <T> = T extends {time: number, play : () => void } ? T : never 

function replay (file: Playable<Media>){
    file.rewind()
    file.play()
}

replay({
    fileName : "music",
    type: "mp4",
    time: 400,
    rewind(){
        this.time = 0
    },
    play(){
        while(this.time < 10){
            this.time++
        }
    }
})




// Callback optionnel 

interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
}

const url = "http://jsonplaceholder.typicode.com/posts"


type Result<T> = T extends undefined ? Promise<Post[]> : void 


const fetchPosts = <T extends undefined | ((data: Post[]) => void) > (
    cb?: T
) : Result<T> => {
    if(cb) {
        fetch(url)
            .then(res => res.json())
            .then(cb)
            return undefined as Result<T> 
    } else {
        return fetch(url)
                .then(res => res.json()) as Result<T>
                
    }
}


(async () => {
    const data = await fetchPosts() as Post[]
    data.forEach(post => console.log(post.title)) 
})();
    

fetchPosts((data) => {
    data.forEach(post => console.log(post.title))
})

// Alternative en utilisant la surcharge de fonction

// function fetchPosts2(
//     cb?: (data: Post[]) => void 
// ) :  void 

// function fetchPosts2() : Promise<Post[]>

// function fetchPosts2(
//     cb?: (data: Post[]) => void 
// ) : unknown {
//     if(cb){
//         fetch(url)
//             .then(res => res.json())
//             .then(cb)
//             return undefined
//     } else {
//         return fetch(url)
//                     .then(res => res.json())
//     }
// }


// function createError(msg: string) : never {
//     throw new Error(msg)
// }
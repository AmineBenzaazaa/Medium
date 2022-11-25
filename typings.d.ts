export interface Post{
    _id: string;
    _createdAt: string;
    title:string;
    author:{
        name:string;
        image:string;
    }
    description:string;
    content:string;
    mainImage: {
        asset:{
            url:string;
        };
    };
    slug :{
        current:string;
    };
    body:[object];
}
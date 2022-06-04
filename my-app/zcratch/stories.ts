export interface Content {
    image: string;
    video: string;
    text: string;
};

export interface Story {
    id: number;
    avatar: string;
    publisherName: string;
    publishedTime: Date;
    content: Content;
    comment: any[];
    likedIdList: any[];
};

// likedIdList: string[];
// const comment: Story[] = [];

export const stories = [
    {
        id: 1,
        avatar: 'lbrown.jpg',
        publisherName: 'lBrown',
        publishedTime: Date.now(),
        content: {
            text: 'blah blah'
        }
    },
    {
        id: 2,
        avatar: 'jchang.png',
        publisherName: 'jchang',
        publishedTime: Date.now(),
        content: {
            text: 'Hola chiquita bonita!'
        },
        comment: [],
        likedIdList: []
    },
    {
        id: 3,
        avatar: 'rwhite.heic',
        publisherName: 'rwhite',
        publishedTime: Date.now(),
        content: {
            image: 'can_i_go_home_now.mp4'
        },
        comment: [],
        likedIdList: []
    }
]


/*
{
        publisherName: "TODO_grab_from_params_id_or_authentication",
        publishedTime: new Date(),
        content: {
          image: '',
          text: this.postForm.value.news,
          video: ''
        },
        comment: [],
        likedIdList: []
      };
*/

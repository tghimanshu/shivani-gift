import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  chats: {
    id: number;
    profilePic: string;
    name: string;
    msg: string;
    msgs: { side: string; message: string }[];
    answer: string;
    loaded: boolean;
  }[] = [
    {
      id: 1,
      profilePic:
        'https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png',
      name: 'Naruto Uzumaki',
      msg: 'I was waiting for you for so long... ',
      msgs: [
        { side: 'left', message: 'Hi...' },
        { side: 'left', message: 'I see you are here' },
        { side: 'left', message: 'WELCOME TO THE CHAT, TEMARI!' },
        { side: 'left', message: 'this is created for sweet shivani.' },
        {
          side: 'left',
          message:
            'So, You might have seen a lot of chats here, visit them and collect all the missing pieces of the word',
        },
        { side: 'left', message: 'then come here and get your reward!' },
      ],
      answer: 'naruto',
      // wrongAnswers: ["Oops! Wrong Answer."],
      loaded: false,
    },
    {
      id: 2,
      profilePic:
        'https://cdn.tarladalal.com/members/9306/big/big_cold_cocoa_milkshake-15331_hindi.jpg?size=0X0',
      name: 'Cold Cocoa',
      msg: 'Want to have me, Dear??',
      msgs: [
        {
          side: 'left',
          message: 'what do we have here?',
        },
        {
          side: 'left',
          message: 'which drink naruto(real life one) likes the most?',
        },
      ],
      answer: 'sprite',
      loaded: false,
    },
    {
      id: 3,
      profilePic: 'https://www.prensario.net/Multimedios/imgs/38683_750.jp',
      name: 'Day Dreams',
      msg: 'Yo, How are you kid....',
      msgs: [
        {
          side: 'left',
          message: 'what do we have here?',
        },
        {
          side: 'left',
          message: 'Tell me more about you...',
        },
        {
          side: 'left',
          message: 'Which Phone do you use right now? (Brand Name)',
        },
      ],
      answer: 'vivo',
      loaded: false,
    },
    {
      id: 4,
      profilePic:
        'data:image/jpeg;base64,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',
      name: 'Taare Zameen Par',
      msg: 'Bum Bum Bole, Masti mai dole....',
      msgs: [
        {
          side: 'left',
          message: 'what do we have here?',
        },
        {
          side: 'left',
          message: 'which drink naruto(real life one) likes the most?',
        },
      ],
      answer: 'sprite',
      loaded: false,
    },
    {
      id: 5,
      profilePic:
        'https://pic1.mangapicgallery.com/r/album/3b/co_/2040515_17755969.jpg?2',
      name: "Mister Wolf's Miss Rabbit",
      msg: 'Miss Rabbit has forced to marry above herself to save her brother',
      msgs: [
        {
          side: 'left',
          message: 'what do we have here?',
        },
        {
          side: 'left',
          message: 'which drink naruto(real life one) likes the most?',
        },
      ],
      answer: 'sprite',
      loaded: false,
    },
  ];

  constructor() {}

  getChats() {
    return this.chats;
  }

  getChat(id: number) {
    this.chats.find((val) => {
      return val.id === id;
    });
    return of(this.chats.find((val) => val.id === id));
  }

  updateMessages(id: number, msgs: { side: string; message: string }[]) {
    let index = this.chats.findIndex((val) => val.id === id);
    console.log(index);
    this.chats[index].msgs = msgs;
  }

  updateLoaded(id: number) {
    let index = this.chats.findIndex((val) => val.id === id);
    this.chats[index].loaded = true;
  }
}

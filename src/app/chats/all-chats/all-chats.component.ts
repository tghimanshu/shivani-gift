import { Component } from '@angular/core';

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
  styleUrls: ['./all-chats.component.scss'],
})
export class AllChatsComponent {
  chats = [
    {
      profilePic:
        'https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png',
      name: 'Naruto Uzumaki',
      msg: 'Hello Shivu, ❤️',
    },
    {
      profilePic:
        'https://ml0co0iaphua.i.optimole.com/JAgwYyw-tmq-ERvF/w:1000/h:1000/q:auto/https://gharstuff.com/wp-content/uploads/2018/12/Sprite-Soft-Drink-Can-300ml-2.jpg',
      name: 'Sprite',
      msg: 'want me?',
    },
  ];
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from 'src/app/service/chats.service';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
})
export class ChatScreenComponent {
  chat!: {
    id: number;
    profilePic: string;
    name: string;
    msg: string;
    msgs: string[];
    answer: string;
  };
  msgs: string[] = [];

  constructor(
    private chatsService: ChatsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.chatsService
    //   .getChat(parseInt(this.route.snapshot.params['id']))
    //   .subscribe((val) => {
    //     if (val) {
    //       this.chat = val;
    //     }
    //     console.log(this.chat);
    //   });
    this.route.params.subscribe((val) => {
      this.chatsService
        .getChat(parseInt(this.route.snapshot.params['id']))
        .subscribe((val2) => {
          if (val2) {
            this.chat = val2;
            let i = 0;
            let interval = setInterval(() => {
              this.msgs.push(this.chat.msgs[i]);
              i++;
              if (i === val2.msgs.length) {
                clearInterval(interval);
              }
            }, Math.random() * 3000 + 50);
          }
        });
    });
  }
}

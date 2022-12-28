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
  constructor(
    private chatsService: ChatsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.chatsService
      .getChat(this.route.snapshot.params['id'] as number)
      .subscribe((val) => {
        if (val) {
          this.chat = val;
        }
      });
    this.route.params.subscribe((val) => {
      this.chatsService.getChat(val['id'] as number).subscribe((val2) => {
        if (val2) this.chat = val2;
      });
    });
  }
}

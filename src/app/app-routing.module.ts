import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatScreenComponent } from './chat/chat-screen/chat-screen.component';
import { HomeComponent } from './chats/home/home.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat/:id', component: ChatScreenComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

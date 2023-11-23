import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { SafePipeModule } from 'safe-pipe';
import { Song, SongCompleted } from '../models/song';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [CommonModule, SafePipeModule],
  template: `
    <div class="song-card">
      <h2>{{item.title}}</h2>
      <br/>

      <div *ngIf="!isDKMAnswered">
        <div class="question">Is this a Dropkick Murphy's song?</div>
        <button (click)="setIsDKM(true)">Yes</button>&nbsp;&nbsp;
        <button (click)="setIsDKM(false)">No</button>
      </div>

      <div *ngIf="isDKMAnswered && !item.isDKM">
        <div *ngIf="isDKMResponseCorrect()" class="result">
            Right on!<br/>
            This is not a DKM song. <br/>
            It's a song by {{item.artist}}
        </div>
        <div *ngIf="!isDKMResponseCorrect()" class="result">
            Oh no!<br/>
            This is not a DKM song. <br/>
            It's a song by {{item.artist}}
        </div>
      </div>      

      <div *ngIf="isDKMAnswered && !albumAnswered && item.isDKM">
        <div *ngIf="isDKMResponseCorrect()" class="result">
            Nailed it!<br/>
            What album was it from?
        </div>
        <div *ngIf="!isDKMResponseCorrect()" class="result">
            Opps! This was a DKM song after all.<br/>
            What album was it from?
        </div>
      </div>

      <div *ngIf="isDKMAnswered && item.isDKM && !albumAnswered">
        <img class="album" title="Do or Die" (click)="setAlbumResponse('Do Or Die')" [src]="baseHref + 'assets/do-or-die.webp'" />
        <img class="album" title="The Gang\\'s All Here" (click)="setAlbumResponse('The Gang\\'s All Here')" [src]="baseHref + 'assets/the-gangs-all-here.webp'" />
        <img class="album" title="Sing Loud Sing Proud" (click)="setAlbumResponse('Sing Loud Sing Proud')" [src]="baseHref + 'assets/sing-loud-sing-proud.webp'" />
        <img class="album" title="Blackout" (click)="setAlbumResponse('Blackout')" [src]="baseHref + 'assets/blackout.webp'" />
        <img class="album" title="The Warrior\\'s Code" (click)="setAlbumResponse('The Warrior\\'s Code')" [src]="baseHref + 'assets/the-warriors-code.webp'" />
        <img class="album" title="The Meanest of Times" (click)="setAlbumResponse('The Meanest of Times')" [src]="baseHref + 'assets/the-meanest-of-times.webp'" />
        <img class="album" title="Going Out in Style" (click)="setAlbumResponse('Going Out in Style')" [src]="baseHref + 'assets/going-out-in-style.webp'" />
        <img class="album" title="Signed and Sealed In Blood" (click)="setAlbumResponse('Signed and Sealed In Blood')" [src]="baseHref + 'assets/signed-and-sealed-in-blood.webp'" />
        <img class="album" title="11 Short Stories of Pain and Glory" (click)="setAlbumResponse('11 Short Stories of Pain and Glory')" [src]="baseHref + 'assets/11-short-stories-of-pain-glory.webp'" />
        <img class="album" title="Turn Up That Dial" (click)="setAlbumResponse('Turn Up That Dial')" [src]="baseHref + 'assets/turn-up-that-dial.webp'" />
        <img class="album" title="This Machine Still Kills Fascists" (click)="setAlbumResponse('This Machine Still Kills Fascists')" [src]="baseHref + 'assets/this-machine-still-kills-fascists.webp'" />
        <img class="album" title="Okemah Rising" (click)="setAlbumResponse('Okemah Rising')" [src]="baseHref + 'assets/okemah-rising.webp'" />
      </div>

      <div *ngIf="albumAnswered">
        <div *ngIf="isAlbumResponseCorrect()" class="result">
            Wow! Nice job.<br/>
            It was from the album {{item.album}}
        </div>
        <div *ngIf="!isAlbumResponseCorrect()" class="result">
            Oh no!<br/>
            It was actually from the album {{item.album}}
        </div>
      </div>

      <div *ngIf="questionsComplete()">
          <iframe
                class="video" 
                [src]="embedSafeVideoLink() | safe: 'resourceUrl'" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            <br/><br/>
          <div class="final-points">+{{totalPoints()}} points</div>
          <button (click)="completeSong()">Next Song</button>
      </div>
    </div>
  `,
  styleUrls: ['./song.component.css'],
})

export class SongComponent {
    isDKMAnswered: boolean = false;
    isDKM: boolean | undefined;
    albumAnswered: boolean = false;
    albumResponse: string = '';
    baseHref: string = '/';

    private _item!: Song;
    @Input() set item(value: Song) {
      this._item = value;
      this.isDKMAnswered = false;
      this.isDKM = undefined;
      this.albumAnswered = false;
      this.albumResponse = '';
    }
    get item(): Song {
      return this._item;
    }

    @Output() songCompleted: EventEmitter<SongCompleted> = new EventEmitter();

    constructor() {
      this.baseHref = window.location.host.indexOf('localhost') !== -1 ? '/' : '/dkmgame/browser/';
    }

    setIsDKM(answer: boolean) {
        this.isDKM = answer;
        this.isDKMAnswered = true;
    }

    isDKMResponseCorrect() {
        return this.item.isDKM === this.isDKM;
    }

    setAlbumResponse(answer: string) {
        this.albumResponse = answer;
        this.albumAnswered = true;
    }

    isAlbumResponseCorrect() {
        return this.albumResponse.toLowerCase() === this.item.album?.toLowerCase();
    }

    questionsComplete() {
        return this.isDKMAnswered && (!this.item.isDKM || this.albumAnswered);
    }

    embedSafeVideoLink() {
        return this.item.videoLink.replace("watch?v=", "embed/");
    }

    totalPoints() {
        return (this.isDKMResponseCorrect() ? 1 : 0) +
            (!this.item.isDKM ? 0 : (this.isAlbumResponseCorrect() ? 1 : 0));
    }

    completeSong() {
        this.songCompleted.emit({
          id: this.item.id,
          totalPoints: this.totalPoints()
        });
    }
}

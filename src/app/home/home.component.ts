import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from '../song/song.component';
import { ScoreTracker } from '../models/data';
import { Song, SongCompleted } from '../models/song';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SongComponent
  ],
  template: `
      <div class="score-block-big">
        <table style="width: 100%;">
          <tr>
            <td colspan="2" align="center">Overall</td>
          </tr>
          <tr>
            <td>Progress:</td>
            <td align="right">{{tracker.completedSongs()}} / {{tracker.totalSongs()}}</td>
          </tr>
          <tr>
            <td>Score:</td>
            <td align="right">{{tracker.totalScore()}} / {{tracker.maximumScore()}}</td>
          </tr>
          <tr>
            <td colspan="2">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="2" align="center">Score by Album</td>
          </tr>
          <tr>
            <td>Do or Die</td>
            <td align="right">{{tracker.totalScore('Do or Die')}} / {{tracker.maximumScore('Do or Die')}}</td>
          </tr>
          <tr>
            <td>The Gang's All Here</td>
            <td align="right">{{tracker.totalScore('The Gang\\'s All Here')}} / {{tracker.maximumScore('The Gang\\'s All Here')}}</td>
          </tr>
          <tr>
            <td>Sing Loud Sing Proud</td>
            <td align="right">{{tracker.totalScore('Sing Loud Sing Proud')}} / {{tracker.maximumScore('Sing Loud Sing Proud')}}</td>
          </tr>
          <tr>
            <td>Blackout</td>
            <td align="right">{{tracker.totalScore('Blackout')}} / {{tracker.maximumScore('Blackout')}}</td>
          </tr>
          <tr>
            <td>The Warrior's Code</td>
            <td align="right">{{tracker.totalScore('The Warrior\\'s Code')}} / {{tracker.maximumScore('The Warrior\\'s Code')}}</td>
          </tr>
          <tr>
            <td>The Meanest of Times</td>
            <td align="right">{{tracker.totalScore('The Meanest of Times')}} / {{tracker.maximumScore('The Meanest of Times')}}</td>
          </tr>
          <tr>
            <td>Going Out in Style</td>
            <td align="right">{{tracker.totalScore('Going Out in Style')}} / {{tracker.maximumScore('Going Out in Style')}}</td>
          </tr>
          <tr>
            <td>Signed and Sealed In Blood</td>
            <td align="right">{{tracker.totalScore('Signed and Sealed In Blood')}} / {{tracker.maximumScore('Signed and Sealed In Blood')}}</td>
          </tr>                            
          <tr>
            <td>11 Short Stories of Pain and Glory</td>
            <td align="right">{{tracker.totalScore('11 Short Stories of Pain and Glory')}} / {{tracker.maximumScore('11 Short Stories of Pain and Glory')}}</td>
          </tr>  
          <tr>
            <td>Turn Up That Dial</td>
            <td align="right">{{tracker.totalScore('Turn Up That Dial')}} / {{tracker.maximumScore('Turn Up That Dial')}}</td>
          </tr>                                          
          <tr>
            <td>This Machine Still Kills Fascists</td>
            <td align="right">{{tracker.totalScore('This Machine Still Kills Fascists')}} / {{tracker.maximumScore('This Machine Still Kills Fascists')}}</td>
          </tr>                                          
          <tr>
            <td>Okemah Rising</td>
            <td align="right">{{tracker.totalScore('Okemah Rising')}} / {{tracker.maximumScore('Okemah Rising')}}</td>
          </tr>                                                    
          <tr>
            <td colspan="2"><br/><br/></td>
          </tr>
          <tr>
            <td colspan="2" align="center"><button class="reset" (click)="tracker.reset()">Reset Scores</button></td>
          </tr>
        </table>
      </div>
      <div class="score-block-small">
        <button class="reset" (click)="tracker.reset()">Reset Scores</button>
        <table width="200">
          <tr>
            <td>Progress:</td>
            <td align="right">{{tracker.completedSongs()}} / {{tracker.totalSongs()}}</td>
          </tr>
          <tr>
            <td>Score:</td>
            <td align="right">{{tracker.totalScore()}} / {{tracker.maximumScore()}}</td>
          </tr>
        </table>
      </div>
      <br/>
      <div class="song-container">
        <div *ngIf="!currentSong">
          All songs completed!
        </div>
        <div *ngIf="!!currentSong">
          <app-song [item]="currentSong" (songCompleted)="songCompleted($event)"></app-song>
        </div>
      </div>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  tracker: ScoreTracker = new ScoreTracker();
  currentSong: Song | null = this.selectRandomUnscoredSong();

  songCompleted(item: SongCompleted) {
    this.tracker.recordScore(item);
    this.currentSong = this.selectRandomUnscoredSong();
  }

  selectRandomUnscoredSong() {
    const options = this.tracker.unscoredSongs();
    if (options.length === 0) {
      return null;
    }

    const targetIndex = Math.floor(Math.random() * options.length);
    return options[targetIndex];
  }
}

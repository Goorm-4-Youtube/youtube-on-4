import {Component, Input, OnInit} from '@angular/core';
import {VideoDto} from "../video-dto";
import {VideoService} from "../video.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MyVideosComponent} from "../my-videos/my-videos.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-video-card',
  templateUrl: './my-video-card.component.html',
  styleUrls: ['./my-video-card.component.css']
})
export class MyVideoCardComponent implements OnInit {

  @Input()
  video!: VideoDto;
  constructor(private videoService: VideoService,private router: Router, private matSnackBar: MatSnackBar, public location: Location) { }

  ngOnInit(): void {
  }

  deleteVideo() {
    console.log("DeleteVideo!")

    this.videoService.deleteVideo(this.video.id).subscribe(data => {
      this.matSnackBar.open("Video Deleted Successfully","OK");
      this.router.navigateByUrl("/")
        .then(()=> {
          this.router.navigateByUrl("/my-videos");
        });
    })
  }
  route() {
    this.router.navigateByUrl("/")
      .then(()=> {
        this.router.navigateByUrl("/my-videos");
      });

  }

}

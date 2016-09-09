import { Component, OnInit, Input } from '@angular/core';
import { Istory } from './istory';

@Component({
  moduleId: module.id,
  selector: 'card-story',
  templateUrl: 'story.component.html',
  styleUrls: ['story.component.css']
})
export class StoryComponent implements OnInit {
  @Input('story') story: Istory;
  constructor() {
  }

  ngOnInit() {

  }

  getChapters(): any[] {
    if( this.story.chapters.length > 3 ) {
      return [
        this.story.chapters[0],
        {
          "class": "more"
        },
        this.story.chapters[ this.story.chapters.length-1 ]
      ]
    }
    return this.story.chapters;
  }

  getCol(): String {
    if( this.story.type == 'longStory' ) {
      return "col-md-5";
    } else if( this.story.type == 'shortStory' ) {
      return "col-md-4";
    } else {
      return "col-md-3";
    }
  }

    getLink(): String {
      if( this.story.type == 'longStory' ) {
        return "/story/"+this.story.id;
      } else if( this.story.type == 'shortStory' ) {
        return "/read/"+this.story.r_id;
      } else {
        return "/story/"+this.story.id;
      }
    }

}

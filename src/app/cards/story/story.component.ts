import { Component, OnInit, Input } from '@angular/core';
import { Istory } from '../../stories/istory';

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

}

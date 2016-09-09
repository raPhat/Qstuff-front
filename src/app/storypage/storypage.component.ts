import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Istory } from '../cards/story/istory';
import { StoryService } from '../cards/story/story.service';

@Component({
    moduleId: module.id,
    selector: 'app-storypage',
    templateUrl: 'storypage.component.html',
    styleUrls: ['storypage.component.css']
})
export class StorypageComponent implements OnInit {

    story: Istory;

    constructor(
        private storyService: StoryService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute
            .params
            .subscribe((params: any) => {
                let selectedId = +params['id'];
                let temp_story = this.storyService.getStories(selectedId + "");
                // console.log(temp_story);
                if (temp_story.length == 1) {
                    this.story = temp_story[0];
                }
            });
    }


}

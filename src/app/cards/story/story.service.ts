import { Injectable } from '@angular/core';
import { Istory } from '../../stories/Istory';

@Injectable()
export class StoryService {

    stories: Istory[] = [
        {
            "id": "1",
            "title": "PERFUME: เสาวธาร",
            "description": "Nam nibh. Nunc varius facilisis eros. Sederat. In in velit quis arcu ornare laoreet. Curabitur adipiscing luctus massa. Integer.",
            "cover": "./images/mock/magazine-cover-1139323_640.jpg",
            "type": "longStory",
            "chapters": [
                {
                    "id": "1",
                    "no": "1",
                    "title": "Facilisis"
                },
                {
                    "id": "2",
                    "no": "2",
                    "title": "Sederat"
                },
                {
                    "id": "3",
                    "no": "3",
                    "title": "Nunc"
                },
                {
                    "id": "4",
                    "no": "4",
                    "title": "Curabitur"
                },
                {
                    "id": "5",
                    "no": "5",
                    "title": "Curabitur"
                }
            ]
        },
        {
            "id": "2",
            "title": "PERFUME: เสาวธาร",
            "description": "Nam nibh. Nunc varius facilisis eros. Sederat. In in velit quis arcu ornare laoreet. Curabitur adipiscing luctus massa. Integer.",
            "cover": "./images/mock/snow-covered-1246246_640.jpg",
            "type": "shortStory",
            "chapters": []
        },
        {
            "id": "3",
            "title": "PERFUME: เสาวธาร",
            "description": "Nam nibh. Nunc varius facilisis eros. Sederat. In in velit quis arcu ornare laoreet. Curabitur adipiscing luctus massa. Integer.",
            "cover": "./images/mock/travel-1564734_640.jpg",
            "type": "photoStory",
            "chapters": []
        }
    ];

    constructor() { }

    getStories(id = null): Istory[] {
        if (!id) {
            return this.stories;
        }

        for (let i = 0; i < this.stories.length; i++) {
            if (id === this.stories[i].id) {
                return [this.stories[i]];
            }
        }

        return [];
    }

}

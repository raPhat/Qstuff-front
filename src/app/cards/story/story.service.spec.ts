/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { addProviders } from '@angular/core/testing/';
import { StoryService } from './story.service';

describe('Service: Story', () => {
  beforeEach(() => {
    addProviders([StoryService]);
  });
  // beforeEachProviders(()=> [
  //     StoryService, //if you don't need to mock
  // ]);

  it('should ...',
    inject([StoryService],
      (service: StoryService) => {
        expect(service).toBeTruthy();
      }));

      it('should has an Story ID: 1',
        inject([StoryService], (service: StoryService) => {

                  expect(service.getStories()[0]).toEqual(
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
                    }
                  );
        }));
});

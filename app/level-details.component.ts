import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Level } from './level';
import { LevelService } from './level.service';

@Component({
  selector: 'level-details',
  templateUrl: 'app/level-details.component.html'
})
export class LevelDetailsComponent implements OnInit, OnDestroy {
    level: Level;
    sub: any;
    @Input() displayLogoUrl: string = 'app/imgs/achievements/';
    
    constructor(private levelService: LevelService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting level with id: ', id);
          this.level = this.levelService.get(id);
          this.displayLogoUrl += this.level.logo;
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoLevelsList(){
        let link = ['/levels'];
        this.router.navigate(link);
    }

    savePersonDetails(){
      this.levelService.save(this.level);
    }
}

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Level } from './level';
import { LoyaltyProgram } from './loyalty-program';
import { LevelService } from './level.service';
import { LoyaltyProgramService } from './loyalty-program.service'


@Component({
  selector: 'level-details',
  templateUrl: 'app/level-details.component.html'
})
export class LevelDetailsComponent implements OnInit, OnDestroy {
    loyaltyPrograms: LoyaltyProgram[] = [];
    programs: LoyaltyProgram[] = [];
    level: Level;
    sub: any;
    @Input() displayLogoUrl: string = 'app/imgs/achievements/';

    constructor(private levelService: LevelService,
                private loyaltyService: LoyaltyProgramService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting level with id: ', id);
          this.level = this.levelService.get(id);
          this.displayLogoUrl += this.level.logo;
          this.loyaltyPrograms = this.levelService.getLoyaltyPrograms(id);
          this.programs = this.loyaltyService.getAll();
        });
    }

    isChecked(id: number):boolean{
      return this.level.loyaltyPrograms.indexOf(id) > -1;
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoLevelsList(){
        let link = ['/levels'];
        this.router.navigate(link);
    }

    saveLevelDetails(){
      this.levelService.save(this.level);
      alert('Saved');
    }


}

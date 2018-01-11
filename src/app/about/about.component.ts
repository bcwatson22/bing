import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  title = 'About';

  public about: any;

  public unsorted: any;
  public shuffled: any;
  public landscape: any;
  public portrait: any;
  public portraits: any;

  public activatedPortrait: any;
  public modalState: string;

  public latLong: any;
  public widgetTop: number;
  public widgetLeft: number;

  constructor(
    private utils: UtilsService
  ) {

    utils.getStaticContent('about');
    utils.getPortraits();

  }

  ngOnInit() {

    this.about = this.utils.bindStaticData('about');
    // this.portraits = this.about.portrait;

    this.unsorted = this.utils.filterPortraits('type', 'drawing', false);

    this.shuffled = this.utils.shufflePortraits(this.unsorted);
    this.landscape = this.utils.filterPortraits('orientation', 'landscape', this.shuffled);
    this.portrait = this.utils.filterPortraits('orientation', 'portrait', this.shuffled);

    this.portraits = this.utils.insertLandscapes(this.portrait, this.landscape);

    let portraitParam = this.utils.getRouteParam();

    if (portraitParam) {

      this.showPortrait({id: portraitParam, animate: false, clickEvent: false});

    }

    // this.utils.progressiveImages();

  }

  showPortrait($event): void {

    this.activatedPortrait = this.utils.activatePortraitData(this.portraits, $event.id);

    this.modalState = this.utils.portraitLaunchUrl('drawings', $event.id, $event.animate, $event.clickEvent);

    this.utils.updateMetaData(this.activatedPortrait);

    if ($event.clickEvent) {

      this.latLong = this.utils.getElementCoordinates($event.clickEvent, true);

    }

  }

}

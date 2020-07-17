import { Component, OnInit } from '@angular/core';
import { ShortenUrlHttpService } from '../shorten-url-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { map } from 'rxjs/operators'
import { Url } from '../url';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-redirect-to-desired-site',
  templateUrl: './redirect-to-desired-site.component.html',
  styleUrls: ['./redirect-to-desired-site.component.scss']
})
export class RedirectToDesiredSiteComponent implements OnInit {

  constructor(private shortenUrlService: ShortenUrlHttpService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params['shortenedUrlPath']),
        map(path => this.shortenUrlService.getOriginalUrl(path)),
      )
      .subscribe(
        response => response.subscribe(
          url => this.router.navigate([url.url]),
          error => this.router.navigate(['/'])
        )
      )
  }

}

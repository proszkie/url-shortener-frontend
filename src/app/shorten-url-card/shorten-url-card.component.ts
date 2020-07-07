import { Component, OnInit } from '@angular/core';
import { ShortenUrlHttpService } from '../shorten-url-http.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-shorten-url-card',
  templateUrl: './shorten-url-card.component.html',
  styleUrls: ['./shorten-url-card.component.scss']
})
export class ShortenUrlCardComponent implements OnInit {

  urlToShortenForm: FormGroup;
  isFlipped = false;
  originalUrl: string;
  shortenedUrl: string;
  invalid = false;
  errorMessage = "Invalid url has been supplied";

  constructor(private shortenUrlService: ShortenUrlHttpService,
              private formBuilder: FormBuilder,
              private alertService: AlertService) {
      this.urlToShortenForm = this.formBuilder.group({
        urlToShorten: ['', Validators.required]
      });
   }


  ngOnInit(): void {
  }

  flip() {
    this.isFlipped = !this.isFlipped;
    this.alertService.clear();
    this.urlToShortenForm.reset();
  }

  shortenUrl(){
    const url = this.urlToShortenForm.value.urlToShorten;
    this.originalUrl = url;
    this.shortenUrlService.shortenUrl(url)
	 .subscribe(resp => {
        this.isFlipped = !this.isFlipped;
        this.shortenedUrl = new URL(window.location.href).origin + '/' + resp.path;
        this.copyToClipboard(this.shortenedUrl);
        this.alertService.success('Url has been copied to clipboard')
        this.invalid = false;
   },
   e => {
     this.invalid = true;
   });
  }

  copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };


}

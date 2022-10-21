import Component from '@glimmer/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  get currentURL() {
    return window.location.href;
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}

//https://twitter.com/intent/tweet?
// url=https%3A%2F%2Fsuper-rentals.example%2Frentals%2Fgrand-old-mansion&
// text=Check+out+Grand+Old+Mansion+on+Super+Rentals%21&
// hashtags=vacation%2Ctravel%2Cauthentic%2Cblessed%2Csuperrentals&
// via=emberjs

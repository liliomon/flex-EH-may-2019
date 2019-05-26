import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 4.5
// Creator: 440 

export let options = {
    stages: [
        {
            "duration": "2m0s",
            "target": 25
        },
        {
            "duration": "2m0s",
            "target": 25
        },
        {
            "duration": "2m0s",
            "target": 50
        },
        {
            "duration": "2m0s",
            "target": 50
        },
        {
            "duration": "2m0s",
            "target": 0
        }
    ],
    maxRedirects: 0,
    ext: {
        "aimpact": {
            "distribution": {
                "load_zone0": {
                    "loadZone": "amazon:us:columbus",
                    "percent": 100
                }
            }
        }
    },
    discardResponseBodies: true,
};

export default function() {

	group("page_1 - https://tienda.flex.cl", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://tienda.flex.cl/",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(2.12);
		req = [{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&v1&subset=latin%2Clatin-ext",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Shadows+Into+Light",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/jquery/plugins/selectbox/selectbox.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/ajaxcart/ajaxaddto.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/calendar/calendar-win2k-1.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/jquery/plugins/etalage/etalage.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/bootstrap/css/bootstrap.min.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/bootstrap/css/bootstrap-theme.min.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/jquery/plugins/owl-carousel/owl.carousel.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/jquery/jquery-ui.min.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/jquery/plugins/owl-carousel/owl.transitions.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/js/smartwave/jquery/plugins/owl-carousel/owl.theme.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/css/widgets.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/estilos.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/configurableswatches.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/default/fancybox/css/jquery.fancybox.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/default/catalogcategorysearch/catalogcategorysearch.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/default/filterproducts/css/style.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/megamenu/css/font-awesome.min.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/megamenu/css/megamenu.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/megamenu/css/megamenu_responsive.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/images/logo-web_01.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/socialfeeds/css/style.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/default/socialicons/css/styles.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/default/quickview/css/styles.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/icons/css/porto.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/icons/css/animation.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/local.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/responsive.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/disable_border_radius.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/configed/design_english.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/configed/settings_english.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/custom.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/css/settings.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/js/1527b7a5026429260e050c4666326290.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/animate.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/css/print.css",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/revslider/Colch_nMaxCarbonoKing.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/revslider/CamaEu-choCM_ximoCobreKing.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/revslider/CamaEu-MaxCarbonoKing.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/revslider/BannerGenerico.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/images/flex-footer-2017.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/porto/homepage/slider/05/flex-boxspring-camas.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/smartwave/footer/ccs-confianza-ecommerce.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/porto/homepage/slider/05/flex-camas-funcionales.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/porto/homepage/slider/05/flex-muebles.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/porto/homepage/slider/05/flex-textiles.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/smartwave/footer/ssl.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/smartwave/footer/tarjetas.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/porto/homepage/slider/05/flex-colchones.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/media/wysiwyg/168x206_px_Cama_Euro_2_.jpg",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.12);
		req = [{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFW50e.ttf",
			"params": {
				"headers": {
					"origin": "https://tienda.flex.cl",
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&v1&subset=latin%2Clatin-ext"
				}
			}
		},{
			"method": "get",
			"url": "https://ssl.google-analytics.com/ga.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.googletagmanager.com/gtm.js?id=GTM-T55T8X",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google-analytics.com/analytics.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.googletagmanager.com/gtm.js?id=GTM-MDS9PLB",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/megamenu/css/fonts/fontawesome-webfont.woff?v=4.0.3",
			"params": {
				"headers": {
					"origin": "https://tienda.flex.cl",
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/skin/frontend/smartwave/porto/megamenu/css/font-awesome.min.css"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/smartwave/porto/icons/font/porto.woff?43147562",
			"params": {
				"headers": {
					"origin": "https://tienda.flex.cl",
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/skin/frontend/smartwave/porto/icons/css/porto.css"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN7rgOXOhs.ttf",
			"params": {
				"headers": {
					"origin": "https://tienda.flex.cl",
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&v1&subset=latin%2Clatin-ext"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOXOhs.ttf",
			"params": {
				"headers": {
					"origin": "https://tienda.flex.cl",
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&v1&subset=latin%2Clatin-ext"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/opensans/v16/mem6YaGs126MiZpBA-UFUK0Xdcg.ttf",
			"params": {
				"headers": {
					"origin": "https://tienda.flex.cl",
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C300italic%2C400%2C400italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&v1&subset=latin%2Clatin-ext"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google-analytics.com/plugins/ua/ec.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google-analytics.com/collect?v=1&_v=j75&a=1360127665&t=pageview&_s=1&dl=https%3A%2F%2Ftienda.flex.cl%2F&ul=en-us&de=UTF-8&dt=FLEX%20-%20Especialistas%20en%20descanso&sd=24-bit&sr=800x600&vp=800x600&je=0&_u=IGBAgAAL~&jid=1117657044&gjid=2127314396&cid=1376810697.1558899960&tid=UA-66205620-2&_gid=197887751.1558899960&z=1996308020",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&v=1&_v=j75&tid=UA-66205620-2&cid=1376810697.1558899960&jid=1117657044&gjid=2127314396&_gid=197887751.1558899960&_u=IGBAgAAL~&z=210970725",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://ssl.google-analytics.com/r/__utm.gif?utmwv=5.7.2&utms=1&utmn=1667385854&utmhn=tienda.flex.cl&utmcs=UTF-8&utmsr=800x600&utmvp=800x600&utmsc=24-bit&utmul=en-us&utmje=0&utmfl=-&utmdt=FLEX%20-%20Especialistas%20en%20descanso&utmhid=1360127665&utmr=-&utmp=%2F&utmht=1558899960121&utmac=UA-97002709-1&utmcc=__utma%3D111822081.1376810697.1558899960.1558899960.1558899960.1%3B%2B__utmz%3D111822081.1558899960.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)%3B&utmjid=59544367&utmredir=1&utmu=qAAAAAAAAAAAAAAAAAABAAAE~",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/js/extensions/revolution.extension.slideanims.min.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"x-requested-with": "XMLHttpRequest",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/js/extensions/revolution.extension.actions.min.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"x-requested-with": "XMLHttpRequest",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/js/extensions/revolution.extension.layeranimation.min.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"x-requested-with": "XMLHttpRequest",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/js/extensions/revolution.extension.navigation.min.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"x-requested-with": "XMLHttpRequest",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/ads/ga-audiences?v=1&aip=1&t=sr&_r=4&tid=UA-66205620-2&cid=1376810697.1558899960&jid=1117657044&_v=j75&z=210970725",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.g.doubleclick.net/r/collect?v=1&aip=1&t=dc&_r=3&tid=UA-97002709-1&cid=1376810697.1558899960&jid=59544367&_v=5.7.2&z=1667385854",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/ads/ga-audiences?v=1&aip=1&t=sr&_r=4&tid=UA-97002709-1&cid=1376810697.1558899960&jid=59544367&_v=5.7.2&z=1667385854",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://connect.facebook.net/en_US/fbevents.js",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google-analytics.com/r/collect?v=1&_v=j75&a=1360127665&t=pageview&_s=1&dl=https%3A%2F%2Ftienda.flex.cl%2F&ul=en-us&de=UTF-8&dt=FLEX%20-%20Especialistas%20en%20descanso&sd=24-bit&sr=800x600&vp=800x600&je=0&_utma=111822081.1376810697.1558899960.1558899960.1558899960.1&_utmz=111822081.1558899960.1.1.utmcsr%3D(direct)%7Cutmccn%3D(direct)%7Cutmcmd%3D(none)&_utmht=1558899960335&_u=aGDCAEAL~&jid=403142618&gjid=1381741320&cid=1376810697.1558899960&tid=UA-66205620-2&_gid=197887751.1558899960&_r=1&gtm=2wg5f2MDS9PLB&z=1876218185",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.g.doubleclick.net/r/collect?v=1&aip=1&t=dc&_r=3&tid=UA-66205620-2&cid=1376810697.1558899960&jid=403142618&_gid=197887751.1558899960&gjid=1381741320&_v=j75&z=1876218185",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google.com/ads/ga-audiences?v=1&aip=1&t=sr&_r=4&tid=UA-66205620-2&cid=1376810697.1558899960&jid=403142618&_v=j75&z=1876218185",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://connect.facebook.net/signals/config/664557653741386?v=2.8.47&r=stable",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/assets/coloredbg.png",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/css/settings.css"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/assets/loader.gif",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/css/settings.css"
				}
			}
		},{
			"method": "get",
			"url": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/fonts/revicons/revicons.woff?5510888",
			"params": {
				"headers": {
					"origin": "https://tienda.flex.cl",
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/skin/frontend/base/default/nwdthemes/revslider/public/assets/css/settings.css"
				}
			}
		},{
			"method": "get",
			"url": "https://connect.facebook.net/signals/plugins/inferredEvents.js?v=2.8.47",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://connect.facebook.net/signals/config/512563682579054?v=2.8.47&r=stable",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.facebook.com/tr/?id=664557653741386&ev=PageView&dl=https%3A%2F%2Ftienda.flex.cl%2F&rl=&if=false&ts=1558899960717&sw=800&sh=600&v=2.8.47&r=stable&a=tmgoogletagmanager&ec=0&o=158&fbp=fb.1.1558899960716.784844578&it=1558899960443&coo=false&rqm=GET",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.facebook.com/tr/?id=512563682579054&ev=PageView&dl=https%3A%2F%2Ftienda.flex.cl%2F&rl=&if=false&ts=1558899960837&sw=800&sh=600&v=2.8.47&r=stable&ec=0&o=158&fbp=fb.1.1558899960716.784844578&it=1558899960443&coo=false&rqm=GET",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"referer": "https://tienda.flex.cl/"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 5s and 10s
		sleep(Math.floor(Math.random()*5+5));
	});

}

import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  filterargs = { status: 1};
  filterargs2 = { status: 0 };
videoList = [
  {
    name: 'التعريف بمخاطر الابتزاز الإلكتروني',
    slug: 'عبر الهاتف: د.علي تبوك | للحديث حول التعريف بمخاطر الابتزاز الإلكتروني',
    embed: '3Kl9VdN0p_M',
    status : 1
  },
  {
    name: 'المؤتمر الدولي إدارة العدالة إلكترونيا',
    slug: 'الجلسة الختامية وقراءة التوصيات - المؤتمر الدولي إدارة العدالة إلكترونيا - أبوظبي 2016',
    embed: 'U3FZ6sWEaNM',
    status: 0
},
  {
    name: ' ندوة الشباب العُـماني وريادة الأعمال',
    slug: 'الجلسة الرابعة : التحول الإلكتروني في القضاء',
    embed: '5u8cPyT6Od8',
    status: 0
  },
  {
    name: 'ندوة الشباب العُـماني وريادة الأعمال',
    slug: 'الجلسة النهائية والتوصيات الختامية - ندوة الشباب العُـماني وريادة الأعمال - صلالة 2014',
    embed: 'fxZo5W2h8QQ',
    status: 0
  },
  {
    name:'المؤتمر الدولي حول الدفع الإلكتروني - صلالة 2017',
    slug:'كلمة إفتتاح المؤتمر الدولي حول الدفع الإلكتروني - صلالة 2017',
    embed:'qLH3mdqy9ns',
    status: 0
  }
];
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
getEmbedUrl(item) {
  return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed );
}
}

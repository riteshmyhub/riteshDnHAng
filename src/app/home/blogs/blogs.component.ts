import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blog: any[] = [
    { date: 'Dec 13, 2020', heading: ' Aviation’s Quick Six with Advanced Technology Engineering', info: ' This week, we hosted our annual Best of Brand Awards during our North America Brand Summit to recognize', link: '../blog', linkText: 'Read more' },

    { date: 'Dec 01, 2019', heading: ' Aviation’s Quick Six with Advanced Technology Engineering', info: ' This week, we hosted our annual Best of Brand Awards during our North America Brand Summit to recognize', link: '../blog', linkText: 'Read more' },

    { date: 'Dec 16, 2019', heading: ' Aviation’s Quick Six with Advanced Technology Engineering', info: ' This week, we hosted our annual Best of Brand Awards during our North America Brand Summit to recognize', link: '../blog', linkText: 'Read more' },

    { date: 'Dec 14, 2018', heading: ' Aviation’s Quick Six with Advanced Technology Engineering', info: ' This week, we hosted our annual Best of Brand Awards during our North America Brand Summit to recognize', link: '../blog', linkText: 'Read more' },

    { date: 'June 05, 2020', heading: ' Aviation’s Quick Six with Advanced Technology Engineering', info: ' This week, we hosted our annual Best of Brand Awards during our North America Brand Summit to recognize', link: '../blog', linkText: 'Read more' },

    { date: 'June 05, 2020', heading: ' Aviation’s Quick Six with Advanced Technology Engineering', info: ' This week, we hosted our annual Best of Brand Awards during our North America Brand Summit to recognize', link: '../blog', linkText: 'Read more' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

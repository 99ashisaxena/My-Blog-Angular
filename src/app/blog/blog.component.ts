import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../card/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  addBlog= new FormGroup({
   blogId: new FormControl(''),
    blogc: new FormControl(''),
    blogimg: new FormControl(''),
    content: new FormControl(''),
    blogA: new FormControl(''),
   brating: new FormControl(''),
  
  })

  constructor(private blogservice:BlogService,
    private route:ActivatedRoute) { }

  ngOnInit():void {
 
  }

  createBlog(){
    console.log(this.addBlog.value);
    this.blogservice.addBlog(this.addBlog.value).subscribe((result)=>{
  
    this.addBlog.reset({});
    console.log("get data from service", result)
  })
}


}

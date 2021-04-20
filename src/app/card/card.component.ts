import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blog } from './blog';
import { BlogService } from './blog.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  title = 'json-file-read-angular';
  _searchTerm: string = '';
  imgWidth = "450";
  imgHeight = "300";
  imgRadius = "15";
  searchedBlog: blog[] = [];
  blogs: blog[]=[];
  


//dep inj
constructor(private blogservice:BlogService , private route:Router) {}


ngOnInit(){
//this.blogs=this.blogservice.getBlogs();
this.blogservice.getBlogViaREST().subscribe(
  blogs => {this.blogs=  blogs;
  this.searchedBlog = this.blogs;
}
);


}




  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.searchedBlog = this.searchTerm ? this.searchBlog(this.searchTerm) : this.blogs;

  }


  searchBlog(searchby: string): blog[] {
    searchby = searchby.toLocaleLowerCase();
    return this.blogs.filter((blog: blog) => blog.blogc.toLocaleLowerCase().indexOf(searchby) !== -1);
  }


  

 
  onDelete(id: number) {
    if (window.confirm("Are you sure you want to delete")) {
      this.deleteBlog(id);
    }
  }

  deleteBlog(id: number) {
    const index = this.blogs.findIndex(
      item => item.blogId === id
    )
    if (index >= 0) {
      this.blogs.splice(index, 1);

    }
  }

  onEdit(blogId:number){
   
    this.route.navigate(['/editblog',blogId]);
  }





}

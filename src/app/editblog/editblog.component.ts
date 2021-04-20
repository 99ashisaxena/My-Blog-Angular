import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { blog } from '../card/blog';
import { BlogService } from '../card/blog.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  editBlog = new FormGroup({

    blogc: new FormControl(''),

    blogA: new FormControl('')

  })
  constructor(private blogservice: BlogService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)

    this.blogservice.getCurrentData(this.router.snapshot.params.id).subscribe((result) => {

     console.log(result)
    
    
      })
  
  }
  updateBlog() {
    this.blogservice.updateBlog(this.router.snapshot.params.id, this.editBlog.value).subscribe((result) => {
      console.log(result, "data updated successfully")

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  user = new User();

  save(userForm: NgForm) {
    console.log(userForm);

    console.log(JSON.stringify(userForm.value));
  }

onSave(){
  alert("Saved Succesfully");
  this.route.navigate(['./home']);
}
}
